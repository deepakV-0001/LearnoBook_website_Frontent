import React from 'react'
import '../CollegeJourney/Journey.css'
import uni from './univer.png'
import { Link } from 'react-router-dom'

const Journey = () => {
  return (
    <div className='journey-container'>
        <div className="journey-child">
        <h1>Get LearnoBook For College</h1>
        <img src={uni} alt="" />
        <p>At LearnoBook, we believe in transforming education into an immersive and accessible journey. Join us in shaping the future of learning.</p>
        <Link to="">Get Started</Link>
        </div>
    </div>
  )
}

export default Journey