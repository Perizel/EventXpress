import React from 'react'

import Youtube from '../assets/youtube-logo.png'
// import Youtube_text from '../assets/youtube-text.png'
import Spotify from '../assets/spotify.png'
import Business_submit_img_1 from '../assets/business-summit-img-1.png'
import Business_submit_img_2 from '../assets/business-summit-img-2.png'
import Business_submit_img_3 from '../assets/business-summit-img-3.png'
import Business_submit_img_4 from '../assets/business-summit-img-4.png'
import Business_submit_img_5 from '../assets/business-summit-img-5.png'
import Business_submit_img_6 from '../assets/business-summit-img-6.png'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function IntlBusinessSummit() {
    return (
        <section className='intl-business-summit'>
            <h2>International Business Summit</h2>

            <p>Event Schedules</p>
            {/* Card-1 */}
            <div className='business-summit-card'>
                <div className='business-summit-card-left-container'>
                    <div className='business-summit-card-left'>
                        <h3>1st Day</h3>
                        <small>27th August, 2023</small>
                        <div className='business-summit-card-stream'>
                            <small>Live Stream</small>
                            <div className='box-images'>
                                <img src={Youtube} alt=''/>
                                <img src={Spotify} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='business-summit-card-middle'>
                        <div className='title'>
                            <h3>Fast and powerful like you</h3>
                            <button className='business-summit-card-btn'>Business</button>
                        </div>
                        <p>Join us at our 2 days exclusive networking gala for industry leaders and innovators, showcasing cutting-edge solutions and fostering collaborations</p>
                        <div className='time-container'>
                            <div className='time'>
                                <FontAwesomeIcon icon={faClock} />
                                <small>10:00 am - 2:30 pm</small>
                            </div>
                            <div className='location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small>Ado-Ekiti, Ekiti State</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='business-summit-card-right'>
                    <img src={Business_submit_img_1} alt=''/>
                    <img src={Business_submit_img_2} alt=''/>
                </div>
            </div>

            {/* Card-2 */}
            <div className='business-summit-card'>
                <div className='business-summit-card-left-container'>
                    <div className='business-summit-card-left'>
                        <h3>2nd Day</h3>
                        <small>28th August, 2023</small>
                        <div className='business-summit-card-stream'>
                            <small>Live Stream</small>
                            <div className='box-images'>
                                <img src={Youtube} alt=''/>
                                <img src={Spotify} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='business-summit-card-middle'>
                        <div className='title'>
                            <h3>Fast and powerful like you</h3>
                            <button className='business-summit-card-btn'>Business</button>
                        </div>
                        <p>Join us at our 2 days exclusive networking gala for industry leaders and innovators, showcasing cutting-edge solutions and fostering collaborations</p>
                        <div className='time-container'>
                            <div className='time'>
                                <FontAwesomeIcon icon={faClock} />
                                <small>10:00 am - 2:30 pm</small>
                            </div>
                            <div className='location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small>Ado-Ekiti, Ekiti State</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='business-summit-card-right'>
                    <img src={Business_submit_img_3} alt=''/>
                    <img src={Business_submit_img_4} alt=''/>
                </div>
            </div>

            {/* Card-3 */}
            <div className='business-summit-card'>
                <div className='business-summit-card-left-container'>
                    <div className='business-summit-card-left'>
                        <h3>Single Day</h3>
                        <small>29th August, 2023</small>
                        <div className='business-summit-card-stream'>
                            <small>Live Stream</small>
                            <div className='box-images'>
                                <img src={Youtube} alt=''/>
                                <img src={Spotify} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='business-summit-card-middle'>
                        <div className='title'>
                            <h3>Fast and powerful like you</h3>
                            <button className='business-summit-card-btn'>Seminar</button>
                        </div>
                        <p>Unlock new insights and strategies at our upcoming seminar, where experts will delve into the latest trends and empower your business growth.</p>
                        <div className='time-container'>
                            <div className='time'>
                                <FontAwesomeIcon icon={faClock} />
                                <small>10:00 am - 2:30 pm</small>
                            </div>
                            <div className='location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small>Ikere, Ekiti</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='business-summit-card-right'>
                    <img src={Business_submit_img_5} alt=''/>
                    <img src={Business_submit_img_6} alt=''/>
                </div>
            </div>
        </section>
    )
}
