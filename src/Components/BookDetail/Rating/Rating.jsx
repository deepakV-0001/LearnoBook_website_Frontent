import React from 'react'
import '../Rating/Rating.css'
import RatingImg from '../../Assets/Images/review-img.png'
import { Link } from 'react-router-dom'

const Rating = () => {
    const ratingData = [
        {
            name: "Blair Waldorf",
            date: "October 1, 2023",
            desc: "It is one of the best dictionary available. A good dictionary is judged by how it defines the words and oxford dictionary has no match.it has most of the enteries required for the modern literature and contamporary books since the main emphasis is on current English.",
        },
        {
            name: "Blair Waldorf",
            date: "October 1, 2023",
            desc: "It is one of the best dictionary available. A good dictionary is judged by how it defines the words and oxford dictionary has no match.it has most of the enteries required for the modern literature and contamporary books since the main emphasis is on current English.",
        },
        
    ];
    return (
        <div className='rating-container'>
            <div className="rating-main-container">
                <div className="rating-header">
                    <h2>Ratings and Reviews</h2>
                    <Link>See More </Link>
                </div>
                <div className="rating-boxes">

                    {
                        ratingData.map((item, index) => (
                            <div className="rating-box" key={index}>
                                <span><img src={RatingImg} alt="" /></span>
                                <div className="rating-text">
                                    <div className="rating-text-head">
                                        <h2>{item.name}</h2>
                                        <i>&#9733;&#9733;&#9733;&#9733;&#9733;</i>
                                    </div>
                                    <h5>{item.date}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Rating