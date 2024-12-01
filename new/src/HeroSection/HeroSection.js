import React from 'react'
import "./HeroSection.css"
import { Link } from 'react-router'
import Projects from '../Projects/Projects'
export default function HeroSection() {
  return (
    <>
      <div className='Hero'>
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
            <Link to='/ProjectBtn' element={<Projects />}><button>PROJECTS</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
