import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Product Categories': [
      { name: 'Air Conditioners', href: '/reviews/air-conditioners' },
      { name: 'Refrigerators', href: '/reviews/refrigerators' },
      { name: 'Televisions', href: '/reviews/televisions' },
      { name: 'Washing Machines', href: '/reviews/washing-machines' },
      { name: 'Kitchen Appliances', href: '/reviews/kitchen-appliances' }
    ],
    'Resources': [
      { name: 'Product Reviews', href: '/reviews' },
      { name: 'Comparisons', href: '/comparisons' },
      { name: 'Buying Guides', href: '/blog' },
      { name: 'Energy Tips', href: '/blog' },
      { name: 'Brand Guides', href: '/blog' }
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Affiliate Disclosure', href: '/disclosure' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never Miss a Great Deal Again
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get exclusive alerts on the best electronics deals, expert reviews, and buying guides delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Subscribe Now
              </motion.button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              Join 10,000+ smart shoppers. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="font-bold text-2xl text-white">TechNaija</span>
              </Link>
              <p className="text-slate-400 mb-6 max-w-md">
                Your trusted source for honest electronics reviews, detailed comparisons, and smart buying guides. 
                Helping Nigerian families make informed decisions on home appliances since 2024.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-400">
                  <MapPinIcon className="w-5 h-5 text-blue-400" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                  <span>hello@technaija.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <span>+234 (0) 123 456 789</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-1 text-slate-400 mb-4 md:mb-0">
                <span>© {currentYear} TechNaija. Made with</span>
                <HeartIcon className="w-4 h-4 text-red-500" />
                <span>for Nigerian tech enthusiasts.</span>
              </div>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link to="/disclosure" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Affiliate Disclosure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;