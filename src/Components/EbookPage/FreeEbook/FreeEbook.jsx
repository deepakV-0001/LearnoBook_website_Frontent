import React from 'react'
import '../FreeEbook/FreeEbook.css'
import book6 from '../../Assets/Images/kingdom-cost.png'
import book7 from '../../Assets/Images/last-hunt.png'
import book8 from '../../Assets/Images/lady-tanglwood.png'
import book10 from '../../Assets/Images/a-leap-into-dark.png'
import ProductSlider from '../../BookDetail/ProductSlider/ProductSlider'

const FreeEbook = () => {
    const freeEbookData=[
        {
            img:book6,
            title:"A kingdom’s Cost",
            auther:"JR Tomin",
            price:"$0",
        },
        {
            img:book7,
            title:"The Last Hint",
            auther:"Maor Kohn",
            price:"$0",
        },
        {
            img:book7,
            title:"Communication ",
            auther:"Phil R. Lucky",
            price:"$0",
        },
        {
            img:book8,
            title:"Lady Tanglewood",
            auther:"Tony Cabell",
            price:"$0",
        },
        {
            img:book10,
            title:"A Leap Into Dark",
            auther:"Ray Petrolino",
            price:"$0",
        },
        {
            img:book6,
            title:"A kingdom’s Cost",
            auther:"JR Tomin",
            price:"$0",
        },
        {
            img:book7,
            title:"The Last Hint",
            auther:"Maor Kohn",
            price:"$0",
        },
        {
            img:book7,
            title:"Communication ",
            auther:"Phil R. Lucky",
            price:"$0",
        },
        {
            img:book8,
            title:"Lady Tanglewood",
            auther:"Tony Cabell",
            price:"$0",
        },
        {
            img:book10,
            title:"A Leap Into Dark",
            auther:"Ray Petrolino",
            price:"$0",
        },
    ];
    
  return (
    <div className='free-ebook-container'>
        <h3>Today’s Free eBooks</h3>
        <ProductSlider relatedBookData={freeEbookData}/>
    </div>
  )
}

export default FreeEbook