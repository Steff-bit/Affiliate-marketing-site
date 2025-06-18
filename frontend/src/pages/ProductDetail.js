import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  StarIcon as StarIconSolid,
  CheckBadgeIcon,
  XMarkIcon,
  ShoppingCartIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/solid';
import { 
  StarIcon,
  ChartBarIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const ProductDetail = () => {
  const { category, id } = useParams();

  // Mock product data - in real app, fetch based on params
  const product = {
    id: 1,
    name: 'LG Dual Inverter AC 1.5HP',
    category: 'Air Conditioners',
    rating: 4.8,
    reviews: 127,
    price: '₦485,000',
    originalPrice: '₦520,000',
    images: [
      'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      'https://images.unsplash.com/photo-1646557769783-5a4686075831',
      'https://images.unsplash.com/photo-1611154570311-f189b75b8125'
    ],
    summary: 'The LG Dual Inverter AC 1.5HP is a premium air conditioning unit that combines energy efficiency with powerful cooling performance, making it ideal for Nigerian weather conditions.',
    
    specs: {
      'Cooling Capacity': '1.5 HP (18,000 BTU/h)',
      'Room Size': '15-20 sqm',
      'Energy Rating': '5 Star',
      'Power Consumption': '1,200W',
      'Refrigerant': 'R32',
      'Warranty': '2 Years'
    },

    pros: [
      'Extremely energy efficient with dual inverter technology',
      'Very quiet operation even at high speeds',
      'Smart features including WiFi connectivity',
      'Excellent build quality and durability',
      'Fast cooling performance',
      'Advanced air filtration system'
    ],

    cons: [
      'Higher upfront cost compared to basic models',
      'Installation requires professional service',
      'Remote control could be more intuitive'
    ],

    detailedReview: {
      performance: {
        score: 4.8,
        text: 'Outstanding cooling performance with the dual inverter technology providing consistent temperature control. Cools a 20sqm room in under 10 minutes even in peak Lagos heat.'
      },
      efficiency: {
        score: 4.9,
        text: 'Exceptional energy efficiency with up to 65% power savings compared to conventional ACs. Our tests showed significant reduction in electricity bills.'
      },
      noise: {
        score: 4.7,
        text: 'Remarkably quiet operation. At night mode, it operates at just 19dB, making it perfect for bedrooms.'
      },
      build: {
        score: 4.8,
        text: 'Premium build quality with robust materials. The indoor unit has a sleek design that complements modern Nigerian homes.'
      }
    },

    affiliate: 'https://jumia.com.ng/lg-ac-dual-inverter',
    inStock: true,
    shippingTime: '2-3 days',
    warranty: '2 years manufacturer warranty'
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIconSolid
        key={index}
        className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const renderScoreBar = (score) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
          style={{ width: `${(score / 5) * 100}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>Reviews</span>
            <span>/</span>
            <span className="text-blue-600">{product.category}</span>
            <span>/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(1, 4).map((image, index) => (
                    <div key={index} className="aspect-square bg-white rounded-lg shadow overflow-hidden">
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <CheckBadgeIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">TechNaija Recommended</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="text-lg font-semibold text-gray-800 ml-2">{product.rating}</span>
                  </div>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.summary}
                </p>
              </div>

              {/* Price */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-gray-800">{product.price}</span>
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save {Math.round((1 - parseInt(product.price.replace(/[₦,]/g, '')) / parseInt(product.originalPrice.replace(/[₦,]/g, ''))) * 100)}%
                  </span>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">In stock</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Free shipping within Lagos</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">{product.warranty}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={product.affiliate}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span>Buy Now on Jumia</span>
                  </motion.a>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <HeartIcon className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <ShareIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Review */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Detailed Review & Performance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {Object.entries(product.detailedReview).map(([key, review]) => (
                <div key={key} className="bg-slate-50 p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 capitalize">
                      {key === 'efficiency' ? 'Energy Efficiency' : key === 'build' ? 'Build Quality' : key}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-lg">{review.score}</span>
                      <span className="text-gray-500">/5</span>
                    </div>
                  </div>
                  {renderScoreBar(review.score)}
                  <p className="text-gray-600 mt-4">{review.text}</p>
                </div>
              ))}
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckBadgeIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">What We Love</h3>
                </div>
                <ul className="space-y-3">
                  {product.pros.map((pro, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <XMarkIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-800">What Could Be Better</h3>
                </div>
                <ul className="space-y-3">
                  {product.cons.map((con, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Technical Specifications
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="px-6 py-4 flex items-center justify-between">
                    <span className="font-medium text-gray-800">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Buy the {product.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the best price available and start enjoying premium cooling today
            </p>
            <motion.a
              href={product.affiliate}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              <span>Buy Now for {product.price}</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;