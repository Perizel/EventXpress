import React from 'react'
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

            <p className='benefit-p'>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.
                Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
            <button className='benefits-btn'>Register Now</button>
        </section>
    )
}
