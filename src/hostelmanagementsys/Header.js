import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Log from './Log';



const Header = (ShawPage) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(isToggled => !isToggled); 
  };
  
  return (
    <div className='h-8  w-full bg-gray-700'>
        <div className='top-heading pr-5 '>

<button  className=' text-gray-300 font-bold text-base ' onClick={handleClick}>Login
        {!isToggled ? ('') : (  <Log/>)}
        </button>  
<div>
<button className='buttons text-gray-300 text-base '>Register</button>
</div>         
</div>
    </div>
  )
}

export default Header;