import React from 'react'
import { Helmet } from 'react-helmet-async' // ✅ Import Helmet
import Faculty from '../DPharm/Faculty'

const DpharmF = () => {
  return (
    <>
      <Helmet>
        <title>D.Pharm Faculty | YNP College of Pharmacy, Palghar</title>
        <meta
          name="description"
          content="Meet the skilled D.Pharm faculty at YNP College of Pharmacy, Palghar. Our experienced teachers and mentors are committed to providing practical and theoretical knowledge to develop future pharmacists."
        />
        <meta
          name="keywords"
          content="D.Pharm Faculty, YNP College of Pharmacy, Palghar, Pharmacy Lecturers, Diploma Pharmacy Education, Pharmaceutical Faculty"
        />
        <meta property="og:title" content="D.Pharm Faculty - YNP College of Pharmacy" />
        <meta
          property="og:description"
          content="Explore our expert D.Pharm faculty who guide students with quality education and hands-on pharmaceutical training."
        />
        <meta property="og:image" content="/images/dpharm-faculty.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Faculty />
    </>
  )
}

export default DpharmF
