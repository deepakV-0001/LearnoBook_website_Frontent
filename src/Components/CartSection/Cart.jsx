import React from 'react'
import '../CartSection/Cart.css'



import { Link } from 'react-router-dom'
import CartComponent from './CartComponent'
const Cart = () => {
    return (
        <div className='cart-container'>
            <h2 className='cart-heading'>Your Cart</h2>
           <CartComponent/>
            <span>Total <h2>$10</h2> <Link to="/checkout">checkout</Link></span>
        </div>
    )
}

export default Cart