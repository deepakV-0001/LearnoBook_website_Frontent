import React from 'react'
import { FiSearch } from "react-icons/fi";
import Dropdown from '../../Download/PaperComponent/DropDown/Dropdown';
import '../EbookPage.css'

const EbookPage_SearchFilters = () => {
    const options1 = ['Apple', 'Orange', 'Pear', 'Mango'];
    const options2 = ['Apple', 'Orange', 'Pear', 'Mango'];
    const options3 = ['Apple', 'Orange', 'Pear', 'Mango'];
  return (
    <>
    <div className="ebook-page-drop-search">
          <span><FiSearch /><input type='text' placeholder='Search' /></span>
          <Dropdown title={"Genre"} options={options1} />
          <Dropdown title={"Type"} options={options1} />
          <Dropdown title={"Sort"} options={options1} />
          <Dropdown title={"More Filters"} options={options1} />
        </div>
    </>
  )
}

export default EbookPage_SearchFilters