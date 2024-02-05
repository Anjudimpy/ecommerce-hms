import { useState, useEffect} from 'react'
import {StepperContext} from './StepperContext';
import Button from '@mui/material/Button';
import {Personal} from './Personal';
import Details from './Details';
import Documnet from './Documnet';
import Stepper from './Steppper';
import Payment from './Payment';
import Completed from './Completed';
import Base from '../../Component/Base';
import {Form} from 'reactstrap'
import {toast} from 'react-toastify'
import { createPost, uploadPostImage, uploadPostMarks} from '../../Services/post-service';
import { loadAllCategories } from '../../Services/Category-Caste';
import { getCurrentUserDetail } from '../../auth';

const Forms = () => {
    const [currentStep, setCurrentStep] =useState(1);
    const [finalData, setFinalData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] =useState([])
    const [caste, setCaste]=useState([]);
    const [image, setImage]=useState(null)
    const [marks,setMarks]=useState(null)

    const handleFormSubmit = () => {
        setIsSubmitted(true);
      };

    const [post, setPost]=useState({
        title:'',
        parents:'',
        content:'',
        address:'',
        curentinstitude:'',
        lastinstitude:'',
        field1:'',
        field2:'',
        field3:'',
        categoryId:''
      })
      useEffect(
        ()=>{
         setUser(getCurrentUserDetail())
          loadAllCategories().then((data)=>{
            console.log(data);
            setCaste(data)
          }).catch(error=>{
            console.log(error)
          })
        },[]
      )
      
  const submitForm=(event)=>{
    event.preventDefault();
    console.log(post);

 //submit the form on the server
 post['userId']=user.id
 createPost(post).then(data=>{
  
   uploadPostImage(image,data.postId).then(data=>{
     toast.success("image upload ")
   }).catch(error=>{
     toast.error("error image upload ")
   })

  toast.success("Form submitted successfully!!")
 })
 .catch((error)=>{
   toast.error("Error!!")
   console.log(error)
 })
 }
    const steps = [
        "Parsonal Information",
        "Eduction Details",
        "Document Upload",
        // "Payment",
        "Completed"
    ];


    const displayStep =(step)=>{
     switch(step){
        case 1:
            return <Personal/>
        case 2:
            return <Details/>
        case 3:
            return <Documnet/> 
        // case 4:
        //     return <Payment/> 
       case 4:
            return <Completed/>       
     }
    }
const handleClick = (direction)=>{
let newStep= currentStep;

    direction ==="next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    window.scroll(0,0)  
}  


  return (
<Base>
<div className=' md:w-full  pb-5 pl-20 mx-auto shadow-xl rounded-2xl  bg-white'>
<div className='   container horizontal mt-5'>
<Stepper
 steps={steps}
 currentStep={currentStep}
/>
<div className='my-10 p-10'>
    <StepperContext.Provider value ={{
         post,
         setPost,
         finalData,
         setFinalData,image, setImage,marks,setMarks,
         isSubmitted, setIsSubmitted,user, setUser,caste, setCaste,


    }}>
        <Form onSubmit={submitForm}>
       {displayStep(currentStep)}
       <div>
  <Button type='submit'
   onClick={handleFormSubmit}
   >{ currentStep === steps.length-1?"Submit":""}</Button>
</div>
   </Form>  
   </StepperContext.Provider>
</div>
</div>

{currentStep != steps.length &&
<StepperControl
handleClick={handleClick}
currentStep={currentStep}
steps={steps}
/>}
    </div>
    </Base>
  )
}

function StepperControl({handleClick,currentStep,steps}){
    return(
   <>
   <div className='container flex justify-around mt-16  mb-8'>

<button
onClick={()=>handleClick()}
className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-green-500
hover:text-black transition duration-200 ease-in-out ${currentStep === 1 ?"opacity-50 cursor-not-allowed":"" }`}>
Back
</button>
<Button
onClick={()=>handleClick("next")}
color='success' variant="contained">{ currentStep === steps.length-1?"Confirm":"Next"}
</Button>
</div>
   </>
        
       )
}

export default Forms


