import React from 'react'
import '../Payment/Payment.css'
import CardForm from '../Payment/CardForm/CardForm'
import girl from './Frame.png'
import { TbBookDownload } from "react-icons/tb";

import CartComponent from '../CartSection/CartComponent';
import { Link } from 'react-router-dom';


const Payment = () => {
    return (
        <>
            <div className='payment-container'>
                <div className="card-form-section">
                    <CardForm />
                </div>
                <div className="cart-deatil">
                    <div className="cart-detail-header">
                        <img src={girl} alt="" />
                        <div className="cart-header-text">
                            <TbBookDownload />
                            <h3 className='head1'>You’re buying an eBook</h3>
                            <h3>You’re about to purchase digital content rather than a physical book.</h3>
                        </div>

                    </div>
                    <div className="cart-product-payment">
                        <CartComponent />
                        <span>Cart Total <p>$10</p></span>
                    </div>
                </div>

            </div>
           
        </>
    )
}

export default Payment

