import React from 'react'
import playbtn from './Circled Play.png'
import '../Education_btns/EducationBtns.css'


const EducationBtns = () => {
  return (
    <div className='edu-btns-container'>
        <Link to="">Join For Free</Link>
        <span><img src={playbtn} alt="" />See How It Works</span>
    </div>
  )
}

export default EducationBtns