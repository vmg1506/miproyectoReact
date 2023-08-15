import REACT from 'react';
import Button from 'react-bootstrap/Button';
import NavLinks from './NavLinks';





function Header() {
    return (
        
        <header id='header' className='header flex justify-between py-4 px-2 bg-slate-800 text-white'>
            <h1></h1>
            <h1 className="text-2xl font-bold underline">Hello world!</h1>
            <NavLinks 
                    nombre='victor' 
                    edad= {33}
                    vive= {true}
            
            />
        </header>



    );
}

export default Header;