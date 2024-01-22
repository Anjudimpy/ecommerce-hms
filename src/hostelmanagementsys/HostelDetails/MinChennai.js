import React from 'react'
import ChennaiTable from './ChennaiData'
import { Table } from 'reactstrap'

const MinChennai = () => {
  return (
<>
<ChennaiTable/>
<div className='ml-20 mr-20'>
      <Table bordered>
        <thead className='text-center'>
          <tr> <th>SI. NO.</th> <th>MINORITIES HOSTELS</th> <th>VACANCIES</th></tr>
        </thead>
        <tbody>
                   <tr> <td>5</td> <td>College Girls Hostel, Royapettai  at Lady Wellington  Campus, Triplicane</td> <td>5</td></tr>
        </tbody>

      </Table>
      </div>
</>
  )
}

export default MinChennai