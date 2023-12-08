import React from 'react'
import '../SubjectWise/SubjectWise.css'
import { Link } from 'react-router-dom'


const SubjectWise = (props) => {
  
  return (
    <div className='subject-book-container'>
        <h2>{props.head}</h2>
         <div className="subject-book-boxes">
            {
                props.classData.map((item)=>(
                     <div className="subject-book-box">
                        <img src={item.color} alt="" />
                        <Link to="/single-subject">{item.text}</Link>
                     </div>
                ))
            }
         </div>
    </div>
  )
}

export default SubjectWise