import React from 'react'
import { Box } from '@mui/system'
import {Facebook, Instagram, Twitter, WhatsApp} from '@mui/icons-material';
import { Typography } from '@mui/material';



const Footer = () => {

  

  return (
    <footer>
      <Box display={"flex"} justifyContent="center" alignItems={"center"} width="100%" height={"50px"} bgcolor="red">
        <Typography component={"a"} href={"#Navbar"} variant='subtitle1'color={"primary.contrastText"} fontSize="20px"p>Volta para o topo</Typography>
      </Box>

      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} bgcolor="primary.main" width={"100%"} height={"80px"} padding={"20px 40px"} overflow={"hidden"}>
        <img className='footer-logo' src="./images/DH.png" alt='DH-logo' />
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"300px"} height={"50px"}>
          <Facebook fontSize='large'/>
          <Instagram fontSize='large'/>
          <Twitter fontSize='large'/>
          <WhatsApp fontSize='large'/>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
