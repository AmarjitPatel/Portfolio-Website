import React from 'react'
import "./ContactUs.css"
export default function ContactUs() {
    return (
        <>
            <div className='Contact'>
                <main>
                    <section class="contact-section">
                        <div class="contact-content">
                            <div class="text-container">
                                <h1>Contact Me</h1>
                                <p>
                                    I’d love to hear from you! Whether you have a project, a question, or just want to say hi, feel free to drop a message using the form below.
                                </p>
                                <p>
                                    Alternatively, you can reach me at:
                                    <strong><a href="mailto:your.email@example.com">itsa9577@example.com</a></strong>
                                </p>
                                <p>
                                    Or connect with me on social media:
                                </p>
                                <div class="social-links">
                                    <a href="https://www.linkedin.com/in/amarjit-patel-454011255/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a>|
                                    <a href="https://github.com/" target="_blank">GitHub</a>|
                                    <a href="https://x.com/home" target="_blank">Twitter</a>
                                </div>
                            </div>
                            <div class="form-container">
                                <form action="#" method="POST">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                                    </div>
                                    <button type="submit" class="btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

