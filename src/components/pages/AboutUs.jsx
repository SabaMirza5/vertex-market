import React from 'react'
import HeroSection from '../HeroSection'
import AboutUsSection from '../AboutUsSection'
import LegalDisclaimer from '../LegalDisclaimer'
import WhyChooseUs from '../WhyChooseUs'
import Testimonials from '../Testimonials'
import AboutPageSection from '../AboutPageSection'


function AboutUs() {
  return (
    <div className="">
      <AboutPageSection />
      <AboutUsSection/>
      <LegalDisclaimer/>
      <WhyChooseUs/>
     
    </div>
  )
}

export default AboutUs
