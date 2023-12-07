import React from 'react'
import '../BestSeller/BestSeller.css'
import book1 from './oxford-dict.png'
import book2 from './utopia.png'
import book3 from './physics.png'
import book4 from './englis-grammer.png'
import book5 from './parade.png'

import RelatedBooks from '../../BookDetail/RelatedBooks/RelatedBooks'

const BestSeller = () => {
    const bestSellerData=[
        {
            img:book1,
            title:"Oxford Dictionary",
            auther:"C.T Onions",
            price:"$10",
        },
        {
            img:book2,
            title:"Utopia",
            auther:"Thomas More",
            price:"$6.90",
        },
        {
            img:book3,
            title:"Physics Class 11",
            auther:"CBSE",
            price:"$4.20",
        },
        {
            img:book4,
            title:"English Grammar",
            auther:"Wren & Martin",
            price:"$6",
        },
        {
            img:book5,
            title:"Night Parade",
            auther:"Lucy Flemmings",
            price:"$10",
        },
    ];
    
    return (
        <div className='bestSeller-container'>
            <div className="bestSeller-header">
                <h3>Our Bestsellers</h3>
                <p>Find what our readers love and start a new book today</p>
            </div>
            <RelatedBooks relatedBookData={bestSellerData}/>
        </div>
    )
}

export default BestSeller