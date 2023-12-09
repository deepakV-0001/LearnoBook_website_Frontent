import React from 'react'
import '../Blog/Blog.css'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";



const  SingleBlogComp = (props) => {
  return (
    <div className='single-blog-container'>
        <img src={props.img} alt="" />
        <Link to="/blog-detail">Breaking Down Geographical Barriers <MdArrowForwardIos/></Link>
    </div>
  )
}

export default SingleBlogComp