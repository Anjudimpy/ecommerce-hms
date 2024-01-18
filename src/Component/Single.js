import React, { useEffect, useState } from 'react'
import Base from './Base'
import { Link, useParams } from 'react-router-dom'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import { loadPost } from '../Services/post-service'
import { toast } from 'react-toastify'
import { BASE_URL } from '../Services/helper'


import { Document, Page, pdfjs } from 'react-pdf';

// Set the URL for the worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;



const Single = () => {

  const {postId}=useParams()
  const [post,setPost]=useState(null)

  useEffect(()=>{

    loadPost(postId).then(data=>{
      console.log(data);
      setPost(data)

    }).catch(error=>{
     console .log(error)
    toast.error("Error")})

  },[])

  const printDate=(numbers)=>{
    return new Date(numbers).toLocaleDateString()
  }

  return (
  <Base>
 <Container>
  {/* <Link to="/">Home</Link> */}
  <Row>
    <Col md={{size:12}}>
    <Card className='mt-3'>
   {
    (post)&&(
      <CardBody>
          <div className='image-container mb-5 mt-3 p-3 flex justify-start w-full bg-slate-200 ' >
      <div style={{width:'80%'}}>
      <CardText className=' text-red-600'>Submitted by:<sapn className='text-muted'> <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b></sapn></CardText>
      <CardText className=' text-red-600'>Gender: <span className='text-muted'>{post.genders}</span></CardText>
    <CardText className=' text-red-600'>Category: <span className='text-muted'>{post.casteCategory}</span>  </CardText>
    <CardText className=' text-red-600'>Date of Birth: <span className='text-muted'>{post.dateOfBirth}</span>  </CardText>
 </div>
 
 <div style={{maxWidth:'10%'}}>
 <img fileUrl={BASE_URL+'/post/image/'+post.imageName} alt=''/>    
  </div>
   </div>
   <div className='pl-10 text-gray-800 text-sm lowercase'>
   <CardText className=''>NAME : <span className='text-muted'>{post.title}</span></CardText>
   <CardText>AGE : <span className='text-muted'>{post.age}</span></CardText>
   <CardText>CASTE: <span className='text-muted'>{post.category.categoryDescription}</span></CardText>
    <CardText>PARENTS NAME : <span className='text-muted'> {post.parents}</span></CardText>
    <CardText>Parents ANNUAL INCOME : <span className='text-muted'> {post.income}</span></CardText>
    <CardText>WHETHER THERE IS ANY EDUCATIONAL INSTITUTION WITH IN A DISTANCE OF FIVE KILOMETERS FROM THE APPLICANT'S RESIDENCE ? <span className='text-muted'>{post.ans}</span></CardText>
    <CardText>NAME OF CLASS ATTENDED LAST YEAR AND NAME OF THE EDUCATIONAL INSTITUTION : <span className='text-muted'>{post.lastinstitude}</span> </CardText>
    <CardText>WHERE DID YOU STAY LAST YEAR ? <span className='text-muted'>{post.field1}</span> </CardText>
    <CardText>FULL ADDRESS OF THE EDUCATIONAL INSTITUTION ENROLLED IN THIS ACADEMIC YEAR : <span className='text-muted'>{post. curentinstitude}</span> </CardText>
    <CardText>SELECT DATE OF ADMISSION OF THE STUDENT TO THE EDUCATIONAL INSTITUTION : <span className='text-muted'> {post.joinDate}</span></CardText>
    <CardText> {post.content}</CardText>
    <CardText>DURATION OF STUDY : <span className='text-muted'>{post.field3}</span> </CardText>
    <CardText>DESCRIPTION OF THE COURSE :<span className='text-muted'>{post.field2}</span> </CardText>
    <CardText>{post.address}</CardText>
    <CardText>{post.subject}</CardText>
   <CardText>{post.marks}</CardText>
  
  
       <CardText> <DisplayFile fileUrl={BASE_URL + '/post/image/' + post.imageName} /></CardText> 
  
    </div>                                                                             
    </CardBody>
    )
   }
    </Card>
    </Col>
  </Row>
 </Container>
  </Base>
  )
}

const DisplayFile = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Ensure workerSrc is set
  

  return (
    <div>
   <Document file={fileUrl}>
         
          <Page pageNumber={pageNumber} />
        </Document>
    </div>
  );
};



export default Single