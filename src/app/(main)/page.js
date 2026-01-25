'use client';

import React, { useState } from 'react';
import { Search, Clock, Users, ChefHat, TrendingUp, Heart, BookOpen, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function FoodBlogHomepage() {
  const [email, setEmail] = useState('');

  const featuredRecipe = {
    title: "Creamy Tuscan Garlic Chicken",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=1200&h=800&fit=crop",
    category: "Main Course",
    time: "35 min",
    difficulty: "Medium",
    description: "Succulent chicken breasts in a rich, creamy sauce with sun-dried tomatoes and spinach"
  };

  const popularRecipes = [
    {
      title: "Classic Margherita Pizza",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
      category: "Italian",
      time: "25 min",
      servings: 4
    },
    {
      title: "Chocolate Lava Cake",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop",
      category: "Dessert",
      time: "20 min",
      servings: 2
    },
    {
      title: "Thai Green Curry",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
      category: "Asian",
      time: "40 min",
      servings: 4
    },
    {
      title: "Fresh Greek Salad",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
      category: "Salad",
      time: "15 min",
      servings: 4
    }
  ];

  const categories = [
    { name: "Breakfast", icon: "🍳", count: 45 },
    { name: "Lunch", icon: "🥗", count: 68 },
    { name: "Dinner", icon: "🍝", count: 92 },
    { name: "Desserts", icon: "🍰", count: 54 },
    { name: "Beverages", icon: "🍹", count: 32 },
    { name: "Appetizers", icon: "🥟", count: 41 }
  ];

  const latestPosts = [
    {
      title: "10 Quick Weeknight Dinners",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      date: "Jan 20, 2026",
      readTime: "5 min"
    },
    {
      title: "Mastering Homemade Pasta",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
      date: "Jan 18, 2026",
      readTime: "8 min"
    },
    {
      title: "Best Summer Grilling Recipes",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      date: "Jan 15, 2026",
      readTime: "6 min"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>Featured Recipe of the Day</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                {featuredRecipe.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {featuredRecipe.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="font-medium">{featuredRecipe.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="font-medium">{featuredRecipe.difficulty}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                  <span className="font-medium">{featuredRecipe.category}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full hover:shadow-xl transition font-semibold text-lg">
                  View Recipe
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-full hover:shadow-lg transition font-semibold text-lg border-2 border-gray-200 flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Save</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl transform rotate-3"></div>
              <img 
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-orange-600 font-bold text-sm">{featuredRecipe.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Discover recipes for every meal and occasion</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl hover:shadow-xl transition cursor-pointer group border border-orange-100"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition">{category.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} recipes</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Recipes</h2>
              <p className="text-gray-600 text-lg">Most loved by our community</p>
            </div>
            <button className="text-orange-600 font-semibold hover:text-orange-700 transition flex items-center space-x-2">
              <span>View All</span>
              <span>→</span>
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularRecipes.map((recipe, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group cursor-pointer"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-orange-600 font-semibold text-sm">{recipe.category}</span>
                  </div>
                  <button className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition">
                    <Heart className="w-5 h-5 text-orange-600" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                    {recipe.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Culinary Community</h2>
          <p className="text-orange-100 text-lg mb-8">
            Get weekly recipes, cooking tips, and exclusive content delivered to your inbox
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-orange-300 text-gray-900"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-white text-orange-600 rounded-full hover:shadow-xl transition font-bold"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from the Blog</h2>
            <p className="text-gray-600 text-lg">Tips, tricks, and culinary inspiration</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden hover:shadow-xl transition cursor-pointer group"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}