import {useEffect ,useMemo,useReducer, useState } from "react";
import { createContext} from "react";
import axios from "axios";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

export const ContextGlobal = createContext();

const reducerFunction = (state, {type}) =>{

  switch (type) {
    case false:
      return {...state, prefersDark: true}
    case true:
      return {...state, prefersDark: false}
    default:
      return {...state, prefersDark: false};
  }
}

export const ContextProvider = ({ children }) => {
  const initialState = {prefersDark: false, data: []}
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const theme = createTheme({
    palette:{
      mode: (state.prefersDark? 'dark':'light'), 
      primary:{
        main: (state.prefersDark? grey[900]: blue[500])
      }, 
      secondary:{
        main: (state.prefersDark? grey[900]:red[400] )
      }
    }
  });

  const [odontoData, setOdontoData] = useState([]);

  const getData = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(
      res=> {
        setOdontoData(res.data);
      }
    )
  }
  useMemo(() => getData(), [])

  const store = {
    odontoData,
    state,
    dispatch
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
    </ThemeProvider>
  );
};
