import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./assets/vendors/base/vendors.bundle.css";
// import "./assets/demo/default/base/style.bundle.css";
// import "./assets/vendors/custom/fullcalendar/fullcalendar.bundle.css";
// import "../node_modules/jquery/dist/jquery.min.js";

// import '../assets/vendors/base/vendors.bundle.js';
// import '../src/assets/vendors/base/vendors.bundle.js';
// import '../assets/demo/default/base/scripts.bundle.js';
// import '../assets/app/js/dashboard.js';
// import '../assets/vendors/custom/fullcalendar/fullcalendar.bundle.js';

// /home/shubham/Downloads/ReactThemeC/reactT/reactt/src/assets/demo/default/base/scripts.bundle.js
// import '../src/assets/demo/default/base/scripts.bundle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <App />
 </BrowserRouter>

);


// reportWebVitals();
