import React from 'react'
import '../CartSection/Cart.css'
import img from '../Assets/Images/book-detail-img.png'
import { IoMdClose } from "react-icons/io";
const CartComponent = () => {
  return (
    <>
      <div className="cart-product-container">
        <div className="cart-product-parent">
          <span><img src={img} alt="" /></span>
          <div className="cart-product-text">
            <span><h2>Oxford Dictionary of English Etymology</h2> </span>
            <p className='auther-name'>By C.T. Onions</p>
            <b>$10</b>
          </div>
        </div>
        <p className='remove'><IoMdClose /></p>
      </div></>
  )
}

export default CartComponent