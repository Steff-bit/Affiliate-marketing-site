import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  StarIcon, 
  ShieldCheckIcon, 
  TruckIcon, 
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/solid';

const Home = () => {
  const categories = [
    {
      name: 'Air Conditioners',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      count: '25+ Reviews',
      href: '/reviews/air-conditioners',
      description: 'Stay cool with the best ACs for Nigerian weather'
    },
    {
      name: 'Refrigerators',
      image: 'https://images.unsplash.com/photo-1646557769783-5a4686075831',
      count: '30+ Reviews',
      href: '/reviews/refrigerators',
      description: 'Energy-efficient cooling for your fresh foods'
    },
    {
      name: 'Televisions',
      image: 'https://images.unsplash.com/photo-1611154570311-f189b75b8125',
      count: '40+ Reviews',
      href: '/reviews/televisions',
      description: 'Crystal clear entertainment experiences'
    },
    {
      name: 'Washing Machines',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      count: '20+ Reviews',
      href: '/reviews/washing-machines',
      description: 'Efficient laundry solutions for busy families'
    },
    {
      name: 'Kitchen Appliances',
      image: 'https://images.pexels.com/photos/8629084/pexels-photo-8629084.jpeg',
      count: '35+ Reviews',
      href: '/reviews/kitchen-appliances',
      description: 'Modern cooking made simple and efficient'
    }
  ];

  const testimonials = [
    {
      name: 'Adunni Okafor',
      location: 'Lagos',
      image: 'https://images.unsplash.com/photo-1609310638939-67860ab54244',
      rating: 5,
      text: 'TechNaija helped me choose the perfect AC for my 3-bedroom flat. Their detailed comparison saved me ₦200,000!'
    },
    {
      name: 'Ibrahim Hassan',
      location: 'Abuja',
      image: 'https://images.unsplash.com/photo-1657972170499-3376d9eb8f65',
      rating: 5,
      text: 'Finally found a reliable source for honest electronics reviews. No fake products anymore!'
    },
    {
      name: 'Funmi Adebayo',
      location: 'Ibadan',
      image: 'https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593',
      rating: 5,
      text: 'The energy-saving tips alone have reduced my electricity bill by 30%. Highly recommended!'
    }
  ];

  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Verified Reviews',
      description: 'Every product is personally tested by our team of Nigerian tech experts'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Best Price Alerts',
      description: 'Get notified instantly when your favorite products go on sale'
    },
    {
      icon: TruckIcon,
      title: 'Local Availability',
      description: 'Reviews focused on products available in Nigerian markets'
    },
    {
      icon: StarIcon,
      title: 'Honest Ratings',
      description: 'Unbiased ratings based on real-world Nigerian usage scenarios'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.8)), url('https://images.pexels.com/photos/10988021/pexels-photo-10988021.jpeg')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find the <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Perfect</span><br />
              Electronics for Your Home
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Honest reviews, detailed comparisons, and smart buying guides for Nigerian families. 
              Never waste money on the wrong appliance again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reviews">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Browse Reviews
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-800 transition-all duration-200"
              >
                Get Deal Alerts
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive reviews across all major electronics categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Link to={category.href}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-blue-200 mb-2">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-blue-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
                          {category.count}
                        </span>
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Why Choose TechNaija?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're the trusted voice for electronics buying decisions in Nigeria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Trusted by 10,000+ Nigerian Families
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what our community is saying about their smart buying decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-2xl"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 text-lg">{testimonial.text}</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make Smart Buying Decisions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of Nigerians who never overpay for electronics again
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reviews">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Start Browsing Reviews
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Subscribe to Deals
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;