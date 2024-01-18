import React from 'react'
import { Link } from 'react-router-dom'
const Header3 = () => {
  return (
    <div className=' h-8  bg-gray-200 pl-28'>
        <Link to={'/'}><button className='buttons text-gray-700'>Home</button></Link>
       <Link to={'/dashboard'}> <button className='buttons text-gray-700'>Dashboard</button></Link>
        <button className='buttons text-gray-700'>Events</button>
        <button className='buttons text-gray-700'>Reports</button>

    </div>
  )
}

export default Header3