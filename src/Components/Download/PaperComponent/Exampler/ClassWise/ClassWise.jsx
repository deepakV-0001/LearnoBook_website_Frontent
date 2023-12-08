import React from 'react'
import '../ClassWise/ClassWise.css'
import { Link } from 'react-router-dom'
const ClassWise = (props) => {
  
  return (
    <div className='class-book-container'>
        <h2>{props.head}</h2>
         <div className="class-book-boxes">
            {
                props.classData.map((item)=>(
                     <div className="class-book-box" style={{background:`${item.color}`}}>
                        <Link to='/class-wise'>{item.text}</Link>
                     </div>
                ))
            }
         </div>
    </div>
  )
}

export default ClassWise