import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import { IconContext } from 'react-icons/lib';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../../images/Logo-FIX.webp';
import {Button} from './utility/Button'
import '../style/Navbar.css'

function Navbar() {
  const [click, setClick]= useState(false)
  const [button, setButton] = useState(true);
  const [navbar,setNavbar] = useState(true)
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
          <img className='navbar-img' src={logo} alt={"logo"}/>
          <h3 className="navbar-title">GMCO LIVE</h3>
          
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes/> :<FaBars/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/'className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>

          <li className='nav-item'>
            <HLink to='/#buyGuide'className='nav-links' onClick={closeMobileMenu}>Buying Guide</HLink>
          </li>

          <li className='nav-item'>
            <Link to='/TermCondition'className='nav-links' onClick={closeMobileMenu}>Terms & Conditions</Link>
          </li>
          <li className="nav-btn">
            {button ? (
                  <Link to='/*' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Buy Ticket</Button>
                  </Link>
                ) : (
                  <Link to='/*' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Buy Ticket
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