import FeaturedDestinations from '@/components/Home/Destinations'
import FAQSection from '@/components/Home/FAQSection'
import HeaderLine from '@/components/Home/HeaderLine'
import Hero from '@/components/Home/Hero'
import PopularRoutes from '@/components/Home/PopularRoutes'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
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