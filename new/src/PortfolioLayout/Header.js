import React from 'react'
import "./Header.css";
import HeroSection from '../HeroSection/HeroSection';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ContactUs from '../ContactUs/ContactUs';
import { Link } from 'react-router';
export default function Header() {
    return (
        <>
            <div className='Header'>
                <nav>
                    <div className="cont1">
                        <ul class="b">
                            <li><div id="img"></div></li>
                            <li id="name">AMARJIT PATEL</li>
                            <li id="home"><Link to='/' element={<HeroSection />}>HOME</Link></li>
                            <li id="about"><Link to='/About' element={<About />}>ABOUT</Link></li>
                            <li id="projects"><Link to='/Project' element={<Projects />}>PROJECTS</Link></li>
                            <li id="contact"><Link to='/Contact' element={<ContactUs />}>CONTACT</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
