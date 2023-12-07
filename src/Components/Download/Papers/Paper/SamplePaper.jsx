import React from 'react'
import { Link } from 'react-router-dom'

const SamplePaper = (props) => {
  return (
    <div className='sample-container'>
        <span><img src={props.img} alt="" /></span>
        <Link to="" download >Free Download</Link>
    </div>
  )
}

export default SamplePaper