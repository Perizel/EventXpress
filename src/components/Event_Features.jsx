import React from 'react'
import Google from '../assets/Google.png'
import Debutify from '../assets/debutify.png'
import Elegares from '../assets/elegares.png'
import Slack from '../assets/slack.png'
import Raxo from '../assets/raxo.png'
import Teleport from '../assets/teleport.png'
import PlayEngine from '../assets/playEngine.png'

export default function EventFeatures() {
    return (
        <section className='event-features'>
            <h2>Event Features</h2>

            <div className='event-features-cards-container'>
                {/* Top cards */}
                <div className='event-features-cards'>
                    {/* Card 1 */}
                    <div className='event-features-card'>
                        <img src={Raxo} alt="" />
                    </div>
                    {/* Card 2 */}
                    <div className='event-features-card'>
                        <img src={Elegares} alt="" />
                    </div>
                    {/* Card 3 */}
                    <div className='event-features-card'>
                        <img src={PlayEngine} alt="" />
                    </div>
                    {/* Card 4 */}
                    <div className='event-features-card'>
                        <img src={Slack} alt="" />
                    </div>
                </div>

                {/* Bottom cards */}
                <div className='event-features-cards'>
                    {/* Card 5 */}
                    <div className='event-features-card'>
                        <img src={Teleport} alt="" />
                    </div>
                    {/* Card 6 */}
                    <div className='event-features-card'>
                        <img src={Debutify} alt="" />
                    </div>
                    {/* Card 7 */}
                    <div className='event-features-card'>
                        <img src={Google} alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
