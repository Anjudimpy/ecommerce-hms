// App.jsx
import React from 'react';
import Base from '../../Component/Base';
import { Badge, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ChennaiTable = () => {
  return (
   <Base>
   <div className='p-5 text-center'>
  <Link to={'/chennaibc'}><Button color="danger" className='m-2'> Backward Classes Hostels </Button></Link>

  <Link to={'/chennaimbc'}><Button color="success" className='m-2'>   Backward Classes  & Denotified Communities Hostels  </Button></Link>

  <Link to={'/chennaimin'}><Button color="warning" className='m-2'> Minorities</Button></Link>

 
</div>
   </Base>
  );
};

export default ChennaiTable;