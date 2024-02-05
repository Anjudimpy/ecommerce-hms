// App.jsx
import React from 'react';
import Base from '../../../Component/Base';
import { Badge, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const KancheepuramTable = () => {
  return (
   <Base>
   <div className='p-4 text-center'>
    <h4 className='pb-4 uppercase'>Kancheepuram DISTRICT</h4>
  <Link to={'/kancheepurambc'}><Button color="danger" className='m-2'> Backward Classes Hostels </Button></Link>

  <Link to={'/kancheepurammbc'}><Button color="success" className='m-2'>  Most Backward Classes  </Button></Link>

  <Link to={'/kancheepuramdnc'}><Button color="info" className='m-2'> Denotified Communities Hostels</Button></Link>

  <Link to={'/kancheepurammin'}><Button color="warning" className='m-2'> Minorities</Button></Link>

  
</div>
   </Base>
  );    
};

export default KancheepuramTable;
