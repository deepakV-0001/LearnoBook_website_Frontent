import React from 'react'
import '../SingleSubject/SingleSubject.css'
import sub from '../../../../../Assets/Images/subjectsingle.png'
import { Link } from 'react-router-dom'

const SingleSubject = () => {
    const singleSubjectData=[
        {
            img:sub,
            title:"Physics Part 1",
        },
        {
            img:sub,
            title:"Physics Part 2",
        },
    ]
  return (
    <div className='single-subject-container'>
        <h3>NCERT Physics Book for Class 12 Download PDF</h3>
        <div className="single-subject-books">
            {
                singleSubjectData.map((item)=>(
                      <div className="single-book-box">
                        <span><img src={item.img} alt="" /></span>
                        <p>{item.title}</p>
                        <Link to="" download>Free Download</Link>
                      </div>
                ))
            }
        </div>
    </div>
  )
}

export default SingleSubject