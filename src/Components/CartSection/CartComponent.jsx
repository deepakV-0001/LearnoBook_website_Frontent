import React from 'react'
import '../CartSection/Cart.css'
import img from '../BookDetail/book-detail-img.png'
const CartComponent = () => {
  return (
    <>
     <div className="cart-product-container">
                <span><img src={img} alt="" /></span>
                <div className="cart-product-text">
                    <span><h2>Oxford Dictionary of English Etymology</h2> <p className='remove'>Remove</p></span>
                    <p className='auther-name'>By C.T. Onions</p>
                    <b>$10</b>
                </div>

            </div></>
  )
}

export default CartComponent