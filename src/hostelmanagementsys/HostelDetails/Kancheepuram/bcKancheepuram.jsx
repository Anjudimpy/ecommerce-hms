import {loadAllKancheepuram } from '../../../Services/Category-Caste';
import { Table } from 'reactstrap'
import React, { useState, useEffect } from 'react';
import KancheepuramTable from './KancheepuramTable';

const BcKancheepuram = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    loadAllKancheepuram()
      .then((data) => {
        setEntities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
        <KancheepuramTable/>
    <div className='ml-20 mr-20'>
      <Table bordered >
     <thead className='text-center'>
     <tr><th>SI. NO.</th> <th>BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
     </thead>
     <tbody>
    {entities.map((kancheepuram, index) => (
            <tr key={kancheepuram.id}>
              <td>{index + 1}</td>
              <td>{kancheepuram.bc}</td>
              <td>{kancheepuram.bcVacancy}</td>
            </tr> ))}
    </tbody>
      </Table>
    </div>
    </div>
  )
}

export default BcKancheepuram 