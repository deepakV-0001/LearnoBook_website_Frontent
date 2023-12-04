
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'
import logo from './logo.png'
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import NavBtns from './NavBtns';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='main-container' >
      <div className="nav-logo">
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-side-menu'>
        <span className='hide-btn'><NavBtns/></span>
        <span className='navbar-hamp-menu'><BiMenuAltRight onClick={() => setShowNav(!showNav)} /></span>
      </div>

      {showNav && <div className="navbar-options navbar">
        <Link className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')} to="/about">About</Link>
        <Link className={activeItem === 'education' ? 'active' : ''} onClick={() => handleItemClick('education')} to="/">For Education <IoIosArrowForward className="ar-btn"/></Link>
        <Link className={activeItem === 'publishers' ? 'active' : ''} onClick={() => handleItemClick('Publishers')} to="/publishers">For Publishers</Link>
        <Link className={activeItem === 'library' ? 'active' : ''} onClick={() => handleItemClick('library')} to="/library">Library</Link>
        <Link className={activeItem === 'community' ? 'active' : ''} onClick={() => handleItemClick('community')} to="/community">Community</Link>
        <Link className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')} to="/contact">Contact Us</Link>
        <Link className="respons-btn"> <NavBtns/></Link>
       
      </div>}
    </div>
  );
}

export default Navbar;








// return (
//   <nav className="navbar">
//     <ul className="nav-list">
//       <li className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>
//         Home
//       </li>
//       <li className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')}>
//         About
//       </li>
//       <li className={`dropdown ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
//         Services
//         <ul className="dropdown-content">
//           <li onClick={() => handleItemClick('service1')}>Service 1</li>
//           <li onClick={() => handleItemClick('service2')}>Service 2</li>
//         </ul>
//       </li>
//       <li className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}>
//         Contact
//       </li>
//     </ul>
//   </nav>
// );
// };