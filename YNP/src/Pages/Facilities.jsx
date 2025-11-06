import React from 'react'
import { Helmet } from 'react-helmet-async' // ✅ Import Helmet
import Instruments from '../Facilities/Instruments.jsx'
import Labs from '../Facilities/Labs.jsx'
import Classrooms from '../Facilities/Classrooms.jsx'
import OtherFacilities from '../Facilities/OtherFacilities.jsx'

const Facilities = () => {
  return (
    <>
      <Helmet>
        <title>Facilities | YNP College of Pharmacy, Palghar</title>
        <meta
          name="description"
          content="Explore the modern facilities at YNP College of Pharmacy, Palghar. Our campus features advanced laboratories, well-equipped classrooms, and top-quality instruments to enhance student learning."
        />
        <meta
          name="keywords"
          content="Pharmacy College Facilities, YNP College of Pharmacy, Palghar, Pharmacy Labs, Instruments, Classrooms, College Infrastructure"
        />
        <meta property="og:title" content="Facilities - YNP College of Pharmacy" />
        <meta
          property="og:description"
          content="Discover the world-class facilities at YNP College of Pharmacy, Palghar including modern labs, instruments, and classrooms designed for academic excellence."
        />
        <meta property="og:image" content="/images/facilities-campus.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Labs />
      <Instruments />
      <Classrooms />
      <OtherFacilities />
    </>
  )
}

export default Facilities
