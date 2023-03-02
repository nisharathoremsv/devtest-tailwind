import { Grid, Typography } from '@mui/material'
import React from 'react'
import cardLogo from './image/mastercard-26161.png'

const CardDetail = () => {
    const cardInfo = [
        { img: cardLogo, number: '**** **** **** 5967', expDate: 'Expires 09/27' },
        { img: cardLogo, number: '**** **** **** 5967', expDate: 'Expires 09/27' }
    ]

    return (
        <Grid container className='bg-[#F5F6F8] h-[220px] p-[20px]'>
            <Typography className='text-18px text-[#232E3E]'>Bank Account</Typography>
            <Grid container>
                {cardInfo.map((item) => {
                    return (
                        <Grid item>
                            <div className='bg-white flex w-[272px] h-[70px] pl-[20px] mt-[10px] mr-[20px]'>
                                <img src={item.img} alt='card' className='pt-[3%]' />
                                <div className='content pl-[20px] pt-[8%]'>
                                    <Typography className='text-16px text-[#232E3E]' >{item.number}</Typography>
                                    <Typography className='text-[#C7C7C7] text-12px' style={{ marginTop: "-10px" }}>{item.expDate}</Typography>
                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default CardDetail