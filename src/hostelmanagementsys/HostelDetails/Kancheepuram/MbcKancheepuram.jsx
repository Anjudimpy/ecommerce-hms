import {loadAllKancheepuram } from '../../../Services/Category-Caste';
import { Table } from 'reactstrap'
import React, { useState, useEffect } from 'react';
import KancheepuramTable from './KancheepuramTable';

const MbcKancheepuram = () => {
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
     <tr><th>SI. NO.</th> <th>MOST BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
     </thead>
     <tbody>
    {entities.map((key, index) => (
            <tr key={key.id}>
              <td>{index + 1}</td>
              <td>{key.mbc}</td>
              <td>{key.mbcVacancy}</td>
            </tr> ))}
    </tbody>
      </Table>
    </div>
    </div>
  )
}

export default MbcKancheepuram 