import React from 'react'
import '../Blog/Blog.css'
import dotCircleBack from '../ForEducation/SchoolPage/HelpSection/Group.png'
import blog from './blog_main.png'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";
import blog1 from './main_blog1.png'
import blog2 from './main_blog2.png'
import blog3 from './main_blog3.png'
import blog4 from './main_blog4.png'
import blog5 from './main_blog5.png'

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
                <div class="blogs-container">
                    <section>

                        <div className='single-blog-container'>
                            <img src={blog1} alt="" />
                            <Link className='to-blog-detail' to="/blog-detail">Breaking Down Geographical Barriers <MdArrowForwardIos /></Link>
                        </div>
                        <div className='single-blog-container'>
                            <img src={blog2} alt="" />
                            <Link className='to-blog-detail' to="/blog-detail">Preparing Students for the Future<MdArrowForwardIos /></Link>
                        </div>
                    </section>
                    <section>

                        <div className='single-blog-container'>
                            <img src={blog3} alt="" />
                            <Link className='to-blog-detail' to="/blog-detail">Interactive Learning <MdArrowForwardIos /></Link>
                        </div>
                        <div className='single-blog-container'>
                            <img src={blog4} alt="" />
                            <Link className='to-blog-detail' to="/blog-detail">Embracing the Digital Classroom: Navigating the Future of Education <MdArrowForwardIos /></Link>
                        </div>
                    </section>

                    <section>

                        <div className='single-blog-container'>
                            <img className='blog-last-img' src={blog5} alt="" />
                            <Link className='to-blog-detail' to="/blog-detail">Digital classrooms offer a myriad of advantages, revolutionizing education in ways previously unimaginable.<MdArrowForwardIos /></Link>
                        </div>
                    </section>
                </div>
                <Link className='main-blog-browse-more-btn' to="">Browse More</Link>
            </div>
        </div>
    )
}

export default Blog