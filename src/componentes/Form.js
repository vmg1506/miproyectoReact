import React from "react";
import { useRef } from "react";

function Form() {
    //tecnica 1 para obtener el valor de un input, por el objeto input
    //tecnica 2: document.query.selector
    //tecnica 3: HOOK useRef()
    
    const nombreRef = useRef(null) 
    const apellidoRef = useRef(null) 

    const handleClick = () => {
        console.log(nombreRef.current.value)
        console.log(apellidoRef.current.value)

    }

    

  return (
        <div>
            <input ref={nombreRef} type="text" placeholder="Ej. nombre" id="nombre" />
            <input ref={apellidoRef} type="text" placeholder="Ej. apellido" id="apellido" />
            <button onClick={handleClick}>Ver valor</button>
        </div>
  );
}

export default Form