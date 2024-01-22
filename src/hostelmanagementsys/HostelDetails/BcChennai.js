import React from 'react'
import ChennaiTable from './ChennaiData'
import { Table } from 'reactstrap'

const BcChennai = () => {
  return (
    <div>
        <ChennaiTable/>
    <div className='ml-20 mr-20'>
      <Table bordered >
     <thead className='text-center'>
     <tr><th>SI. NO.</th> <th>BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
     </thead>
       <tbody >
         <tr>  <td>1</td> <td>College Boys Hostel, Saidapet (Old), Now at Tondiarpet</td> <td>2</td>  </tr>

         <tr>  <td>2</td> <td>College Boys Hostel, Saidapet (New), Now at Tondiarpet</td> <td>1</td>  </tr>

         <tr>  <td>3</td> <td>College Boys Hostel, Thirunagar (Old), Vadapalani</td> <td>0</td>  </tr>

         <tr>  <td>4</td> <td>College Boys Hostel, Thirunagar (New), Vadapalani</td> <td>2</td>  </tr>

         <tr>  <td>5</td> <td>College Boys Hostel, Otteri (New), Now at Kolathur</td> <td>2</td>  </tr>

         <tr>  <td>6</td> <td>College Boys Hostel, Kailasapuram, Mylapore (Old), Now at Kolathur</td> <td>2</td>  </tr>

         <tr>  <td>7</td> <td>Engineering College Boys Hostel, Anna University Campus, Guindy </td> <td>2</td>  </tr>

         <tr>  <td>8</td> <td>College Boys Hostel, Madhavaram, Now at Tondiarpet</td> <td>10</td>  </tr>

         <tr>  <td>9</td> <td>College Girls Hostel - I, Lady Wellinton Campus, Triplicane</td> <td>2</td>  </tr>

         <tr>  <td>10</td> <td>College Girls Hostel - II, Lady Wellinton Campus, Triplicane</td> <td>2</td>  </tr>

         <tr>  <td>11</td> <td>College Girls Hostel, Queen Mary's College Campus, Now at Lady Wellington Campus, Triplicane</td> <td>2</td>  </tr>

         
        </tbody>
      </Table>
    </div>
    </div>
  )
}

export default BcChennai