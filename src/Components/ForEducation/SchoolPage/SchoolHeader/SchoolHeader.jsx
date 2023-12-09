import React from 'react'
import '../SchoolHeader/SchoolHeader.css'

import EducationBtns from '../../Education_btns/EducationBtns'

const SchoolHeader = (props) => {
  return (
    <div className='school-header'>
      {<div className="glowing"></div>}
        <div className="school-header-container">
          <div className="school-header-text-content">
            <h1>{props.head1}<span>{props.highlight1}</span><br />
              {props.head2}<span>{props.highlight2}</span></h1>
            <p>
             {props.desc}
            </p>
            <div className="shool-header-btns">
              <EducationBtns />
            </div>
          </div>
          <div className="school-header-img">
            <img src={props.img} alt="" />
          </div>
        </div>
      
    </div>
  )
}

export default SchoolHeader