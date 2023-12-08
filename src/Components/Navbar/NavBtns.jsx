import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import Drop from './FlagSelect/Drop'

const NavBtns = (props) => {
  

  return (
    <div className="navbar-btns">
      {/* <Drop/> */}
      <Link to="/signup" className="nav-signup-btn" onClick={()=>{props.setShowNav(false)}} >Sign up</Link>
      <Link to="/login" className="nav-login-btn" onClick={()=>{props.setShowNav(false)}} >Log in</Link>
     
    </div>
  )
}

export default NavBtns