import React from 'react'
import '../Navbar/Navbar.css'
import flag from '../Navbar/flag-img.png'
import { Link } from 'react-router-dom'

const NavBtns = () => {
  return (
    <div className="navbar-btns">
    <select>
      <option value="australia"><img src={flag} /></option>
    </select>
    <Link to="/signup" className="nav-signup-btn" >Sign up</Link>
    <Link to="/signup" className="nav-login-btn" >Log in</Link>
  </div>
  )
}

export default NavBtns