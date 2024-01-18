import Button  from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'

const Completed = () => {
  return (
    <div className='flex justify-center'>
      <Link to={"/"}>
      <Button color='success' variant='contained'>
            Colse
        </Button>
      </Link>
    </div>
  )
}

export default Completed