import React, { useEffect, useState } from 'react'
import '../Login/Login.css'
import logo from '../../Navbar/logo.png'
import google from '../SignUp/google.png'
import face from '../SignUp/face.png'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // if (email) {
  //   localStorage.setItem("users", JSON.stringify({email,password}));
  //   navigate("/");
  // } else {
  //   alert("please enter correct detail");
  // }

  // useEffect(() => {
  //   const auth = localStorage.getItem('users');
  //   if (auth) {
  //     navigate('/');
  //   }
  // });

  return (
    <div className='login-container'>
    
      <div className="login-content">
        <div className="login-text-content">
          <h1>Welcome <span>Back!</span></h1>
          <p>Welcome to the power of digital note taking. </p>
        </div>
        <div className="login-form">
          <h2>Log In</h2>
          <div className="login-form-fields">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <li><span><input type="checkbox" defaultChecked />Remember Me</span> <Link>Forget Password?</Link></li>
            <Link className='log-btn' to="">Log In</Link>
          </div>
          <div className="login-btm">
            <p className='or'>Or</p>
            <li><img src={google} alt="" /><Link >Log In With Google</Link></li>
            <li><img src={face} alt="" /><Link >Log In With Facebook</Link></li>
          </div>
          <p className='move-to btm-sign'>Don’t Have An Account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login