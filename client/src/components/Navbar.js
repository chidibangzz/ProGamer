import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';
import SearchForm from './SearchForm';

//anchor tag
function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    //function is reversing the state so that i can click turning symbol into x
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='extra-navbar'>Free shipping on games over 35 dollars!!!!</nav>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick=
                        {closeMobileMenu}>
                        ViDeOgAmEr <i className='fas fa-gamepad' />
                    </Link>
     

      <li className='nav-item'>
          
          <SearchForm/>  
         
      </li>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>



                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Purchase games
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                               Sign-up
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Porfolio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Search Games</
                    Button>}
                </div>
            </nav>
        </>
    )
}
export default Navbar
