import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterNav from '../Components/FooterNav'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FooterNav/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter