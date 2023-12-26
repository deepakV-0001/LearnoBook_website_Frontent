import React from 'react'
import { Link } from 'react-router-dom'
import '../CollegeBtm/CollegeBtm.css'
import dot from '../../../Assets/Images/dot_circle.png'


const CollegeBtm = () => {
  return (
    <div className='college-btm-container'>
        <img src={dot} alt="" />
        <div className="clg-btm-content">
            <h2>Virtual Classrooms for Collaboration</h2>
            <p>Join virtual classrooms to engage in discussions, share insights, and collaborate on projects.</p>
            <Link to="">Learn more</Link>
        </div>
    </div>
  )
}

export default CollegeBtm