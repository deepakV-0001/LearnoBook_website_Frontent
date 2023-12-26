import React from 'react'
import '../SubjectBookDetail/SubjectBookDetail.css'
import SingleSubject from '../../Download/PaperComponent/Exampler/SubjectWise/SingleSubject/SingleSubject'
import img from '../../Assets/Images/subjectimg.png'
import Dropdown from '../../Download/PaperComponent/DropDown/Dropdown'
import PaperMiddleComp from '../../Download/Papers/Paper/PaperMiddleComp'

const SubjectBookDetail = () => {

    const text = ["NCERT Exemplar Free PDF ", "From Class 1 to 12", "Easy To Edit and Access"];
    const options1 = ['Apple', 'Orange', 'Pear', 'Mango'];
    const options2 = ['Apple', 'Orange', 'Pear', 'Mango'];
    const options3 = ['Apple', 'Orange', 'Pear', 'Mango'];
    return (
        <div className='book_detail-container'>
            <h2>NCERT Books For Class 12</h2>
            <div className="exmpler-drop-container">
                <div><Dropdown title={"NCERT Book"} options={options1} /></div>
                <div> <Dropdown title={"Subject"} options={options2} /></div>
                <div> <Dropdown title={"Author"} options={options3} /></div>
            </div>
            <PaperMiddleComp text={text} img={img} />
            <SingleSubject />
        </div>
    )
}

export default SubjectBookDetail