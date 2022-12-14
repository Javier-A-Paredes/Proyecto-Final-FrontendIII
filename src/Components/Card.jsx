import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from "react";
import { useEffect } from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ContextGlobal } from './utils/global.context';

const Cards = ({ name, username, id }) => {
  const navegar = useNavigate()
  const { state, dispatch } = useContext(ContextGlobal)

  const addFav = (agregado) => {
    const favoritos = localStorage.getItem('favoritos');  
    if (favoritos){
      let favoritosParse = JSON.parse(favoritos);
      const dentistasFiltrados =  favoritosParse.filter(dentista => dentista !== agregado);
      const existe = dentistasFiltrados.length !== favoritosParse.length;

      existe ? favoritosParse = dentistasFiltrados : favoritosParse.push(agregado)
      localStorage.setItem('favoritos', JSON.stringify(favoritosParse))      
      
      dispatch({type:"favs", payload:favoritosParse} )
      // setFavoriteados(favoritosParse)
    } else {
      localStorage.setItem('favoritos', JSON.stringify([agregado]))
      dispatch({type:"favs", payload:[ agregado ]} )
      // setFavoriteados([agregado])
    }
  }

  useEffect(() => {
    cargarIconoBoton()    
  }, [state.favs])
  
  const cargarIconoBoton = () =>{    
    const favs = JSON.parse(localStorage.getItem('favoritos'))    
    if (favs !== null){
      return favs.includes(id) ? <StarIcon color="secondary"/> : <StarBorderIcon  color="secondary"/>
    } else {
      return <StarBorderIcon color="secondary"/>
    }    
  }  
  
  return (
    
    /* En cada card deberan mostrar en name - username y el id */
    /* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */
    /* Ademas deberan integrar la logica para guardar cada Card en el localStorage */

    <Card sx={{ maxWidth: 240 }} role={`odonto-card`}>
      <CardMedia    
        className='imagen-card'    
        component="img"
        height="240"
        image="./images/doctor.jpg"
        alt="doctor"
        onClick={() => navegar(`/details/${id}`)}
      />
      <CardContent >
        <Link to={`/details/${id}`}>
          <Typography role="card-name" gutterBottom variant="h5" noWrap component="div" color="secondary.contrastText" textAlign={'center'}>
            {name}
          </Typography>
        </Link>
        <Typography variant="body2" noWrap color="text.secondary" textAlign={'center'}>
          {username}            
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}} >       
        <Button onClick={() => addFav(id)} size="small"> { cargarIconoBoton() }
         </Button>          
      </CardActions>
    </Card>
  );
};

export default Cards;
