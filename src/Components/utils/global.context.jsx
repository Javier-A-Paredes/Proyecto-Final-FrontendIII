import {useMemo,useReducer } from "react";
import { createContext} from "react";
import axios from "axios";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

export const ContextGlobal = createContext(undefined);

// a ver si funca

const reducerFunction = (state, action) =>{
  switch (action.type) {
    case "theme":
      return {...state, prefersDark: !state.prefersDark};
    case "data":
      return {...state, data: action.payload};
    case "favs":
      return{...state, favs: action.payload}
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const initialState = {prefersDark: false, data: [], favs: localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : []}
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const theme = createTheme({
    palette:{
      mode: (state.prefersDark? 'dark':'light'), 
      primary:{
        main: (state.prefersDark? grey[900]: blue[500]), 
        contrastText: (state.prefersDark? "#EEEEEE": "#000000")
      }, 
      secondary:{
        main: (state.prefersDark? blue[50]:blue[500] ), 
        contrastText: (state.prefersDark? "#EEEEEE": "#000000")
      }
    }
  });

  const getData = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(
      res=> {
        dispatch({type: "data" , payload: res.data});
      }
    )
  }
  useMemo(() => getData(), [])

  const store = {
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
