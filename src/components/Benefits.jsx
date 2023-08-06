import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth/Log';
import circle_1 from '../assets/circle-1.png'
import circle_2 from '../assets/circle-2.png'
import circle_3 from '../assets/circle-3.png'

import yellow_icon_bg from '../assets/yellow-bg-small.svg'
import circle_1_icon from '../assets/circle-1-icon.svg'
import circle_2_icon from '../assets/circle-2-icon.svg'
import circle_3_icon from '../assets/circle-3-icon.svg'

// FONT AWESOME
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPeopleLine } from '@fortawesome/free-solid-svg-icons'
// import { faPerson } from '@fortawesome/free-solid-svg-icons'


export default function Benefits() {

    const { authenticated, handleLogout, updateAuthState } = useContext(AuthContext);
    const handleSignIn = () => {
        // ... handle sign-in logic here ...
        updateAuthState(true); // Update the authenticated state after successful sign-in
    };

    return (
        <section className='event-benefits'>
            <h2>Why you should join <span className='clr-yellow'>Event</span></h2>

            <div className='circles'>
                {/* Circle-1 */}
                <div className='circle'>
                    <div className='circle-img'>
                        <img src={circle_1_icon} alt='' className='circle-icon' />
                        <img src={yellow_icon_bg} alt='' className='icon-bg' />
                        <img src={circle_1} alt='' className='circle_img' />
                    </div>
                    <h4>Friendly Team</h4>
                </div>

                {/* Circle-2 */}
                <div className='circle'>
                    <div className='circle-img'>
                        <img src={circle_2_icon} alt='' className='circle-icon' />
                        <img src={yellow_icon_bg} alt='' className='icon-bg' />
                        <img src={circle_2} alt='' className='circle_img' />
                    </div>
                    <h4>The Best Venues</h4>
                </div>

                {/* Circle-3 */}
                <div className='circle'>
                    <div className='circle-img'>
                        <img src={circle_3_icon} alt='' className='circle-icon' />
                        <img src={yellow_icon_bg} alt='' className='icon-bg' />
                        <img src={circle_3} alt='' className='circle_img' />
                    </div>
                    <h4>Awesome Events</h4>
                </div>
            </div>

            <p className='benefit-p'>Join our event to unlock a world of possibilities. Engage with industry experts, gain insights into the latest trends, and connect with like-minded professionals. Elevate your knowledge, broaden your network, and be part of an unforgettable experience that will propel your personal and professional growth.</p>
            {authenticated ? (
                <button className='benefits-btn' onClick={handleLogout}>
                    Logout
                </button>
            ) : (

                <button className='benefits-btn' onClick={handleSignIn}>
                    <Link to='../Signup'> Register Now </Link>
                </button>
            )}
        </section>
    )
}
