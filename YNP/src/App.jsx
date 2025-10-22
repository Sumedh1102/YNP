import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ.jsx' 
import SMContact from './Components/SMContact.jsx'
import Contact from './Components/Contact.jsx'
const App = () => {
  return (
<>
<Navbar/>
<Outlet/>
<FAQ/>
<Contact/>
<Footer/>
</>
  )
}

export default App
