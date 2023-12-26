import React from 'react'
import '../CollegeJourney/Journey.css'
import uni from '../../../Assets/Images/univer.png'
import { Link } from 'react-router-dom'

const Journey = (props) => {
  return (
    <div className='journey-container'>
        <div className="journey-child">
        <h1>{props.head}</h1>
        <img src={props.img || uni} alt="" />
        <p>{props.desc||'At LearnoBook, we believe in transforming education into an immersive and accessible journey. Join us in shaping the future of learning.'}</p>
        <Link to="">Get Started</Link>
        </div>
    </div>
  )
}

export default Journey