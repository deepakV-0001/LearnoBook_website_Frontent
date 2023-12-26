import React from 'react'
import './EbookPage.css'
import EbookHeader from './Ebook-header/Ebook_header'
import EducationBtns from '../ForEducation/Education_btns/EducationBtns'
// import Dropdown from '../Download/PaperComponent/DropDown/Dropdown'
import dotCircle from '../Assets/Images/dot_circle.png'
import headerImg from '../Assets/Images/ebbokpage.png'
import EbookMiddle from './EbookMiddle/EbookMiddle'
import BestSeller from './BestSeller/BestSeller'
import FreeEbook from './FreeEbook/FreeEbook'
import EbookCarousal from './Ebook_carousal/Ebook_carousal'
import Contact from '../Home/Contact/Contact'
// import carImg from '../Assets/Images/ebbokpage.png'
import EbookPageSearchFilters from './EbookPage_SearchFilters/EbookPage_SearchFilters'


const EbookPage = () => {
 
 
  return (
    <div className='ebook-page-container'>
      <EbookHeader />
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
      <div className="ebook-page-search-component">
        <EbookPageSearchFilters/>
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
        <EbookCarousal />
      </div>
      <Contact/>
    </div>
  )
}

export default EbookPage