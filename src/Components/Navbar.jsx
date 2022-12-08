import React from 'react'
import { useContext } from 'react'
import {ContextGlobal} from './utils/global.context'
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate, Link } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal);

  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{padding: "10px 50px"}} >
        <Toolbar>
          <img src="./DH.ico" alt="DH icono" />
          
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to='/'>
                Odonto
              </Link>
            </Typography>
          
          
          <Button onClick={()=> navigate("/")} color="inherit">Home</Button>
          <Button onClick={()=> navigate("/contact")} color="inherit">Contact</Button>
          <Button onClick={()=> navigate("/favs")} color="inherit">Favs</Button>
          
          <IconButton
            onClick={()=> dispatch({type: "theme"})}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }
          }
          >
            {state.prefersDark?<DarkModeIcon/>:<LightModeIcon/>}
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar