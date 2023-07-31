import React from 'react'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
// import { faS } from '@fortawesome/free-solid-svg-icons'

export default function Feedback_Form() {
    return (
        <section className='FeedbackForm'>
            <h3>Send Us Your Feedback</h3>

            <div className='feedback-form-inputs'>
                <div className='form-left'>
                    <div className='input'>
                        <input type='text' name='name' id='name' placeholder='Name' />
                    </div>
                    <div className='input'>
                        <input type='text' name='event-attended' id='event-attended' placeholder='Event Attended' />
                    </div>
                    <div className='rate-event'>
                        <p>Rate Event</p>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className='form-right'>
                    <div className='textarea'>
                        <label form='comment'>Comment</label>
                        <textarea id='comment'></textarea>
                    </div>
                    <button className='feedback-btn'>Submit</button>
                </div>
            </div>
        </section>
    )
}
