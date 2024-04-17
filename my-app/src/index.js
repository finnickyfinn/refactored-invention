import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import Header from './Components/Header.js'
import Footer from './Components/Footer';
import BodyT from './Pages/BodyT';
import SkinCare from './Pages/SkinCare';
import SkinT from './Pages/SkinT';
import Wellness from './Pages/Wellness';




const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Header /> <App /> <Footer/> </>,
  },
  {
    path: '/Wellness',
    element: <> <Header /> <Wellness/> <Footer /> </>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
