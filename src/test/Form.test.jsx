// import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Form from '../Components/Form'
// import React from "react";
import { screen, render, waitFor, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as yup from "yup";

describe('inputs del form', () => {
    
    test("Deberian renderizar los campos de nombre, email y un boton de submit", () => {
        render(<Form />);      
        expect(screen.getByRole("textbox", { name: /Full Name/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /Email/i })).toBeInTheDocument();   
        expect(screen.getByRole("button", { name: /Send/i })).toBeInTheDocument();                       
    }) 
    
    
    const mockSubmit = jest.fn();
    test("Deberia manejarse el submit del form", async () => {
        let validationSchema = yup.object().shape({
            nombre: yup.string().required("Debe ingresar un nombre").min(5,"El nombre completo debe tener al menos 5 letras"),
            email: yup.string().required("Debe ingresar un email").email("Ingrese un email valido")
          })
        const WithMaterialUI = () => {
            const formik = useFormik({
              initialValues: {
                nombre: "Full Name",
                email: "Email"
              },
              validationSchema: validationSchema,
              onSubmit: (values) => {
                swal.fire(`Gracias ${values.nombre}, te contactaremos en breve via email.`);
              }
            });
        const { getByTestId } = render(<WithMaterialUI />);
     

        const email = getByTestId("email");
        const nombre = getByTestId("nombre");
    
        act(() => {
          fireEvent.change(email, { target: { value: "abc@gmail.com" } });
          fireEvent.change(nombre, {target: {value: "Fenixkai"} })
        });
    
        act(() => {
          fireEvent.submit(form);
        });
    
        waitFor(() => {
          expect(mockSubmit).toHaveBeenCalled();
        });
        } 
    });  
})


