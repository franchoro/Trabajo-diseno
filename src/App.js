import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar01';
import Carrusel from './components/carousel01';
import alertas from './components/alerts01';
import alertaslink from './alerts02';
import Carta1 from './cards01';
import Carta2 from './cards02';
import Carta3 from "./cards03";
import React, { useState } from "react";
import PayPal from './paypal.js'
import "./App.css";
import Disfraces from './pages/Api2';


function App() {
  
  const [checkout, setCheckout] = useState(false)

  return(

    <>
  <NavBar/>

  <Carrusel/>



  <Disfraces/>

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
