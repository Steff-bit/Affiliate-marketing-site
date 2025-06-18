import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon as StarIconSolid,
  CheckIcon,
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/solid';

const Comparisons = () => {
  const [selectedComparison, setSelectedComparison] = useState('ac-comparison');

  const comparisons = {
    'ac-comparison': {
      title: 'LG Dual Inverter vs Gree Split AC',
      category: 'Air Conditioners',
      products: [
        {
          name: 'LG Dual Inverter AC 1.5HP',
          image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
          price: '₦485,000',
          rating: 4.8,
          winner: true,
          specs: {
            'Cooling Capacity': '1.5 HP',
            'Energy Rating': '5 Star',
            'Power Consumption': '1,200W',
            'Noise Level': '19dB',
            'Warranty': '2 Years',
            'Smart Features': 'Yes'
          },
          pros: ['Extremely energy efficient', 'Very quiet operation', 'Smart WiFi control'],
          cons: ['Higher upfront cost']
        },
        {
          name: 'Gree 2HP Split AC',
          image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
          price: '₦385,000',
          rating: 4.4,
          winner: false,
          specs: {
            'Cooling Capacity': '2 HP',
            'Energy Rating': '3 Star',
            'Power Consumption': '1,800W',
            'Noise Level': '28dB',
            'Warranty': '1 Year',
            'Smart Features': 'No'
          },
          pros: ['More affordable', 'Higher cooling capacity', 'Easy installation'],
          cons: ['Higher power consumption', 'Noisier operation']
        }
      ]
    },
    'refrigerator-comparison': {
      title: 'Samsung vs LG Refrigerator Showdown',
      category: 'Refrigerators',
      products: [
        {
          name: 'Samsung 4-Door Refrigerator 394L',
          image: 'https://images.unsplash.com/photo-1646557769783-5a4686075831',
          price: '₦650,000',
          rating: 4.7,
          winner: true,
          specs: {
            'Capacity': '394L',
            'Energy Rating': '4 Star',
            'Doors': '4 Door',
            'Freezer Type': 'No Frost',
            'Warranty': '2 Years',
            'Smart Features': 'Yes'
          },
          pros: ['Large capacity', 'Modern design', 'Energy efficient'],
          cons: ['Premium price', 'Takes up space']
        },
        {
          name: 'LG Double Door Refrigerator 335L',
          image: 'https://images.unsplash.com/photo-1646557769783-5a4686075831',
          price: '₦520,000',
          rating: 4.5,
          winner: false,
          specs: {
            'Capacity': '335L',
            'Energy Rating': '3 Star',
            'Doors': '2 Door',
            'Freezer Type': 'No Frost',
            'Warranty': '1 Year',
            'Smart Features': 'No'
          },
          pros: ['Good value', 'Reliable brand', 'Decent capacity'],
          cons: ['Smaller capacity', 'Basic features']
        }
      ]
    },
    'tv-comparison': {
      title: 'Sony vs Samsung Smart TV Battle',
      category: 'Televisions',
      products: [
        {
          name: 'Sony 55" 4K Smart TV',
          image: 'https://images.unsplash.com/photo-1611154570311-f189b75b8125',
          price: '₦420,000',
          rating: 4.9,
          winner: true,
          specs: {
            'Screen Size': '55 inches',
            'Resolution': '4K Ultra HD',
            'Smart Platform': 'Android TV',
            'HDR Support': 'Yes',
            'Warranty': '2 Years',
            'Audio': '20W Speakers'
          },
          pros: ['Excellent picture quality', 'Smooth Android TV', 'Great for movies'],
          cons: ['Premium pricing', 'Remote could be better']
        },
        {
          name: 'Samsung 55" 4K Smart TV',
          image: 'https://images.unsplash.com/photo-1611154570311-f189b75b8125',
          price: '₦395,000',
          rating: 4.6,
          winner: false,
          specs: {
            'Screen Size': '55 inches',
            'Resolution': '4K Ultra HD',
            'Smart Platform': 'Tizen OS',
            'HDR Support': 'Yes',
            'Warranty': '1 Year',
            'Audio': '20W Speakers'
          },
          pros: ['More affordable', 'Bright display', 'Good smart features'],
          cons: ['Less accurate colors', 'Shorter warranty']
        }
      ]
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIconSolid
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const currentComparison = comparisons[selectedComparison];

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
              Product Comparisons
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Side-by-side comparisons to help you choose the perfect electronics for your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Selector */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {Object.entries(comparisons).map(([key, comparison]) => (
              <button
                key={key}
                onClick={() => setSelectedComparison(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedComparison === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {comparison.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            key={selectedComparison}
          >
            {/* Title */}
            <div className="text-center mb-12">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                {currentComparison.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                {currentComparison.title}
              </h2>
              <p className="text-xl text-gray-600">
                Detailed comparison to help you make the right choice
              </p>
            </div>

            {/* Products Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {currentComparison.products.map((product, index) => (
                <div key={index} className="relative">
                  {product.winner && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                        <CheckIcon className="w-4 h-4" />
                        <span>OUR PICK</span>
                      </div>
                    </div>
                  )}
                  <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${product.winner ? 'ring-2 ring-green-500' : ''}`}>
                    <div className="aspect-video bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {renderStars(product.rating)}
                          <span className="text-sm text-gray-600">({product.rating})</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">
                          {product.price}
                        </span>
                      </div>
                      
                      {/* Quick Pros/Cons */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2 text-sm">PROS</h4>
                          <ul className="space-y-1">
                            {product.pros.slice(0, 2).map((pro, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start space-x-1">
                                <CheckIcon className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2 text-sm">CONS</h4>
                          <ul className="space-y-1">
                            {product.cons.slice(0, 2).map((con, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start space-x-1">
                                <XMarkIcon className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Specs Comparison */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h3 className="text-xl font-bold text-gray-800">
                  Detailed Specifications Comparison
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                        Feature
                      </th>
                      {currentComparison.products.map((product, index) => (
                        <th key={index} className="px-6 py-3 text-center text-sm font-semibold text-gray-800">
                          {product.name}
                        </th>
                      ))}
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800">
                        Winner
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.keys(currentComparison.products[0].specs).map((spec) => (
                      <tr key={spec} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-800">
                          {spec}
                        </td>
                        {currentComparison.products.map((product, index) => (
                          <td key={index} className="px-6 py-4 text-sm text-gray-600 text-center">
                            {product.specs[spec]}
                          </td>
                        ))}
                        <td className="px-6 py-4 text-center">
                          {/* Logic for determining winner would go here */}
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Final Verdict */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Final Verdict
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Best Overall Choice
                  </h4>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    {currentComparison.products.find(p => p.winner)?.name}
                  </p>
                  <p className="text-gray-600">
                    While it costs more upfront, the superior energy efficiency, build quality, and features make it the better long-term investment for most Nigerian families.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">₦</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Best Budget Option
                  </h4>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    {currentComparison.products.find(p => !p.winner)?.name}
                  </p>
                  <p className="text-gray-600">
                    If budget is your primary concern and you don't mind higher operating costs, this offers decent performance at a lower entry price.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Make Your Decision?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  View Detailed Reviews
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
                >
                  Compare More Products
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Comparisons;