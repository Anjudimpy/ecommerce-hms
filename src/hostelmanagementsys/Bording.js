import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Base from '../Component/Base';
import {Table} from 'reactstrap';

const Bording = () => {
  return (
   <Base>
    <CssBaseline />
<Container className='p-7 ' maxWidth=""> 
<span className=' text-yellow-400 w-full underline text-center'><h2>Boarding Grants</h2></span>
<Box  className='p-10 mt-4' sx={{ bgcolor: '#cfe8fc', height: 'full', }}>
<Table >
  <thead>
    <tr>
        <th></th>
      <th>Grant</th><th> Eligibility </th><th>Officials to be contacted</th>
    </tr>
  </thead>
  <tbody>
    <tr >
        <td></td>
       <td className='pb-4 pt-3'>
      Boarding Grants are given at the increased rate of Rs.1000/- per month for 10 months to the BC, MBC / DNC Students staying in Government approved
      Private Hostels.
      </td>
      <td className='pb-4 pt-3'>
      parental income should not exceed Rs. 2,00,000/- per annum
      </td>
      <td  className='pb-4 pt-3'>
      Administrative head of the Private Hostel concerned 
      (through District Backward Classes and Minorities Welfare Officers) Students need not apply separately
      </td>
    </tr>
     </tbody>
</Table>
    </Box></Container>
   </Base>
  )
}

export default Bording