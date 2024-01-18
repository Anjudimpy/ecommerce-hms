import React, { useState } from 'react'
import LoginPage from './LoginPage';

const Student = () => {
    const [login, setLogin] =useState( false);

    const handleClick=()=>{
           setLogin(true);
    }
  return (
    <div>

{!login ? ( <button onClick={handleClick}>Login</button>) : (  <LoginPage />)}

    </div>
  )
}


  

export default Student