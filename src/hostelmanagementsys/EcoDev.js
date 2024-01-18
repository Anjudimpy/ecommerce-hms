import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Base from '../Component/Base';
import { ListGroupItem, ListGroup } from 'reactstrap';
import { useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import IronIcon from '@mui/icons-material/Iron';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import WbShadeIcon from '@mui/icons-material/WbShade';
import FoniberManualRecordIc from '@mui/icons-material/FiberManualRecord';

const CollapsibleListItem = () => {
   
     const [isExpanded, setIsExpanded] = useState(false);
     const [isExpanded1, setIsExpanded1] = useState(false);
     const [isExpanded2, setIsExpanded2] = useState(false);
     const [isExpanded3, setIsExpanded3] = useState(false);
     const [isExpanded4, setIsExpanded4] = useState(false);
  
     const toggleDetails = () => {
       setIsExpanded(!isExpanded);
     };

     const toggleDetails1 = () => {
      setIsExpanded1(!isExpanded1);
    };

    const toggleDetails2 = () => {
      setIsExpanded2(!isExpanded2);
    };

    const toggleDetails3 = () => {
      setIsExpanded3(!isExpanded3);
    };

    const toggleDetails4 = () => {
      setIsExpanded4(!isExpanded4);
    };
 
   
  return (
    <Base>
<CssBaseline />
<Container className='p-7 ' maxWidth=""> 
<span className=' text-yellow-400 w-full underline text-center'><h2>Economic Development Schemes</h2></span>
<Box  className='p-10 mt-4' sx={{ bgcolor: '#cfe8fc', height: 'full', }}>
<p className='text-muted'>For the economic advancement of Backward Classes, Most Backward Classes and Denotified Communities, iron boxes and motorised sewing 
    machines are distributed free of cost by this Department. Lone are provided through TABCEDCO and TAMCO for Various income generating activites.</p>
<ListGroup>
  <ListGroupItem color="success" className='cursor-pointer'onClick={toggleDetails}>
 {isExpanded ? '' :
   <IronIcon color="action" sx={{ fontSize: 40 }}/>} Free Iron boxes
  </ListGroupItem>
  {isExpanded && (
        <ListGroupItem >
          <h6 className='text-green-500 pt-3'> Distribution of Iron Boxes <IronIcon color="success" sx={{ fontSize: 25 }}/></h6>
        <ul className='pb-10 text-muted'>
        <li><FoniberManualRecordIc color="success" sx={{ fontSize: 12 }}/> Beneficiary should belong to BC/MBC/DNCs and doing laundry work.</li>
        <li><FoniberManualRecordIc color="success" sx={{ fontSize: 12 }}/> Parental income limit is increased as Rs. 1,00,000/- per annum w.e.f. 2021-22.</li>
        <li ><FoniberManualRecordIc color="success" sx={{ fontSize: 12 }}/> Age above 20 years.</li>
        </ul>
        </ListGroupItem>
      )}

  <ListGroupItem color="info"className='cursor-pointer'onClick={toggleDetails1}>
  {isExpanded1 ?'':
   <DryCleaningIcon color="info" sx={{ fontSize: 40 }}/>}Modern Laundry
  </ListGroupItem>
  {isExpanded1 && (
        <ListGroupItem>
            <h1><DryCleaningIcon color="info" sx={{ fontSize: 40 }}/></h1>
          <p className='p-2 text-muted text-sm'>In the year 2022-23, a new scheme is introduced for setting up of 25 Modern Laundry Units at a cost of Rs.75 lakh. Under the scheme, each unit consists of 10 numbers of pepole belonging to Backward Classes and Denotified Communities who are already engaged in laundry activites and Rs.3 lakh will be alloted to each unit. The Annual income ceiling of the beneficiaries
           for availing this benifit should not exceed Rs.1 lakh. So far, Rs.12 lakhs have been alloted to establish 4 Modern Laundry Units.</p>
           </ListGroupItem>
      )}

  <ListGroupItem color="warning"className='cursor-pointer'onClick={toggleDetails2}>
  {isExpanded2 ? '' :
   <ReplyIcon color="warning" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>} Motorised Sewing Machines
  </ListGroupItem>
  {isExpanded2 && (
        <ListGroupItem>
             <h6 className='text-orange-300 pt-3'>Distribution of Motorised Sewing Machines</h6>
             <ul className='pb-10 text-muted'>
        <li><FoniberManualRecordIc color="warning" sx={{ fontSize: 12 }}/> The Beneficiary should to BC/MBC/DNCs.</li>
        <li><FoniberManualRecordIc color="warning" sx={{ fontSize: 12 }}/> Parental income limit is increased as Rs. 1,00,000/- per annum w.e.f. 2021-22.</li>
        <li ><FoniberManualRecordIc color="warning" sx={{ fontSize: 12 }}/> Should have tailoring Knowledge.</li>
        <li><FoniberManualRecordIc color="warning" sx={{ fontSize: 12 }}/> Age: From 20 to 45 years.</li>
        <li><FoniberManualRecordIc color="warning" sx={{ fontSize: 12 }}/> Widow/ Deserted women can apply.</li>
        <li><FoniberManualRecordIc color="warning" sx={{ fontSize: 12 }}/> Both Male and Female are eligible to apply.</li>
        <li><FoniberManualRecordIc color="warning" sx={{ fontSize: 12 }}/> Those who already availed the benefit under this scheme shall also apply after completion of 7 years.</li>
        </ul>
        </ListGroupItem>
      )}


  <ListGroupItem color="danger" className='cursor-pointer'onClick={toggleDetails3}>
  {isExpanded3 ?'':
   <ReplyIcon color="danger" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>} Readymade Garment
  </ListGroupItem>
  {isExpanded3 && (
        <ListGroupItem>
          <p className='p-2 text-muted text-sm'>
          In the year 2022-23, a new scheme is introduced for setting up of 25 Readymade garment units at a cost of Rs.75 lakh . Under the scheme, each unit consists of 10 numbers of pepole belonging to Backward Classes, Most Backward Classes and Denotified Communities who are already engaged in tailoring activites and Rs.3 
          lakh will be alloted to each unit. The Annual income ceiling of the beneficiaries for availing this benefit should not exceed Rs.1 lakh.
          </p>
        </ListGroupItem>
      )}

<ListGroupItem color="success"className='cursor-pointer'onClick={toggleDetails4}>
  {isExpanded4 ?'' :
   < WbShadeIcon color="success" sx={{ fontSize: 40,transform: 'rotateY(180deg)' }}/>} Distribution of House Site Pattas
  </ListGroupItem>
  {isExpanded4 && (
        <ListGroupItem>
            <h1> < WbShadeIcon color="success" sx={{ fontSize: 40,transform: 'rotateY(180deg)' }}/></h1>
          <p className='p-2 text-muted text-sm'>
          People should not have own house site and should belong to BC, MBC and DNC. 
          The individual's annual income limit is increased to Rs.1,00,000/- per annum w.e.f. 2021-22. </p>
          
        </ListGroupItem>
      )}

</ListGroup>
</Box>

</Container>
  </Base>
  
  )
}

const EcoDev = () => {
  window.scroll(0,0)  ;
  return (
    <div>
      <CollapsibleListItem/>
    </div>
  );
};




export default EcoDev