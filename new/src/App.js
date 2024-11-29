import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
import Projects from './Projects/Projects';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HeroSection/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='Projects' element={<Projects/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<ContactUs/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
