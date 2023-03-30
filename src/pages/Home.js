import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
//import Gallery from '../components/gallery'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Welcome from '../components/Welcome'

function Home() {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <About/>
    
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home
