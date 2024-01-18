import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Base from '../../Component/Base';
import { loadAllCategories } from '../../Services/Category-Caste';

const Bc = () => {
  const [caste, setCaste] = useState([]);

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCaste(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Base>
      <h5 className='p-4'>List of Backward Classes</h5>
    <div className='ml-10 mr-10'>
    <Table bordered>
        <thead className='text-center'>
          <tr> <th>SI. NO.</th> <th>Name of Caste</th> </tr>
        </thead>
        
        <tbody className='text-center'>
          {caste.map((category, index) => (
            <tr key={category.categoryId}>
              <td>{index + 1}</td>
              <td>{category.categoryDescription}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Base>
  );
};

export default Bc;
