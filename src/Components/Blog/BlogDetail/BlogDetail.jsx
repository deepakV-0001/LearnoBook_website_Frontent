import React from 'react'
import { FaWhatsapp, FaLink, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import blog from '../Blog/blog-header-img.png'
import '../Blog/BlogDetail.css'
import LatestBlog from '../LatestBlog/LatestBlog';


const Blog = () => {
    const blogData = [
        {
            title: "",
            p1: "In the fast-paced digital age, technology has become an integral part of our daily lives, revolutionizing the way we communicate, work, and even learn. One of the most significant transformations has occurred in the field of education, with the advent of digital classrooms. This innovative approach to learning has brought about a paradigm shift, offering students and educators a dynamic and interactive learning environment.",
            p2: "Digital classrooms leverage technology to enhance the traditional learning experience. Instead of relying solely on textbooks and chalkboards, students now have access to a vast array of digital resources, including interactive presentations, e-books, educational apps, and online collaboration tools. This transformation has not only made learning more engaging but has also expanded access to education beyond the confines of physical classrooms.",
        },
        {
            title: "Challenges and Solutions:",
            p1: "While digital classrooms offer numerous benefits, they also come with challenges. Issues such as the digital divide, concerns about data security, and the need for teacher training in technology integration must be addressed. Solutions involve investing in infrastructure, implementing robust security measures, and providing ongoing professional development for educators.",
            p2: "",
        },
        {
            title: "The Future of Education:",
            p1: "As technology continues to advance, the digital classroom is likely to evolve further. Virtual reality (VR), augmented reality (AR), and artificial intelligence (AI) are already making their way into education, promising even more immersive and tailored learning experiences.",
            p2: "",
        },
        {
            title: "Conclusion",
            p1: "The digital classroom represents a transformative leap in education, fostering a more dynamic, engaging, and accessible learning environment. While challenges exist, the potential benefits for students, educators, and society as a whole make the investment in digital classrooms a worthwhile endeavor. As we embrace the digital revolution in education, we are not just preparing students for the future but actively shaping it.",
            p2: "",
        },
    ]
    return (
        <div className='blog-container'>
            <div className="blog-header">
                <div className="blog-header-text">
                    <p>UPDATE</p>
                    <p>21 November 2023</p>
                </div>
                <h2>Embracing the Digital Classroom: Navigating the Future of Education</h2>
                <span className='blog-social-icon'><FaWhatsapp /><FaTwitter /><IoIosMail /><FaLink /></span>
                <div className='blog-head-img'><img src={blog} alt="" /><p>The Digital Classroom Revolution</p></div>
            </div>
            <div className="blog-text-content">
                {
                    blogData.map((item) => (
                        <div className="blog-text-box">
                            <h1>{item.title}</h1>
                            <p>{item.p1}</p>
                            <p>{item.p2}</p>
                        </div>
                    ))
                }
            </div>
            <div className="blog-bottom-social">
                <h2>Share article</h2>
                <span className='blog-social-icon'><FaWhatsapp /><FaTwitter /><IoIosMail /><FaLink /></span>
            </div>
            <div className="blog-latest-section">
                <LatestBlog/>
            </div>
        </div>
    )
}

export default Blog