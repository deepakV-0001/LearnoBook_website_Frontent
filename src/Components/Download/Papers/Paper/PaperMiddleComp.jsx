import React from 'react'

const PaperMiddleComp = (props) => {
    return (
        <div className="paper-middle">
            <h3>{props.head?props.head:''}</h3>
            <p>{props.desc?props.desc:''}</p>
            <div className="middle-bottom">
                <span><img src={props.img} alt="" /></span>
                <div className="middle-bottom-text">
                    {
                        props.text.map((item)=>(
                            <p>{item}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PaperMiddleComp