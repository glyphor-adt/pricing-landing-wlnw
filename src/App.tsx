import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
