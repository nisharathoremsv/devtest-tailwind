import { Grid, Typography, Button, Avatar } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import profileImage from './image/Mask Group 2@2x.png';
import grpIcon from './image/Component 54 – 1.svg'

const Family = () => {
    const memebers = [
        {name: "John Smith", img: '/static/images/avatar/2.jpg'},
        {name: "Dianne Russell", img: '/static/images/avatar/2.jpg'},
        {name: "Lisa Smith", img: '/static/images/avatar/2.jpg'},
        {name: "Sean Michaletz", img: '/static/images/avatar/2.jpg'},
    ]
    return(
        <Grid conatiner className="bg-[#F5F6F8] p-[17px] mb-[20px] mt-[20px] md:mt-[0px]">
             <Grid container className="mb-[10px]">
                <Grid item md={8} xs={6}>
                    <Typography className='text-18px pb-[10px] text-[#232E3E]'>Family</Typography>
                </Grid>
                <Grid item md={4} xs={4} className="text-end">
                    <SearchIcon className="mr-[12px]"/>
                    <Button className="bg-saveBtn text-btnTextColor text-btnFormFontSize">View All</Button>
                </Grid>
            </Grid>
            <div className="custScroll">
            <Grid container className="bg-[#F8991F] p-[6px] rounded-[6px] mb-[10px]">
                <Grid item md={2} xs={4}>
                    <Avatar alt="Remy Sharp" src={profileImage} className='w-35px h-35px'/>
                </Grid>
                <Grid item md={6} xs={4}><Typography className="text-white" style={{ marginTop: 5 }}>John Smith</Typography></Grid>
                <Grid item md={4} xs={4}>
                    <div className="flex float-right mt-[5px]">
                    <Button className="text-black bg-white text-btnFormFontSize rounded-none h-[23px]">Admin</Button>
                    <div className=" bg-white w-[23px] ml-[10px] h-[23px]">
                        <img src={grpIcon} className="m-auto top-[30%] relative"/>
                    </div>
                    </div>
                </Grid>
            </Grid>
            {
                memebers.map((item) => (
                    <Grid container className="bg-[#DEE8FF] p-[6px] rounded-[6px] mb-[10px]">
                    <Grid item md={2} xs={4}>
                        <Avatar alt="Remy Sharp" src={item.img} className='w-35px h-35px'/>
                    </Grid>
                    <Grid item md={6} xs={4}><Typography className="text-black" style={{ marginTop: 5 }}>{item.name}</Typography></Grid>
                    <Grid item md={4} xs={4}>
                        <div className="flex float-right mt-[5px]">
                        <Button className="text-black bg-#CAD7F5 text-btnFormFontSize rounded-none h-[23px]">Member</Button>
                        </div>
                    </Grid>
                </Grid>
                ))
            }
            </div>
        </Grid>
    )
}

export default Family