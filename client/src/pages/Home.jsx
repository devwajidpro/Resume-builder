import React from 'react'
import Banner from '../components/Home/Banner'
import HeroSection from '../components/Home/HeroSection'
import Feature from '../components/Home/Feature'
import Testimonials from '../components/Home/Testimonials'
import CallToAction from '../components/Home/CallToAction'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <Feature />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
