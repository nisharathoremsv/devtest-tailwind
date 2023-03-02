import { Button, Grid, Typography } from "@mui/material"
import React from "react"
import Checkbox from '@mui/material/Checkbox';

const BillingAddress = () => {
    return (
        <Grid container className="bg-[#F5F6F8] p-[20px]">
            <Typography className='text-18px pb-[15px] text-[#232E3E]'>Billing Address</Typography>
            <Grid container>
                <Checkbox defaultChecked className="text-[#F8991F]" />
                <Typography className='text-13px text-[#232E3E] pt-[2px] pl-[10px]'>Same as Home Address</Typography>
            </Grid>
            <form className="w-[100%]">

                <Grid container className="mt-[20px]">
                    <Grid item md={6} style={{ paddingRight: "20px"}}>
                        <div className="block mb-[10px]">
                            <Typography className="text-12px text-[#232E3E] mb-[5px]">First Name:</Typography>
                            <input type="text" name="firstName" className="w-[100%] md:w-[100%] h-[35px] p-[10px] pl-[20px] text-[14px] text-[#232E3E]" />
                        </div>
                        <div className="block mb-[10px]">
                            <Typography className="text-12px text-[#232E3E] mb-[5px]">Address Line 1:</Typography>
                            <input type="text" name="adress1" className="w-[100%] md:w-[100%] h-[35px] p-[10px] pl-[20px] text-[14px] text-[#232E3E]" />
                        </div>

                        <div className="flex">
                            <div className="block mb-[10px] mr-[20px]">
                                <Typography className="text-12px text-[#232E3E] mb-[5px]">Country:</Typography>
                                <input type="text" name="country" className="w-[140px] md:w-[185px] h-[35px] p-[10px] pl-[20px] text-[14px] text-[#232E3E]" />
                            </div>

                            <div className="block mb-[10px]">
                                <Typography className="text-12px text-[#232E3E] mb-[5px]">State/Province/Region:</Typography>

                                <select name="state" className="w-[140px] md:w-[185px] h-[35px] pl-[20px] text-[14px] text-[#232E3E] bg-[white]">
                                    <option value="volvo">Mp</option>
                                    <option value="saab">Chattisgarh</option>
                                </select>
                            </div>
                        </div>

                    </Grid>
                    <Grid item md={6}>
                        <div className="block mb-[10px]">
                            <Typography className="text-12px text-[#232E3E] mb-[5px]">Last Name:</Typography>
                            <input type="text" name="lastName" className="w-[100%] md:w-[100%] h-[35px] p-[10px] pl-[20px] text-[14px] text-[#232E3E]" />
                        </div>
                        <div className="block mb-[10px]">
                            <Typography className="text-12px text-[#232E3E] mb-[5px]">Address Line 2:</Typography>
                            <input type="text" name="adress2" className="w-[100%] md:w-[100%] h-[35px] p-[10px] pl-[20px] text-[14px] text-[#232E3E]" />
                        </div>

                        <div className="flex">
                            <div className="block mb-[10px] mr-[20px]">
                                <Typography className="text-12px text-[#232E3E] mb-[5px]">City:</Typography>
                                <input type="text" name="city" className="w-[140px] md:w-[185px] h-[35px] p-[10px] pl-[20px] text-[14px] text-[#232E3E]" />
                            </div>

                            <div className="block mb-[10px]">
                                <Typography className="text-12px text-[#232E3E] mb-[5px]">Zip Code:</Typography>
                                <input type="text" name="zipCode" className="w-[140px] md:w-[195px] h-[35px] p-[10px] pl-[20px] text-[14px] text-[#232E3E]" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div className="mt-[30px]">
                    <Button className="text-btnTextColor  bg-headerBtnColor float-right text-12px w-107px h-30px p-[10px]">Edit Details</Button>
                </div>
            </form>
        </Grid>
    )
}

export default BillingAddress