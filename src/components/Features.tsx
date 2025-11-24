import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const featuresData = [
  {
    icon: Zap,
    title: 'Process 10x More Data, Instantly',
    description: 'Our platform crunches massive datasets in seconds, giving you real-time insights to make data-driven decisions faster than ever before. Reduce processing time and boost your productivity.',
  },
  {
    icon: Shield,
    title: 'Fortify Your Defenses with Advanced Security',
    description: 'Protect your sensitive data with multi-layered security protocols, including end-to-end encryption, intrusion detection, and continuous vulnerability assessments. Sleep soundly knowing your assets are safe.',
  },
  {
    icon: TrendingUp,
    title: 'Increase Conversion Rates by 40%',
    description: 'Personalize customer experiences with AI-driven recommendations and targeted messaging. Watch your conversion rates soar as you deliver the right content to the right people at the right time.',
  },
]

function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Empowering You with Intelligent Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
