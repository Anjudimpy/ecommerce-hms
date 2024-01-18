import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DashboardCard from './DashboardCard';
import Base from '../Component/Base';

const Dashboard = () => {

  return (
    <Base>
    <div >
      <CssBaseline />
     
      <Container maxWidth="m">
      <h1 className='text-blue-400  font-bold text-3xl text-center p-2'>Dashboard</h1>
      <Box   sx={{ bgcolor: '#cfe8fc', height: '35vh', }}>
    <div className='flex p-16 justify-between'>
      <DashboardCard number='1060' name="School Hostels"/>
      <DashboardCard number='290' name="College Hostels"/>
      <DashboardCard number='1350' name="Total Hostels"/>
    </div>
      </Box>
      </Container>

      <Container className='mt-1 ' maxWidth="m">
      <Box   sx={{ bgcolor: '#cfe8fc', height: '40vh', }}>
      <h1 className='text-gray-600  font-bold text-3xl text-center pt-3'>Sanctioned Strength</h1>
    <div className='flex pt-10 pb-10 pr-52 pl-52 justify-between'>
    <DashboardCard number='53649' name="Boys Strength"/>
      <DashboardCard number='33350' name="Girls Strength"/>
      <DashboardCard number='86999' name="Total Strength"/>
    </div>
      </Box>
      </Container>

      <Container className='mt-1 ' maxWidth="m">
      <Box   sx={{ bgcolor: '#cfe8fc', height: '40vh', }}>
      <h1 className='text-gray-600  font-bold text-3xl text-center pt-3'>College's Students Hostels</h1>
    <div className='flex p-10 justify-between'>
    <DashboardCard number='149' name="Boys Hostels"/>
      <DashboardCard number='141' name="Girls Hostels"/>
      <DashboardCard number='290' name="Total   Hostels"/>
    </div>
      </Box>
      </Container>

      <Container className='mt-1 mb-3 ' maxWidth="m">
      <Box   sx={{ bgcolor: '#cfe8fc', height: '40vh', }}>
      <h1 className='text-gray-600  font-bold text-3xl text-center pt-3'>School's Students Hostels</h1>
    <div className='flex pt-10 pb-10 pr-52 pl-52 justify-between'>
    <DashboardCard number='692' name="Boys Hostels"/>
      <DashboardCard number='368' name="Girls Hostels"/>
      <DashboardCard number='1060' name="Total Hostels"/>
    </div>
      </Box>
      </Container>
    </div>
    </Base>
  );
}
  
export default Dashboard