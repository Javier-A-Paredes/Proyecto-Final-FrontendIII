import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, styled, Collapse, Box } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { red } from '@mui/material/colors'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
 

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Detail() {
  const [expanded, setExpanded] = useState(false);  
  const {id} = useParams()
  const [detalles, setDetalles] = useState({name:"", username:"", email:"", phone:"", website:"", companyName:"", companyCatchphrase:"", addressStreet:"", addressSuite: "", addressCity:"", addressZipcode:""})

  useEffect(()=>{    
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      setDetalles({name:res.data.name, username:res.data.username, email:res.data.email, phone:res.data.phone, website:res.data.website, companyName:res.data.company.name, companyCatchphrase:res.data.company.catchPhrase, addressStreet:res.data.address.street, addressSuite:res.data.address.suite, addressCity:res.data.address.city, addressZipcode:res.data.address.zipcode})      
    })
    .catch(err => console.log('algo'))
  }, [])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
        <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Card sx={{ maxWidth: 280 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {detalles.name[0]}
            </Avatar>
          }          
          title={detalles.name}
          subheader={detalles.username}
        />
        <CardMedia
          component="img"
          height="280"
          image="/images/doctor.jpg"
          alt="odontologo"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Phone: {detalles.phone} <br />          
            Website: {detalles.website} <br />
            Email: {detalles.email}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Company:</Typography>
            <Typography paragraph>            
              Catchphrase: {detalles.companyCatchphrase} <br />
              Name: {detalles.companyName}
            </Typography>
            <Typography paragraph>Address Info:</Typography>
            <Typography paragraph>
              City: {detalles.addressCity} <br />
              Street: {detalles.addressStreet} <br />
              Suite: {detalles.addressSuite} <br />
              Zip-code: {detalles.addressZipcode}
            </Typography>          
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export default Detail