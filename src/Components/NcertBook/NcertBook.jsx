import React from 'react'
import '../NcertBook/NcertBook.css'
import PaperHead from '../Download/Papers/Paper/PaperHead'
import DropDown from '../Download/PaperComponent/DropDown/Dropdown'
import PaperMiddleComp from '../Download/Papers/Paper/PaperMiddleComp'
import exm from '../Assets/Images/subjectimg.png'
import headImg from '../Assets/Images/ncert-main.png'
import ClassWise from '../Download/PaperComponent/Exampler/ClassWise/ClassWise'
import account from '../Assets/Images/Accountancy.png'
import economics from '../Assets/Images/Economoics.png'
import physics from '../Assets/Images/physicas.png'
import chemistry from '../Assets/Images/chemistry.png'
import bio from '../Assets/Images/Biology.png'
import buisnes from '../Assets/Images/buisnes.png'
import english from '../Assets/Images/English.png'
import hindi from '../Assets/Images/Hindi.png'
import science from '../Assets/Images/Science.png'
import evs from '../Assets/Images/EVS.png'
import social_science from '../Assets/Images/scoial_sciens.png'
import math from '../Assets/Images/math.png'
import SubjectWise from '../Download/PaperComponent/Exampler/SubjectWise/SubjectWise'
import PopularBook from './PopularBook/PopularBook'


const NcertBook = () => {
    const classData=[
        {
          text:"NCERT Book for Class 12",
          color:'#4EA9DE',
        },
        {
          text:"NCERT Book for Class 11",
          color:'#4EA9DE',
        },
        {
          text:"NCERT Book for Class 10",
          color:'#4EA9DE',
        },
        {
          text:"NCERT Book for Class 9",
          color:'#4EA9DE',
        },
        {
          text:"NCERT Book for Class 8",
          color:'#4EA9DE',
        },
        {
          text:"NCERT Book for Class 7",
          color:'#4EA9DE',
        },
        
        {
          text:"NCERT Book for Class 6",
          color:'#4EA9DE',
        },
        {
            text:"NCERT Book for Class 5",
            color:'#4EA9DE',
          },
          {
            text:"NCERT Book for Class 4",
            color:'#4EA9DE',
          },
          {
            text:"NCERT Book for Class 3",
            color:'#4EA9DE',
          },
          {
            text:"NCERT Book for Class 2",
            color:'#4EA9DE',
          },
          {
            text:"NCERT Book for Class 1",
            color:'#4EA9DE',
          },
        
      ];
    
      const subjectData=[
        {
          text:"Accountancy",
          color:account,
        },
        {
          text:"Economics",
          color:economics,
        },
        {
          text:"Physics",
          color:physics,
        },
        {
          text:"Chemistry",
          color:chemistry,
        },
        {
          text:"Biology",
          color:bio,
        },
        {
          text:"Business Studies",
          color:buisnes,
        },
        
        {
          text:"English",
          color:english,
        },
        {
            text:"Hindi",
            color:hindi,
          },
          {
            text:"Science",
            color:science,
          },
          {
            text:"EVS",
            color:evs,
          },
          {
            text:"Social Science",
            color:social_science,
          },
          {
            text:"Mathematics",
            color:math,
          },
        
      ];

    const options1 = ['Apple', 'Orange', 'Pear', 'Mango'];
    const options2 = ['Apple', 'Orange', 'Pear', 'Mango'];
    const options3 = ['Apple', 'Orange', 'Pear', 'Mango'];
    const text = ["NCERT Exemplar Free PDF ", "From Class 6 to 12", "Easy To Edit and Access"];
    return (
        <div className='ncert-main'>
          <div className="ncert-main-background-container">
            <PaperHead head={"NCERT Books"} img={headImg} />
            <div className="ncert-main-drop">
                <DropDown title={"NCERT Exemplar"} options={options1} />
                <DropDown title={"Subject"} options={options2} />
                <DropDown title={"Author"} options={options3} />
            </div></div>
            <PaperMiddleComp head={"NCERT Books for class 1-12"} img={exm} desc={"NCERT books are renowned for their comprehensive and well-structured content. They are meticulously crafted by a team of experienced educators and subject matter experts who ensure that the material is not only accurate but also aligned with the latest educational standards. The books cover a wide array of subjects, providing a holistic approach to learning that fosters a deep understanding of the concepts.Secondly, NCERT books are designed to cater to students of various learning abilities. The language used in these textbooks is clear, concise, and accessible, making complex topics more understandable for students. The content is presented in a logical and sequential manner, facilitating a smooth progression from basic to advanced concepts. This inclusivity ensures that students from diverse backgrounds can benefit from the standardized and high-quality education provided by NCERT books."} text={text} />
            <ClassWise classData={classData}  head={'Class Wise NCERT Exemplar'} />
            <SubjectWise classData={subjectData}  head={'Subject Wise NCERT Books'} />
            <PopularBook  />
        </div>
    )
}

export default NcertBook