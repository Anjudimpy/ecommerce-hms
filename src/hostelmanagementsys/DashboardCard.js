
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ApartmentIcon from '@mui/icons-material/Apartment';

function DashboardCard({number,name})
 {

  return (
    <div>

<Card className=' h-30 w-46'>
<CardContent>
<div className='text-center font-bold text-rose-600 text-xl'>
<ApartmentIcon sx={{ fontSize: 40 }}/>
<h6 className='text-gray-600'>{number}</h6>
</div>
<Stack className='pt-3' direction="row" >
   <Button className=' text-xs' size='small'color="warning" variant="contained">{name}</Button>
</Stack>
</CardContent>
</Card>
    </div>
  )
}

export default DashboardCard