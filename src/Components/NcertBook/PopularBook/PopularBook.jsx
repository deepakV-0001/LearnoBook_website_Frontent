import React from 'react'
import './PopularBook.css'
import half from '../../Assets/Images/triangle-half.png'
const Popular = () => {
  const popularBook=[
    {
      text:"PD Sharma",
      color:half,
    },
    {
      text:"RS Aggarwal",
      color:half,
    },
    {
      text:"Lakhmir",
      color:half,
    },
    {
      text:"HC Verma",
      color:half,
    },
    {
      text:"Sandeep Garg",
      color:half,
    },
    {
      text:"TS Grewal",
      color:half,
    },
    
    {
      text:"DK Goel",
      color:half,
    },
    
  ];
  return (
    <div className='popular-book-container'>
        <h2>Popular Book for NCERT</h2>
         <div className="popular-book-boxes">
            {
                popularBook.map((item)=>(
                     <div className="popular-book-box">
                        <img src={item.color} alt="" />
                        <p>{item.text}</p>
                     </div>
                ))
            }
         </div>
    </div>
  )
}

export default Popular