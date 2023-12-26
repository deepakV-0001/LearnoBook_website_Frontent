import React from 'react'
import '../PurchaseSection/Purchase.css'
import { Link } from 'react-router-dom'
import book from '../../Assets/Images/book-detail-img.png'
import head from '../../Assets/Images/purchase2.png'
import botom from '../../Assets/Images/purchase1.png'

const Purchase = () => {
    return (
        <div className='purchase-container'>
            <div className="purchase-header">
                <span><img src={head} alt="" /></span>
                <h2>Your eBook purchase was successful We hope you enjoy your reading experience!</h2>
            </div>
            <div className="purchase-header-bottom">
                <div className="purchase-ebook-detail">
                    <div className="purchase-ebook-cont1">
                        <h2>eBook Details</h2>
                        <div className="purchase-ebook-img">
                            <img src={book} alt="" />
                            <div className="purchase-ebook-text">
                                <h3>Oxford Dictionary of English Etymology</h3>
                                <p>By C.T. Onions</p>
                                <h3 className='purchase-price'>$10</h3>
                                <Link>View eBook</Link>
                            </div>
                        </div>
                    </div>
                    <div className="purchase-download">
                        <h2>Download Instructions: </h2>
                        <p className='down'>To access your eBook, please follow these simple steps:</p>
                        <p>1. Log in to your account on our website</p>
                        <p>2. Navigate to the "My Library" section.</p>
                        <p>3. Locate your purchased eBook and click the "Download" or “edit” button.</p>
                    </div>
                </div>
                <div className="purchase-bottom">
                    <span><img src={botom} alt="" /></span>
                    <h2>If you encounter any issues or have questions,
                        our customer support team is here to help. <span>Contact us</span></h2>
                </div>
            </div>

        </div>
    )
}

export default Purchase