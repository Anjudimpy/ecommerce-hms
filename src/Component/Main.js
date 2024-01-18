import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Sign from './Sign';
import Dashboard from '../hostelmanagementsys/Dashboard';
import Hostel from '../hostelmanagementsys/Hostel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRout from './PrivateRout';
import UserPage from './UserPage';
import Forms from '../hostelmanagementsys/Forms.js/Form';
import Log from '../hostelmanagementsys/Log';
import FixedHeader from './FixedHeader';
import NewForm from './NewForm';
import Single from './Single';
import UserProvider from '../context/userProvider';
import Categories from './categories';
import Admin from './Admin';
import Schemes from '../hostelmanagementsys/Schemes';
import Bording from '../hostelmanagementsys/Bording';
import Rural from '../hostelmanagementsys/RuralGirl';
import Bycle from '../hostelmanagementsys/FreeBycle';
import Kallar from '../hostelmanagementsys/Kallar';
import EcoDev from '../hostelmanagementsys/EcoDev';
import Bc from '../hostelmanagementsys/CategoryList/Bc';
import Bcm from '../hostelmanagementsys/CategoryList/Bcm';
import Mbc from '../hostelmanagementsys/CategoryList/Mbc';
import Dnc from '../hostelmanagementsys/CategoryList/Dnc';
import Th from '../hostelmanagementsys/HostelList/Th';
import Sh from '../hostelmanagementsys/HostelList/Sh';
import Ch from '../hostelmanagementsys/HostelList/Ch';




const Main = () => {
  return (
  <>
  
  <UserProvider>
  <ToastContainer/>
     <div className='fixed top-0 left-0 w-full z-10'>
     <FixedHeader/>
     </div>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/single/:postId'element={<Single/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/adminlog' element={<Admin/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/schemes'element={<Schemes/>}/>
      <Route path='/bording'element={<Bording/>}/>
      <Route path='/bycle'element={<Bycle/>}/>
      <Route path='/kallar'element={<Kallar/>}/>
      <Route path='/rural'element={<Rural/>}/>
      <Route path='/ecodev'element={<EcoDev/>}/>
      <Route path='/bc'element={<Bc/>}/>
      <Route path='/bcm'element={<Bcm/>}/>
      <Route path='/mbc'element={<Mbc/>}/>
      <Route path='/dnc'element={<Dnc/>}/>
      <Route path='/th'element={<Th/>}/>
      <Route path='/sh'element={<Sh/>}/>
      <Route path='/ch'element={<Ch/>}/>
      <Route path='/newform'element={<NewForm/>}/>
      <Route path='/hostel' element={<Hostel/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/categories/:categoryId' element={<Categories/>}/>
    
     
      
      <Route path='/user' element={<PrivateRout/>}>
      <Route path='form' element={<Forms/>}/>
        </Route>

        <Route path='/admin' element={<PrivateRout/>}>
      <Route path='warden' element={<NewForm/>}/>
        </Route>

        <Route path='/hostel' element={<Hostel/>}/> 

      </Routes>
  </UserProvider>

  </>
    
  )
}

export default Main