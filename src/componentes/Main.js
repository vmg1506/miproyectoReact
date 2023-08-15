import React from "react";
import { useState } from "react";
import Form from '../componentes/Form';
import Container from "./Container";




function Main() {
    const [dark, setShow] = useState(false)
    const [] = useState("");
    let [nombreReactivo, cambiar] = useState("Daniela") //EL SEGUNDO VALOR DEL ARREGLO ES EL NOMBRE DEL ESTADO, QUE ESTA ADENTRO DE LA ACCION A REALIZAR
    let nombreNoReactivo = "Daniela"


    const open = () => {
        setShow(!dark)
    }

    const cambiarValores = () => {
        console.log("cambiar valores")
        cambiar("Valentina")
    }

    const devolverValor = () => {
        cambiar("Daniela")
    }


    return (

        //TRULY Y FALSY
        <main id="contendor-main" className={dark ? "p-2 grow dark bg-slate-600 text-white" : "p-2 grow light bg-white"}>
            <p>{nombreNoReactivo}</p>
            <p>{nombreReactivo}</p>
            <button onClick={cambiarValores}>Cambiar valores</button>
            <button onClick={devolverValor}>Devolver Valor</button>
            <button onClick={ open }>Toggle Menu Dark/Light</button>
            <hr />
            <Form />
            <Container />
        </main>
    );
    /* if(show){
        return(
            <main className="p-2 grow">
                <button onClick={ open } className="border p-1 rounded">Toogle Menu</button>
            </main>
        );
      
    }else {
        return(
            <main className="p-2 grow">
    
                <button onClick={ open } className="border p-1 rounded justify-center">Toogle Menu</button>
                <ul>
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Contacto </li>
                </ul>
    
            </main>
        );
    } */
}
    
    


export default Main;