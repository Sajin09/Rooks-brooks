import logo from './Asserts/ROOKS AND BROOKS final png file-01.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/HomePage/Home';
import Project from './Components/Projects/Project';
import NavBar from './Components/HomePage/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Careers from './Components/Careers/Careers';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='home-container row'>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
        <p className='copyright'>Copyright © 2023 Rooks and Brooks Technologies Pvt. Ltd  - All Rights Reserved.</p>
    </BrowserRouter>
  );
}

export default App;
