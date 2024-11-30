import React from 'react'
import "./HeroSection.css"
import { Link } from 'react-router'
import Projects from '../Projects/Projects'
import About from '../About/About'
import ContactUs from '../ContactUs/ContactUs'
export default function HeroSection() {
  return (
    <>
      <div className='Hero'>
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
    <div class="cont2">
        <div class="contacts">
        <a href="https://www.linkedin.com/in/amarjit-patel-454011255/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><div><i id="linkedin" class="fa-brands fa-linkedin"></i></div></a>
        <a href="https://x.com/home"><div><i id="twitter" class="fa-brands fa-twitter"></i></div></a>
        <a href="https://www.instagram.com/"><div><i id="instagram" class="fa-brands fa-instagram"></i></div></a>
        <a href="https://github.com/"><div><i id="github" class="fa-brands fa-github"></i></div></a>
        <a href="https://www.facebook.com/"><div><i id="facebook" class="fa-brands fa-facebook"></i></div></a>
        </div>
        <div class="info">
            <div class="text-container">
                <h1>
                  <span class="prefix">HEY, i'M</span>
                  <div class="message">
                    <div class="word1"> AMARJIT PATEL</div>
                    <div class="word2"> SOFTWARE ENGINEER </div>
                    <div class="word3"> FRONTEND DEVELOPER</div>
                    <div class="word4"> BACKEND DEVELOPER</div>
                  </div>
                </h1>
              </div>
            <p id="p1" >A FullStack focused Web Developer building the Frontend & Backend of Websites and Web</p>
            <p id="p2" >Applications that leads to the success of the overall product</p>
            <Link to='/Projects' element={<Projects/>}><button>PROJECTS</button></Link>
        </div>
        <footer>
        <p>&copy; 2024 MyPortfolio | All Rights Reserved.</p>
    </footer>
    </div>
    </div>
    </>
  )
}
