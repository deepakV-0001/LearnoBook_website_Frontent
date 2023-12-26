import React from 'react'
import '../CollegeHeader/CollegeHeader.css'
import EducationBtns from '../../Education_btns/EducationBtns'
import img1 from '../../../Assets/Images/Frame.png'
import back from '../../../Assets/Images/dot_circle.png'

const CollegeHeader = () => {
    return (
        <div className='college-header-container'>
            <img  className="dot cir1" src={back} alt="" />
            <div className="college-header-child">
                <div className="college-header-content">
                    <h1>Enhance Your Academic Journey with <span>LearnoBook</span></h1>
                    <EducationBtns />
                </div>
                <div className="college-header-img">
                    <img src={img1} alt="" />
                </div>
            </div>
            <img className="dot cir2" src={back} alt="" />
        </div>
    )
}

export default CollegeHeader