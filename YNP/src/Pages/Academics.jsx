import React from 'react'
import { Outlet } from 'react-router'
import { Helmet } from 'react-helmet-async' // ✅ Import Helmet

const Academics = () => {
  return (
    <>
      <Helmet>
        <title>Academics | YNP College of Pharmacy, Palghar</title>
        <meta
          name="description"
          content="Explore the academic excellence of YNP College of Pharmacy, Palghar — offering D.Pharm and B.Pharm programs with well-structured syllabi, scholarship opportunities, and expert faculty guidance."
        />
        <meta
          name="keywords"
          content="YNP College of Pharmacy, Palghar, Academics, D.Pharm, B.Pharm, Pharmacy Courses, Syllabus, Scholarship"
        />
        <meta property="og:title" content="Academics - YNP College of Pharmacy" />
        <meta
          property="og:description"
          content="Learn more about our D.Pharm and B.Pharm programs, designed to prepare skilled professionals in the pharmaceutical field."
        />
        <meta property="og:image" content="/images/academics-banner.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Outlet />
    </>
  )
}

export default Academics
