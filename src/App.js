import './App.css';
import { Typography,Grid, Avatar } from '@mui/material';
import ResponsiveAppBar  from './Header'
import SubHeader from './SubHeader'
import RoomIcon from '@mui/icons-material/Room';
import UserForm from './Form';
import CardDetail from './CardDetail';
import BillingAddress from './BillingAddress';
import profileImage from './image/Mask Group 2@2x.png';
import Activites from  './Activies';
import Family from './Family';
import Invitation from './Invitation';


function App() {  
  return (
    <div className="App">
      <ResponsiveAppBar />
      <SubHeader/>
      <Grid container className="px-[3%]">
        <Grid item md={9} xs={12}>
        <Grid container className='bg-[#F5F6F8] py-[15px]'>
          <Grid item md={3} xs={12}className="profileBlock">
            <div className='flex  px-[20px] py-[15px]'>
              <Avatar alt="Remy Sharp" src={profileImage} className='w-107 h-107'/>
              <div className='pt-[8%] px-[8px]'>
                <Typography className='text-black text-26px'>John Smith</Typography>
                <div className='flex'>
                  <RoomIcon className='mt-[3px] text-12px'/>
                  <Typography className='text-12px text-[#818181]'>Main St. Farmington, CA 123</Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={9} xs={12}>
            <UserForm/>
          </Grid>
        </Grid>
        <Grid container>

        <Grid item md={8} xs={12} className='md:pr-[20px]'>
        <Grid conatiner className='pt-[20px]'>
          <CardDetail/>
        </Grid>

        <Grid conatiner className='pt-[20px]'>
          <BillingAddress/>
        </Grid>
        </Grid>

        <Grid item md={4} xs={12}>
          <Activites/>
        </Grid>
        </Grid>
      
       
      </Grid>
      <Grid item md={3} xs={12} className='md:pl-[20px]'>
      <Family/>
      <Invitation/>
      </Grid>

      </Grid>
    </div>
  );
}



export default App;
