import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Base from '../Component/Base';
import {Table} from 'reactstrap';

const Bycle = () => {
  return (
   <Base>
    <CssBaseline />
<Container className='p-7 ' maxWidth=""> 
<span className=' text-yellow-400 w-full underline text-center'><h2>Distribution of Free Bi-Cycles</h2></span>
<Box  className='p-10 mt-4' sx={{ bgcolor: '#cfe8fc', height: 'full', }}>
<p className='text-muted'>Bicycles are supplied to 11th standard student of Government,
 Government aided and partially aided schools irrespective of income and community.</p>
 <h5 className='mt-5'>Eligibility</h5>
 <li className='text-muted'>Should be the students (Boys & Girls)
     of +1 in Government, Government aided and partially aided school (this concession is applicable to the Free bus pass holders also.)</li>
     <li className='text-muted'>No other condition to avail this concession.</li>
     <li className='text-muted'>Students staying in the Hostel situated in the
      school premises and staying in Residential Schools are not eligible for getting free Bi-cycles.</li>

      <h5 className='mt-5'>Officials to be contacted</h5>

      <li className='text-muted'>Concerned School Headmaster.</li>
    </Box></Container>
   </Base>
  )
}

export default Bycle