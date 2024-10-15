import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom';


interface FooterProps { }

function Footer(props: FooterProps) {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Jobs news letter to receive updates on newly posted jobs
                </p>
                <p className='footer-susbcription_text'>
                    You can unscubsribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to=''>Careers</Link>
                        <Link to=''>Testimonials</Link>
                        <Link to=''>Terms of Service</Link>
                        <Link to=''>Corporate governance</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Jobs</h2>
                        <Link to='/jobs'>Browse Jobs</Link>
                        <Link to=''>Browse Location</Link>
                        <Link to=''>Popular Searches</Link>
                        <Link to=''>Register CV</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to=''>Instagram</Link>
                        <Link to=''>Facebook</Link>
                        <Link to=''>X</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Version</h2>
                        <a href="http://localhost:8080/swagger-ui/index.html" target="_blank" rel="noopener noreferrer">REST</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer