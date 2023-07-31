import React from 'react'

import Feedback_img_1 from '../assets/feedback-img-1.png'
import Feedback_img_2 from '../assets/feedback-img-2.png'
import Feedback_img_3 from '../assets/feedback-img-3.png'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

export default function EventFeedbacks() {
    return (
        <section className='event-feedback'>
            <p>Event Feedbacks</p>
            <h2>What People Say?</h2>

            <div className='event-feedback-cards'>
                {/* Card-1 */}
                <div className='event-feedback-card'>
                    <div className='event-feedback-card-top'>
                        <div className='event-feedback-card-img'>
                            <img src={Feedback_img_1}  alt=''/>
                            <p>Nick Cole</p>
                        </div>
                        <div className='ratings'>
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStarHalfStroke} className='clr-yellow' />
                        </div>
                    </div>
                    <div className='event-feedback-card-bottom'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
                {/* Card-2 */}
                <div className='event-feedback-card'>
                    <div className='event-feedback-card-top'>
                        <div className='event-feedback-card-img'>
                            <img src={Feedback_img_2}  alt=''/>
                            <p>Esther Howard</p>
                        </div>
                        <div className='ratings'>
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStarHalfStroke} className='clr-yellow' />
                        </div>
                    </div>
                    <div className='event-feedback-card-bottom'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
                {/* Card-3 */}
                <div className='event-feedback-card'>
                    <div className='event-feedback-card-top'>
                        <div className='event-feedback-card-img'>
                            <img src={Feedback_img_3} alt='' />
                            <p>Abioye Segun</p>
                        </div>
                        <div className='ratings'>
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStar} className='clr-yellow' />
                            <FontAwesomeIcon icon={faStarHalfStroke} className='clr-yellow' />
                        </div>
                    </div>
                    <div className='event-feedback-card-bottom'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
