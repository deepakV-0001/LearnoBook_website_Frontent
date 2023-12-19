import React, { useEffect, useState } from 'react'
import '../SignUp/SignUp.css'
import logo from '../../Navbar/logo.png'
import sign from './sign.png'
import { Link, useNavigate } from 'react-router-dom'
import google from './google.png'
import face from './face.png'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('users');
        if(auth){
          navigate('/');
        }
      })
    
      const collectData = async () => {
          let data={name,email,};
         localStorage.setItem("users",JSON.stringify(data));
         navigate('/');
          }
    return (
        <div className='signup-container'>
            
            <div className="signup-content">
                <div className="sign-head">
                    <h1>Welcome To <br /><span>LearnoBook</span></h1>
                    <p>Welcome to the power of digital note taking.Get Started For <b>FREE!</b></p>
                </div>
                <div className="sign-form">
                    <h2>Sign Up</h2>
                    <div className="sign-form-fields">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <span><input type="checkbox" />Agree on Terms & Conditions</span>
                    </div>
                    <div className="sign-bottom">
                        <Link className='sign-btn' onClick={collectData} >Sign Up</Link>
                        <p className='or'>OR</p>
                        <span><Link><img src={face} alt="" /></Link><Link><img src={google} alt="" /></Link></span>
                        <p className='move-to'>Already Have An Account?<Link to="/login"> Log In</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp