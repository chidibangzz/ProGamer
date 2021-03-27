import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">

                </p>
                <p className='footer-subscription-text'>
                    Feel free to contact me in the contact link above
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="Your Email"
                            className="footer-input" />
                        <Button buttonStyle='btn-outline'>Contact me</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact me</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About ME</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>

                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL @ 2020</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
