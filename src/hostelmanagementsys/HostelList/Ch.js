import React from 'react'
import Base from '../../Component/Base'
import { Table } from 'reactstrap'
import { Badge } from 'reactstrap'
import { Link } from 'react-router-dom'

const Ch = () => {
  window.scroll(0,0);
  return (
   <Base>
     <h4 className='p-4 text-yellow-500 text-center uppercase'>Details of District wise College Hostels</h4>
    <div className='ml-20 mr-20'>
    <Table bordered>
  <thead className='text-center'>
    <tr>
 <th rowSpan={2}>SI. NO.</th> <th rowSpan={2}>Name of District</th> <th colSpan={3}>No. of BC Hostels</th>
 <th colSpan={3}> No. of MBC Hostels </th> <th colSpan={3}>No. of  DNC Hostels</th> <th colSpan={3}>No. of Minorities Hostels </th> <th rowSpan={2}> Total</th><th rowSpan={2}>Hostel Details</th>
    </tr>
    <tr>
    <th>Girls</th><th>Boys</th><th>Total</th> <th>Girls</th><th>Boys</th><th>Total</th>
      <th>Girls</th><th>Boys</th><th>Total</th> <th>Girls</th><th>Boys</th><th>Total</th>
    </tr>
  </thead>
  <tbody >
    <tr>  <td>1</td><td>Chennai</td><td>3</td><td>8</td><td>11</td><td>2</td><td>3</td><td>5</td><td>0</td><td>0</td><td>0</td>
      <td>1</td><td>0</td><td>1</td>  <th>17</th> <td className='text-center'> 
      <Link to={'/chennai'}> <Badge color="warning" className='cursor-pointer'>Click Here </Badge></Link></td>  </tr>  

  <tr>  <td>2</td><td>Kancheepuram</td><td>1</td><td>2</td><td>3</td><td>0</td><td>2</td><td>2</td><td>0</td><td>0</td><td>0</td>
  <td>0</td><td>0</td><td>0</td> <th>5</th> <td className='text-center'> 
      <Link to={'/kancheepuram'}> <Badge color="warning" className='cursor-pointer'>Click Here </Badge></Link></td>    </tr>   

  <tr>  <td>3</td><td>Chengalpattu</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

  <tr>  <td>4</td><td>Thiruvallur</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

  <tr>  <td>5</td><td>Vellore</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

  <tr>  <td>6</td><td>Tirupathur</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

  <tr>  <td>7</td><td>Ranipet</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

  <tr>  <td>8</td><td>Tiruvannamalai</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

  <tr>  <td>9</td><td>Cuddalore</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

  <tr>  <td>10</td><td>Viluppuram</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

  <tr>  <td>11</td><td>Kallakurichi</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>12</td><td>Tanjor</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>13</td><td>Nagapattinam</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>14</td><td>Mayiladuthurai</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>15</td><td>Thiruvarur</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>16</td><td>Trichirappalli</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>17</td><td>Karur</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>18</td><td>Ariyalur</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>19</td><td>Perambalur</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>20</td><td>Pudukottai</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>21</td><td>Madurai</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>22</td><td>Theni</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>23</td><td>Dindigul</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>24</td><td>Ramanathapuram</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>25</td><td>Virudhunagar</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>26</td><td>Sivagangai</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>27</td><td>Thirunelveli</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>28</td><td>Tenkasi</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>29</td><td>Tuticorin</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>30</td><td>Kanniyakumari</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>31</td><td>Salem</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>32</td><td>Namakkal</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>33</td><td>Dharmapuri</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>34</td><td>Krishnagiri</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>35</td><td>Coimbatore</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>36</td><td>Tiruppur</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

  <tr>  <td>37</td><td>Erode</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>

   <tr>  <td>38</td><td>Nilgiris</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr> 

   <tr>  <td>39</td><td>JD Kallar</td><td>3</td><td>4</td><td>7</td><td>2</td><td>8</td><td>10</td><td>0</td><td>0</td><td>0</td>
  <td>5</td><td>12</td><td>17</td>    </tr>  

   
    
      
  </tbody>
</Table>
    </div>
   </Base>
  )
}

export default Ch