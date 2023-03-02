import { Grid, Typography, Box, Button } from '@mui/material'
import React from 'react'

const SubHeader = () => {
    return (
        <Grid container className='my-5 px-[3%]'>
            <Grid iteam md={3}>
                <Typography className="text-28">My Account</Typography>
            </Grid>
            <Grid item md={6}>
                    <Box className="text-center ">
                        <Typography className="text-center md:w-[40%] xs:w-[100%] bg-[#CEF2DA] py-[8px] text-#0C611A text-[16px] md:m-auto">
                            Success Message Here
                        </Typography>
                    </Box>
            </Grid>
            <Grid item md={3} className="text-end">
                <Button className="bg-headerBtnColor text-btnTextColor w-btnWidth text-btnFontSize">View Button</Button>
            </Grid>
        </Grid>
    )
}

export default SubHeader