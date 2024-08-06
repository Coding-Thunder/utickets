import AboutPageHero from '@/components/About/Hero'
import MissionVision from '@/components/About/MissionVision'
import OurStory from '@/components/About/OurStory'
import TeamSection from '@/components/About/TeamSection'
import React from 'react'

const About = () => {
    return (
        <main>
            <AboutPageHero />
            <MissionVision />
            <TeamSection />
            <OurStory />
        </main>
    )
}

export default About