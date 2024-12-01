import React from 'react'
import "./About.css"
export default function About() {
    return (
        <>
            <div className='About'>
                <main>
                    <div class="container">
                        <div class="content">
                            <h2 id='welcome'>Welcome to My Portfolio</h2>
                            <p>
                                Hi, I'm <b>Amarjit Patel</b>, a passionate web developer and designer. I specialize in creating interactive and visually appealing websites using the latest web technologies.
                            </p>
                            <p>
                                With a focus on clean and efficient code, I aim to deliver a seamless user experience that combines functionality with aesthetics. My projects range from simple static pages to complex web applications, and I'm constantly learning new tools and techniques to stay ahead in this fast-paced industry.
                            </p>
                        </div>

                        <section class="values-section">
                            <h2 id='h2'>My Services</h2>
                            <div class="values-container">
                                <div class="value-card">
                                    <i id='html' class="fa-brands fa-html5"></i>
                                    <h2>Html5</h2>
                                </div>
                                <div class="value-card">
                                    <i id='css' class="fa-brands fa-css3-alt"></i>
                                    <h2>Css3</h2>
                                </div>
                                <div class="value-card">
                                    <i id='javascript' class="fa-brands fa-js"></i>
                                    <h2>JavaScript</h2>
                                </div>
                                <div class="value-card">
                                    <i id='web' class="fa-solid fa-code"></i>
                                    <h2>Web Designing</h2>
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
