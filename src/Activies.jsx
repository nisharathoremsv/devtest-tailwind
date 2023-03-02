import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import groupIcon from './image/Icon awesome-users-cog@2x.png'

const Activites = () => {

    const groupActivity = [
        { gorupType: "Account Type", user: 'Leslie Alexander updated her', date: "5 October 10:01 AM" },
        { gorupType: "Family Member", user: 'John Smith removed Mark Fleix from', date: "4 October 11:00 AM" },
        { gorupType: "Account Type", user: 'Leslie Alexander updated her', date: "3 October 2:45 PM" },
        { gorupType: "Family Member", user: 'John Smith removed Mark Fleix from', date: "3 October 2:45 PM" },
        { gorupType: "Account Type", user: 'Leslie Alexander updated her', date: "3 October 2:45 PM" },
        { gorupType: "Family Member", user: 'John Smith removed Mark Fleix from', date: "3 October 2:45 PM" },
        { gorupType: "Account Type", user: 'Leslie Alexander updated her', date: "3 October 2:45 PM" },
    ]
    return (
        <Grid container className="bg-[#F5F6F8] mt-[20px] p-[20px] md:h-[620px]">
            <Grid container className="mb-[25px]">
                <Grid item md={8} xs={6}>
                    <Typography className='text-18px pb-[10px] text-[#232E3E]'>Activities</Typography>
                </Grid>
                <Grid item md={4} xs={6}className="text-end">
                    <Button className="bg-saveBtn text-btnTextColor text-btnFormFontSize">View All</Button>
                </Grid>
            </Grid>
            {groupActivity.map((item) => (
                <Grid container>
                    <Grid item md={2}>
                        <div className="bg-[#DEE8FF] w-[34px] h-[34px] rounded-full">
                            <img src={groupIcon} alt='' className="w-[17px] h-[17px] m-auto top-[25%] relative" />
                            <div className="vl"></div>
                        </div>
                    </Grid>
                    <Grid item md={10} style={{ marginBottom: 25 }}>
                        <div className='flex'>
                            <Typography className="text-[#232E3E] text-13px">{item.user}</Typography>
                            <Typography className="text-[#F8991F] text-13px" style={{ marginLeft: 5 }}>{item.gorupType}</Typography>
                        </div>
                        <Typography className="text-[#C7C7C7] text-12px">{item.date}</Typography>
                    </Grid>
                </Grid>
            ))}
            <Grid container>
                <Grid item md={2}>
                    <div className="bg-[#DEE8FF] w-[34px] h-[34px] rounded-full">
                        <img src={groupIcon} alt='' className="w-[17px] h-[17px] m-auto top-[25%] relative" />
                        {/* <div className="vl"></div> */}
                    </div>
                </Grid>
                <Grid item md={10}>
                    <div className='flex'>
                        <Typography className="text-[#232E3E] text-13px">John Smith removed Mark Fleix from</Typography>
                        <Typography className="text-[#F8991F] text-13px" style={{ marginLeft: 5 }}>Family Member</Typography>
                    </div>
                    <Typography className="text-[#C7C7C7] text-12px"> 3 October 2:45 PM</Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Activites