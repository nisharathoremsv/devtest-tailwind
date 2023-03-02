import { Button, Grid } from '@mui/material'
import React from 'react'

const UserForm = () => {
    return (
        <Grid container>
                <Grid item md={10} className='pl-[30px]'>
            <form>
                <Grid container>
                    <Grid item md={6}>
                        <div style={{ display: "flex" }}>
                        
                        <p className='text-13px text-[#202020] w-[100px]' > First Name: </p>
                        <input className='border border-slate-300 ml-[15px] mr-[10px] md:w-[245px] w-[185px] h-[35px] rounded mb-[10px] ' type="text" name="name" />
                        </div>

                        <div style={{ display: "flex" }}>
                        <p className='text-13px text-[#202020] w-[100px] '> Last Name: </p>
                        <input className='border border-slate-300 ml-[15px] mr-[10px] md:w-[245px] w-[185px] h-[35px] rounded mb-[10px]' type="text" name="name" />
                        </div>

                        <div style={{ display: "flex" }}>

                        <p className='text-13px text-[#202020] w-[100px] '> Email: </p>
                        <input className='border border-slate-300 ml-[15px] mr-[10px] md:w-[245px] w-[185px] h-[35px] rounded mb-[10px]' type="text" name="name" />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                    <div style={{ display: "flex" }}>
                    <p className='text-13px text-[#202020] w-[100px] '>Phone: </p>
                    <input className='border border-slate-300 ml-[15px] mr-[10px] md:w-[245px] w-[185px] h-[35px] rounded mb-[10px]' type="text" name="name" />
                    </div>
                    <div style={{ display: "flex" }}>
                    <p className='text-13px text-[#202020] w-[100px] '> Graduation Year: </p>
                    <input className='border border-slate-300 ml-[15px] mr-[10px] md:w-[245px] w-[185px] h-[35px] rounded mb-[10px]' type="text" name="name" />
                    </div>
                    <div style={{ display: "flex" }}>
                    <p className='text-13px text-[#202020] w-[100px] '> Date of Birth: </p>
                    <input className='border border-slate-300 ml-[15px] mr-[10px] md:w-[245px] w-[185px] h-[35px] rounded mb-[10px]' type="text" name="name" />
                    </div>
                    </Grid>
                </Grid>

                   
                {/* </Grid>
                <Grid item md={5} className='pl-[10px]'> */}

            </form>

                </Grid>

            <Grid item md={2} className='grid py-[10px]'>
                <Button className='bg-saveBtn text-btnTextColor text-btnFormFontSize formButton'>Save Changes</Button>
                <Button className='bg-headerBtnColor text-btnTextColor text-btnFormFontSize formButton'>Change Password</Button>
                <Button className='bg-leaveBtn text-btnTextColor text-btnFormFontSize formButton'> Leave Family</Button>
            </Grid>
        </Grid>
    )
}
export default UserForm