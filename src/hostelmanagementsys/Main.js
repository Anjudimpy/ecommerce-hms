import React from 'react'
import Log from './Log'
import MainHeading from './MainHeading';
import { Route, Routes } from 'react-router-dom';
import Bodys from './Bodys'
import Dashboard from './Dashboard';
import Hostel from './Hostel';
import LoginPage from './LoginPage';
import Form from './Forms.js/Form';
import Sign from '../Component/Sign';
import Login from '../Component/Login';
import Schemes from './Schemes';

const Main = () => {
  return (
    <div>
 <MainHeading/>
  <Routes>
  <Route path='/' element={<Bodys/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/hostel' element={<Hostel/>}/>
  <Route path='/form' element={ <Form/>}/>
  <Route path='/sign' element={<Sign/>}/>
  <Route path='/shemes'element={<Schemes/>}/>
    </Routes>
 
    </div>
  )
}

export default Main