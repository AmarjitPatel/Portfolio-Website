import React from 'react'
import "./About.css"
export default function About() {
  return (
    <>
        <div className='About'>
        <nav>
        <div className="cont1">
            <ul class="b">
                <li><div id="img"></div></li>
                <li id="name">AMARJIT PATEL</li>
                <li id="home"><a href="herosection.html">HOME</a></li>
                <li id="about"><a href="About.html">ABOUT</a></li>
                <li id="projects"><a href="Project.html">PROJECTS</a></li>
                <li id="contact"><a href="Contact.html">CONTACT</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <div class="container">
            <div class="content">
                <h2>Welcome to My Portfolio</h2>
                <p>
                    Hi, I'm <b>Amarjit Patel</b>, a passionate web developer and designer. I specialize in creating interactive and visually appealing websites using the latest web technologies.
                </p>
                <p>
                    With a focus on clean and efficient code, I aim to deliver a seamless user experience that combines functionality with aesthetics. My projects range from simple static pages to complex web applications, and I'm constantly learning new tools and techniques to stay ahead in this fast-paced industry.
                </p>
            </div>

            <section class="values-section">
                <h2>Our Core Values</h2>
                <div class="values-container">
                    <div class="value-card">
                        <h3>Innovation</h3>
                        <p>We embrace creativity and constantly seek new solutions for web development challenges.</p>
                    </div>
                    <div class="value-card">
                        <h3>Quality</h3>
                        <p>Our focus is on producing high-quality code and user-friendly designs.</p>
                    </div>
                    <div class="value-card">
                        <h3>Collaboration</h3>
                        <p>We believe in working closely with our clients to bring their vision to life.</p>
                    </div>
                </div>
            </section>

            <section class="team-section">
                <h2>Meet the Team</h2>
                <div class="team-container">
                    <div class="team-member">
                        <div class="card">
                            <div id='team1'></div>
                            <div class="card-content">
                                <h3>Amarjit Patel</h3>
                                <p>Front-End Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="card">
                            <div id='team2'></div>
                            <div class="card-content">
                                <h3>Amarjit Patel</h3>
                                <p>Back-End Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="card">
                            <div id='team3'></div>
                            <div class="card-content">
                                <h3>Amarjit Patel</h3>
                                <p>Back-End Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
        </div>
    </>
  )
}
