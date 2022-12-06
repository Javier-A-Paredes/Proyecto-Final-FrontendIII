import React from 'react'
import { Box } from '@mui/system'
const Footer = () => {

  

  return (
    <footer>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} bgcolor="primary.main" width={"100%"} height={"80px"} padding={"20px 40px"} overflow={"hidden"}>
        <img className='footer-logo' src="./images/DH.png" alt='DH-logo' />
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"300px"} height={"50px"}>
          <img src="./images/ico-facebook.png" alt="Facebook"/>
          <img src="./images/ico-instagram.png" alt="Instagram"/>
          <img src="./images/ico-tiktok.png" alt="TikTok"/>
          <img src="./images/ico-whatsapp.png" alt="Whatsapp"/>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
