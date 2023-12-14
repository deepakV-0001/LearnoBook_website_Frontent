import React from 'react'
import '../LatestBlog/LatestBlog.css'
import blog1 from './blog1.png'
import blog2 from './blog2.png'
import { Link } from 'react-router-dom'

const LatestBlog = () => {
    return (
        <div className='latest-container'>
            <h2>Latest Blogs</h2>
            <div className="latest-blog-images">
                <div className='latest-blog-img'><img src={blog1} alt="" />

                    <p className="blog-img-btm-text" >Breaking Down Geographical Barriers</p>

                </div>
                <div className='latest-blog-img'><img src={blog2} alt="" />

                    <p className="blog-img-btm-text" >Global Access to Education</p>
                </div>
            </div>
            <Link to="/blog">Browse More</Link>
        </div>
    )
}

export default LatestBlog