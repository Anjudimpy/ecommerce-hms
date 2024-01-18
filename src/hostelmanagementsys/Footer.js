import React from 'react';
import Card from './Card';
import { NavLink as ReactLink} from 'react-router-dom';
import { NavLink } from 'reactstrap';
import ReplyIcon from '@mui/icons-material/Reply';

const Footer = () => {
  
      
  return (
    <div className='  flex justify-center bg-gray-300 pt-2 pb-8'>
   <Card 
   heading="Education Development"
    items={[
    <NavLink tag={ReactLink} to="/hostel"> <ReplyIcon color="success" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Hostel</NavLink>,
    <NavLink tag={ReactLink} to="/schemes"> <ReplyIcon color="warning" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Scholarship Schemes</NavLink>,
    <NavLink tag={ReactLink} to="/bording"><ReplyIcon color="info" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Bording Grants</NavLink>,
    <NavLink tag={ReactLink} to="/rural"><ReplyIcon color="danger" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Rural Girls Incentive Schemes </NavLink>,
    <NavLink tag={ReactLink} to="/bycle"><ReplyIcon color="action" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Distribution of Free Bicyles </NavLink>,
    <NavLink tag={ReactLink} to="/kallar"> <ReplyIcon color="disabled" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Kallar Reclamation Schools</NavLink>,
  ]}/>
   <Card
   heading="Economic Development"
   items={[
    <NavLink tag={ReactLink} to="/ecodev"> <ReplyIcon color="success" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Free Iron boxes</NavLink>,
    <NavLink tag={ReactLink} to="/ecodev"> <ReplyIcon color="warning" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Modern Laundry</NavLink>,
    <NavLink tag={ReactLink} to="/ecodev"> <ReplyIcon color="info" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Motorised Sewing Machines</NavLink>,
    <NavLink tag={ReactLink} to="/ecodev"> <ReplyIcon color="danger" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Readymade Garment Unit</NavLink>,
    <NavLink tag={ReactLink} to="/ecodev"> <ReplyIcon color="action" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Free House Site Pattas</NavLink>,
    ]}
   />
   <Card
   heading="List of Categories"
   items={[
    <NavLink tag={ReactLink} to="/bc"> <ReplyIcon color="success" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Backward Classes</NavLink>,
    <NavLink tag={ReactLink} to="/bcm"> <ReplyIcon color="warning" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Backward Class Muslim</NavLink>,
    <NavLink tag={ReactLink} to="/mbc"> <ReplyIcon color="info" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Most Backward Classes'</NavLink>,
    <NavLink tag={ReactLink} to="/dnc"> <ReplyIcon color="danger" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Denotified Communities</NavLink>,
   ]}
   />
   <Card
   heading="List of Hostels"
   items={[
    <NavLink tag={ReactLink} to="/sh"> <ReplyIcon color="success" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Schools Hostels</NavLink>,
    <NavLink tag={ReactLink} to="/ch"> <ReplyIcon color="warning" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> College Hostels</NavLink>,
    <NavLink tag={ReactLink} to="/th"> <ReplyIcon color="info" sx={{ fontSize: 20,transform: 'rotateY(180deg)' }}/> Total Hostels</NavLink>,
    ]}
   />
   <Card
   heading="Scholarship"
   items={['Pre-matric Scholarship','Post-matric Scholarship','Merit Cum Means Based Scholarship','Begam Hazrat Mahal National Scholarship']}
   />
 </div>
  )
}

export default Footer;