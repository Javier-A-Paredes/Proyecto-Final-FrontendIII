import React from 'react'
import { Box } from '@mui/system'
import { AppBar, Toolbar } from '@mui/material'
const Footer = () => {
  return (
    <footer>
      <Toolbar>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
        <img src="./images/DH.png" alt='DH-logo' />
        <Box display={"flex"}>
          <img src="./images/ico-facebook.png" alt="Facebook"/>
          <img src="./images/ico-instagram.png" alt="Instagram"/>
          <img src="./images/ico-tiktok.png" alt="TikTok"/>
          <img src="./images/ico-whatsapp.png" alt="Whatsapp"/>
        </Box>
      </Box>
      </Toolbar>
    </footer>
  )
}

export default Footer
