import React from 'react'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import Button from '@mui/material/Button';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import SupervisedUserCircleTwoToneIcon from '@mui/icons-material/SupervisedUserCircleTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';
import Base from '../Component/Base';

const Log = () => {
  return (
  
    <div className=' loginButton flex mt-32 h-38  pt-5 pb-5 pr-24 pl-24 justify-between'>
   <LoginForm 
   icon={<SchoolTwoToneIcon sx={{fontSize:40}}/>}
   button={<Link to={'/login'}><Button className=' '  size='small'variant="contained">Student</Button></Link>}/>
   <LoginForm icon={<SupervisedUserCircleTwoToneIcon sx={{fontSize:40}}/>}
   button={<Link to={'/adminlog'}><Button className=' '  size='small'color="success" variant="contained">Warden</Button></Link>}/>
   <LoginForm icon={<PeopleAltTwoToneIcon sx={{fontSize:40}}/>}
   button={<Button className=' '  size='small'color="secondary" variant="contained">District Officer</Button>}/>
   <LoginForm  icon={< PersonOutlineTwoToneIcon sx={{fontSize:40}}/>} 
   button={<Button className=' '  size='small'color="error" variant="contained">Commissioner</Button>}/>
    </div>
  
 
  )
}

function LoginForm({icon, button}){
    return (
      <div>
        <Card className='p-1 w-38 mb-2'>
          <CardContent >
            <div className='flex justify-between'>
              <div> {icon}</div>
              <div className='pl-2 mt-2'>  {button}</div>
            </div>
         
          {/* <Stack className='flex justify-center mt-2' direction="row" > */}
         
         {/* </Stack> */}
         
          </CardContent>
        </Card>
      </div>
      
    );
  };

export default Log