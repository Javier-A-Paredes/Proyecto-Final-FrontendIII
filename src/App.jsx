import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import React from 'react'
import { useContext } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterNav from '../src/Components/FooterNav'
import { ContextGlobal } from './Components/utils/global.context'


function App() {
  const {state} = useContext(ContextGlobal)

  const theme = createTheme({
    palette:{
      mode: (state.prefersDark? 'dark':'light')
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FooterNav/>}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
