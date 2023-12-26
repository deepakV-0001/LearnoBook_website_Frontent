import React from 'react'
import '../CollegeHelp/CollegeHelp.css'
import img1 from '../../../Assets/Images/Frame4.png'
import img2 from '../../../Assets/Images/Frame1.png'
import img3 from '../../../Assets/Images/Frame2.png'
import img4 from '../../../Assets/Images/Frame3.png'
import CollegeHelpComp from './CollegeHelpComp'

const CollegeHelp = () => {
    const collegeData=[
        {
            img: img1,
            color: "#FF725E",
            title:"Effortless PDF Editing and Note-Making",
            desc:"Streamline your study routine with our intuitive PDF editing tools. Annotate, highlight, and organize your materials seamlessly, making note-taking an efficient and enjoyable process.",
        },
        {
            img: img4,
            color: "#55A0C5",
            title:"Integration",
            desc:"Say goodbye to the hassle of searching for textbooks. Purchase Kindle versions directly from our platform and have your entire library at your fingertips, ensuring a cost-effective and convenient reading experience.",
        },
        {
            img: img2,
            color: "#83BB26",
            title:"Centralized Library Access",
            desc:"Access your readings from the digital library, eliminating the need for heavy backpacks and ensuring that your essential resources are always within reach. Explore a vast collection of academic materials with ease.",
        },
        {
            img: img3,
            color: "#184655",
            title:"Virtual Collaboration Spaces",
            desc:"Connect with peers and educators through virtual classrooms. Foster real-time discussions, share resources, and collaborate on projects effortlessly. Our platform brings the classroom experience to the digital realm.",
        },
    ];
    return (
       <>
       <CollegeHelpComp head={"How It Helps"} collegeData={collegeData}/>
       </>
    )
}

export default CollegeHelp