import Catalog from 'react-catalog-view';
import '../styles/Disfraces.css'

const api_url_ = 'https://tetudntagfnxubg.form.io/Disfraz/submission';

async function getISS_1() {
  const response_1 = await fetch(api_url_);
  const data_1 = await response_1.json();
  
  const producto0 = data_1[0].data.nombreDisfraz;
  const descripcion0 = data_1[0].data.descripcionDisfraz;
 
  document.getElementById("nombre_producto_0").textContent = producto0;
  document.getElementById("descripcion_0").textContent = descripcion0;

  const producto1 = data_1[1].data.nombreDisfraz;
  const descripcion1 = data_1[1].data.descripcionDisfraz;

  document.getElementById("nombre_producto_1").textContent = producto1;
  document.getElementById("descripcion_1").textContent = descripcion1;

  const producto2 = data_1[2].data.nombreDisfraz;
  const descripcion2 = data_1[2].data.descripcionDisfraz;
 
  document.getElementById("nombre_producto_2").textContent = producto2;
  document.getElementById("descripcion_2").textContent = descripcion2;

  const producto3 = data_1[3].data.nombreDisfraz;
  const descripcion3 = data_1[3].data.descripcionDisfraz;

  document.getElementById("nombre_producto_3").textContent = producto3;
  document.getElementById("descripcion_3").textContent = descripcion3;

  const producto4 = data_1[4].data.nombreDisfraz;
  const descripcion4 = data_1[4].data.descripcionDisfraz;
 
  document.getElementById("nombre_producto_4").textContent = producto4;
  document.getElementById("descripcion_4").textContent = descripcion4;

  const producto5 = data_1[5].data.nombreDisfraz;
  const descripcion5 = data_1[5].data.descripcionDisfraz;

  document.getElementById("nombre_producto_5").textContent = producto5;
  document.getElementById("descripcion_5").textContent = descripcion5;

}
getISS_1();

function Disfraces(){  
      let products = 
       [
         {
            id: 1,
            title: <span id= "nombre_producto_0"></span>,
            description:  <span id= "descripcion_0"></span>,
            price: "$39.990",
            discounted: "$24.990",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiELa4iFpY4UP-m7_3WHmDqXvCgZFZBjEJ6g&usqp=CAU",
         },
         {
            id: 2,
            title: <span id= "nombre_producto_1"></span>,
            description: <span id= "descripcion_1"></span>,
            price: "$129.990",
            discounted: "$99.990",
            image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1cb3e0225db59449/62c77b7d2690e0403141557b/IMG_7087.jpg?auto=webp&format=jpg&quality=100",
         },
         {
            id: 3,
            title: <span id= "nombre_producto_2"></span>,
            description:  <span id= "descripcion_2"></span>,
            price: "$11.990",
            image: "https://http2.mlstatic.com/D_NQ_NP_853451-MLC51753569064_092022-V.jpg",
         },
      ];
      let products_1 = 
       [
         {
            id: 1,
            title: <span id= "nombre_producto_3"></span>,
            description:  <span id= "descripcion_3"></span>,
            price: "$19.990",
            discounted: "$14.990",
            image: "https://images.unsplash.com/photo-1607871549309-5225845dc91b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhhbGxvd2VlbiUyMGNvc3R1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
         },
         {
            id: 2,
            title: <span id= "nombre_producto_4"></span>,
            description: <span id= "descripcion_4"></span>,
            price: "$59.990",
            image: "https://images.unsplash.com/photo-1605663864774-748f5f858a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGhhbGxvd2VlbiUyMGNvc3R1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
         },
         {
            id: 3,
            title: <span id= "nombre_producto_5"></span>,
            description: <span id= "descripcion_5"></span>,
            price: "$19.990",
            image: "https://images.unsplash.com/photo-1604168841053-91d655383dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbGxvd2VlbiUyMGNvc3R1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
         },
      ];

      

      const CONTENT_KEYS = 
      {             
         imgKey: "image",
         cardTitleKey: "title",
         cardDescriptionKey: "description",
         priceKey: "price",
         discountedPriceKey: "discounted",
      };
	
      return(
        <body>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Nuestros disfraces</h1><br></br>
        <Catalog className= 'catalogo'
           data = {products}		
           // Array of JSON Objects (required)
           contentKeys={CONTENT_KEYS}  
           // JSON Object defining the keys that will be 
           // used from the data array, keys should match. (required)
           cardSize="md"
           // Card sizes, sm, md and lg for small, medium  and large
           btnOneText="Ver más"
           // Enter text for action button one 
           // or pass empty string to hide.  
           btnTwoText="Comprar ahora"
           // Enter text for action button two 
           // or pass empty string to hide.
           btnOneHandler={(args, event, objectData)=>{
            // 'objectData' returns object data
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           btnTwoHandler={(args, event, row)=>{
            // 'objectData' returns object data
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           skeleton={0}
           // Any non zero number will override default cards
           // and will show that many skeleton cards.
        />
        <Catalog
           data = {products_1}		
           // Array of JSON Objects (required)
           contentKeys={CONTENT_KEYS}  
           // JSON Object defining the keys that will be 
           // used from the data array, keys should match. (required)
           cardSize="md"
           // Card sizes, sm, md and lg for small, medium  and large
           btnOneText="Ver más"
           // Enter text for action button one 
           // or pass empty string to hide.  
           btnTwoText="Comprar ahora"
           // Enter text for action button two 
           // or pass empty string to hide.
           btnOneHandler={(args, event, objectData)=>{
            // 'objectData' returns object data
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           btnTwoHandler={(args, event, row)=>{
            // 'objectData' returns object data
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           skeleton={0}
           // Any non zero number will override default cards
           // and will show that many skeleton cards.
        />
        </body>
      )
  }
export default Disfraces;