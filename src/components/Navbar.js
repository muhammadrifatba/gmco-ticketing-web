import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../images/Logo-FIX.png';
import { click } from '@testing-library/user-event/dist/click';
import {Button} from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick]= useState(false)
  const [button, setButton] = useState(true);
  const[navbar,setNavbar] = useState(true)
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
    window.addEventListener('resize', showButton);
    return() => 
    window.removeEventListener('resize', showButton)
    
  }, []);
  
  const changeBackground = () =>{
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
    else{
      setNavbar(false)
    }
 
  }

  window.addEventListener('scroll',changeBackground)
  
  
  
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className={navbar ? 'navbar-active' : 'navbar'}>
      <div className="navbar-container container">
        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          <img class='navbar-img' src={logo} alt={"logo"}/>
          GMCO LIVE
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes/> :<FaBars/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <li className='nav-item'>
            <Link to='/'className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li> */}

          <li className='nav-item'>
            <Link to='/1'className='nav-links' onClick={closeMobileMenu}>Buy Ticket</Link>
          </li>

          <li className='nav-item'>
            <Link to='/about-us'className='nav-links' onClick={closeMobileMenu}>About us</Link>
          </li>
          <li className="nav-btn">
            {button ? (
                  <Link to='/admin-login' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Admin Login</Button>
                  </Link>
                ) : (
                  <Link to='/admin-login' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Admin Login
                    </Button>
                  </Link>
                )}
            </li>
          

        </ul>
      </div>
    </div>
    </IconContext.Provider>
    </>
    
  )
}

export default Navbar