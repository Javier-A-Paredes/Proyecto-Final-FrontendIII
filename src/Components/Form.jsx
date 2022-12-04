import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

const Formulario = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  
  //validacion con yup
  let schema = yup.object().shape({
    nombre: yup.string().required("Debe ingresar un nombre").min(5,"El nombre completo debe tener al menos 5 letras"),
    email: yup.string().required("Debe ingresar un email").email("Ingrese un email valido")
  })
  
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',      
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField           
          sx={{margin:"5px"}}            
          id="outlined-required"
          label="Full Name"
          name="nombre"
          defaultValue= {formik.values.nombre}
          onChange={formik.handleChange}          
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}
        />      
        <TextField
          sx={{margin:"5px"}}            
          id="outlined-required"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />         
        <Button color="primary" variant="contained" fullWidth type="submit">
          Send
        </Button>
      </form>
    </div>
  );
  
};

export default Formulario;
