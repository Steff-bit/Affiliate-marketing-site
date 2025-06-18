import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Buying Guides', 'Energy Tips', 'Maintenance', 'Brand Reviews', 'News'];

  const posts = [
    {
      id: 1,
      title: 'How to Choose the Perfect Air Conditioner for Your Nigerian Home',
      excerpt: 'Complete guide to selecting the right AC considering room size, energy efficiency, and local power conditions.',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      category: 'Buying Guides',
      author: 'Adebayo Olumide',
      date: '2024-12-15',
      readTime: '8 min read',
      featured: true,
      tags: ['Air Conditioners', 'Energy Efficiency', 'Home Cooling']
    },
    {
      id: 2,
      title: '10 Ways to Reduce Your Electricity Bill with Smart Appliances',
      excerpt: 'Proven strategies to cut your power costs by up to 40% using energy-efficient electronics and smart usage habits.',
      image: 'https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593',
      category: 'Energy Tips',
      author: 'Funmi Adebayo',
      date: '2024-12-12',
      readTime: '6 min read',
      featured: false,
      tags: ['Energy Saving', 'Smart Home', 'Electricity Bills']
    },
    {
      id: 3,
      title: 'Samsung vs LG: Which Brand Offers Better Value in Nigeria?',
      excerpt: 'Comprehensive comparison of two electronics giants, examining quality, pricing, and after-sales support in Nigerian market.',
      image: 'https://images.unsplash.com/photo-1646557769783-5a4686075831',
      category: 'Brand Reviews',
      author: 'Kemi Ogundimu',
      date: '2024-12-10',
      readTime: '12 min read',
      featured: true,
      tags: ['Samsung', 'LG', 'Brand Comparison']
    },
    {
      id: 4,
      title: 'Refrigerator Maintenance Tips for Lagos Weather',
      excerpt: 'Essential maintenance practices to keep your fridge running efficiently in high humidity and frequent power outages.',
      image: 'https://images.unsplash.com/photo-1646557769783-5a4686075831',
      category: 'Maintenance',
      author: 'Adebayo Olumide',
      date: '2024-12-08',
      readTime: '5 min read',
      featured: false,
      tags: ['Refrigerators', 'Maintenance', 'Lagos']
    },
    {
      id: 5,
      title: 'Best Smart TVs Under ₦400,000 in 2024',
      excerpt: 'Our top picks for budget-friendly smart TVs that deliver excellent picture quality and features without breaking the bank.',
      image: 'https://images.unsplash.com/photo-1611154570311-f189b75b8125',
      category: 'Buying Guides',
      author: 'Funmi Adebayo',
      date: '2024-12-05',
      readTime: '10 min read',
      featured: false,
      tags: ['Smart TV', 'Budget', '2024 Guide']
    },
    {
      id: 6,
      title: 'Why Inverter Technology is Essential for Nigerian Homes',
      excerpt: 'Understanding how inverter technology in appliances can save money and provide better performance in unstable power conditions.',
      image: 'https://images.pexels.com/photos/9221770/pexels-photo-9221770.jpeg',
      category: 'Energy Tips',
      author: 'Kemi Ogundimu',
      date: '2024-12-03',
      readTime: '7 min read',
      featured: false,
      tags: ['Inverter Technology', 'Power Saving', 'Nigerian Homes']
    }
  ];

  const filteredPosts = posts.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'All');

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Electronics Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Expert insights, buying guides, and tips to help you make smarter electronics decisions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post (only shown when 'All' is selected) */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-square">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <UserIcon className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 w-fit"
                    >
                      <span>Read Full Article</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <UserIcon className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Posts Message */}
          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No posts found in this category. Check back soon for new content!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Latest Tips & Reviews
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get weekly electronics tips, buying guides, and exclusive deals delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              Join 5,000+ smart shoppers. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;