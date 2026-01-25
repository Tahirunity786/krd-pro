'use client';

import React, { useState } from 'react';
import { ChefHat, Mail, Phone, MapPin, Send, MessageSquare, Clock, Instagram, Facebook, Twitter, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@flavorfusion.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Culinary Street, Food City, FC 12345",
      description: "Our test kitchen and studio"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9am - 6pm EST",
      description: "Weekend: By appointment"
    }
  ];

  const faqItems = [
    {
      question: "How can I submit my own recipe?",
      answer: "We love receiving recipe submissions! Please email us at recipes@flavorfusion.com with your recipe, photos, and a brief description. Our team will review and get back to you within a week."
    },
    {
      question: "Can I use your recipes for my business?",
      answer: "Personal use is always free! For commercial use, please contact us at business@flavorfusion.com to discuss licensing options."
    },
    {
      question: "Do you offer cooking classes?",
      answer: "Yes! We offer both virtual and in-person cooking classes. Check our Events page or email classes@flavorfusion.com for upcoming schedules."
    },
    {
      question: "How do I advertise on FlavorFusion?",
      answer: "We offer various advertising opportunities. Please reach out to our marketing team at ads@flavorfusion.com for our media kit and pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
     

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition border border-orange-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-800 font-medium">Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition"
                    placeholder="Recipe question, partnership inquiry, etc."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition resize-none"
                    placeholder="Tell us what's on your mind..."
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl hover:shadow-xl transition font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Image & Social */}
            <div className="space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop"
                  alt="Our Kitchen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Visit Our Test Kitchen</h3>
                  <p className="text-white/90">See where the magic happens and meet our team in person</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-amber-600 p-8 rounded-3xl text-white">
                <MessageSquare className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6 text-orange-100">
                  Follow us on social media for daily recipe inspiration, cooking tips, and behind-the-scenes content
                </p>
                
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}