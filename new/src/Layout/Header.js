import React from 'react'
import { Link } from 'react-router'
import "./Header.css"
export default function Header() {
  return (
    <>
        <div className='header'>
        <nav>
        <div className="cont1">
            <ul class="b">
                <li><div id="img"></div></li>
                <li id="name">AMARJIT PATEL</li>
                <li id="home"><a href="herosection.html">HOME</a></li>
                <li id="about"><Link to='/About' element={<About/>}>ABOUT</Link></li>
                <li id="projects"><Link to='Projects' element={<progress/>}>PROJECTS</Link></li>
                <li id="contact"><Link to='/Contact' element={<ContactUs/>}>CONTACT</Link></li>
            </ul>
        </div>
    </nav>
        </div>
    </>
  )
}
