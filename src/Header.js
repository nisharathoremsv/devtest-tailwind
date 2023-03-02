import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import profileImage from './image/Mask Group 2@2x.png';

const pages = ['Menu 1', 'Menu 2', 'Menu 3'];

const ResponsiveAppBar = () => {



  return (
    <AppBar position="static">
        <Grid container spacing={3} className="px-[3%] headerContainer bg-[#232E3E]">
          <Grid item md={2} xs={2}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          </Grid>
          <Grid item md={6}xs={6}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{   color: 'white', display: 'block' }}
                className="text-grey-500 btnHeader w-40"
              >
                {page}
              </Button>
            ))}
          </Box>
          </Grid>
          <Grid item md={4}>
            <Box sx={{ flexGrow: 0 }} className="text-end">
            <NotificationsNoneIcon className='iconHeader'/>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profileImage} />
              </IconButton>
            </Tooltip>
          </Box>
          </Grid>
        </Grid>
    </AppBar>
  );
}
export default ResponsiveAppBar;