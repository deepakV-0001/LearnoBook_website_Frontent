import React from 'react'
import '../HelpSection/HelpSection.css'
import backCircle from './Group.png'
import stud from './kid.png'
import teach from './teacher.png'
import hand from './Easy.png'
import people from './people.png'
import access from './access.png'
import food from './food.png'
import thumb from './thumb.png'
import com from './Communication.png'

const HelpSection = () => {
    const studData = [
        {
            img: hand,
            title: "Efficiency",
            desc: "Streamline your study routine with easy-to-use tools that enhance comprehension and retention.",
        },
        {
            img: people,
            title: "Collaboration",
            desc: "Work on group projects seamlessly, fostering a collaborative learning environment.",
        },
        {
            img: access,
            title: "Accessibility",
            desc: "Access your study materials from any device, ensuring you're always prepared, whether in class or on the go.",
        },
    ];
    const teachData = [
        {
            img: thumb,
            title: "Effortless Feedback",
            desc: "Provide targeted feedback on student assignments directly within the document.",
        },
        {
            img: food,
            title: "Centralized Resources",
            desc: "Keep all your teaching materials in one place, making it easy to access and share with your students.",
        },
        {
            img: com,
            title: "Simplified Communication",
            desc: "Communicate with students and share resources without  traditional paperwork.",
        },
    ];

    return (
        <div className='help-container'>
            <div className="stu-section">
                <div className="stu-help-img">
                    <img className='img1 com' src={backCircle} alt="" />
                    <img className='stu-img' src={stud} alt="" />
                    <img className='img2 com' src={backCircle} alt="" />

                </div>
                <h2 className='stu-head'>For Students</h2>
                <div className="stu-below-boxes">

                    {
                        studData.map((item) => (
                            <div className="stu-below-box">
                                <span><img src={item.img} alt="" /></span>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="stu-section">
                <div className="stu-help-img">
                    <img className='img1 com' src={backCircle} alt="" />
                    <img className='stu-img' src={teach} alt="" />
                    <img className='img2 com' src={backCircle} alt="" />

                </div>
                <h2 className='stu-head'>For Teachers</h2>
                <div className="stu-below-boxes">

                    {
                        teachData.map((item) => (
                            <div className="stu-below-box">
                                <span><img src={item.img} alt="" /></span>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HelpSection