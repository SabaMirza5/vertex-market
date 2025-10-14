import React from 'react'
import HeroSection from '../HeroSection'
import AboutUsSection from '../AboutUsSection'
import LegalDisclaimer from '../LegalDisclaimer'
import WhyChooseUs from '../WhyChooseUs'
import Testimonials from '../Testimonials'


function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUsSection/>
      <LegalDisclaimer/>
      <WhyChooseUs/>
      <Testimonials/>
     
    </div>
  )
}

export default Home
