import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"500px"}>

        <Typography variant='h2' margin={"50px"}>
            No se encontro la pagina
        </Typography>

        <Button variant="contained" onClick={()=>navigate("/")}>Volver a home</Button>

    </Box>
  )
}

export default NotFound