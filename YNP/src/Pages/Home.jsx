import React from 'react'
import { Helmet } from 'react-helmet-async' // ✅ Import Helmet
import Hero from '../Components/1Hero.jsx'
import Info from '../Components/Info.jsx'
import Grid from '../Components/Grid.jsx'
import HContact from '../Components/HContact.jsx'
import Desk from '../Components/Desk.jsx'
import Fees from '../Components/Fees.jsx'
import Contact from '../Components/Contact.jsx'
import Merit from '../Components/Merit.jsx'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | YNP College of Pharmacy, Palghar</title>
        <meta
          name="description"
          content="Welcome to YNP College of Pharmacy, Palghar — nurturing future pharmacists with quality education, modern facilities, and experienced faculty. Explore D.Pharm and B.Pharm courses today."
        />
        <meta
          name="keywords"
          content="YNP College of Pharmacy, Palghar, D.Pharm, B.Pharm, Pharmacy College, Pharmaceutical Education, Yashwantrao Naik Pharmacy College"
        />
        <meta property="og:title" content="YNP College of Pharmacy, Palghar" />
        <meta
          property="og:description"
          content="Empowering future pharmacists through advanced learning and hands-on experience."
        />
        <meta property="og:image" content="/images/college-banner.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className='overflow-hidden'>
        <Hero />
        <Info />
        <Grid />
        <Desk />
        <HContact />
        <Fees />
        <Merit/>
      </div>
    </>
  )
}

export default Home
