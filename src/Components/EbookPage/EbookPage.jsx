import React from 'react'
import './EbookPage.css'
import Ebook_header from './Ebook-header/Ebook_header'
import EducationBtns from '../ForEducation/Education_btns/EducationBtns'
import Dropdown from '../Download/PaperComponent/DropDown/Dropdown'
import dotCircle from '../ForEducation/SchoolPage/HelpSection/Group.png'
import headerImg from './ebbokpage.png'
import { FiSearch } from "react-icons/fi";
import EbookMiddle from './EbookMiddle/EbookMiddle'
import BestSeller from './BestSeller/BestSeller'
import FreeEbook from './FreeEbook/FreeEbook'
import Ebook_carousal from './Ebook_carousal/Ebook_carousal'
import Contact from '../Home/Contact/Contact'


const EbookPage = () => {
  const options1 = ['Apple', 'Orange', 'Pear', 'Mango'];
  const options2 = ['Apple', 'Orange', 'Pear', 'Mango'];
  const options3 = ['Apple', 'Orange', 'Pear', 'Mango'];
  return (
    <div className='ebook-page-container'>
      <Ebook_header />
      <div className="ebook-page-header-btns">
        <EducationBtns />
      </div>
      <div className="ebook-page-img-text">
        <div className="ebook-page-header-img">
          <img className='dot-circle-ebook-page' src={dotCircle} alt="" />
          <img className='ebook-page-header-image' src={headerImg} alt="" />
        </div>
        <p>Library of Ebooks</p>
      </div>
      <div className="ebook-page-drop-search">
        <span><FiSearch /><input type='text' placeholder='Search' /></span>
        <Dropdown title={"Genre"} options={options1} />
        <Dropdown title={"Type"} options={options1} />
        <Dropdown title={"Sort"} options={options1} />
        <Dropdown title={"More Filters"} options={options1} />
      </div>
      <div className="ebook-page-latest-section">
        <EbookMiddle />
      </div>
      <div className="bestSeller-section">
        <BestSeller />
      </div>
      <div className="freeEbook-section">
        <FreeEbook />
      </div>
      <div className="ebook-carousal-section">
        <Ebook_carousal/>
      </div>
      {/* <Contact/> */}
    </div>
  )
}

export default EbookPage