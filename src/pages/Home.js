
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar01';
import Carrusel from '../components/carousel01';
import React, { useState } from "react";
import PayPal from '../paypal.js'
import "../App.css";
import {Tienda} from "../api";
import Suculentas from './Api2';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function Home() {
    return (
      <div>
        
  
        
      <Carrusel/>
      </div>
    );
  }
  
  export default Home;
  