import React from 'react'
import '../Library_header/Library_header.css'
import EducationBtns from '../../ForEducation/Education_btns/EducationBtns'

import hd_img from '../../Assets/Images/lib_head_img.png'

const Library_header = () => {
    return (
        <div className='library-header-main-container'>
            <div className="library-header-container">
                <div className="library-header-text-content">
                    <h2>Welcome to our <span>Online Library</span> – Your Gateway to Knowledge!</h2>
                    <p>Knowledge Knows no bounds, and We're here to  help you ,explore learn,and grow.Welcome to a World of endless possibilities</p>
                    <EducationBtns />
                </div>
                <div className="library-header-img-content">
                    <img src={hd_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Library_header