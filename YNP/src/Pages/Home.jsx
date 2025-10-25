import React from 'react'
import Hero from '../Components/1Hero.jsx'
import Info from '../Components/Info.jsx'
import Grid from '../Components/Grid.jsx'
import HContact from '../Components/HContact.jsx'
import Desk from '../Components/Desk.jsx'
import Fees from '../Components/Fees.jsx'
import Contact from '../Components/Contact.jsx'
const Home = () => {
  return (
    <>
     <div className='overflow-hidden'>
    <Hero/>
    <Info/>
    <Grid/>
    <Desk/>
    <HContact/>
    <Fees/>
     </div>
    </>
  )
}

export default Home
