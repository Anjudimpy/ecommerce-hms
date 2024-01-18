import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Base from '../Component/Base';
import {Table} from 'reactstrap';

const Kallar = () => {
  return (
   <Base>
    <CssBaseline />
<Container className='p-7 ' maxWidth=""> 
<span className=' text-yellow-400 w-full underline text-center'><h3>Kallar Reclamation Schools</h3></span>
<Box  className='p-10 mt-4' sx={{ bgcolor: '#cfe8fc', height: 'full', }}>
    <p className='p-1 text-muted'>
298 Government Kallar Reclamation Schools are functioning under the control of joint Director of Kallar Reclamation in Madurai, Theni and Dindigul 
Distericts for the educational advancement of the Piramalai Kallar Community. The details  of Kallar Reclamation Schools and strength of strength of
students are as follows:</p>
<Table bordered>
  <thead className='text-center'>
    <tr>
      <th rowSpan={2}>SI. NO.</th> <th rowSpan={2}>Details of Schools</th> <th rowSpan={2}>No. of Schools</th>
       <th colSpan={2}>No. of Students</th> <th rowSpan={2}>Total</th></tr>
       <tr><th>Boys</th> <th>Girls</th></tr>
  </thead>
  <tbody className='text-center'>
    <tr>  
        <td>1</td>  <td>Primary School including L.K.G. Classes</td>  <td>213</td> <td>4974</td> <td>4787</td> <td>9761</td>
   </tr>

   <tr>  
        <td>2</td>  <td>Middle School</td>  <td>22</td> <td>885</td> <td>834</td> <td>1719</td>
   </tr>

   <tr>  
        <td>3</td>  <td>High School</td>  <td>20</td> <td>1281</td> <td>1050</td> <td>2331</td>
   </tr>

   <tr>  
        <td>4</td>  <td>Higher.Sec.School</td>  <td>40</td> <td>7213</td> <td>6095</td> <td>13308</td>
   </tr>

   <tr>  
        <td>5</td>  <td>Residentail School</td>  <td>3</td> <td>80</td> <td>80</td> <td>163</td>
   </tr>

   <tr>  
        <th></th>  <th>Total</th>  <th>298</th> <th>14433</th> <th>12846</th> <th>27279</th>
   </tr>
  </tbody>
</Table>
    </Box></Container>
   </Base>
  )
}

export default Kallar