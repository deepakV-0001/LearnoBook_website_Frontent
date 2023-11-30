import React from 'react'
import '../SchoolPage/SchoolHeader.css'
import back from './Group 135.png'
import headerImg from './Frame.png'
import EducationBtns from '../../Education_btns/EducationBtns'

const SchoolHeader = () => {
  return (
    <div className='school-header'>
      <div className="school-header-container">
        <div className="school-header-text-content">
          <h1>The Best Way To Learn,
            Is To Learn With Fun.</h1>
          <p>
            Embark on a seamless educational journey with LearnoBook, your one-stop destination for a revolutionary learning experience.
          </p>
          <div className="shool-header-btns">
            <EducationBtns />
          </div>
        </div>
        <div className="school-header-img">
          <img src={headerImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SchoolHeader