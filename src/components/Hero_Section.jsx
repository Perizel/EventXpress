import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// IMAGES
import Hero_bg_1 from '../assets/hero-bg-1.png'
// import Hero_bg_2 from '../assets/hero-bg-2.jpg'
// import Hero_bg_3 from '../assets/hero-bg-3.jpg'
// import Hero_bg_4 from '../assets/hero-bg-4.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop='true'>
                <SwiperSlide><img src={Hero_bg_1} alt='' /></SwiperSlide>
                <SwiperSlide><img src={Hero_bg_1}  alt=''/></SwiperSlide>
                <SwiperSlide><img src={Hero_bg_1}  alt=''/></SwiperSlide>
                <SwiperSlide><img src={Hero_bg_1}  alt=''/></SwiperSlide>
            </Swiper>

            <div className='hero-section'>
                <button className='hero-btn'>Business</button>
                <h1>Africa Startup Festival</h1>
                <div className='hero-time-container'>
                    <div className='hero-location'>
                        <FontAwesomeIcon icon={faLocationDot} className='clr-yellow' />
                        <p>Ado Ekiti</p>
                    </div>
                    <div className='hero-date'>
                        <FontAwesomeIcon icon={faCalendar} className='clr-yellow' />
                        <p>30th August, 2023</p>
                    </div>
                </div>
                <div className='hero-btns'>
                    <button className='details-btn'>Details</button>
                    <button className='book-event-btn'>Book Event</button>
                </div>
            </div>
        </div>
    )
}
