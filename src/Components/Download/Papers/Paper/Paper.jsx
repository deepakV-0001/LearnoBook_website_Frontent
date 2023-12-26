import React from 'react'
import '../Paper/Paper.css'
import SamplePaper from './SamplePaper'
import PaperHead from './PaperHead'
import midImg from '../../../Assets/Images/middle_img.png'
import pap from '../../../Assets/Images/paper.png'
import PaperMiddleComp from './PaperMiddleComp'
const Paper = (props) => {
    
    const paperData=[
        {
            img:pap,
        },
        {
            img:pap,
        },
        {
            img:pap,
        },
        {
            img:pap,
        },
        {
            img:pap,
        },
       
    ]
    return (
        <div className='paper-container'>
           <PaperHead head={props.head}  img={props.img}/>
           <PaperMiddleComp head={props.head} text={props.text} desc={props.desc} img={midImg}/>
            <div className="sample-paper-section">
                <h2>Sample Papers</h2>
                <div className="sample-paper-boxes">
                    {
                        paperData.map((item)=>(
                            <SamplePaper img={item.img} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Paper