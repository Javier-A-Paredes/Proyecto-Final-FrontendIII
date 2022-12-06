import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterNav from '../src/Components/FooterNav'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FooterNav/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
