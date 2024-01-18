import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Base from '../Component/Base';
import {Table} from 'reactstrap';

const Rural = () => {
  return (
   <Base>
    <CssBaseline />
<Container className='p-7 ' maxWidth=""> 
<span className=' text-yellow-400 w-full underline text-center'><h2>Rural Girls Incentive Scheme</h2></span>
<Box  className='p-10 mt-4' sx={{ bgcolor: '#cfe8fc', height: 'full', }}>
    <span>(Most Backward Classes and Denotified Community Girls only)</span>
<Table >
  <thead>
    <tr>
        <th></th>
      <th>Incentive</th><th > Eligibility </th><th>Officials to be contacted</th>
    </tr>
  </thead>
  <tbody>
    <tr >
        <td></td>
       <td className='pb-4 pt-3'>
       3rd Std to 5th Std Rs.500/- 6th Std - Rs.1000/- per annum.
      </td>
      <td className='pb-4 pt-3'>
        <li className='pb-2'>Parental income limit is increased as Rs.1,00,000/- per annum w.e.f 2021-22.</li>
        <li pb-2>Students studying in Government/ Government aided schools in Rural areas.</li>
        <li pb-2>For those belonging to MBC/ DNC only.</li>
        <li>Preference will be given to Girl Children of Widows/ Destitutes.</li>
      
      </td>
      <td  className='pb-4 pt-3'>
      Government/ Government aided schools in Rural areas.
For those belonging to MBC/ DNC only.
Preference will be given to Girl Children of Widows/ Destitutes.
Headmaster of the Government / Government aided Schools concerned in Rural areas.
      </td>
    </tr>
     </tbody>
</Table>
    </Box></Container>
   </Base>
  )
}

export default Rural