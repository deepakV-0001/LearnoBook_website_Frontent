import React from 'react'
import { Link } from 'react-router-dom'
import '../EbookMiddle/EbookMiddle.css'


const EbookMiddle = () => {
    return (
        <div className='ebook-page-middle'>
            <div className="ebook-page-latest-section-images">

                <span>
                    <h2>Trending Now In eBooks</h2>
                    <p>Our Top 50 Bestsellers</p>
                    <Link to="">Browse Now</Link>
                </span>
            </div>
            <div className="ebook-page-latest-section-images-col">
                <span className='img1-col'>
                    <p>Recommendation For You &gt;</p>
                </span>
                <span className='img2-col'>
                    <p>Browse The Latest Release &gt;</p></span>
            </div>
        </div>
    )
}

export default EbookMiddle