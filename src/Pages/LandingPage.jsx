import React from 'react'
import Landing from '../components/Landing'
import Reviews from "../components/Reviews"
import About from "../components/About"
import Footer from "../components/Footer"
import Works from '../components/Works'

function LandingPage() {
  return (
    <div className='container'>
   <Landing/>
   <About/>
   <Works/>
   <Reviews/>
   <Footer/>
    </div>
  )
}

export default LandingPage;