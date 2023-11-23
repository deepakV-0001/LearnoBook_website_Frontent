import React from 'react'
import '../Contact/Contact.css'
import img from './contact-img.png'
import { Link} from 'react-router-dom'
const Contact = () => {
    return (
        <div className='contact-container'>
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
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Message' />
                </div>
                <button className='contact-form-btn'>Send</button>
            </div>
            <div className="white-background"></div>
        </div>
    )
}

export default Contact