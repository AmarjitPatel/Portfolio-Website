import React from 'react'
import "./Projects.css"
export default function Projects() {
    return (
        <>
            <div className='Projects'>
                <section class="projects-section">
                    <div class="container">
                        <h2>My Projects</h2>
                        <div class="projects-grid">
                            <div class="project-card">
                                <div id='img1'></div>
                                <div class="project-info">
                                    <h3>Crossy Road</h3>
                                    <p>Fun Game.</p>
                                </div>
                            </div>

                            <div class="project-card">
                                <div id='img2'></div>
                                <div class="project-info">
                                    <h3>Flappy Bird</h3>
                                    <p>Race to the finish line.</p>
                                </div>
                            </div>

                            <div class="project-card">
                                <div id='img3'></div>
                                <div class="project-info">
                                    <h3>Capture the falling balls</h3>
                                    <p>A competitve experience</p>
                                </div>
                            </div>

                            <div class="project-card">
                                <div id='img4'></div>
                                <div class="project-info">
                                    <h3>Campus Dekho</h3>
                                    <p>A FullStack based website with server</p>
                                </div>
                            </div>

                            <div class="project-card">
                                <div id='img5'></div>
                                <div class="project-info">
                                    <h3>Tic Tac Toe</h3>
                                    <p>Match Your Right Way in the Arena</p>
                                </div>
                            </div>

                            <div class="project-card">
                                <div id='img6'></div>
                                <div class="project-info">
                                    <h3>Coming Soon....</h3>
                                    <p>Stay Tuned</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
