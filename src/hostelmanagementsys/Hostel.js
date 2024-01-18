import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import Base from '../Component/Base';
import { Link } from 'react-router-dom';



const Hostel = () => {
     window.scroll(0,0)  ;
  return (
    <Base>
<CssBaseline />
<Container className='p-7 ' maxWidth=""> 
<Box  className='p-10' sx={{ bgcolor: '#cfe8fc', height: 'full', }}>
    <h1 className='text-lg font-bold text-gray-800'>Eligibility Criteria</h1>

<div className=' w-full justify-between flex '>
<div className='m-5'>
<Card className=' h-48 w-full '>
<h1 className='text-lg font-bold  text-white bg-gray-500 pl-5'>School Hostel</h1>
<CardContent>
<ul className=' list text-gray-600 text-sm pl-5 '>
    <li>Sudents studying in classes from 4th standard to 12th standard.</li>
    <li>Annual Parental income should not exceed Rs.2,00,000/-.</li>
    <li>The student should be residing at a distance of more than 8 Kilometers
 from the educational institution. (This condition is not applicable to Girl Sudents) </li>
</ul>
</CardContent>
</Card>
</div>

<div  className='m-5'>
<Card className=' h-48 w-full '>
<h1 className='text-lg font-bold  text-white bg-gray-500 pl-5'>College Hostel</h1>
<CardContent>
<ul className=' list text-gray-600 text-sm pl-5 '>
    <li> Student studying in Diploma, U.G/ P.G courses</li>
    <li>Annual Parental income should not exceed Rs.2,00,000/-.</li>
    <li>The student should be residing at a distance of more than 8 Kilometers from the
         educational institution. (This condition is not applicable to Girl Sudents)  
    </li>
</ul>
</CardContent>
</Card>
</div>

</div>

<h1 className='text-lg font-bold text-gray-800 mt-5'>Facilities</h1>
<Card className=' h-96 w-full mt-3'>
<h1 className='text-lg font-bold  text-white bg-gray-500 p-2'>FacilitiesFacilities available for Hostel students</h1>
<CardContent>
<ul className=' list text-gray-600 text-xs pl-5 '>
    <li> Two Tamil and one English newspaper are provided for each hostel.</li>
    <li>Career Guidance Programmes are conducted to create awareness among the 10th std, 12th std and College students about Various job opportunities available. Every year,
         this Career Guidance Programme is conducted through Employment and Training Department.</li>
    <li>Special guides are provided free of cost to the boarders studying in 10th and 12th 
        standard to improve thier performance in public examination. </li>
    <li>The Boarders of Hostels studying upto XII standard are supplied with all
         text books free of cost by the Department of School Education.</li>  
    <li>Four sets of uniforms are given to the Hostel Boarders studying from IV to X standard, as per the
         colour and pattern adopted under Nutritious Meal Scheme from the year 2013-14.</li>  
    <li>Colour television, play materials, water purifier, book shelves, wet-grinder, fir extinguishers, idly steamer, library books and electric insect destroyer are supplied to the hostels.
         In additon, inverter, reference books and two-tier bunk cots are supplied to the college hostels.</li>
    <li>Stainless steel plates and tumblers are provided to all Hostel boarders. Woolen sweaters are provided to the boarders of hostels located in Hill stations.
         The following benefits are also given to them.
         <ol>
            <li>Mats are provided to School Hostel Boarders every year.</li>
            <li>Jamakkalam are provided to first year College Boarders.</li>
            <li>Bedsheets are provided once in two years for both school and Hostel Boarders.</li>
         </ol>
         </li>
     <li>Three medical camps are conducted for school Hostel Boarders every year.</li>
</ul>
</CardContent>
</Card>

<h1 className='text-lg font-bold text-gray-800 mt-5 mb-3'>Food Charges</h1>
<Card className=' h-24 w-full '>
<h1 className='text-base pt-1 font-bold  text-white bg-gray-500 pl-5'>Food Charges For College And  School Hostels</h1>
<CardContent>
<ul className=' text-gray-600 text-sm pl-5 '>
    <li>-Rs.1000/- per student per month for 10 months </li>
    <li>The menu provided to Hostellers has been revised as
         below and orders have been issued to implement the same with effect from 03.06.2022</li>
</ul>
</CardContent>
</Card>
<div className='mt-10 flex justify-center'>
<Link to={"/sign"}>
<Button color="primary" variant="contained">Apply</Button>
</Link>
</div>
</Box>
</Container>
  </Base>
  
  )
}

export default Hostel