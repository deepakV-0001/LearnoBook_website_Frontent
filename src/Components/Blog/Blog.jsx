import React from 'react'
import '../Blog/Blog.css'
import dotCircleBack from '../ForEducation/SchoolPage/HelpSection/Group.png'
import blog from './blog_main.png'
import blogimg from './LatestBlog/blog1.png'
import SingleBlogComp from './SingleBlogComp'

const Blog = () => {
    return (
        <div className='blog-main-container'>
            <div className="blog-main-header">
                <img className='blog-main-headder-dot' src={dotCircleBack} alt="" />
                <div className="blog-main-text">

                    <h2>Blog</h2>
                    <p>Explore our blog for insightful articles, tips, and updates on the latest trends in education and technology. Stay informed, inspired, and connected with the academic community.</p>
                </div>
                <div className="blog-main-img">
                    <img src={blog} alt="" />
                </div>
            </div>
            <div className="single-blog-section">
                <div className="single-blog-child">
                    <div className="single-blog-parent">
                        <SingleBlogComp img={blogimg} />
                    </div>
                    <div className="single-blog-parent">
                        <SingleBlogComp img={blogimg} />
                    </div>
                    <div className="single-blog-parent">
                        <SingleBlogComp img={blogimg} />
                    </div>
                    <div className="single-blog-parent">
                        <SingleBlogComp img={blogimg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog