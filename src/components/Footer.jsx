import React from 'react'
import Logo_icon from '../assets/logo-icon.png'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <footer className='footer'>
            <nav className='footer-nav'>
                <div className='footer-logo'>
                    <img src={Logo_icon} alt='' />
                </div>

                <div className='footer-nav-links'>
                    <div className='footer-nav-link'>
                        <ul>
                            <li className='clr-yellow'>Company</li>
                            <li>About</li>
                            <li>Events</li>
                            <li>Calender</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='footer-nav-link'>
                        <ul>
                            <li className='clr-yellow'>Find Events</li>
                            <li>Ado-Ekiti</li>
                            <li>ABUAD</li>
                            <li>EKSU</li>
                            <li>GRA</li>
                        </ul>
                    </div>
                    <div className='footer-nav-link'>
                        <ul>
                            <li className='clr-yellow'>Account</li>
                            <li>Booked Events</li>
                            <li>Account settings</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>

                <div className='subscribe'>
                    <ul>
                        <li className='clr-yellow'>Subscribe</li>
                    </ul>
                    <div className='footer-input'>
                        <input type='email' name='email' id='footer-mail' placeholder='Your email' />
                        <button className='footer-btn'>Sign Up</button>
                    </div>

                    <p>Instant sign up for an event, subscribe to get up-to-date notifications.</p>

                    <div className='footer-social-links'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </nav>

            <div className='footer-copyright'>
                <div className='footer-copyright-left'>
                    <small>EDSA Capstone Project</small>
                    <small>&copy; 2023 EventXpress </small>
                </div>

                <div className='footer-copyright-right'>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Language</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
