import React from 'react'
import '../SubjectWise/SubjectWise.css'



const SubjectWise = (props) => {
  
  return (
    <div className='subject-book-container'>
        <h2>{props.head}</h2>
         <div className="subject-book-boxes">
            {
                props.classData.map((item)=>(
                     <div className="subject-book-box">
                        <img src={item.color} alt="" />
                        <p>{item.text}</p>
                     </div>
                ))
            }
         </div>
    </div>
  )
}

export default SubjectWise