import React from 'react'
import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden mb-4">
              <input type="email" placeholder="Your email" className="bg-gray-800 text-gray-400 py-2 px-4 focus:outline-none w-full" aria-label="Your email" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 transition-colors duration-200" aria-label="Subscribe">Subscribe</button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-200"><Facebook className="w-6 h-6" aria-label="Facebook" /></a>
              <a href="#" className="hover:text-white transition-colors duration-200"><Twitter className="w-6 h-6" aria-label="Twitter" /></a>
              <a href="#" className="hover:text-white transition-colors duration-200"><Instagram className="w-6 h-6" aria-label="Instagram" /></a>
              <a href="#" className="hover:text-white transition-colors duration-200"><Linkedin className="w-6 h-6" aria-label="LinkedIn" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
