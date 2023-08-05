import React, { useState } from 'react';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
// import { faS } from '@fortawesome/free-solid-svg-icons'
import ThankYou from './ThankYou'

export default function Feedback_Form() {
    const [showThankYou, setShowThankYou] = useState(false);
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = () => {
        setShowThankYou(true);

        // Hide ThankYou page after 5 seconds
        setTimeout(() => {
            setShowThankYou(false);
            setRating(0); // Reset rating when ThankYou page is hidden
        }, 5000);
    };

    return (
        <section className='FeedbackForm'>
            <h3>Send Us Your Feedback</h3>

            {showThankYou ? (
                <ThankYou /> // Display ThankYou component if showThankYou is true
            ) : (
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
                            {[1, 2, 3, 4, 5].map((value) => (
                                <FontAwesomeIcon
                                    key={value}
                                    icon={faStar}
                                    className={value <= rating ? 'star-filled' : ''}
                                    onClick={() => handleRating(value)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='form-right'>
                        <div className='textarea'>
                            <label form='comment'>Comment</label>
                            <textarea id='comment'></textarea>
                        </div>
                        <button className='feedback-btn' onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
