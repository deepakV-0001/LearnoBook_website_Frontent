
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
  const [isActive,setIsActive]=useState('');
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
    
  };
  const handleItemNav = (itemName) => {
    setIsActive(itemName);
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
        <Link className={`navIcons ${activeItem === 'about' ? 'active' : ''}`} id="about" onClick={() => {handleItemClick('about');handleItemNav('')}} to="/" >About</Link>
        <li className={`education-nav ${isActive==='education'? 'education-active':'education-not-active'}`}><Link className={`navIcons `} onClick={()=>{handleItemNav('education');handleItemClick('')}} >For Education <IoIosArrowForward className="ar-btn" /></Link>
          <ul className='education-drop'>
            <li><Link className={`education-drop-nacIcons ${activeItem === 'school' ? 'active' : ''}`} onClick={() => {handleItemClick('school')}} to="/school">School</Link></li>
            <li><Link className={`education-drop-nacIcons ${activeItem === 'college' ? 'active' : ''}`} onClick={() => handleItemClick('college')} to="/college">college</Link></li>
            <li><Link className={`education-drop-nacIcons ${activeItem === 'coaching' ? 'active' : ''}`} onClick={() => handleItemClick('coaching')} to="/coaching">Coaching</Link></li>
          </ul>
        </li>
        <Link className={`navIcons ${activeItem === 'Publishers' ? 'active' : ''}`} onClick={() =>{ handleItemClick('Publishers');handleItemNav('')}} to="/publisher">Publisher</Link>
        <Link className={`navIcons ${activeItem === 'library' ? 'active' : ''}`} onClick={() =>{ handleItemClick('library');handleItemNav('')}} to="/library">Library</Link>
        <li className={`education-nav ${isActive==='download'? 'education-active':'education-not-active'}`}><Link className={`navIcons `} onClick={()=>{handleItemNav('download');handleItemClick('')}}>Free Download <IoIosArrowForward className="ar-btn" /></Link>
          <ul className='education-drop'>
            <li><Link className={`education-drop-nacIcons ${activeItem === 'ncert-book' ? 'active' : ''}`} onClick={() => handleItemClick('ncert-book')} to="/ncert-book">NCERT Book</Link></li>
            <li><Link className={`education-drop-nacIcons ${activeItem === 'exampler' ? 'active' : ''}`} onClick={() => handleItemClick('exampler')} to="/exampler">NCERT Exampler</Link></li>
            <li><Link className={`education-drop-nacIcons ${activeItem === 'iit-main' ? 'active' : ''}`} onClick={() => handleItemClick('iit-main')} to="/iit-main">JEE Main Paper</Link></li>
            <li><Link className={`education-drop-nacIcons ${activeItem === 'iit-advance' ? 'active' : ''}`} onClick={() => handleItemClick('iit-advance')} to="/iit-advance">JEE Advance Paper</Link></li>
            <li><Link className={`education-drop-nacIcons ${activeItem === 'neet' ? 'active' : ''}`} onClick={() => handleItemClick('neet')} to="/neet">NEET Paper</Link></li>
          </ul>
        </li>
        <Link className={`navIcons ${activeItem === 'blog' ? 'active' : ''}`} onClick={() =>{ handleItemClick('blog');handleItemNav('')}} to="/blog">Blog</Link>
        <Link className={`navIcons ${activeItem === 'shop' ? 'active' : ''}`} onClick={() => {handleItemClick('shop');handleItemNav('')}} to="/shop">Shop</Link>
        <Link className={`navIcons ${activeItem === 'contact' ? 'active' : ''}`} onClick={() =>{ handleItemClick('contact');;handleItemNav('')}} to="/contact">Contact Us</Link>
        <Link className="respons-btn"> <NavBtns  /></Link>

      </div>}
    </div>
  );
}

export default Navbar;

