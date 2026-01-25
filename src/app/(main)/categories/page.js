'use client';
import React, { useState } from 'react';
import { ChefHat, Clock, Users, Heart, Star, ArrowRight, TrendingUp, Instagram, Facebook, Twitter } from 'lucide-react';

export default function CategoryPage() {
  const [selectedSort, setSelectedSort] = useState('popular');

  // This would typically come from props or URL params
  const currentCategory = {
    name: "Dinner Recipes",
    description: "Hearty and delicious dinner recipes for every night of the week",
    emoji: "🍽️",
    recipeCount: 92,
    color: "from-orange-600 to-amber-600"
  };

  const categoryRecipes = [
    {
      id: 1,
      title: "Creamy Tuscan Garlic Chicken",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop",
      difficulty: "Medium",
      time: "35 min",
      servings: 4,
      rating: 4.9,
      reviews: 534,
      calories: 450,
      tags: ["Italian", "Comfort Food"],
      popular: true
    },
    {
      id: 2,
      title: "Honey Garlic Glazed Salmon",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
      difficulty: "Easy",
      time: "25 min",
      servings: 4,
      rating: 4.8,
      reviews: 421,
      calories: 380,
      tags: ["Seafood", "Healthy"],
      popular: true
    },
    {
      id: 3,
      title: "Beef and Broccoli Stir Fry",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop",
      difficulty: "Easy",
      time: "20 min",
      servings: 4,
      rating: 4.7,
      reviews: 389,
      calories: 420,
      tags: ["Asian", "Quick"],
      popular: false
    },
    {
      id: 4,
      title: "Classic Lasagna",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&h=400&fit=crop",
      difficulty: "Hard",
      time: "90 min",
      servings: 8,
      rating: 4.9,
      reviews: 678,
      calories: 520,
      tags: ["Italian", "Baked"],
      popular: true
    },
    {
      id: 5,
      title: "Grilled Chicken Caesar Salad",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop",
      difficulty: "Easy",
      time: "30 min",
      servings: 4,
      rating: 4.6,
      reviews: 312,
      calories: 350,
      tags: ["Salad", "Healthy"],
      popular: false
    },
    {
      id: 6,
      title: "Spicy Thai Basil Chicken",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
      difficulty: "Medium",
      time: "25 min",
      servings: 4,
      rating: 4.8,
      reviews: 445,
      calories: 400,
      tags: ["Thai", "Spicy"],
      popular: true
    },
    {
      id: 7,
      title: "Slow Cooker Pot Roast",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop",
      difficulty: "Easy",
      time: "240 min",
      servings: 6,
      rating: 4.9,
      reviews: 567,
      calories: 480,
      tags: ["Comfort Food", "Slow Cooker"],
      popular: false
    },
    {
      id: 8,
      title: "Shrimp Scampi Pasta",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",
      difficulty: "Medium",
      time: "30 min",
      servings: 4,
      rating: 4.7,
      reviews: 398,
      calories: 440,
      tags: ["Seafood", "Pasta"],
      popular: false
    },
    {
      id: 9,
      title: "Chicken Tikka Masala",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
      difficulty: "Medium",
      time: "45 min",
      servings: 6,
      rating: 4.8,
      reviews: 501,
      calories: 460,
      tags: ["Indian", "Spicy"],
      popular: true
    }
  ];

  const relatedCategories = [
    { name: "Breakfast", emoji: "🍳", count: 45, color: "from-yellow-400 to-orange-400" },
    { name: "Lunch", emoji: "🥗", count: 68, color: "from-green-400 to-emerald-400" },
    { name: "Desserts", emoji: "🍰", count: 54, color: "from-pink-400 to-rose-400" },
    { name: "Appetizers", emoji: "🥟", count: 41, color: "from-blue-400 to-cyan-400" }
  ];

  const popularTags = [
    "Quick & Easy", "Comfort Food", "Healthy", "Italian", 
    "Asian", "Vegetarian", "Seafood", "Pasta", "Chicken", "Beef"
  ];

  const sortedRecipes = [...categoryRecipes].sort((a, b) => {
    if (selectedSort === 'popular') return b.reviews - a.reviews;
    if (selectedSort === 'rating') return b.rating - a.rating;
    if (selectedSort === 'time') return parseInt(a.time) - parseInt(b.time);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">

      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r ${currentCategory.color}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-7xl mb-6">{currentCategory.emoji}</div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              {currentCategory.name}
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white font-semibold">{currentCategory.recipeCount} Delicious Recipes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Popular Tags</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gradient-to-br from-orange-50 to-amber-50 text-orange-600 rounded-full hover:shadow-md transition border border-orange-200 font-medium text-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sort & Filter Bar */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-bold text-orange-600">{sortedRecipes.length}</span> recipes
            </p>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-semibold text-gray-700">Sort by:</label>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition bg-white"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="time">Quickest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sortedRecipes.map((recipe) => (
              <div 
                key={recipe.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      recipe.difficulty === 'Easy' ? 'bg-green-500 text-white' :
                      recipe.difficulty === 'Medium' ? 'bg-yellow-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                  
                  {/* Calories Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-orange-600 font-semibold text-sm">{recipe.calories} cal</span>
                  </div>
                  
                  {/* Heart Button */}
                  <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition">
                    <Heart className="w-5 h-5 text-orange-600" />
                  </button>

                  {/* Popular Badge */}
                  {recipe.popular && (
                    <div className="absolute bottom-3 left-3 bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 rounded-full">
                      <span className="text-white font-semibold text-xs flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Popular</span>
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                    {recipe.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">{recipe.rating}</span>
                      <span className="text-gray-500 text-sm">({recipe.reviews})</span>
                    </div>
                    <button className="text-orange-600 font-semibold hover:text-orange-700 transition text-sm flex items-center space-x-1">
                      <span>View</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full hover:shadow-xl transition font-semibold text-lg">
              Load More Recipes
            </button>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore More Categories</h2>
            <p className="text-xl text-gray-600">Discover recipes from other meal types</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCategories.map((category, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl hover:shadow-2xl transition cursor-pointer group text-center text-white`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition">{category.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/90 mb-4">{category.count} recipes</p>
                <button className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition">
                  <span className="font-semibold">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Weekly Recipe Ideas</h2>
          <p className="text-orange-100 text-lg mb-8">
            Join our community and discover new dinner recipes every week
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full hover:shadow-xl transition font-bold text-lg">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
}