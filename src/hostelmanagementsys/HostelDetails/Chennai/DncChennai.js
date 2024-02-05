import { loadAllChennai } from '../../../Services/Category-Caste';
import ChennaiTable from './ChennaiData'
import { Table } from 'reactstrap'
import React, { useState, useEffect } from 'react';

const DncChennai = () => {

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
        <thead className='text-center uppercase'>
          <tr> <th>SI. NO.</th> <th>Denotified Communities Hostels</th> <th>VACANCIES</th></tr>
        </thead>
        <tbody>
    {entities.map((chennai, index) => (
            <tr key={chennai.id}>
              <td>{index + 1}</td>
              <td>{chennai.dnc}</td>
              <td>{chennai.dncVacancy}</td>
            </tr> ))}
    </tbody>

      </Table>
    </div>
   </>
  )
}

export default DncChennai