import React from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';


const Header2 = () => {
  return (
  
    <div className=' w-full h-20 flex bg-gray-50 border-t-2 border-t-yellow-300'>
    <img className='h-13 w-30 ' alt='' src='https://sseb.in/assets/img/completed_projects/tamilnadu-govt.png'/>
    <div className='m-2'>
     <span className='tamil text-2xl'>   Tamilnadu <HomeWorkIcon/></span>
       <div className='hms text-gray-700 text-3xl'>BC/MBC/DNC/MW Hostel Management System  </div>
    </div>
    </div>
  )
}

export default Header2