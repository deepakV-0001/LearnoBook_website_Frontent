import React from 'react'

const PaperHead = (props) => {
    return (
        <div className="paper-header">
            <h2>{props.head}</h2>
            <span><img src={props.img} alt="" /></span>
        </div>
    )
}

export default PaperHead