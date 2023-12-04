import React from 'react'
import '../Rating/Rating.css'
import RatingImg from './review-img.png'
import { Link } from 'react-router-dom'

const Rating = () => {
  return (
    <div className='rating-container'>
        <div className="rating-main-container">
            <div className="rating-header">
                <h2>Ratings and Reviews</h2>
                <Link>See More </Link>
            </div>
            <div className="rating-boxes">
                <div className="rating-box">
                    <span><img src={RatingImg} alt="" /></span>
                    <div className="rating-text">
                        <div className="rating-text-head">
                            <h2>Blair Waldorf</h2>
                            <i>&#9733;&#9733;&#9733;&#9733;&#9733;</i>
                        </div>
                        <h5>October 1, 2023</h5>
                        <p>It is one of the best dictionary available. A good dictionary is judged by how it defines the words and oxford dictionary has no match.it has most of the enteries required for the modern literature and contamporary books since the main emphasis is on current English.</p>
                    </div>
                </div>
                <div className="rating-box">
                    <span><img src={RatingImg} alt="" /></span>
                    <div className="rating-text">
                        <div className="rating-text-head">
                            <h2>Blair Waldorf</h2>
                            <i>&#9733;&#9733;&#9733;&#9733;&#9733;</i>
                        </div>
                        <h5>October 1, 2023</h5>
                        <p>It is one of the best dictionary available. A good dictionary is judged by how it defines the words and oxford dictionary has no match.it has most of the enteries required for the modern literature and contamporary books since the main emphasis is on current English.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Rating