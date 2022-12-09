import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const FooterNav = () => {
  return (
    <div>
        <Navbar/>
          <Box minHeight="100vh">
            <Outlet/>
          </Box>
        <Footer/>
    </div>
  )
}

export default FooterNav