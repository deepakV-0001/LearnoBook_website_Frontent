import React from 'react'
import '../CartSection/Cart.css'
import img from '../BookDetail/book-detail-img.png'
import { Link } from 'react-router-dom'
const Cart = () => {
    return (
        <div className='cart-container'>
            <h2 className='cart-heading'>Yout Cart</h2>
            <div className="cart-product-container">
                <span><img src={img} alt="" /></span>
                <div className="cart-product-text">
                    <span><h2>Oxford Dictionary of English Etymology</h2> <p className='remove'>Remove</p></span>
                    <p className='auther-name'>By C.T. Onions</p>
                    <b>$10</b>
                </div>

            </div>
            <span>Total <h2>$10</h2> <Link>checkout</Link></span>
        </div>
    )
}

export default Cart