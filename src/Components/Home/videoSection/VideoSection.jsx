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
        <img className='video-img' src={videoimg} alt='' />
        <img className='animate' src={anim} alt='' />

      </div>
    </div>
  )
}

export default VideoSection