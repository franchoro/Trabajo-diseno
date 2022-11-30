import React from "react";


const api_url = 'https://txatbbdemdinvwm.form.io/listadodecactusi/submission';
    
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const producto0 = data[0].data.nombreProducto;
  const precio0 = data[0].data.precioProducto;
  const descripcion0 = data[0].data.descripcion;

  document.getElementById("nombre_producto0").textContent = producto0;
  document.getElementById("precio_producto0").textContent = precio0;
  document.getElementById("descripcion0").textContent = descripcion0;


}

getISS();

function Tienda(){
    return(  
    <body>

    <span id= "nombre_producto0"></span>
    <span id= "precio_producto0"></span>
    <span id="descripcion0"> </span>

    </body>
    )

}

export {Tienda};