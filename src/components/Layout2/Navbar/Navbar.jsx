import { ChefHat, Search } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                FlavorFusion
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-600 transition font-medium">Home</a>
              <a href="/recipes" className="text-gray-700 hover:text-orange-600 transition font-medium">Recipes</a>
              <a href="/categories" className="text-gray-700 hover:text-orange-600 transition font-medium">Categories</a>
              <a href="/about" className="text-gray-700 hover:text-orange-600 transition font-medium">About</a>
              <a href="/contact" className="text-gray-700 hover:text-orange-600 transition font-medium">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-orange-50 rounded-full transition">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="hidden sm:block px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full hover:shadow-lg transition font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar;