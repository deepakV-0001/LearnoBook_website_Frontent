import React from 'react'
import Btns from '../Education_btns/EducationBtns'
import EducationBtns from '../SchoolPage/ExcelSection/ExcelComponent'
import edit from './edit.png'
import book from './book.png'
import hand from './hands.png'
import head from './Frame.png'
import btm from './Group.png'
import lib from '../SchoolPage/ExcelSection/Nook.png'
import { Link } from 'react-router-dom'
import '../Coaching/Coaching.css'

const Coaching = () => {
    const coachData=[
        {
            img: edit,
            title:"Effortless Editing and Note-Making",
            desc:"Students can easily annotate and take notes directly within the digital materials, ensuring a more interactive and personalized study experience.",
            color:"#556A8E",
        },
        {
            img:lib,
            title:"Kindle Bookstore Integration",
            desc:"Our platform seamlessly integrates with the Kindle Bookstore, allowing coaching centers to purchase digital versions of textbooks directly.",
            color:"#64BAD5",
        },
        {
            img:book ,
            title:"Centralized Library Access",
            desc:"Our digital library feature enables coaching centers to create a centralized repository of academic resources. ",
            color:"#4AA04A",
        },
        {
            img:hand ,
            title:"Virtual Collaboration Spaces",
            desc:"Conduct online classes, facilitate discussions, and collaborate with students, replicating the traditional coaching center experience in a digital space.",
            color:"#FFC727",
        },
    ]
  return (
    <div className='coaching-container'>
        <div className="coaching-header">
            <h2>Transforming <span>Coaching Centers</span> with Seamless Academic Solutions</h2>
            <Btns/>
            <span><img src={head} alt="" /></span>
        </div>
        <div className="coaching-middle-section">
            <h2>How It Helps</h2>
           <div className="coaching-boxes">
           {
            coachData.map((item)=>(
                <EducationBtns img={item.img} color={item.color} desc={item.desc} title={item.title} />
            ))
           }
           </div>
        </div>
        <div className="coaching-bottom">
            <h2>Get LearnoBook for <span>Coaching Centers</span></h2>
            <span><img src={btm} alt="" /></span>
           <p>At LearnoBook, we're committed to empowering coaching centers with innovative tools that elevate the teaching and learning experience. Join us in embracing the future of education.</p>
           <Link className='coaching-btn'>Get Started</Link>
        </div>
        
    </div>
  )
}

export default Coaching