import REACT from 'react'
import NavLinks from './NavLinks';
// {} => escape todo lo que este dentro de llaves simples es JAVASCRPT VANILLA

function Footer() {

    return (
        <>
            
            
            <footer className='text-center bg-slate-600 text-white'>
                <p>&copy; Copyrigth - Victor Manuel Grajales</p>
                <NavLinks />
            </footer>
            
        </>
        
    );
}

export default Footer;