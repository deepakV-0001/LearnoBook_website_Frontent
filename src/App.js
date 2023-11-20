import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import 

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/how-it-works" element={<HowItWorks/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
