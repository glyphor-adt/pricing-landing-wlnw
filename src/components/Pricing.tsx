import React from 'react'
import { Check, X } from 'lucide-react'
import { Button } from './ui/Button'

const pricingData = [
  {
    title: 'Starter',
    price: 'Free',
    features: ['Up to 5 team members', 'Basic analytics', 'Community support'],
    cta: 'Get Started',
    mostPopular: false,
  },
  {
    title: 'Pro',
    price: '$19/month',
    features: ['Unlimited team members', 'Advanced analytics', 'Priority support', 'Dedicated account manager'],
    cta: 'Start Free Trial',
    mostPopular: true,
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    features: ['Custom integrations', 'White-labeling', '24/7 premium support', 'Dedicated success manager'],
    cta: 'Contact Sales',
    mostPopular: false,
  },
]

function Pricing() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Simple, Flexible Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-xl p-6 ${plan.mostPopular ? 'border-4 border-primary' : ''}`}>
              {plan.mostPopular && <div className="bg-primary text-primary-foreground py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block">Most Popular</div>}
              <h3 className="text-3xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 text-5xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    {index === 0 ? <X className="w-5 h-5 mr-2 text-red-500" /> : <Check className="w-5 h-5 mr-2 text-green-500" />}
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg transition-all duration-300">{plan.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
