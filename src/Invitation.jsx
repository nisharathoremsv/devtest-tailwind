import React from "react";
import { Grid, Typography, Button, Avatar } from "@mui/material";
import profileImage from './image/Mask Group 2@2x.png';
import crossImg from './image/Icon material-close@2x.png';
import rightImg from './image/Icon awesome-check@2x.png'


const Invitation = () => {
    const invitation = [
        {name: "John Smith", text: "have invited you to become his family member."},
        {name: "John Smith", text: "have invited you to become his family member."},
        {name: "John Smith", text: "have invited you to become his family member."},
        {name: "John Smith", text: "have invited you to become his family member."},
        {name: "John Smith", text: "have invited you to become his family member."},
    ]
    return(
        <Grid conatiner className="bg-[#F5F6F8] p-[17px] ">
             <Grid container className="mb-[10px]">
                <Grid item md={6} xs={4}>
                    <Typography className='text-18px pb-[10px] text-[#232E3E]'>Invitations</Typography>
                </Grid>
                <Grid item md={6} xs={8} className="text-end">
                    <div style={{ display: "flex" }}>
                    <Button className="bg-#DBDBDB text-black text-btnFormFontSize rounded-40px inviteBtn" 
                        >Sent (15)</Button>
                        <div className="w-[fit-content]">
                    <Button className="bg-#F8991F text-btnTextColor text-btnFormFontSize rounded-40px inviteBtn2"
                    >Received (5)
                    </Button>
                    <div class="bottom-arrow"></div>
                    </div>
                    </div>
                </Grid>
            </Grid>
            <div>
                {invitation.map((item) => (

            <Grid container className="bg-[#DEE8FF] p-[6px] rounded-[6px] mb-[10px]">
                <Grid item md={2}>
                    <Avatar alt="Remy Sharp" src={profileImage} className='w-35px h-35px'/>
                </Grid>
                <Grid item md={7}>
                    <Typography className="text-#F8991F text-white text-14px" style={{ marginTop: 5 }}>
                        {item.name}
                        <span className="text-black text-14px pl-[5px]">{item.text}</span>
                    </Typography>
                    </Grid>
                <Grid item md={3}>
                    <div className="flex float-right mt-[5px]">
                    <div className=" bg-[#0C611A] w-[30px] ml-[10px] h-[30px] rounded-[4px]">
                        <img src={rightImg} className="m-auto relative h-[10px] w-[13px] top-[30%]"/>
                    </div>
                    <div className=" bg-[#FF3A3A] w-[30px] ml-[10px] h-[30px] rounded-[4px]">
                        <img src={crossImg} className="m-auto relative h-[10px] w-[10px] top-[30%]"/>
                    </div>
                    </div>
                </Grid>
            </Grid>
                ))}
            </div>
        </Grid>
    )
}

export default Invitation