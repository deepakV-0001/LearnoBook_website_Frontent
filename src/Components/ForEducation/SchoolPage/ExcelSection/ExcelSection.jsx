import React from 'react'
import '../ExcelSection/ExcelSection.css'
import library from './Nook.png'
import edit from './Edit.png'
import book from './Books.png'
import group from './Group.png'
import { Link } from 'react-router-dom'
import ExcelComponent from './ExcelComponent'

const ExcelSection = () => {
    const excelData=[
        {
            img:library ,
            color:"rgba(85, 106, 142, 1)",
            title:"Digital Library Integration",
            desc:"Whether you're a student looking for reference materials or a teacher exploring diverse teaching aids, our digital library caters to all your academic needs.",
        },
        {
            img: edit,
            color:"rgba(79, 183, 102, 1)",
            title:"Effortless PDF Editing and Note-Making",
            desc:"Keep your study materials organized, accessible, and tailored to your learning style.",
        },
        {
            img: book,
            color:"rgba(213, 196, 45, 1)",
            title:"Kindle Book Purchases",
            desc:"Explore the world of literature effortlessly by purchasing Kindle versions of your favorite books directly through LearnObook",
        },
        {
            img:group ,
            color:"rgba(213, 86, 45, 1)",
            title:"Collaborative Learning Spaces",
            desc:"Students and teachers can engage in discussions, share insights, and collaborate on projects, creating a dynamic and supportive learning environment.",
        },
    ];
  return (
    <div className='excel-container'>
        <h2>How LearnoBook Helps You Excel</h2>
        <div className="excel-boxes">
           {
            excelData.map((item)=>(
               <ExcelComponent img={item.img} color={item.color} title={item.title} desc={item.desc} />
            ))
           }
        </div>
    </div>
  )
}

export default ExcelSection