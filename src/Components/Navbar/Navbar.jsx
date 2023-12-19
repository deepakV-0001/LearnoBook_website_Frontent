
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Navbar.css'
import logo from './logo.png'
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import NavBtns from './NavBtns';


const Navbar = () => {

  const [activeItem, setActiveItem] = useState('home');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAuth,setShowAuth]=useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const heartRef = useRef(null);

    
  useEffect(()=>{
    const auth=localStorage.getItem('users');
    if(auth){
      setShowAuth(false);
    }
    else{
      setShowAuth(true);
    }
  });

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (itemName == 'about') {
      Geeks();
    }
    setShowDropdown(false);
  };


  function Geeks() {

    window.scroll({
      top: 700,
      behavior: 'smooth'
    });
    

  }

//navbar scrolling animation section start 

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (heartRef.current) {
      const heartStyle = {
        width: scrollPosition > 100 ? '90%' : '90%',
        position: scrollPosition > 1 ? 'fixed' : 'absolute',
        top: scrollPosition > 100 ? '0px' : '100px',
      };

      Object.assign(heartRef.current.style, heartStyle);
    }
  }, [scrollPosition]);

//navbar scrolling animation section end

  return (
    <div className='main-container'>
      <div className="nav-logo">
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-side-menu'>
        { showAuth &&<span className='hide-btn'><NavBtns /></span>}
        <span className='navbar-hamp-menu'><BiMenuAltRight onClick={() => setShowNav(!showNav)} /></span>
      </div>

      {showNav && <div className="navbar-options navbar" id="heart" ref={heartRef}>
        <Link className={`navIcons ${activeItem === 'about' ? 'active' : ''}`} id="about" onClick={() => handleItemClick('about')} to="/" >About</Link>
        <li className='education-nav'><Link className={`navIcons education-navicons-drop  ${activeItem === 'education' ? 'active' : ''}`} >For Education <IoIosArrowForward className="ar-btn" /></Link>
          <ul className='education-drop '>
            <li><Link className='education-drop-nacIcons' onClick={() => handleItemClick('education')} to="/school">School</Link></li>
            <li><Link className='education-drop-nacIcons' onClick={() => handleItemClick('education')} to="/college">college</Link></li>
            <li><Link className='education-drop-nacIcons' onClick={() => handleItemClick('education')} to="/coaching">Coaching</Link></li>
          </ul>
        </li>
        <Link className={`navIcons ${activeItem === 'Publishers' ? 'active' : ''}`} onClick={() => handleItemClick('Publishers')} to="/publisher">Publisher</Link>
        <Link className={`navIcons ${activeItem === 'library' ? 'active' : ''}`} onClick={() => handleItemClick('library')} to="/library">Library</Link>
        <li className='education-nav'><Link className={`navIcons education-navicons-drop ${activeItem === 'download' ? 'active' : ''}`} >Free Download <IoIosArrowForward className="ar-btn" /></Link>
          <ul className='education-drop'>
            <li><Link className='education-drop-nacIcons' onClick={() => handleItemClick('download')} to="/ncert-book">NCERT Book</Link></li>
            <li><Link className='education-drop-nacIcons' onClick={() => handleItemClick('download')} to="/exampler">NCERT Exampler</Link></li>
            <li><Link className='education-drop-nacIcons' onClick={() => handleItemClick('download')} to="/iit-main">JEE Main Paper</Link></li>
            <li><Link className='education-drop-nacIcons' onClick={() => handleItemClick('download')} to="/iit-advance">JEE Advance Paper</Link></li>
            <li><Link className='education-drop-nacIcons' onClick={() => handleItemClick('download')} to="/neet">NEET Paper</Link></li>
          </ul>
        </li>
        <Link className={`navIcons ${activeItem === 'blog' ? 'active' : ''}`} onClick={() => handleItemClick('blog')} to="/blog">Blog</Link>
        <Link className={`navIcons ${activeItem === 'shop' ? 'active' : ''}`} onClick={() => handleItemClick('shop')} to="/shop">Shop</Link>
        <Link className={`navIcons ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')} to="/contact">Contact Us</Link>
        <Link className="respons-btn"> <NavBtns  /></Link>

      </div>}
    </div>
  );
}

export default Navbar;

