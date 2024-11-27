import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HeroSection/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
