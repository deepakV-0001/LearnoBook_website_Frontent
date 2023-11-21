import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from '../src/Components/Home/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
     
      {/* <Route path="/for-agents" element={<ForAgents/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/single-blog" element={<BlogSingle/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
