import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterNav from '../src/Components/FooterNav'
import Home from './Routes/Home';
import Favs from './Routes/Favs'
import Detail from './Routes/Detail';
import Form from './Components/Form'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FooterNav/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/favs' element={<Favs />} />
          <Route path='/details/:id' element={<Detail />} />
          <Route path='/contact' element={<Form />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
