import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import SchoolPage from './Components/ForEducation/SchoolPage/SchoolPage';
import College from './Components/ForEducation/CollegePage/College';
import SignUp from './Components/Auth/SignUp/SignUp';
import Login from './Components/Auth/Login/Login';
import SubjectBookDetail from './Components/NcertBook/SubjectBookDetail/SubjectBookDetail';
import Blog from './Components/Blog/Blog';
import BookDetail from './Components/BookDetail/BookDetail';
import IITMain from './Components/Download/Papers/PaperPages/IITMain'
import IITAdvance from './Components/Download/Papers/PaperPages/IITAdvance'
import Neet from './Components/Download/Papers/PaperPages/Neet'
import Cart from './Components/CartSection/Cart';
import Purchase from './Components/Payment/PurchaseSection/Purchase';
import Coaching from './Components/ForEducation/Coaching/Coaching';
import NcertBook from './Components/NcertBook/NcertBook';
import ClassBookDetail from './Components/NcertBook/ClassBookDetail/ClassBookDetail'
import Exampler from './Components/Download/PaperComponent/Exampler/Exampler';
import Publisher from './Components/Publisher/Publisher';
import EbookPage from './Components/EbookPage/EbookPage';
import Payment from './Components/Payment/Payment';
import MainContact from './Components/MainContact/MainContact';
import BlogDetail from './Components/Blog/BlogDetail/BlogDetail'
import Library from './Components/Library/Library';
function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/school" element={<SchoolPage />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/college" element={<College />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ebook-detail" element={<BookDetail />} />
        <Route path="/shop" element={<EbookPage />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/exampler" element={<Exampler />} />
        <Route path="/add-to-cart" element={<Cart />} />
        <Route path="/ncert-book" element={<NcertBook />} />
        <Route path="/class-wise" element={<ClassBookDetail />} />
        <Route path="/single-subject" element={<SubjectBookDetail />} />
        <Route path="/iit-main" element={<IITMain />} />
        <Route path="/iit-advance" element={<IITAdvance />} />
        <Route path="/neet" element={<Neet />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
