'use client';
import React, { useState } from 'react';
import { ChefHat, Search, Filter, Clock, Users, Heart, Star, TrendingUp, Flame, Leaf, Award, Instagram, Facebook, Twitter } from 'lucide-react';

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTime, setSelectedTime] = useState('All');

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Appetizers', 'Beverages', 'Salads', 'Soups'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
  const timeFilters = ['All', 'Under 30 min', '30-60 min', 'Over 60 min'];

  const recipes = [
    {
      id: 1,
      title: "Classic Italian Carbonara",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop",
      category: "Dinner",
      difficulty: "Medium",
      time: "25 min",
      servings: 4,
      rating: 4.8,
      reviews: 245,
      tags: ["Italian", "Pasta"],
      featured: true
    },
    {
      id: 2,
      title: "Fluffy Blueberry Pancakes",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
      category: "Breakfast",
      difficulty: "Easy",
      time: "20 min",
      servings: 4,
      rating: 4.9,
      reviews: 412,
      tags: ["Breakfast", "Quick"],
      featured: true
    },
    {
      id: 3,
      title: "Thai Green Curry",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
      category: "Dinner",
      difficulty: "Medium",
      time: "40 min",
      servings: 6,
      rating: 4.7,
      reviews: 189,
      tags: ["Thai", "Spicy"],
      featured: false
    },
    {
      id: 4,
      title: "Chocolate Lava Cake",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop",
      category: "Desserts",
      difficulty: "Hard",
      time: "35 min",
      servings: 2,
      rating: 4.9,
      reviews: 567,
      tags: ["Chocolate", "Dessert"],
      featured: true
    },
    {
      id: 5,
      title: "Fresh Greek Salad",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
      category: "Salads",
      difficulty: "Easy",
      time: "15 min",
      servings: 4,
      rating: 4.6,
      reviews: 234,
      tags: ["Healthy", "Vegetarian"],
      featured: false
    },
    {
      id: 6,
      title: "Homemade Margherita Pizza",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
      category: "Dinner",
      difficulty: "Medium",
      time: "45 min",
      servings: 4,
      rating: 4.8,
      reviews: 398,
      tags: ["Italian", "Pizza"],
      featured: false
    },
    {
      id: 7,
      title: "Creamy Tomato Soup",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
      category: "Soups",
      difficulty: "Easy",
      time: "30 min",
      servings: 6,
      rating: 4.7,
      reviews: 178,
      tags: ["Comfort Food", "Vegetarian"],
      featured: false
    },
    {
      id: 8,
      title: "Beef Tacos Supreme",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
      category: "Dinner",
      difficulty: "Easy",
      time: "25 min",
      servings: 4,
      rating: 4.8,
      reviews: 421,
      tags: ["Mexican", "Quick"],
      featured: false
    },
    {
      id: 9,
      title: "Classic French Croissants",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop",
      category: "Breakfast",
      difficulty: "Hard",
      time: "120 min",
      servings: 12,
      rating: 4.9,
      reviews: 156,
      tags: ["French", "Baking"],
      featured: false
    },
    {
      id: 10,
      title: "Mango Smoothie Bowl",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
      category: "Breakfast",
      difficulty: "Easy",
      time: "10 min",
      servings: 2,
      rating: 4.6,
      reviews: 267,
      tags: ["Healthy", "Vegan"],
      featured: false
    },
    {
      id: 11,
      title: "Grilled Salmon with Herbs",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
      category: "Dinner",
      difficulty: "Medium",
      time: "30 min",
      servings: 4,
      rating: 4.8,
      reviews: 312,
      tags: ["Seafood", "Healthy"],
      featured: false
    },
    {
      id: 12,
      title: "Chocolate Chip Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
      category: "Desserts",
      difficulty: "Easy",
      time: "25 min",
      servings: 24,
      rating: 4.9,
      reviews: 689,
      tags: ["Baking", "Classic"],
      featured: false
    }
  ];

  const featuredBadges = [
    { icon: TrendingUp, label: "Trending", color: "from-orange-500 to-red-500" },
    { icon: Flame, label: "Hot", color: "from-red-500 to-pink-500" },
    { icon: Leaf, label: "Healthy", color: "from-green-500 to-emerald-500" },
    { icon: Award, label: "Award Winning", color: "from-yellow-500 to-amber-500" }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    
    let matchesTime = true;
    if (selectedTime === 'Under 30 min') {
      matchesTime = parseInt(recipe.time) < 30;
    } else if (selectedTime === '30-60 min') {
      matchesTime = parseInt(recipe.time) >= 30 && parseInt(recipe.time) <= 60;
    } else if (selectedTime === 'Over 60 min') {
      matchesTime = parseInt(recipe.time) > 60;
    }
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesTime;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
     
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Discover Amazing Recipes
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Explore our collection of {recipes.length}+ delicious recipes for every occasion
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search recipes, ingredients, or tags..."
                  className="w-full pl-16 pr-6 py-5 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Filter By:</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition bg-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition bg-white"
              >
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>

            {/* Time Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Cooking Time</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition bg-white"
              >
                {timeFilters.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            Showing <span className="font-bold text-orange-600">{filteredRecipes.length}</span> recipes
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No recipes found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredRecipes.map((recipe) => (
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
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-orange-600 font-semibold text-sm">{recipe.category}</span>
                    </div>
                    
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
                    
                    {/* Heart Button */}
                    <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition">
                      <Heart className="w-5 h-5 text-orange-600" />
                    </button>

                    {/* Featured Badge */}
                    {recipe.featured && (
                      <div className="absolute bottom-3 left-3 bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 rounded-full">
                        <span className="text-white font-semibold text-xs flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition line-clamp-2">
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
                      <button className="text-orange-600 font-semibold hover:text-orange-700 transition text-sm">
                        View Recipe →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Never Miss a Recipe</h2>
          <p className="text-orange-100 text-lg mb-8">
            Subscribe to get new recipes delivered to your inbox every week
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full hover:shadow-xl transition font-bold text-lg">
            Subscribe Now
          </button>
        </div>
      </section>

    </div>
  );
}