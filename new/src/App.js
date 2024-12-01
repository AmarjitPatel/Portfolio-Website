import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
import Projects from './Projects/Projects';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';
import Layout from './PortfolioLayout/Layout';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route to='/' element={<Layout/>}>
      <Route path='//' element={<HeroSection/>}></Route>
      <Route path='/About' element={<About/>}> </Route>
      <Route path='/Project' element={<Projects/>}> </Route>
      <Route path='/ProjectBtn' element={<Projects/>}> </Route>
      <Route path='/Contact' element={<ContactUs/>}> </Route>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
