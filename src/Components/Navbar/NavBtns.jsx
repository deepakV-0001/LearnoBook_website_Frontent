import React from 'react'
import '../Navbar/Navbar.css'
import flag from '../Navbar/flag-img.png'
import { Link } from 'react-router-dom'
import Drop from './FlagSelect/Drop'

const NavBtns = () => {
  return (
    <div className="navbar-btns">
   <Drop/>
    <Link to="/signup" className="nav-signup-btn" >Sign up</Link>
    <Link to="/login" className="nav-login-btn" >Log in</Link>
  </div>
  )
}

export default NavBtns