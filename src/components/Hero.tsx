import React from 'react'
import { Button } from './ui/Button'

function Hero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}></div>
      <div className="container mx-auto px-4 relative">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Unlock Limitless Potential with AI-Powered Solutions</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">Supercharge your workflows, automate tedious tasks, and gain a competitive edge with our cutting-edge AI platform. From predictive analytics to personalized experiences, we empower you to achieve more.</p>
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Get Started Free</Button>
              <Button variant="secondary" className="border-2 border-gray-300 hover:border-blue-500 text-white px-6 py-3 rounded-xl text-lg transition-all duration-300">Explore Features</Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600"
              alt="AI powered solutions"
              className="rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
