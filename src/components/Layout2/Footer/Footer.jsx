import { ChefHat, Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">FlavorFusion</span>
              </div>
              <p className="text-gray-400">
                Your go-to destination for delicious recipes and culinary inspiration.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">All Recipes</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Submit Recipe</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition">Breakfast</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Lunch & Dinner</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Desserts</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Beverages</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 FlavorFusion. All rights reserved. Made with ❤️ for food lovers.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer;