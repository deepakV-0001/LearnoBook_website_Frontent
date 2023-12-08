import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import SchoolPage from './Components/ForEducation/SchoolPage/SchoolPage';
import College from './Components/ForEducation/CollegePage/College';
import SignUp from './Components/Auth/SignUp/SignUp';
import Login from './Components/Auth/Login/Login';
// import Blog from './Components/Blog/BlogDetail';
import BookDetail from './Components/BookDetail/BookDetail';
import IITMain from './Components/Download/Papers/PaperPages/IITMain'
import IITAdvance from './Components/Download/Papers/PaperPages/IITAdvance'
import Neet from './Components/Download/Papers/PaperPages/Neet'
// import Cart from './Components/CartSection/Cart';
// import Payment from './Components/Payment/Payment';
// import Purchase from './Components/Payment/PurchaseSection/Purchase';
 import Coaching from './Components/ForEducation/Coaching/Coaching';
// import Paper from './Components/Download/Papers/Paper/Paper';
 import NcertBook from './Components/NcertBook/NcertBook';
// import SubjectBookDetail from './Components/NcertBook/SubjectBookDetail/SubjectBookDetail'
 import Exampler from './Components/Download/PaperComponent/Exampler/Exampler';
// import Ebook from './Components/EbookPage/EbookPage';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
 <Routes>
      
    <Route path="/" element={<Home/>}/>
     
     <Route path="/school" element={<SchoolPage/>}/>
        <Route path="/college" element={<College/>}/>
      {/* <Route path="/blog" element={<Blog/>}/> */}
      <Route path="/book-detail" element={<BookDetail/>}/>
      <Route path="/coaching" element={<Coaching/>}/>
       <Route path="/exampler" element={<Exampler/>}/>
      <Route path="/ncert-book" element={<NcertBook/>}/>
      <Route path="/iit-main" element={<IITMain/>}/>
       <Route path="/iit-advance" element={<IITAdvance/>}/>
      <Route path="/neet" element={<Neet/>}/>  
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
