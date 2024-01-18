import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Base from '../Component/Base';
import { ListGroupItem, ListGroup } from 'reactstrap';
import { useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';


const CollapsibleListItem = () => {

     const [isExpanded, setIsExpanded] = useState(false);
     const [isExpanded1, setIsExpanded1] = useState(false);
     const [isExpanded2, setIsExpanded2] = useState(false);
     const [isExpanded3, setIsExpanded3] = useState(false);
     const [isExpanded4, setIsExpanded4] = useState(false);
     const [isExpanded5, setIsExpanded5] = useState(false);
     const [isExpanded6, setIsExpanded6] = useState(false);
     const [isExpanded7, setIsExpanded7] = useState(false);
     const [isExpanded8, setIsExpanded8] = useState(false);
     const [isExpanded9, setIsExpanded9] = useState(false);


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
   
    const toggleDetails5 = () => {
      setIsExpanded5(!isExpanded5);
    };
   
    const toggleDetails6 = () => {
      setIsExpanded6(!isExpanded6);
    };

    const toggleDetails7 = () => {
      setIsExpanded7(!isExpanded7);
    };

    const toggleDetails8 = () => {
      setIsExpanded8(!isExpanded8);
    };

    const toggleDetails9 = () => {
      setIsExpanded9(!isExpanded9);
    };
   
   
   
   
  return (
    <Base>
<CssBaseline />
<Container className='p-7 ' maxWidth=""> 
<span className=' text-yellow-400 w-full underline text-center'><h2>Scholorship Schemes</h2></span>
<Box  className='p-10 mt-4' sx={{ bgcolor: '#cfe8fc', height: 'full', }}>

<ListGroup>
  <ListGroupItem color="success" className='cursor-pointer'onClick={toggleDetails}>
 {isExpanded ? <ImportContactsTwoToneIcon color="success" sx={{ fontSize: 23}}/> :
   <ReplyIcon color="success" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>} Pre Matric Scholarship Schemes
  </ListGroupItem>
  {isExpanded && (
        <ListGroupItem>
          <p className='p-2 text-muted text-sm'>No fee (Tution/ Special fee/ Examination fee) is collected from the students studying in Tamil Medium in Government Aided Schools. The Government have completely waived the payment of tuition fee for the students studying in English Medium in Government 
            and Government Aided Schools. Also payment of Exam Fees for the student studying in 10th (Tamil Medium) is waived.</p>
          <h6 className='text-green-500 '>Exam Fee Reimbursement</h6>
          <p className='p-2 text-muted text-sm'>The Examination Fee for the English Medium students studying in 10th standard in Government and Government
             Aided Schools is reimbursed in full by this Department to the Directorate of Government Examination for BC, MBC & DNC students.</p>

             <h6 className='text-green-500'>Condition</h6>
          <p className='p-2 text-muted text-sm'>Backward Classes-Parental Annual Income should not exceed Rs.2.50 lakh.
           Most Backward Classes and Denotified Communities- No Condition.</p>
        </ListGroupItem>
      )}

  <ListGroupItem color="info"className='cursor-pointer'onClick={toggleDetails1}>
  {isExpanded1 ? <ImportContactsTwoToneIcon color="info" sx={{ fontSize: 23}}/> :
   <ReplyIcon color="info" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>} Post Matric Scholarship Schemes ( School Students)
  </ListGroupItem>
  {isExpanded1 && (
        <ListGroupItem>
          <p className='p-2 text-muted text-sm'>Under Post-matric Scholarship Scheme, Examination fees for the Backward Classes students 
          studying in 11th and 12th standards in English Medium in Government and Government Aided schools are being reimbursed. This subject to the Condition that thier annual parental income should not exceed 2.5 lakh. For Most Backward Classes and Denotified Communities students examination fee is reimbursed without any condition. The Government has waived the payment of Tuition Fee and Special Fee to the students studying in Tamil and English Medium in Government and Government Aided schools.
           The Examination fees for 11th and 12th standard Tamil Medium students has also been waived.</p>
          
        </ListGroupItem>
      )}

  <ListGroupItem color="warning"className='cursor-pointer'onClick={toggleDetails2}>
  {isExpanded2 ? <ImportContactsTwoToneIcon color="warning" sx={{ fontSize: 23}}/> :
   <ReplyIcon color="warning" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>} Post-matric Scholarship Scheme ( Colleghe Students)
  </ListGroupItem>
  {isExpanded2 && (
        <ListGroupItem>
          <p className='p-2 text-muted text-sm'>Under Post-matric Scholarship Scheme,Scholarship are sanction to Backward Classes, Most Backward Classes and Denotified Communities students studying ITI, Diploma in polytechnics, Post Graduate, Professional and Ph.D. courses. Annual parental income should not exceed Rs. 2.5 Lakh to avail this scholarship. Under the scheme, Tuition fee and Special Fee are sanctioned as fixed for the Government educational institution. Examination fee is sanctioned in full and Book Money as notified in the Scholarship Notification. Students studying in the second shift in Government and Government aided colleges are also sanctioned scholarship by applying the same condition stipulated for students studying in the morning shift. In additon to the scholarship amount, Boarding and loading charges are sanctioned to students who are studying in Hostels attached to educational institution, at the enhanced rate of Rs.4000/-per year (Rs.400/- per month for 10 months in a year) for Under Graduate courses, Professional Courses, ITI/ Diploma and Post Graduate courses from the year 2021-22.</p>
        </ListGroupItem>
      )}


  <ListGroupItem color="danger" className='cursor-pointer'onClick={toggleDetails3}>
  {isExpanded3 ? <ImportContactsTwoToneIcon color="danger" sx={{ fontSize: 23}}/> :
   <ReplyIcon color="danger" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>} Free Education Schemes
  </ListGroupItem>
  {isExpanded3 && (
        <ListGroupItem>
          <p className='p-2 text-sm'>
            <ol>
   <li> <ListGroupItem color="danger"className='cursor-pointer'onClick={toggleDetails7}>
  {isExpanded7 ? <ImportContactsTwoToneIcon color="danger" sx={{ fontSize: 23}}/> :
  <ReplyIcon color="danger" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>}  Degree Courses</ListGroupItem>  
 {isExpanded7 && (
 <ListGroupItem>
  <p className='p-2 text-muted text-sm'>Under free Education Scholarship (Degree) scheme, students of Backend classes,most Backward classes and Denotified communities studying in three year degree courses in government and government aided arts and science colleges are sanctioned special fees and non refundable compulsory fee as prescribed by the government(tuition fee of students studying in three year degree courses in government and government aided arts and science colleges has been waived).Book money is sanctioned as notified in the scholarship notification and examination fee in full.This scholarship is sanctioned without any condition.In addition to the scholarship amount, boarding and loading charges at the enhanced rate of Rs.4000/-  per year (Rs.400/- per month for 10 months in a year)are 
sanctioned to students who are staying in hostels attached to educational institutions from the year 2021-22.</p>
  </ListGroupItem>)}</li>

  <li> <ListGroupItem color="danger"className='cursor-pointer'onClick={toggleDetails8}>
  {isExpanded8 ? <ImportContactsTwoToneIcon color="danger" sx={{ fontSize: 23}}/> :
  <ReplyIcon color="danger" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>}Diploma Courses  </ListGroupItem>  
 {isExpanded8 && (
 <ListGroupItem>
  <p className='p-2 text-muted text-sm'>Under Free Education Scholarship (diploma) scheme, students of Backend classes, most Backward classes and Denotified communities studying diploma Courses in government and government aided polytechnic colleges are sanctioned tuition fee, special fee and non refundable compulsory fee as prescribed by the government.Book money is sanctioned as notified in the scholarship notification and examination fee in full.This is subject to the conditions that the parental should not exceed Rs.25000/- and the beneficiary should be the first diploma holder/graduate in the family.In addition to the scholarship amount, boarding and loading charges at the enhanced rate of Rs.4000/- per year(Rs.400/- per month for 10 months in a year)
  are sanctioned to students who are staying in hostels attached to educational institutions from the year 2021-22.</p>
  </ListGroupItem>)}</li>

  <li> <ListGroupItem color="danger"className='cursor-pointer'onClick={toggleDetails9}>
  {isExpanded9 ? <ImportContactsTwoToneIcon color="danger" sx={{ fontSize: 23}}/> :
  <ReplyIcon color="danger" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>}  Professional Courses</ListGroupItem>  
 {isExpanded9 && (
 <ListGroupItem>
  <p className='p-2 text-muted text-sm'>Under free Education Scholarship(Professional) scheme, Students of Backend classes,most Backward classes and Denotified communities selected under Government quota through single window and pursuing Professional Courses in Government, Government aided and Self-financing colleges are sanctioned special Fee and Non-refundable compulsory Fee as prescribed by the Government.Book money is sanctioned as notified in scholarship notification and Examination Fee in full.This is subject to the conditions that the annual parental income should not exceed Rs.2,50,000/- and the Beneficiary should be the first graduate in the family.In addition to the scholarship amount, boarding and lodging charges at the enhanced rate of Rs.4000/- per year(Rs.400/- per month for 10 months in a year)are sanctioned
  to students who are staying in Hostels attached to educational institutions from the year 2021-22.</p>
  </ListGroupItem>)}</li>
            
            </ol>
          </p>
        </ListGroupItem>
      )}

<ListGroupItem color="success"className='cursor-pointer'onClick={toggleDetails4}>
  {isExpanded4 ? <ImportContactsTwoToneIcon color="actio" sx={{ fontSize: 23}}/> :
   <ReplyIcon color="action" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>} Web enabled sanction of scholarship
  </ListGroupItem>
  {isExpanded4 && (
        <ListGroupItem>
          <p className='p-2 text-muted text-sm'>
            Sanction and disbursement of Scholarship to the college students of Backward Classes, Most Backward Classes and Denotified Communities 
            is implemented through the web application www.bcmbcscholarship.tn.gov.in. Scholarship are directly credited into the students' Bank account
            through Integrated Financial and Human Resource Managment System (IFHRMS) by the respective Heads of the Department.
          </p>
          
        </ListGroupItem>
      )}

<ListGroupItem color="info"className='cursor-pointer'onClick={toggleDetails5}>
  {isExpanded5 ? <ImportContactsTwoToneIcon color="info" sx={{ fontSize: 23}}/> :
   <ReplyIcon color="info" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>} Scholarship to students studying in Central Government  institution like IIM, IIM, IIIT, NIT 
   and Central Universities
  </ListGroupItem>
  {isExpanded5 && (
        <ListGroupItem>
          <p className='p-2 text-muted text-sm'>
            Scholarship are sanction to the students belonging to BC/MBC/DNC communities who are pursuing UG/PG Courses in Government of India instituition
            like IIT, IIM, IIIT, NIT and Central Universities with the following conditions:
            <ol>
              <li>1. The student should belong to Backward Classes, Most Backward Classes or Denotified Communities.</li>
              <li>2. The student should be a native of Tamil Nadu. </li>
              <li>3. The Student should be pursuing UG/PG courses in ITT, IIM, IIIT, NIT and Central Universities.</li>
              <li>4. The annual family income should not exceed Rs.2.50 Lakh.</li>
              <li>5. The scholarship amount will be reimbursed tom the student every year for the entire duration of their UG/PG Courses.</li>
              <li>6. The reimbursement will cover Tuition Fee, Special Fee, Exam Fee, other compulsory fees as prescribed by the Institution or Rs. 2.00 Lakh 
                per year whichever is lesser. </li>
              <li>7. If more of applications are received, eligible students will be shortlisted as per the marks secured by them in plus two public exam. </li>  
            </ol>
          </p>
          <h6 className=' text-blue-400'>How to apply:</h6>
          <p className='p-1 text-muted text-sm'>
            The students are requested to fill the scholarship application forms and submit to the instituition and the eligible application with the 
            concurrence of the Principal of the Institutions with all enclosures should be sent to the under mentioned Directorate.
            <ol>
              <li>Commissioner of Backward Classes Walfare,</li>
              <li>Ezhilagam Annex Building,</li>
              <li>2nd floor, Chepauk, Chennai-5.</li>
              <li>Phone: 044-28551462</li>
              <li>E-mail: <span className='underline'>tngovtiitscholarship@gmail.com</span></li>
            </ol>
            For any quires contact District Backward Classes and Minorities Welfare Office situated in the campus of Distict Collectorate.
          </p>
          
        </ListGroupItem>
      )}

<ListGroupItem color="warning"className='cursor-pointer'onClick={toggleDetails6}>
  {isExpanded6 ? <ImportContactsTwoToneIcon color="warning" sx={{ fontSize: 23}}/> :
   <ReplyIcon color="warning" sx={{ fontSize: 25,transform: 'rotateY(180deg)' }}/>}  Reimbursement of fee to the students studied in Government Schools and admitted in medical Courses under 7.5% 
   preferential allotment seats</ListGroupItem>
  {isExpanded6 && (
        <ListGroupItem>
          <p className='p-2 text-muted text-sm'>
            Fee for the students who studied in Goverment schools and admitted in Medical and Dental Courses under 7.5% preferential allotment seats,
            is reimbursed to the Directorate of Medical Education.
          </p> 
          <h6 className=' text-orange-400'>How to apply: </h6>
          <p className='pt-1 pl-3 text-muted text-sm'>  BC, MBC & DNC College students can collect their BC, MBC & DNC Scholarship application from their Institution and submit the duly
            filled in application from their Institutions. For any queries contact District Backward Classes and Minorities Welfare Office stipulated 
            in the Campus of District Collectorate.
          </p>
          </ListGroupItem>)}        
 </ListGroup>
</Box>

</Container>
  </Base>
  
  )
}

const Schemes = () => {
  window.scroll(0,0)  ;
  return (
    <div>
      <CollapsibleListItem/>
    </div>
  );
};




export default Schemes