import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterNav from '../src/Components/FooterNav'
import Home from './Routes/Home';
import Favs from './Routes/Favs'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FooterNav/>}>
          <Route path='/home' element={<Home/>} />
          <Route path='/favs' element={<Favs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
