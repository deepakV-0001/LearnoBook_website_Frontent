import React from 'react'
import '../Publisher/Publisher.css'
import SchoolHeader from '../ForEducation/SchoolPage/SchoolHeader/SchoolHeader'
import CollegeHelpComp from '../ForEducation/CollegePage/CollegeHelp/CollegeHelpComp'
import Journey from '../ForEducation/CollegePage/CollegeJourney/Journey'
import img1 from '../Assets/Images/publishmid1.png'
import img2 from '../Assets/Images/publishmid2.png'
import img3 from '../Assets/Images/publishmid3.png'
import img4 from '../Assets/Images/publishmid4.png'
import headImg from '../Assets/Images/publish.png'
import btmImg from '../Assets/Images/publish_btm.png'

const Publisher = () => {
    const collegeData=[
        {
            img: img1,
            color: "#FF725E",
            title:"Efficient Digital Editing Tools",
            desc:"Simplify the publishing workflow with our advanced PDF editing features. Publishers can seamlessly edit, review, and enhance their digital content, ensuring a polished and professional presentation for readers.",
        },
        {
            img: img4,
            color: "#55A0C5",
            title:"Direct Integration with Bookstore",
            desc:"Forge direct connections with readers by listing your books in our integrated Kindle Bookstore. Allow users to purchase Kindle versions effortlessly, expanding your market reach and increasing the accessibility of your publications.",
        },
        {
            img: img2,
            color: "#83BB26",
            title:"Expanded Digital Library Access",
            desc:"Showcase your catalog in our digital library, providing readers with easy access to your publications. This centralized space serves as a virtual bookshelf, enhancing the visibility of your content and attracting a broader audience.",
        },
        {
            img: img3,
            color: "#184655",
            title:"Collaborative Publishing Spaces",
            desc:"Facilitate collaboration among authors, editors, and contributors in virtual workspaces. Our platform offers a secure environment making the publishing process more efficient and fostering a sense of community among your team.",
        },
    ];
  return (
    <div className='publisher-container'>
        <SchoolHeader img={headImg} head1={"Redefining  "}  head2={"in the Digital Era "} highlight1={"Publishing"} highlight2={""} desc={" In a world driven by digital innovation, LearnoBook stands at the forefront of reshaping how publishers engage with their audience. Our platform is not just a space for readers; it's a dynamic hub that empowers publishers to amplify their reach, streamline processes, and elevate the overall reading experience."} />
        <CollegeHelpComp  head={"How LearnoBook Empowers Publishers"} collegeData={collegeData} />
        <h2 className='publish-btm-heading'>
        Get LearnoBook for <span>Publishers</span>
        </h2>
        <Journey head={""} img={btmImg} desc={"At LearnoBook, we're committed to empowering coaching centers with innovative tools that elevate the teaching and learning experience. Join us in embracing the future of education."} />
    </div>
  )
}

export default Publisher