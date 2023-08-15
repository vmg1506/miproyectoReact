import REACT from 'react';
import imagen from'../imagenes/img_1.jpg';
import { useState } from 'react';



 /*    let contador = 0
    const btn = document.querySelector('button');
    btn.addEventListener('click', miCallback)


    function miCallback() {
        contador++;
        
    }
 */





function Contador () {

    function nombreEnMayuscula(){
        return nombre.toUpperCase()
    }

    //HOOKS 

    const [contador, setContador] = useState(0);  //se definie el HOOK con su variable y la funcion (accion) y se llama el useState() de react
    let nombre = "victor";

    
    //ACCIONES QUE REALIZARA EL HOOK
    const sumar = () => { 
        setContador(contador + 1);
    }
    const restar = () => { 
        setContador(contador - 1);
    }
    const resetear = () => { 
        setContador(0);
    }

   
    

    return (
        //VISTA
        <main className='contenedor-titulo p-2 grow'>
            <h2>Home</h2>
            <p>Bienvenido {nombreEnMayuscula()}</p>
            <img src={imagen} alt="" />
            <p>Contador: { contador }</p>
            <button onClick={sumar}>SUMAR</button> {/* EN LA VISTA SE HACE LLAMADO DE LAS ACCIONES DEL HOOK Y ESTAN SE VISUALIZARAN EN LA PAGINA */}
            <button onClick={restar}>RESTAR</button>
            <button onClick={resetear}>RESETEAR</button>
            
        </main>

    );
}
export default Contador;