import React from 'react'
import '../SocialIcons/SocialIcons.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
    const iconData = [
        {
            icon: <FaFacebookF />,
            iconHead: "facebook",
            name: "Facebook",
        },
        {
            icon: <FaInstagram />,
            iconHead: "instagram",
            name: "Instagram",
        },
        {
            icon: <FaLinkedinIn />,
            iconHead: "linkedin",
            name: "Linkedin",
        },
        {
            icon: <FaTiktok />,
            iconHead: "tiktok",
            name: "Tiktok",
        },
        {
            icon: <FaTwitter />,
            iconHead: "twitter",
            name: "Twitter",
        },
    ]
    return (
        <div class="wrapper">
            {
                iconData.map((item) => (
                    <div class={`icon ${item.iconHead}`}>
                        <div class="tooltip">
                            {item.name}
                        </div>
                        <span><i>{item.icon}</i></span>
                    </div>
                ))
            }

        </div>
    )
}

export default SocialIcons