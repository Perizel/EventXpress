import React from 'react'
import card_1 from '../assets/card-1.png'
import card_2 from '../assets/card-2.png'
import card_3 from '../assets/card-3.png'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function UpcomingEvents() {
    return (
        <section className='upcoming-events'>
            <h2>Upcoming <span className='clr-yellow'>Events</span></h2>

            <div className='cards'>
                {/* Card-1 */}
                <div className='card'>
                    <div className='card-img'>
                        <img src={card_1} alt='' />
                    </div>

                    <div className='card-content'>
                        <h3>Fast and Powerful like you</h3>
                        <div className='card-date-container'>
                            <button className='card-date-btn'>Business</button>
                            <div className='card-date'>
                                <FontAwesomeIcon icon={faCalendar} />
                                <small className='date'>18th August, 2023</small>
                            </div>
                        </div>
                        <p>Discover groundbreaking opportunities and expand your network at our premier business summit, featuring influential speakers and industry pioneers.</p>
                        <div className='card-location-container'>
                            <div className='card-location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small className='location'>Ado-Ekiti</small>
                            </div>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>

                {/* Card-2 */}
                <div className='card'>
                    <div className='card-img'>
                        <img src={card_2} alt='' />
                    </div>

                    <div className='card-content'>
                        <h3>Fast and Powerful like you</h3>
                        <div className='card-date-container'>
                            <button className='card-date-btn'>Art</button>
                            <div className='card-date'>
                                <FontAwesomeIcon icon={faCalendar} />
                                <small className='date'>21st August, 2023</small>
                            </div>
                        </div>
                        <p>Immerse yourself in a captivating artistic journey at our gallery exhibition, showcasing the works of talented artists and celebrating creativity.</p>
                        <div className='card-location-container'>
                            <div className='card-location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small className='location'>Ikere-Ekiti</small>
                            </div>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>

                {/* Card-3 */}
                <div className='card'>
                    <div className='card-img'>
                        <img src={card_3} alt='' />
                    </div>

                    <div className='card-content'>
                        <h3>Fast and Powerful like you</h3>
                        <div className='card-date-container'>
                            <button className='card-date-btn'>Social</button>
                            <div className='card-date'>
                                <FontAwesomeIcon icon={faCalendar} />
                                <small className='date'>23rd August, 2023</small>
                            </div>
                        </div>
                        <p>Join us for an unforgettable evening of fun and connection at our charity gala, supporting a worthy cause and making a positive impact in the community.</p>
                        <div className='card-location-container'>
                            <div className='card-location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small className='location'>Emure-Ekiti</small>
                            </div>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>

            <button className='all-event-btn'>ALL EVENT</button>
        </section>
    )
}
