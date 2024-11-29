import React from 'react'
import "./ContactUs.css"
export default function ContactUs() {
  return (
    <>
        <div className='Contact'>
        <nav>
        <div className="cont1">
            <ul>
                <li><div id="img"></div></li>
                <li id="name">AMARJIT PATEL</li>
                <li id="home"><a href="herosection.html">HOME</a></li>
                <li id="about"><a href="About.html">ABOUT</a></li>
                <li id="projects"><a href="Project.html">PROJECTS</a></li>
                <li id="contact"><a href="Contact.html">CONTACT</a></li>
            </ul>
        </div>
    </nav>
    
    <div class="contact-container"/>
        <h1>Contact Me</h1>
        <p>If you have any questions, feel free to reach out using the form below.</p>
        <form class="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required/>

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
    </>
  )
}

