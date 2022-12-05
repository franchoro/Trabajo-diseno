import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar01';
import Carrusel from './components/carousel01';
import Alertas from './components/alerts01';
import alertaslink from './alerts02';
import React, { useState } from "react";
import PayPal from './paypal.js'
import "./App.css";
import Disfraces from './pages/Api2';
import Caja from "./components/caja"
import Carta1 from "./cards01";



function App() {
  
  const [checkout, setCheckout] = useState(false)

  return(

    <>
  <Alertas/>
  <NavBar/>

  <Carrusel/>



  <Disfraces/>

  

  <Caja/>

  <p>Muchas gracias por su compra! para proseguir, elija su forma de pago:</p>
  <div className="App">


      {checkout ? (
        <PayPal />
      ) :(
      <button onClick={()=>{setCheckout(true);
      }}
      >
         Checkout
         </button>
      )}
    </div>


    







    </>
    
  );
}


export default App;
