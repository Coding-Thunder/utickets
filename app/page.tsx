import AirplaneMain from '@/components/AirplaneMain'
import CompareFares from '@/components/CompareFares'
import FeaturedDestinations from '@/components/Destinations'
import FAQSection from '@/components/FAQSection'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const RootPage = () => {
  return (
    <main>
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <CompareFares />
      <AirplaneMain />
      <FAQSection />
    </main>
  )
}

export default RootPage