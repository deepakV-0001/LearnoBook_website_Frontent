import React from 'react'
import '../CardForm/CardForm.css'
import visa from './visa1.png'
import gpay from './gpay.png'
import { Link } from 'react-router-dom'


const CardForm = () => {
  return (
    <div className='card-container'>
      <h2>Payment</h2>
      <div className="credit-card">

        <li><input type="radio" defaultChecked name='its' /> Credit Card /Visa Debit</li>
        <span><img className='cred-img' src={visa} alt="" /></span>
        <div className="card-number">
          <p>Card Number*</p>
          <input type="text" required />
        </div>
        <div className="card-bottom">
          <div className="expiry-date">
            <p>Expiry Date*</p>
            <span><input type="text" placeholder='MM' />/<input type="text" placeholder='YYYY' /></span>
          </div>
          <div className="cvv">
            <p>CVV*</p>
            <span><input type="text" required /></span>
          </div>

        </div>
        <div className="google-pay">
          <li><span><input type="radio" name='its' />Google Pay</span><Link><img className='gpay-img' src={gpay} alt="" /></Link></li>
        </div>
      </div>
      <Link className='payment-prod-buy-btn' to="/purchase">Buy Now</Link>
    </div>
  )
}

export default CardForm