import { loadAllChennai } from '../../../Services/Category-Caste';
import ChennaiTable from './ChennaiData'
import { Table } from 'reactstrap'
import React, { useState, useEffect } from 'react';

const MbcChennai = () => {

  const [entities, setEntities] = useState([]);
  useEffect(() => {
    loadAllChennai()
      .then((data) => {
        setEntities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
   <>
   <ChennaiTable/>
    <div className='ml-20 mr-20'>
      <Table bordered>
        <thead className='text-center'>
          <tr> <th>SI. NO.</th> <th>MOST BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
        </thead>
        <tbody>
    {entities.map((chennai, index) => (
            <tr key={chennai.id}>
              <td>{index + 1}</td>
              <td>{chennai.mbc}</td>
              <td>{chennai.mbcVacancy}</td>
            </tr> ))}
    </tbody>

      </Table>
    </div>
   </>
  )
}

export default MbcChennai