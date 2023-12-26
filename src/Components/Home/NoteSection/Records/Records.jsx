import React from 'react'
import '../Records/Records.css'
import Bookmark from '../../../Assets/Images/Bookmark.svg'
import Cloud from '../../../Assets/Images/Cloud.svg'
import Crayon from '../../../Assets/Images/Crayon.svg'
import Heart from '../../../Assets/Images/Heart.svg'
import Notability from '../../../Assets/Images/Notability.svg'
import Record from '../../../Assets/Images/Play_Record.svg'


const Records = () => {
    const recordData = [
        {
            img: Record,
             class:"",
            title: "Audio Record & Note Replay",
            text: "Audio record and handwriting sync allows you to track what you hear when take note",
        },
        {
            img: Crayon,
          
            title: "Audio Record & Note Replay",
            text: "Audio record and handwriting sync allows you to track what you hear when take note",
        },
        {
            img: Cloud,
            
            title: "Audio Record & Note Replay",
            text: "Audio record and handwriting sync allows you to track what you hear when take note",
        },
        {
            img: Bookmark,
          
            title: "Audio Record & Note Replay",
            text: "Audio record and handwriting sync allows you to track what you hear when take note",
        },
        {
            img: Notability,
           
            title: "Audio Record & Note Replay",
            text: "Audio record and handwriting sync allows you to track what you hear when take note",
        },
        {
            img: Heart,
           
            title: "Audio Record & Note Replay",
            text: "Audio record and handwriting sync allows you to track what you hear when take note",
        },
       
    ];
    
    return (
        <div className='records-container'>
            <div className="records-boxes">
               
                {
                    recordData.map((item) => (
                        <div className={`records-box  child-box`}>
                            <span className="record-img-upper">
                                <img src={item.img} alt="" />
                            </span>

                            <div className="records-box-content">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))
                }
              
      
            </div>
        </div>
    )
}

export default Records