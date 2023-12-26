import React from 'react'
import './ClassBookDetail.css'
import Dropdown from '../../Download/PaperComponent/DropDown/Dropdown'
import PaperMiddleComp from '../../Download/Papers/Paper/PaperMiddleComp'
import img from '../../Assets/Images/subjectimg.png'
import SubjectWise from '../../Download/PaperComponent/Exampler/SubjectWise/SubjectWise'
import account from '../../Assets/Images/Accountancy.png'
import economics from '../../Assets/Images/Economoics.png'
import physics from '../../Assets/Images/physicas.png'
import chemistry from '../../Assets/Images/chemistry.png'
import bio from '../../Assets/Images/Biology.png'
import buisnes from '../../Assets/Images/buisnes.png'
import english from '../../Assets/Images/English.png'
import math from '../../Assets/Images/math.png'
import PopularBook from '../PopularBook/PopularBook'


const SubjectBookDetail = () => {
    const text = ["NCERT Exemplar Free PDF ", "From Class 1 to 12", "Easy To Edit and Access"];
    const options1 = ['Apple', 'Orange', 'Pear', 'Mango'];
  const options2 = ['Apple', 'Orange', 'Pear', 'Mango'];
  const options3 = ['Apple', 'Orange', 'Pear', 'Mango'];

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
        text:"Mathematics",
        color:math,
      },
    
  ];
    return (
        <div className='book_detail-container'>
            <h2>NCERT Books For Class 12</h2>
            <div className="exmpler-drop-container">
                <div><Dropdown title={"NCERT Book"} options={options1} /></div>
                <div> <Dropdown title={"Subject"} options={options2} /></div>
                <div> <Dropdown title={"Author"} options={options3} /></div>
            </div>
            <PaperMiddleComp text={text} img={img}/>
            <SubjectWise head={"Subject Wise NCERT Books"} classData={subjectData} />
            <PopularBook/>
            
        </div>
    )
}

export default SubjectBookDetail