import React from 'react'
import '../Testimonials/Testimonials.css'
import avtr from '../../Assets/Images/Avator.png'
import Slider from "react-slick";

const Testimonials = () => {
  const testimonialData = [
    {
      title: "What People Are Saying",
      subtitle: "So easy to edit PDFs!",
    },
    {
      title: "What People Are Saying",
      subtitle: "So easy to edit PDFs!",
    },
    {
      title: "What People Are Saying",
      subtitle: "So easy to edit PDFs!",
    },
    {
      title: "What People Are Saying",
      subtitle: "So easy to edit PDFs!",
    },
  ]
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="testimonial-main-container">
      <Slider {...settings}>
        {
          testimonialData.map((item) => (
            <div className='testimonial-container'>
              <div className='testimonial-heading'>
                <h2 >{item.title}</h2>
                <p></p>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-content-img">

                  <div className='testimonial-content-child'>
                    <span><p>{item.subtitle}</p></span>
                    <img src={avtr} alt="" />
                  </div></div>
                <div className="testimonial-text">
                  <h3>Samantha | Kingston University</h3>
                  <p>This is the app I’ve been waiting for so long. My favorite feature of this app is that it allows me to hand write notes on a separate notebook while reading and annotating a PDF document.Flexcil does all I need. Many thanks to the developers!</p>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Testimonials