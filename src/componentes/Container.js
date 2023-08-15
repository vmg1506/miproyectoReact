import React, { useEffect, useState } from 'react'
import Presentacional from './Presentacional';


//PATRON DE DISEÑO CONTAINER/PRESENTACIONAL

//Container: es un componente que se encarga de la logica fuerte (logica de negocio)
//almacenamiento de informacion, etc. y de pasarle los datos al componente presentacional.


function Container() {
const [data, setData] = useState([])

//EFECTOS: Un HOOK para hacer pedidos a una API de maneracontrolada
// Quiero ejecutar algo en el componente (ej: un pedido a la API) pero una sola vez
//useEffect(funcion, array)
useEffect(()=>{

  getProductos()

}, []);

const getProductos = () => {


const resultado_del_fetch = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))

console.log(resultado_del_fetch)
    /* console.log("Arranca el pedido de la API")

    setTimeout(() => {

          console.log("Termina el pedido de la API")

          let data = [{id:1, nombre: "victor"}, {id:2, nombre: "valentina"},{id:3, nombre: "ana"}]

          setData(data)

    }, 3000); */



}
console.log(data)
return(
    <Presentacional data={data}/>
);
  
}

export default Container