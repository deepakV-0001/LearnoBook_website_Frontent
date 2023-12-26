import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'
import logo from '../Assets/Images/logo.png'
import app1 from '../Assets/Images/Google_play.png'
import app2 from '../Assets/Images/App_store.png'
import SocialIcons from '../SocialIcons/SocialIcons'


const Footer = () => {
    const footerData = [
        {
            title: "About",
            text1: "Company",
            text2: "Careers",
            text3: "Policy",
            text4: "",
            text5: "",
        },
        {
            title: "Education",
            text1: "At School",
            text2: "At Colleges",
            text3: "At Coachings Centers",
            text4: "Book Publishers",
            text5: "Library",
        },
        {
            title: "Resources",
            text1: "Study with LearnoBook",
            text2: "Blog",
            text3: "Help Center",
            text4: "Shop",
            text5: "Safety center",
        },
        {
            title: "Support",
            text1: "Terms and Conditions",
            text2: "Privacy Policy",
            text3: "US Privacy Laws",
            text4: "Children’s Privacy Policy",
            text5: "Inclusion and Accessibility policy",
        },
    ]
    return (
        <div className="footer-outbox">
            <div className='footer-container'>
                <div className="footer-socials">
                    <span><img src={logo} alt="" /></span>
                    <div className="playstore-img">
                        <h3>Get the app:</h3>
                        <span><img src={app1} alt="" /><img src={app2} alt="" /></span>
                    </div>
                    <h3>Follow us:</h3>
                    <span className="social-icons">
                       <SocialIcons/>
                    </span>
                </div>
                <div className="footer-text-content">
                    {
                        footerData.map((item) => (
                            <div className="footer-text-box">
                                <h3>{item.title}</h3>
                                <div className="footer-box-res">
                                    <Link>{item.text1}</Link>
                                    <Link>{item.text2}</Link>
                                    <Link>{item.text3}</Link>
                                    <Link>{item.text4}</Link>
                                    <Link>{item.text5}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="footer-copy">Copyright @ 2023 All rights reserved.</div>
        </div>
    )
}

export default Footer