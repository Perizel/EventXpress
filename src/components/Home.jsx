import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Log';

import UpcomingEvents from './UpcomingEvents';
import IntlBusinessSummit from './Intl_Business_Summit';
import Benefits from './Benefits';
import HeroSection from "./Hero_Section";
import Footer from './Footer';
import Logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import EventFeatures from './Event_Features';
import PhotoGallery from './Photo_Gallery';
import EventFeedbacks from './Event_Feedbacks';
import FeedbackForm from './Feedback_Form';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [showLinks, setShowLinks] = useState(false)
    const { authenticated, handleLogout, updateAuthState } = useContext(AuthContext);


    const handleSignIn = () => {
        // ... handle sign-in logic here ...
        updateAuthState(true); // Update the authenticated state after successful sign-in
    };

    return (
        <>
            <header>
                <nav className='header-nav'>
                    <div className='nav-left'>
                        <div className='nav-logo'>
                            <img src={Logo} alt='EventXpress Logo' />
                        </div>

                        <div className="hamburger" onClick={() => setShowLinks(!showLinks)}>
                            <FontAwesomeIcon icon={faBars} />
                            <FontAwesomeIcon icon={faXmark} className="cancel" />
                        </div>

                        <div className='nav-links'>
                            <ul className="nav-links-ul" id={showLinks ? "hidden" : ""}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='about'>About</Link></li>
                                <li><Link to='events'>Events</Link></li>
                                <li><Link to='account'>Account</Link></li>
                                <li><Link to='calendar'>Calendar</Link></li>
                                <li><Link to='contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='nav-right'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search' />
                        {/* Conditional rendering based on the authenticated state */}
                        {authenticated ? (
                            <button className='register-btn' onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <Link to='/Signup'>
                                <button className='register-btn' onClick={handleSignIn}>
                                    Register Now
                                </button>
                            </Link>
                        )}
                    </div>
                </nav>
                <HeroSection />
            </header>

            <UpcomingEvents />
            <Benefits />
            <IntlBusinessSummit />
            <PhotoGallery />
            <EventFeatures />
            <EventFeedbacks />
            <FeedbackForm />
            <Footer />
        </>
    )
}

export default Home