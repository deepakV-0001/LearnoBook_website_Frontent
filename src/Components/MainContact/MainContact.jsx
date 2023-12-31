import React from 'react'
import '../MainContact/MainContact.css'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Contact from '../Home/Contact/Contact'
import main from '../Assets/Images/main_contact.png'
import { Link } from 'react-router-dom';


const MainContact = () => {
    return (
        <div className='main-contact-container'>
            <div className="main-contact-img-text">
                <div className="main-contact-text-container">
                    <h2>Contact Us</h2>
                    <p>Welcome to LearnoBook! We're here to assist you and answer any questions you may have. Please feel free to reach out to us using the contact information below.</p>
                    <img src={main} alt="" />
                </div>
               
            </div>
            <div className="main-contact-address-detail">
                <span className='main-contact-add'>
                    <BiSolidPhoneCall />
                   <p> Phone</p>
                    <Link>123 456 789</Link>
                </span>
                <span className='main-contact-add'>
                    <IoIosMail />
                  <p>  Email</p>
                    <Link>Mail@LearnoBook.com</Link>
                </span>
                <span>
                    <FaLocationDot />
                    <p>Location</p>
                    <Link>Lorem Ipsum</Link>
                </span>
            </div>
            <Contact />
        </div>
    )
}

export default MainContact