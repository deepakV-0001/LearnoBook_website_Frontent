import React from "react";
import { Link } from "react-router-dom";
import img from './header-img.png'
import '../Header/Header.css'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import img2 from './Old landing.png'
import img3 from './Group 29.png'



const Header = () => {
    return (
        <div className="header-container-upper">
            <div className="header-main-container">
                <div className="header-text-content">
                    <h1>Learning <span className="easier">Easier,<br /></span>
                        Anytime and
                        Anywhere
                    </h1>
                    <p>Welcome to the power of digital note taking with <b>LearnoBook</b>,
                        The <b>note taking app</b> & <b>PDF reader</b> for the smart and swift people.</p>
                    <Link to="">Join For Free</Link>            </div>
                <div className="header-img">
                    <img src={img} alt="img" />
                    <div className="header-social-icons">
                        <FaFacebook />
                        <FaTwitter />
                        <IoLogoYoutube />
                        <RiInstagramFill />
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                or download the app
                <span> <img src={img2} /> <img src={img3} /></span>
            </div>
        </div>
    )
}
export default Header;