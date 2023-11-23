import React from 'react'
import '../KeyFeatures/KeyFeatures.css'
import img1 from './Rectangle 3235.png'
import img2 from './Rectangle 3237.png'
import img3 from './Rectangle 3239.png'
import img4 from './Rectangle 3241.png'
import img5 from './Rectangle 3243.png'

const KeyFeatures = () => {
  const keyData = [
    {
      title: "Clipping Reading Notes",
      text: "Easily create a note by select of book text.",
      img: img1,
      color: "rgba(77, 113, 183, 1)",
    },
    {
      title: "Do Everything in 2-step",
      text: "Let PDF be your note taking playground! LearnoBook built-in pen gesture makes PDF markup and note taking easier than ever.",
      img: img2,
      color: "rgba(85, 106, 142, 1)"
    },
    {
      title: "LearnoBook For Everyone",
      text: "Make it easier to find and edit notes for Schools, Colleges, Coaching Institutes, Book Publishers, Library and Students.",
      img: img3,
      color: "rgba(77, 113, 183, 1)",
    },
    {
      title: "E-Books from Book Publishers",
      text: "Find 1000+ ebooks from book publishers around the world for easy learning.",
      img: img4,
      color: "rgba(85, 106, 142, 1)"
    },
    {
      title: "Make Notes From Library",
      text: "Make Notes From Library Makes and edit notes from our Library ",
      img: img5,
      color: "rgba(77, 113, 183, 1)",
    },

  ]
  return (
    <div className='features-main-contianer'>
      <h2>Key Features</h2>
      <div className="features-boxes">
        {
          keyData.map((item) => (
            <div className="feature-box" >
              <div className="feature-box-img  column-66">
                <img src={item.img} alt="" />
              </div>
              <div className="feature-box-text  column-33">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default KeyFeatures