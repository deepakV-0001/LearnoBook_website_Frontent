import React from 'react'
import '../RelatedBooks/RelatedBooks.css'
import dict1 from './dict1.png'
import dict2 from './dict2.png'
import dict3 from './dict3.png'
import dict4 from './dict4.png'
import { Link } from 'react-router-dom'

const RelatedBooks = () => {
    const relatedBookData = [
        {
            title: "Oxford English Hindi Dictionary",
            img: dict1,
            auther: "S.K. Verma",
            price: "$7",
        },
        {
            title: "Oxford Essential Dictionary",
            img: dict2,
            auther: "Oxford",
            price: "$11",
        },
        {
            title: "Oxford First Illustrated Dictionary",
            img: dict3,
            auther: "Oxford",
            price: "$20",
        },
        {
            title: "Oxford Illustrated Dictionary",
            img: dict4,
            auther: "Oxford",
            price: "$10",
        },
    ]
    return (
        <>
            <div className='related-container'>
                <div className="related-child-container">
                    <h2>Books related to Oxford Dictionary</h2>
                    <div className="related-books-container">
                        {
                            relatedBookData.map((item) => (
                                <div className="related-book-box">
                                    <img src={item.img} alt="" />
                                    <h2>{item.title}</h2>
                                    <p>{item.auther}</p>
                                    <i>&#9733;&#9733;&#9733;&#9733;&#9733;</i>
                                    <b>{item.price}</b>
                                    <Link>Add To Cart</Link>
                                </div>
                            ))
                        }
                    </div></div>
            </div>
            <div className='related-container'>
                <div className="related-child-container">
                    <h2>Books related to Oxford Dictionary</h2>
                    <div className="related-books-container">
                        {
                            relatedBookData.map((item) => (
                                <div className="related-book-box">
                                    <img src={item.img} alt="" />
                                    <h2>{item.title}</h2>
                                    <p>{item.auther}</p>
                                    <i>&#9733;&#9733;&#9733;&#9733;&#9733;</i>
                                    <b>{item.price}</b>
                                    <Link>Add To Cart</Link>
                                </div>
                            ))
                        }
                    </div></div>
            </div>
        </>
    )
}

export default RelatedBooks