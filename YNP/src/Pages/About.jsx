import React from 'react'
import { Helmet } from 'react-helmet-async' // ✅ Import Helmet
import Hero from '../About/Hero.jsx'
import Timeline from '../About/Timeline.jsx'
import Committes from '../About/Committes.jsx'
import Vision from '../About/Vision.jsx'
import Mission from '../About/Mission.jsx'
import Header from '../About/Header.jsx'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | YNP College of Pharmacy, Palghar</title>
        <meta
          name="description"
          content="Learn about YNP College of Pharmacy, Palghar — our vision, mission, milestones, and committees that drive excellence in pharmaceutical education and student development."
        />
        <meta
          name="keywords"
          content="YNP College of Pharmacy, Palghar, About YNP, Vision Mission, Pharmacy Education, College Committees, Yashwantrao Naik Pharmacy College"
        />
        <meta property="og:title" content="About YNP College of Pharmacy, Palghar" />
        <meta
          property="og:description"
          content="Discover our mission to nurture competent pharmacy professionals through quality education and innovation."
        />
        <meta property="og:image" content="/images/about-ynp.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Hero />
      <Vision />
      <Mission />
      <Timeline />
      <Committes />
    </>
  )
}

export default About
