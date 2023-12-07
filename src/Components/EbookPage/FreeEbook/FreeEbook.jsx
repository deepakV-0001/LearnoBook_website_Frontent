import React from 'react'
import '../FreeEbook/FreeEbook.css'
import book6 from '../BestSeller/kingdom-cost.png'
import book7 from '../BestSeller/last-hunt.png'
import book8 from '../BestSeller/lady-tanglwood.png'
import book10 from '../BestSeller/a-leap-into-dark.png'
import RelatedBooks from '../../BookDetail/RelatedBooks/RelatedBooks'

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
    ];
    
  return (
    <div className='free-ebook-container'>
        <h3>Today’s Free eBooks</h3>
        <RelatedBooks relatedBookData={freeEbookData}/>
    </div>
  )
}

export default FreeEbook