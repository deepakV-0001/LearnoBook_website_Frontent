import React from 'react'
import { Link } from 'react-router-dom'
import '../EbookMaterial/EbookMaterial.css'
import book1 from './book1.png'
import book2 from './book2.png'
import book3 from './book3.png'
import book4 from './book4.png'
import prsn1 from './person1.png'
import prsn2 from './person2.png'
import prsn3 from './person3.png'
import prsn4 from './person4.png'


const EbookMaterial = () => {
    const ebookData = [
        {
            img1: book1,
            img2: prsn1,
            title: "CBSE Science Sense Class XI",
            text: "By Ryan Ran",
            btn: "Buy E-Book $4",
           
        },
        {
            img1: book2,
            img2: prsn3,
            title: "Let’s Go Time Travelling",
            text: "By Sheena Roy",
            btn: "Buy E-Book $2",
           
        },
        {
            img1: book3,
            img2: prsn2,
            title: "Objective Lune",
            text: "By Tulika Das ",
            btn: "Buy E-Book FREE",
           
        },
        {
            img1: book4,
            img2: prsn4,
            title: "ICSE English Literature Class V",
            text: "By George Orwel",
            btn: "Buy E-Book $3.50",
          
        },
    ]
    return (
        <div className='material-container'>
           <Link to=""  className="material-side-text" >Browse More Categories</Link>
            <div className="material-boxes">
                {ebookData.map((item) => (
                    <div className={`material-box  box ${item.class}`}>
                        <span><img src={item.img2} alt="" /></span>
                        <div className="material-box-content">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <img src={item.img1} alt="" />
                            <Link to="">{item.btn}</Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default EbookMaterial