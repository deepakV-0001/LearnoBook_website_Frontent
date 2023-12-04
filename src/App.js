import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import SchoolPage from './Components/ForEducation/SchoolPage/SchoolPage';
import College from './Components/ForEducation/CollegePage/College';
import SignUp from './Components/Auth/SignUp/SignUp';
import Login from './Components/Auth/Login/Login';
import Blog from './Components/Blog/Blog';
import BookDetail from './Components/BookDetail/BookDetail';
import Cart from './Components/CartSection/Cart';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Cart/>
    <Routes>
      
    {/* <Route path="/" element={<Home/>}/>
     
     <Route path="/school" element={<SchoolPage/>}/>
        <Route path="/college" element={<College/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/book-detail" element={<BookDetail/>}/>
      {/*<Route path="/single-blog" element={<BlogSingle/>}/>*/}
      {/* <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>   */}
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
