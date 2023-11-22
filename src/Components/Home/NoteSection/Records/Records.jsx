import React from 'react'
import '../Records/Records.css'
import Bookmark from './Bookmark.svg'
import Cloud from './Cloud.svg'
import Crayon from './Crayon.svg'
import Heart from './Heart.svg'
import Notability from './Notability.svg'
import Record from './Play Record.svg'


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
       
    ];
    const data2=[
        
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
        
    ]
    return (
        <div className='records-container'>
            <div className="records-boxes">
                <div className="record-boxes-child1">
                {
                    recordData.map((item) => (
                        <div className={`records-box `}>
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
                <div className="record-boxes-child2">
                {
                    data2.map((item) => (
                        <div className={`records-box `}>
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
        </div>
    )
}

export default Records