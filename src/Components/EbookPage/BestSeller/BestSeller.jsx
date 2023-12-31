import React from 'react'
import '../BestSeller/BestSeller.css'
import book1 from '../../Assets/Images/oxford-dict.png'
import book2 from '../../Assets/Images/utopia.png'
import book3 from '../../Assets/Images/physics.png'
import book4 from '../../Assets/Images/englis-grammer.png'
import book5 from '../../Assets/Images/parade.png'
import ProductSlider from '../../BookDetail/ProductSlider/ProductSlider'


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
            <ProductSlider relatedBookData={bestSellerData}/>
        </div>
    )
}

export default BestSeller

