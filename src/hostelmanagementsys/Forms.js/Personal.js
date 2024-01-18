import {useContext} from 'react';
import { StepperContext } from './StepperContext';
import "react-datepicker/dist/react-datepicker.css";
import { FormFeedback,Input} from 'reactstrap';



  const Personal = () => {
  const { post, setPost,isSubmitted, setIsSubmitted,caste, setCaste,image, setImage}=useContext(StepperContext);

  const fieldChanged=(event)=>{
   
    setPost({...post,[event.target.name]:event.target.value})

  }

  // const handleFileChange=(event)=>{
  //   console.log(event.target.files[0])
  //   setImage(event.target.files[0])
  // }
   

  return (
<div className='flex flex-col text-gray-500'>
<div className=''>
<FormFiled filedname=" Applicant's Name ( விண்ணப்பதாரரின் பெயர் )"/>
<Input
        type='text'
        id='title'
        name='title'
        className='rounded-1'
        onChange={fieldChanged}
        invalid={isSubmitted && post.title.trim() === ''}
        />
    <FormFeedback>
        {isSubmitted && post.title.trim() === '' && 'Name cannot be empty'}
      </FormFeedback>
</div>

{/* file field */}
{/* <div>
  <label for="image">Selet image</label>
  <Input id='image' type='file' accept="image/*,application/pdf" onChange={handleFileChange} />
  
  </div> */}
<div className='flex w-full'>
<div><FormFiled filedname="Male/ Female ( ஆண் / பெண் )"/></div>
<div className='border border-gray-200 rounded w-auto mt-3 ml-12'>
<select className='p-2 outline-none text-gray-400 text-sm'
id='genders'
name='genders'
onChange={fieldChanged}
>
  <option>SELECT</option>
  <option>Male</option>
  <option>Female</option>
</select>
</div>
</div>

<div w-full>
<div className='flex w-full'>
<div className='w-full'> 
<div className='flex w-96'>
     <FormFiled filedname="Date of birth ( பிறந்த தேதி )"/>
     <div className=' rounded w-36 mt-2 '>
     <Input
     type='date'
     id='dateOfBirth'
     name='dateOfBirth'
     onChange={fieldChanged}
     />
     
    </div>
   </div>
  <div className='age'>
<FormFiled filedname="Age on the date of application ( விண்ணப்ப நாளன்று வயது )"/>
<span className='font-blod w-16' >
<Input
type='number'
id='age'
name='age'
className='border border-gray-200 rounded  text-gray-500 text-xs '
onChange={fieldChanged}
/></span>
  </div>
</div>
</div>
</div>

<div className='flex justify-start w-full'>
<div><FormFiled filedname="Category  ( இனம் )"/></div>
<div className='border border-gray-200 rounded w-auto mt-3'>
<select  className='p-2 outline-none text-gray-400 text-sm'
id='casteCategory'
name='casteCategory'
onChange={fieldChanged}
>
  <option>SELECT</option>
  <option>Backward Caste</option>
  <option>Most BackWard Caste</option>
  <option>Most Backward Classes / Denotified Communities</option>
  <option>Scheduled Castes</option>
  <option>Scheduled Tribes</option>
  <option>General</option>
</select>
</div>
</div>

<div className='flex w-full'>
<div><FormFiled filedname="Caste ( சாதி )"/></div>
<div className='border border-gray-200 rounded w-auto mt-3'>
<Input 
type='select'
id='category'
placeholder='Enter here'
className='rounded-1 p-2 outline-none text-gray-500 text-xs uppercase'
name='categoryId'
onChange={fieldChanged}
defaultValue={0}
>
<option value={0}></option>
{caste.map((category) => (
    <option value={category.categoryId} key={category.categoryId}>
      {category.categoryDescription}
      </option>
  ))}
</Input>
</div>
</div>

<div className=''>
<FormFiled filedname="Name of parent/guardian ( பெற்றோர் / பாதுகாவலர் பெயர் )"/>
<Input 
id='parents'
name='parents'
onChange={fieldChanged}
 placeholder="Name of parent/guardian"
 />
</div>

<div className=''>
<FormFiled filedname="Full Address ( சொந்த இடம் / முழு முகவரி)"/>

<Input
        type='text'
        id='address'
        name='address'
        className='rounded-1'
        onChange={fieldChanged}
        invalid={isSubmitted && post.address.trim() === ''}
        />
    <FormFeedback>
        {isSubmitted && post.address.trim() === '' && 'ADDRESS cannot be empty'}
      </FormFeedback>

</div>

<div className='flex w-auto'>
<FormFiled filedname="Annual income of parent/guardian ( பெற்றோர் / பாதுகாவலரது ஆண்டு வருமானம் )"/>
<div className='border border-gray-200 rounded w-auto mt-3'>
  <select  className='p-2 outline-none text-gray-400 text-sm'
  id='income'
  name='income'
  onChange={fieldChanged}
  >
    <option>SELECT</option>
    <option>Below One Lakh</option>
    <option>One Lakh</option>
    <option>Two Lakh</option>
    <option>Three Lakh</option>
    <option>Four Lakh</option>
    <option>Five Lakh</option>
    <option>Above Five Lakh</option>
    
  </select></div>
</div>

<div className='w-auto'>
<FormFiled filedname="Whether there is any educational institution with in a distance of five Kilometers from the applicant's residence ?"/>
<span className='flex'>
<FormFiled filedname="( விண்ணப்பம் செய்துள்ளவரது இருப்பிடத்திலிருந்து ஐந்து கிலோ மீட்டர் தூரத்திற்குள் கல்வி நிலையம் ஏதேனும் உள்ளதா ? )"/>
<select  className='p-2  outline-none border rounded text-gray-400 text-sm h-10'
id='ans'
name='ans'
onChange={fieldChanged}
>
  <option>SELECT</option>
  <option>Yes</option>
  <option>No</option>
</select>
</span>
</div>

{/* <div className=''>
<FormFiled filedname="If so, Why he has not joined the educational institution ? ( அவ்வாறு இருப்பின் ஏன் அக்கல்வி நிலையத்தில் சேரவில்லை )"/>
<Input
        type='text'
        id='content'
        name='content'
        className='rounded-1'
        onChange={fieldChanged}/>
</div> */}
</div>
  )
}

/////////////////////////////////////////////////////////////////////////////////////////
const FormFiled=({filedname})=>{ 
  return(
   <div className='w-full mx-2 flex-1 mb-2'>
    <div className='font-blod  h-6 mt-3 text-gray-500 text-xs leading-8 uppercase '>
   {filedname}
    </div>
    </div>
  )
}


export { Personal, FormFiled, Input};