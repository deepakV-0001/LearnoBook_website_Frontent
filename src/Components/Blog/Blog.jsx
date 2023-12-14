import React from 'react'
import '../Blog/Blog.css'
import blog from './blog_main.png'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";
import blog1 from './main_blog1.png'
import blog2 from './main_blog2.png'
import blog3 from './main_blog3.png'
import blog4 from './main_blog4.png'
import blog5 from './main_blog5.png'

const Blog = () => {
    const blogData = [
        {
            head: "Preparing Students for the Future",
            img: blog1,
        },
        {
            head: "Interactive Learning",
            img: blog2,
        },
        {
            head: "Preparing Students for the Future",
            img: blog3,
        },
        {
            head: "Interactive Learning",
            img: blog4,
        },
        {
            head: "Preparing Students for the Future",
            img: blog5,
        },
        {
            head: "Interactive Learning",
            img: blog1,
        },


    ];
    return (
        <div className='blog-main-container'>
            <div className="blog-main-header">
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
                        {
                            blogData.map((item) => (
                                <div className='single-blog-container'>
                                    <span className='blog-card-anim'><p>Posted by LearnoBook</p>
                                        <p>october 2023</p></span>
                                    <img src={item.img} alt="" />
                                    <Link className='to-blog-detail' to="/blog-detail">{item.head}<MdArrowForwardIos /></Link>
                                </div>
                            ))
                        }
                    </section>
                </div>
                <Link className='main-blog-browse-more-btn' to="">Browse More</Link>
            </div>
        </div>
    )
}

export default Blog