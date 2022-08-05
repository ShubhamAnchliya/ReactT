
import './App.css';
import React from 'react';
// import { Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import SubHeader from './Components/SubHeader/SubHeader';
import MainRoutes from './Components/MainRoutes/MainRoutes';
import { Outlet, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import EmployeeData from './Pages/EmployeeData/EmployeeData';
import QuickSidebar from './Components/QuickSidebar/QuickSidebar';
import AddRecord from './Pages/AddRecord/AddRecord';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"





function App() {
  return (

    <>

    {/* <Routes> */}
   

        <div>

          <div className="m-grid m-grid--hor m-grid--root m-page">

          

            <Header/>

            <div className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>

              <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn"><i className="la la-close"></i></button>

              <Sidebar/>

         

              <div className='m-grid__item m-grid__item--fluid m-wrapper'>

              <SubHeader/>
             

                <div className='m-content'>


                  {/* <MainRoutes/> */}


                  <Routes>

                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/about" element={<About/>} />

                    <Route path="/employeedata" element={<EmployeeData/>} >

                      <Route path="addrecord" element={<AddRecord/>} />

                    </Route>

                    <Route path="/*" element={<ErrorPage/>} />

                    

                  </Routes>




                </div>
         

                
              </div>
           
            </div>

            <Footer/>
        
          </div>

          {/* <QuickSidebar/> */}

        </div>

    {/* </Routes> */}

    

    </>

  );
}

export default App;






