import React from 'react'

const CollegeHelpComp = (props) => {
  return (
    <>
     <div className='college-help-container'>
            <h1>{props.head}</h1>
            <div className="college-help-boxes">
              {
                props.collegeData.map((item)=>(
                    <div className="college-help-box " >

                    <span><img src={item.img} alt="" /></span>
                    <div className="college-help-box-content" style={{backgroundColor:`${item.color}`}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                </div>
                ))
              }
            </div>
        </div>
    </>
  )
}

export default CollegeHelpComp