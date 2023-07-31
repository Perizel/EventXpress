import React from 'react'
import Photo_gallery_1 from '../assets/photo-gallery-1.png'
import Photo_gallery_2 from '../assets/photo-gallery-2.png'
import Photo_gallery_3 from '../assets/photo-gallery-3.png'
import Photo_gallery_4 from '../assets/photo-gallery-4.png'

export default function PhotoGallery() {
    return (
        <section className='photo-gallery'>
            <p>Photo Gallery</p>
            <h2>Memories of Previous Events</h2>

            <div className='gallery-carousel'>
                <img src={Photo_gallery_1} alt=''/>
                <img src={Photo_gallery_4} alt=''/>
                <img src={Photo_gallery_3} alt=''/>
                <img src={Photo_gallery_1} alt=''/>
                <img src={Photo_gallery_2} alt=''/>
                <img src={Photo_gallery_4} alt=''/>
                <img src={Photo_gallery_3} alt=''/>
                <img src={Photo_gallery_3} alt=''/>
            </div>
        </section>
    )
}
