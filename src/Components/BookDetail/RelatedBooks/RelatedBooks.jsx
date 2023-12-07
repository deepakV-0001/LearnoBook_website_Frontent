import React from 'react'
import '../RelatedBooks/RelatedBooks.css'

import { Link } from 'react-router-dom'

const RelatedBooks = ({relatedBookData,head}) => {

    return (
        <>
            <div className='related-container'>
                <div className="related-child-container">
                    <h2>{head}</h2>
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