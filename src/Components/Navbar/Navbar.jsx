
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
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
    if (itemName == 'about') {
      Geeks();
    }
    setShowDropdown(false);
  };

  var a = document.getElementById("about");
  function Geeks() {

    window.scroll({
      top: 700,
      behavior: 'smooth'
    });

  }

  const [showNav, setShowNav] = useState(false);

  return (
    <div className='main-container'>
      <div className="nav-logo">
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-side-menu'>
        <span className='hide-btn'><NavBtns /></span>
        <span className='navbar-hamp-menu'><BiMenuAltRight onClick={() => setShowNav(!showNav)} /></span>
      </div>

      {showNav && <div className="navbar-options navbar">
        <Link className={`navIcons ${activeItem === 'about' ? 'active' : ''}`} id="about" onClick={() => handleItemClick('about')} to="/" >About</Link>
        <li className='education-nav'><Link className={`navIcons education-navicons-drop ${activeItem === 'education' ? 'active' : ''}`} onClick={() => handleItemClick('education')} to="/">For Education <IoIosArrowForward className="ar-btn" /></Link>
          <ul className='education-drop'>
            <li><Link className='education-drop-nacIcons' to="/school">School</Link></li>
            <li><Link className='education-drop-nacIcons' to="/college">college</Link></li>
            <li><Link className='education-drop-nacIcons' to="/coaching">Coaching</Link></li>
          </ul>
        </li>
        <Link className={`navIcons ${activeItem === 'Publishers' ? 'active' : ''}`} onClick={() => handleItemClick('Publishers')} to="/publishers">For Publishers</Link>
        <Link className={`navIcons ${activeItem === 'library' ? 'active' : ''}`} onClick={() => handleItemClick('library')} to="/ebook">Library</Link>
        <li className='education-nav'><Link className={`navIcons education-navicons-drop ${activeItem === 'download' ? 'active' : ''}`} onClick={() => handleItemClick('download')} to="/">Free Download <IoIosArrowForward className="ar-btn" /></Link>
          <ul className='education-drop'>
            <li><Link className='education-drop-nacIcons' to="/ncert-book">NCERT Book</Link></li>
            <li><Link className='education-drop-nacIcons' to="/exampler">NCERT Exampler</Link></li>
            <li><Link className='education-drop-nacIcons' to="/iit-main">JEE Main Paper</Link></li>
            <li><Link className='education-drop-nacIcons' to="/iit-advance">JEE Advance Paper</Link></li>
            <li><Link className='education-drop-nacIcons' to="/neet">NEET Paper</Link></li>

          </ul>
        </li>
        <Link className={`navIcons ${activeItem === 'blog' ? 'active' : ''}`} onClick={() => handleItemClick('blog')} to="/blog">Blog</Link>
        <Link className={`navIcons ${activeItem === 'shop' ? 'active' : ''}`} onClick={() => handleItemClick('shop')} to="/shop">Shop</Link>
        <Link className={`navIcons ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')} to="/contact">Contact Us</Link>
        <Link className="respons-btn"> <NavBtns setShowNav={setShowNav} /></Link>

      </div>}
    </div>
  );
}

export default Navbar;

