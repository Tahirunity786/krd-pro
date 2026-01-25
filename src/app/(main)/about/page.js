import React from 'react';
import { ChefHat, Heart, Users, Award, BookOpen, Coffee, Utensils, Star, Instagram, Facebook, Twitter } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Recipes", icon: BookOpen },
    { number: "100K+", label: "Community Members", icon: Users },
    { number: "50+", label: "Awards Won", icon: Award },
    { number: "10M+", label: "Monthly Visits", icon: Star }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Culinary school graduate with 15 years of experience in fine dining and recipe development.",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "Michael Chen",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Award-winning pastry chef specializing in French patisserie and contemporary desserts.",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "Emily Rodriguez",
      role: "Food Photographer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Professional food photographer capturing the beauty and essence of every dish.",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "David Thompson",
      role: "Recipe Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Passionate about creating accessible, delicious recipes for home cooks of all skill levels.",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "We believe cooking is an art form that brings people together and creates lasting memories."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our vibrant community of food lovers inspires us daily to create and share amazing recipes."
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "We're committed to teaching cooking techniques and sharing culinary knowledge with everyone."
    },
    {
      icon: Utensils,
      title: "Quality & Taste",
      description: "Every recipe is tested multiple times to ensure perfect results and incredible flavors."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
     
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              About FlavorFusion
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate food lovers dedicated to bringing you the most delicious, 
              tested, and reliable recipes from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                alt="Our Kitchen"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                FlavorFusion was born from a simple idea: everyone deserves access to delicious, 
                restaurant-quality recipes that can be made at home. Founded in 2018 by chef Sarah Johnson, 
                our platform has grown from a personal blog into a thriving community of food enthusiasts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that cooking should be joyful, accessible, and rewarding. That's why every recipe 
                we publish is meticulously tested in our kitchen, photographed beautifully, and written with 
                clear, easy-to-follow instructions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve millions of home cooks worldwide, helping them create memorable 
                meals for their families and friends. Our mission remains the same: to inspire confidence 
                in the kitchen and spread the joy of cooking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition border border-orange-100"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind your favorite recipes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a href={member.social.instagram} className="text-gray-400 hover:text-orange-600 transition">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-orange-600 transition">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.facebook} className="text-gray-400 hover:text-orange-600 transition">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Coffee className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Culinary Journey</h2>
          <p className="text-orange-100 text-xl mb-8">
            Become part of our growing community and discover new recipes every week
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full hover:shadow-xl transition font-bold text-lg">
            Start Cooking Today
          </button>
        </div>
      </section>

    </div>
  );
}