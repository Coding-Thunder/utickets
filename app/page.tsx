import FeaturedDestinations from '@/components/Destinations'
import FAQSection from '@/components/FAQSection'
import HeaderLine from '@/components/HeaderLine'
import Hero from '@/components/Hero'
import PopularRoutes from '@/components/PopularRoutes'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const RootPage = () => {
  return (
    <main>
      <Hero />
      <PopularRoutes />
      <FeaturedDestinations />
      <HeaderLine />
      <WhyChooseUs />
      <FAQSection />
    </main>
  )
}

export default RootPage