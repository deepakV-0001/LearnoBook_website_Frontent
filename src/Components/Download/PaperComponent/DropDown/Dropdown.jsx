import React, { useState } from 'react';
import '../DropDown/Dropdown.css'
import { IoIosArrowDown } from "react-icons/io";


const Dropdown = ({ title, options, initial =-1 }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initial);
console.log(selected)
  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleClick = (i) => {
    setSelected(i);
  };

  const renderOptions = () => {
    if (!options) {
      return;
    }

    return options.map((option, i) => (
      <li
        onClick={() => handleClick(i)}
        key={i}
        className={`dropdown__list-item ${i === selected ? 'dropdown__list-item--active' : ''}`}
      >
        {option}
      </li>
    ));
  };

  return (
    <div className="dropdown">
      <div
        onClick={toggleDropdown}
        className="dropdown__toggle dropdown__list-item head-drop"
      >
        {title}<IoIosArrowDown/>
       
      </div>
      <ul className={`dropdown__list ${open ? 'dropdown__list--active' : ''}`}>
        {renderOptions()}
      </ul>
    </div>
  );
};



export default Dropdown