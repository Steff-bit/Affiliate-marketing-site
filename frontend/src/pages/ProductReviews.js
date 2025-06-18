import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  StarIcon, 
  FunnelIcon, 
  MagnifyingGlassIcon,
  ArrowRightIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const ProductReviews = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['All', 'Air Conditioners', 'Refrigerators', 'Televisions', 'Washing Machines', 'Kitchen Appliances'];

  const products = [
    {
      id: 1,
      name: 'LG Dual Inverter AC 1.5HP',
      category: 'Air Conditioners',
      rating: 4.8,
      reviews: 127,
      price: '₦485,000',
      originalPrice: '₦520,000',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      pros: ['Energy efficient', 'Quiet operation', 'Smart features'],
      cons: ['Expensive initial cost'],
      summary: 'Perfect for Nigerian weather with excellent cooling performance',
      isRecommended: true,
      affiliate: 'https://jumia.com.ng/lg-ac-dual-inverter',
      reviewSlug: 'lg-dual-inverter-ac-1-5hp'
    },
    {
      id: 2,
      name: 'Samsung 4-Door Refrigerator 394L',
      category: 'Refrigerators',
      rating: 4.7,
      reviews: 89,
      price: '₦650,000',
      originalPrice: '₦720,000',
      image: 'https://images.unsplash.com/photo-1646557769783-5a4686075831',
      pros: ['Large capacity', 'Energy star rated', 'Modern design'],
      cons: ['Takes up space'],
      summary: 'Ideal for large families with excellent food preservation',
      isRecommended: true,
      affiliate: 'https://jumia.com.ng/samsung-refrigerator',
      reviewSlug: 'samsung-4-door-refrigerator-394l'
    },
    {
      id: 3,
      name: 'Sony 55" 4K Smart TV',
      category: 'Televisions',
      rating: 4.9,
      reviews: 203,
      price: '₦420,000',
      originalPrice: '₦480,000',
      image: 'https://images.unsplash.com/photo-1611154570311-f189b75b8125',
      pros: ['Excellent picture quality', 'Smart features', 'Reliable brand'],
      cons: ['Premium price'],
      summary: 'Best-in-class entertainment experience with stunning visuals',
      isRecommended: true,
      affiliate: 'https://jumia.com.ng/sony-55-4k-smart-tv',
      reviewSlug: 'sony-55-4k-smart-tv'
    },
    {
      id: 4,
      name: 'Haier Thermocool 8kg Washing Machine',
      category: 'Washing Machines',
      rating: 4.6,
      reviews: 156,
      price: '₦285,000',
      originalPrice: '₦320,000',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      pros: ['Large capacity', 'Multiple wash programs', 'Affordable'],
      cons: ['Can be noisy'],
      summary: 'Great value for money with efficient cleaning performance',
      isRecommended: false,
      affiliate: 'https://jumia.com.ng/haier-thermocool-washing-machine',
      reviewSlug: 'haier-thermocool-8kg-washing-machine'
    },
    {
      id: 5,
      name: 'Panasonic Microwave 25L',
      category: 'Kitchen Appliances',
      rating: 4.5,
      reviews: 78,
      price: '₦95,000',
      originalPrice: '₦110,000',
      image: 'https://images.pexels.com/photos/8629084/pexels-photo-8629084.jpeg',
      pros: ['Compact size', 'Easy to use', 'Reliable'],
      cons: ['Limited capacity'],
      summary: 'Perfect for small kitchens with consistent performance',
      isRecommended: false,
      affiliate: 'https://jumia.com.ng/panasonic-microwave',
      reviewSlug: 'panasonic-microwave-25l'
    },
    {
      id: 6,
      name: 'Gree 2HP Split AC',
      category: 'Air Conditioners',
      rating: 4.4,
      reviews: 92,
      price: '₦385,000',
      originalPrice: '₦420,000',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      pros: ['Affordable', 'Good cooling', 'Easy installation'],
      cons: ['Higher power consumption'],
      summary: 'Budget-friendly option with decent performance',
      isRecommended: false,
      affiliate: 'https://jumia.com.ng/gree-2hp-split-ac',
      reviewSlug: 'gree-2hp-split-ac'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.replace(/[₦,]/g, '')) - parseInt(b.price.replace(/[₦,]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[₦,]/g, '')) - parseInt(a.price.replace(/[₦,]/g, ''));
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return b.id - a.id; // newest first
    }
  });

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIconSolid
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

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
              Product Reviews
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Honest, detailed reviews of the best electronics and home appliances in Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <FunnelIcon className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.isRecommended && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <CheckBadgeIcon className="w-4 h-4" />
                      <span>Recommended</span>
                    </div>
                  )}
                  {product.originalPrice !== product.price && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save {Math.round((1 - parseInt(product.price.replace(/[₦,]/g, '')) / parseInt(product.originalPrice.replace(/[₦,]/g, ''))) * 100)}%
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.summary}</p>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-1">Pros</h4>
                      <ul className="text-xs text-gray-600">
                        {product.pros.slice(0, 2).map((pro, i) => (
                          <li key={i} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-600 mb-1">Cons</h4>
                      <ul className="text-xs text-gray-600">
                        {product.cons.slice(0, 2).map((con, i) => (
                          <li key={i} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-800">{product.price}</span>
                    {product.originalPrice !== product.price && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Link
                      to={`/reviews/${product.category.toLowerCase().replace(' ', '-')}/${product.reviewSlug}`}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                    >
                      Read Review
                    </Link>
                    <a
                      href={product.affiliate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductReviews;