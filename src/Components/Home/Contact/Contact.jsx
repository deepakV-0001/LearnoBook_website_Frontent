import React, { useState } from 'react'
import '../Contact/Contact.css'
import img from '../../Assets/Images/contact-img.png'
import { Link } from 'react-router-dom'
const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className='contact-container'>
            <div className="contact-parent-cont">
                <div className="contact-img">
                    <span><img src={img} alt="" />
                        <h3>Stay Connected For Updates</h3>
                    </span>
                    <div className="email-col">
                        <input type="email" placeholder='Email' />
                        <Link to="">Subscribe</Link>
                    </div>
                </div>
                <div className="contact-form-container">
                    <h2>Questions ? Ask Away.</h2>
                    <div className="form-fields">
                    
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email' />
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
                    
                    </div>

                    <button type='submit' className='contact-form-btn'>Send</button>
                </div>
                
            </div>
            <div className="white-background"></div>
        </div>
    )
}

export default Contact