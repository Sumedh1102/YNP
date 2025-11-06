import React from 'react'
import { Helmet } from 'react-helmet-async' // ✅ Import Helmet
import Faculty from '../BPharm/Faculty'

const BpharmF = () => {
  return (
    <>
      <Helmet>
        <title>B.Pharm Faculty | YNP College of Pharmacy, Palghar</title>
        <meta
          name="description"
          content="Meet the experienced B.Pharm faculty at YNP College of Pharmacy, Palghar. Our dedicated professors and lecturers provide quality education, mentorship, and research guidance to future pharmacists."
        />
        <meta
          name="keywords"
          content="B.Pharm Faculty, YNP College of Pharmacy, Palghar, Pharmacy Professors, Pharmacy Education, Pharmaceutical Faculty"
        />
        <meta property="og:title" content="B.Pharm Faculty - YNP College of Pharmacy" />
        <meta
          property="og:description"
          content="Discover our expert B.Pharm faculty who inspire and guide students toward excellence in the pharmaceutical field."
        />
        <meta property="og:image" content="/images/bpharm-faculty.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Faculty />
    </>
  )
}

export default BpharmF
