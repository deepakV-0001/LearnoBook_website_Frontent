import React from 'react'
import '../SignUp/SignUp.css'
import logo from '../../Navbar/logo.png'
import sign from './sign.png'
import { Link } from 'react-router-dom'
import google from './google.png'
import face from './face.png'

const SignUp = () => {
    return (
        <div className='signup-container'>
            {/* <span className="sign-logo">
                <img src={logo} alt="" />
            </span> */}
            <div className="signup-content">
                <div className="sign-head">
                    <h1>Welcome To <br /><span>LearnoBook</span></h1>
                    <p>Welcome to the power of digital note taking.Get Started For <b>FREE!</b></p>
                </div>
                <div className="sign-form">
                    <h2>Sign Up</h2>
                    <div className="sign-form-fields">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email Address' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <span><input type="checkbox" />Agree on Terms & Conditions</span>
                    </div>
                    <div className="sign-bottom">
                        <Link className='sign-btn'>Sign Up</Link>
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