import React from 'react'
import '../Login/Login.css'
import logo from '../../Navbar/logo.png'
import google from '../SignUp/google.png'
import face from '../SignUp/face.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
      <span className="sign-logo">
        <img src={logo} alt="" />
      </span>
      <div className="login-content">
        <div className="login-text-content">
          <h1>Welcome <span>Back!</span></h1>
          <p>Welcome to the power of digital note taking. </p>
        </div>
        <div className="login-form">
          <h2>Log In</h2>
          <div className="login-form-fields">
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
            <li><span><input type="checkbox" defaultChecked />Remember Me</span> <Link>Forget Password?</Link></li>
            <Link className='log-btn' to="">Log In</Link>
          </div>
          <div className="login-btm">
            <p className='or'>Or</p>
            <li><img src={google} alt="" /><Link >Log In With Google</Link></li>
            <li><img src={face} alt="" /><Link >Log In With Facebook</Link></li>
          </div>
          <p className='move-to btm-sign'>Don’t Have An Account? <Link>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login