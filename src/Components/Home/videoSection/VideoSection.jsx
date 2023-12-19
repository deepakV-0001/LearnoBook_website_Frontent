import React from 'react'
import '../videoSection/VideoSection.css'
import videoimg from './Rectangle 3208.png'
import anim from './animate.gif'

const VideoSection = () => {
  return (
    <div className='video-main-container'>
      <h2>Advanced PDF Markup and Note Taking Experience</h2>
      <div className="animation-container">
        <img className='animate' src={anim} alt='' />
        <div className='video-img'>
        <iframe  src="https://www.youtube.com/embed/Bqxx_RuqiTU?si=RXUu-UUQDahlWW2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <img className='animate' src={anim} alt='' />

      </div>
    </div>
  )
}

export default VideoSection