import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useEffect } from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Cards = ({ name, username, id }) => {
  const [favoriteados, setFavoriteados] = useState([])
  
  const addFav = (agregado) => {
    const favoritos = localStorage.getItem('favoritos');  
    if (favoritos){
      let favoritosParse = JSON.parse(favoritos);
      const dentistasFiltrados =  favoritosParse.filter(dentista => dentista !== agregado);
      const existe = dentistasFiltrados.length !== favoritosParse.length;

      existe ? favoritosParse = dentistasFiltrados : favoritosParse.push(agregado)
      localStorage.setItem('favoritos', JSON.stringify(favoritosParse))      
      
      setFavoriteados(favoritosParse)
    } else {
      localStorage.setItem('favoritos', JSON.stringify([agregado]))
      setFavoriteados([agregado])
    }
  }

  useEffect(() => {
    cargarIconoBoton()
    console.log(favoriteados)
  }, [favoriteados])
  
  // const [ arrayFavs, setArrayFavs ] = useState(localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [])
  
  // useEffect((id) => {      
  //   const favs = localStorage.getItem('favoritos')    
  //   if (favs !== null){      
  //     setArrayFavs(arrayFavs => JSON.parse(favs))           
  //   } else {
  //     setArrayFavs(arrayFavs => [...arrayFavs, id])
  //   }
  // }, [])  

  const cargarIconoBoton = () =>{    
    const favs = JSON.parse(localStorage.getItem('favoritos'))    
    if (favs !== null){
      return favs.includes(id) ? <StarIcon /> : <StarBorderIcon />
    } else {
      return <StarBorderIcon />
    }    
  }

  // useEffect(() => {
  //   cargarIconoBoton()    
  // }, [arrayFavs])

  // const addFav = (id) => {        
  //   // Aqui iria la logica para agregar la Card en el localStorage
  //   if(arrayFavs.includes(id)){      
  //     setArrayFavs(arrayFavs => arrayFavs.filter(fav => fav !== id))            
  //   } else if(!arrayFavs.includes(id)){      
  //     setArrayFavs(arrayFavs => [...arrayFavs, id])            
  //   }
  //   localStorage.setItem('favoritos', JSON.stringify(arrayFavs))
  // }
  
  return (
    
    /* En cada card deberan mostrar en name - username y el id */
    /* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */
    /* Ademas deberan integrar la logica para guardar cada Card en el localStorage */

    <Card sx={{ maxWidth: 240 }} >
      <CardMedia        
        component="img"
        height="240"
        image="./images/doctor.jpg"
        alt="doctor"
      />
      <CardContent >
        <Link to={`/details/${id}`}>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
            {name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
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
