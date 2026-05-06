import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./utils/routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";


const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
        {/* Navbar */}
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
