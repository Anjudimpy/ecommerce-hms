
import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from '@mui/material';


const LoginPage = () => {
  return (
  <div>
 <Container  maxWidth="m">
 <Box className='p-10 flex justify-center'  sx={{ bgcolor: '#cfe8fc', height: '100vh', }}>
 <Card className='h-96 w-96 '>
 <h1 className='text-center bg-gray-300 p-2 text-xl font-bold text-gray-800 h-12'>Login</h1>
 <CardContent className='p-10'>
<div className='block justify-items-center pb-5 pl-12'>
<div className='pb-3 '>
<Box component="form"   sx={{ '& > :not(style)': { m: 1, width: '30ch' },  }}
      noValidate
      autoComplete="off" >
   <TextField id="outlined-basic" label="User Id" variant="outlined" />
</Box>
 </div> 
<div >
<Box component="form"   sx={{ '& > :not(style)': { m: 1, width: '30ch' },  }}
      noValidate
      autoComplete="on" >
   <TextField id="outlined-basic" label="Password" variant="outlined" />
</Box>
</div>
</div>    
<div className='flex justify-center'>
<Button className=' ' variant="contained">Login</Button> 
</div>  
<div className='flex justify-center pt-2'>
<Link to={'/'} className='cursor-pointer'>Forgot Password ?</Link>
</div>               
</CardContent>
</Card>
   
</Box>
</Container>
</div>
  )
}

export default LoginPage