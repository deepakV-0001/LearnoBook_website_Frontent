import React from 'react'
import '../ClassWise/ClassWise.css'
const ClassWise = (props) => {
   console.log(props)
  return (
    <div className='class-book-container'>
        <h2>{props.head}</h2>
         <div className="class-book-boxes">
            {
                props.classData.map((item)=>(
                     <div className="class-book-box" style={{background:`${item.color}`}}>
                        <p>{item.text}</p>
                     </div>
                ))
            }
         </div>
    </div>
  )
}

export default ClassWise