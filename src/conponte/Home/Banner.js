import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { color } from '@mui/system';
import { style } from '@mui/system/Stack/createStack';
import React from 'react';

const BannerWrapper = styled(Box)(({theme})=>({
   height:'70vh',
   backgroundColor:'#ccc',
   padding:'20px',
   margin:'4rem 0',
   // clipPath: 'polygon(0, 100%, 100% 50%, 50% 100%, 0 50%)'
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center'

}))




const Banner = () => {
   return (
      <BannerWrapper>
         <Box sx={{width:'50%', width:{
         xs:'block',
         sm:'block',
         
      }}}>
            <Typography sx={{
               fontSize:'2.5rem',
               fontWeight:'bold',
               lineHeight:'1.2',
               }}>
               Lorem ipsum dolor sit amet
            </Typography>
            <Typography sx={{margin:'20px 0'}}>
               Lorem ipsum dolor sit amet, consectetur adipisicing
               Lorem ipsum dolor sit amet, consectetur adipisicing
            </Typography>
            <Button sx={{
               width:'50%',bgcolor:'#bfbf',
              
            }}>Hier me</Button>
         </Box>
         <Box sx={{width:'50%',
      display:{
         xs:'none',
         sm:'none',
         md:'block'
      }
      }}>
            <img style={{width:'100%',height:'auto'}} src="https://codevoweb.com/wp-content/uploads/2022/04/React-Material-UI-and-React-Hook-Form-Login-and-Signup-Forms.webp" alt="" />
         </Box>
      </BannerWrapper>
   );

};

export default Banner;