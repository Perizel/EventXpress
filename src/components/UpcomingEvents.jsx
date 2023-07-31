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
                                <small className='date'>28th July, 2023</small>
                            </div>
                        </div>
                        <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
                        <div className='card-location-container'>
                            <div className='card-location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small className='location'>San Fracisco</small>
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
                                <small className='date'>28th July, 2023</small>
                            </div>
                        </div>
                        <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
                        <div className='card-location-container'>
                            <div className='card-location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small className='location'>San Fracisco</small>
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
                                <small className='date'>28th July, 2023</small>
                            </div>
                        </div>
                        <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
                        <div className='card-location-container'>
                            <div className='card-location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small className='location'>San Fracisco</small>
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
