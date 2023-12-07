import React from 'react'
import { Link } from 'react-router-dom'
const ExcelComponent = (props) => {
    return (
        <>
            <div className="excel-box">
                <span style={{ backgroundColor: `${props.color}` }}><img src={props.img} alt="" /></span>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <Link to="">Read More</Link>
            </div>
        </>
    )
}

export default ExcelComponent