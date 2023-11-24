import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'
import logo from './logo.png'

import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import NavBtns from './NavBtns';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='main-container' >
      <div className="nav-logo">
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-side-menu'>
        <span className='hide-btn'><NavBtns/></span>
        <span className='navbar-hamp-menu'><BiMenuAltRight onClick={() => setShowNav(!showNav)} /></span>
      </div>

      {showNav && <div className="navbar-options">
        <Link to="/about">About</Link>
        <Link to="/about">For Education</Link>
        <Link to="/about">For Publishers</Link>
        <Link to="/about">Library</Link>
        <Link to="/about">Community</Link>
        <Link to="/about">Contact Us</Link>
        <Link className="respons-btn"> <NavBtns/></Link>
       
      </div>}
    </div>
  );
}

export default Navbar;
