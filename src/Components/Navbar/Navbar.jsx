
import '../Navbar/Navbar.css'
import logo from './logo.png'
const Navbar=()=> {
  return (
    <div className='main-container' >
     <div className="nav-logo">
        <img src={logo} alt='logo'/>
     </div>
     <div className='navbar-side-menu'>
        <div className="navbar-btns">
            
        </div>
     </div>
      
    </div>
  );
}

export default Navbar;
