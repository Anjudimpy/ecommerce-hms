import {useContext} from 'react';
import { StepperContext } from './StepperContext';
import { FormFiled} from './Personal'
import{Input} from 'reactstrap';
import GradeCalculator from './Table';
import 'react-datepicker/dist/react-datepicker.css';

const Details = () => {
  const { post, setPost,isSubmitted, setIsSubmitted}=useContext(StepperContext);

  const fieldChanged=(event)=>{
   
    setPost({...post,[event.target.name]:event.target.value})

  }


  return (
      <div>
 <div className=''>
<FormFiled filedname="Name of class attended last year and Name of the educational institution 
( சென்ற ஆண்டு படித்த வகுப்பு மற்றும் பயின்ற கல்வி நிலையத்தின் பெயர் )"/>
<Input 
id='lastinstitude'
name='lastinstitude'
onChange={fieldChanged}
   />
</div>

<div>
  <FormFiled filedname="Marks obtained by the students in the subject category in the last year final examination"/>
  <FormFiled filedname="( சென்ற ஆண்டு இறுதித் தேர்வில் மாணவர் மாணவியர் பாடப் பிரிவில் பெற்ற மதிப்பெண்கள் )
"/>
</div>

<div className='mb-10'>
<GradeCalculator/>
</div>

<div>
<FormFiled filedname="Where did you stay last year ? ( சென்ற ஆண்டு எங்கே தங்கியிருந்தார் )"/>
<Input 
id='field1'
name='field1'
onChange={fieldChanged} />
</div>
<div>
<FormFiled filedname="Full address of the educational institution enrolled in this academic year
( இந்த கல்வியாண்டில் சேர்ந்துள்ள கல்வி நிறுவனத்தின் பெயர் முழு முகவரி )"/>
<Input 
id='curentinstitude'
name='curentinstitude'

onChange={fieldChanged}
/>
</div>

<div className='w-full flex  justify-between'>
  <div className=''>
  <FormFiled filedname="Select Date of admission of the student to the educational institution
( மாணவர் கல்வி நிலையத்தில் சேர்க்கப்பட்ட தேதி )"></FormFiled>
  </div>
<div className='w-40 pl-3 mt-3'>
<Input
type='date'
id='joinDate'
name='joinDate'
onChange={fieldChanged}
/>
</div>
</div>

<div>
<FormFiled filedname="Description of the course ( படிப்பின் விவரம் )"/>
<Input 
id='field2'
name='field2'
onChange={fieldChanged} />
</div>

<div>
<FormFiled filedname="Duration of study ( படிப்பின் காலா அளவு )"/>
<Input
id='field3'
name='field3'
onChange={fieldChanged}
/>
</div>
      
    </div>
  );
}


export default  Details