import React from 'react'
import ChennaiTable from './ChennaiData'
import { Table } from 'reactstrap'

const MbcChennai = () => {
  return (
   <>
   <ChennaiTable/>
    <div className='ml-20 mr-20'>
      <Table bordered>
        <thead className='text-center'>
          <tr> <th>SI. NO.</th> <th>MOST BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
        </thead>
        <tbody>
          <tr> <td>1</td> <td>College Boys Hostel, Saidapet</td> <td>3</td></tr>
          <tr> <td>2</td> <td>ITI Boys Hostel, Guindy</td> <td>5</td></tr>
          <tr> <td>3</td> <td>College Boys Hostel, Thiruvottriyur, Now at Thirunagar</td> <td>5</td></tr>
          <tr> <td>4</td> <td>College Girls Hostel-I, Lady Wellington Campus, Triplicane</td> <td>5</td></tr>
          <tr> <td>5</td> <td>College Girls Hostel-II, Lady Wellington  Campus, Triplicane</td> <td>5</td></tr>

          
        </tbody>

      </Table>
    </div>
   </>
  )
}

export default MbcChennai