import React from 'react'
import '../SchoolBottom/SchoolBottom.css'

import frame from './botom-img.png'
import { Link } from 'react-router-dom'

const SchoolBottom = () => {
    return (
        <div className='school-btm-container'>
            <div className="bottom-child-cont">
                <h2>Get LearnoBook For School</h2>
                <img src={frame} alt="" />
                <p>LearnObook is not just a platform; it's a tool crafted to elevate the educational experience. Join us in redefining how students and teachers engage with their materials. Sign up today and embark on a journey of seamless learning and collaboration!</p>
                <Link className="join-btn">Join for Free</Link>
            </div>
        </div>
    )
}

export default SchoolBottom