import React from 'react'
import '../Testimonials/Testimonials.css'
import avtr from './Avator.png'

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
      <div className='testimonial-heading'>
        <h2 >What People Are Saying</h2>
        <p></p>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-content-img">

          <div className='testimonial-content-child'>
            <span><p>So easy to edit PDFs!</p></span>
            <img src={avtr} alt="" />
          </div></div>
        <div className="testimonial-text">
          <h3>Samantha | Kingston University</h3>
          <p>This is the app I’ve been waiting for so long. My favorite feature of this app is that it allows me to hand write notes on a separate notebook while reading and annotating a PDF document.Flexcil does all I need. Many thanks to the developers!</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials