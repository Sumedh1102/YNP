import React from 'react'
import Instruments from '../Facilities/Instruments.jsx';
import Labs from '../Facilities/Labs.jsx';
import Classrooms from '../Facilities/Classrooms.jsx';
import OtherFacilities from '../Facilities/OtherFacilities.jsx';  

const Facilities = () => {
  return (
    <>
    <Labs/>
    <Instruments/>
    <Classrooms/>
    <OtherFacilities/>
    </>
  )
}

export default Facilities
