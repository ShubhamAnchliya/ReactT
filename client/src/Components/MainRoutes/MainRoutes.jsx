import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../../Pages/About/About';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';

const MainRoutes = () => {
  return (
    <>
          <Routes>
                
                  <Route exact path="/" element={<Home/>} />
                  <Route exact path="/home" element={<Home/>} />
                  <Route exact path="/about" element={<About/>} />
                  <Route path="*" element={<ErrorPage/>} />

           </Routes>
    </>
  )
}

export default MainRoutes;