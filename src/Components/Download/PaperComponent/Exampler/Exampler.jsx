import React from 'react'
import DropDown from '../DropDown/Dropdown'
import '../DropDown/Dropdown.css'
import PaperHead from '../../Papers/Paper/PaperHead'
import PaperMiddleComp from '../../Papers/Paper/PaperMiddleComp'
import exmhead from '../exmHead.png'
import './ClassWise/ClassWise'
import exm from '../../Papers/exmpler.png'
import ClassWise from './ClassWise/ClassWise'
import back from './back.png'

const Exampler = () => {
  const classData=[
    {
      text:"NCERT Book for Class 12",
      color:'back',
    },
    {
      text:"NCERT Book for Class 11",
      color:'back',
    },
    {
      text:"NCERT Book for Class 10",
      color:'back',
    },
    {
      text:"NCERT Book for Class 9",
      color:'back',
    },
    {
      text:"NCERT Book for Class 8",
      color:'back',
    },
    {
      text:"NCERT Book for Class 7",
      color:'back',
    },
    
    {
      text:"NCERT Book for Class 6",
      color:'back',
    },
    
  ];


  const text = ["NCERT Exemplar Free PDF ", "From Class 6 to 12", "Easy To Edit and Access"];
  const options1 = ['Apple', 'Orange', 'Pear', 'Mango'];
  const options2 = ['Apple', 'Orange', 'Pear', 'Mango'];
  const options3 = ['Apple', 'Orange', 'Pear', 'Mango'];
  return (
    <div className='exampler-container'>
      <PaperHead head={"NCERT Exemplar"} img={exmhead} />
      <div className="exmpler-drop-container">
      <div><DropDown title={"NCERT Exemplar"} options={options1} /></div>
      <div> <DropDown title={"Subject"} options={options2} /></div>
      <div> <DropDown title={"Author"} options={options3} /></div>
      </div>
      <PaperMiddleComp head={"NCERT Exemplar for class 6-12"} img={exm} desc={"The NCERT Exemplar is an invaluable educational resource that serves as a supplement to the standard NCERT (National Council of Educational Research and Training) textbooks in India. It is designed to provide students with a more comprehensive and challenging learning experience, offering a rich array of practice problems and exercises that go beyond the scope of the regular textbooks. The primary aim of NCERT Exemplar books is to enhance students' problem-solving skills and deepen their understanding of various subjects.One of the distinctive features of the NCERT Exemplar is its emphasis on a higher level of difficulty. The questions presented in these books are meticulously crafted to be more intricate and thought-provoking, pushing students to engage with the material at a deeper level."} text={text} />
    <ClassWise classData={classData} head={'Class Wise NCERT Exemplar'} />
    </div>
  )
}

export default Exampler