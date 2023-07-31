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
                        <small>28th July, 2023</small>
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
                        <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.Reprehenderit esse labore id veniam</p>
                        <div className='time-container'>
                            <div className='time'>
                                <FontAwesomeIcon icon={faClock} />
                                <small>10:00 am - 2:30 pm</small>
                            </div>
                            <div className='location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small>San Fracisco, CA</small>
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
                        <h3>1st Day</h3>
                        <small>28th July, 2023</small>
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
                        <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.Reprehenderit esse labore id veniam</p>
                        <div className='time-container'>
                            <div className='time'>
                                <FontAwesomeIcon icon={faClock} />
                                <small>10:00 am - 2:30 pm</small>
                            </div>
                            <div className='location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small>San Fracisco, CA</small>
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
                        <h3>2nd Day</h3>
                        <small>29th July, 2023</small>
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
                        <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.Reprehenderit esse labore id veniam</p>
                        <div className='time-container'>
                            <div className='time'>
                                <FontAwesomeIcon icon={faClock} />
                                <small>10:00 am - 2:30 pm</small>
                            </div>
                            <div className='location'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small>San Fracisco, CA</small>
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
