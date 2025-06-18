import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  StarIcon,
  ShieldCheckIcon,
  HeartIcon,
  LightBulbIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const team = [
    {
      name: 'Adebayo Olumide',
      role: 'Founder & Chief Review Officer',
      image: 'https://images.unsplash.com/photo-1657972170499-3376d9eb8f65',
      bio: 'Electronics engineer with 8+ years experience in consumer electronics. Passionate about helping Nigerians make smart buying decisions.',
      expertise: ['Air Conditioners', 'Refrigerators', 'Energy Efficiency']
    },
    {
      name: 'Funmi Adebayo',
      role: 'Content & Research Lead',
      image: 'https://images.unsplash.com/photo-1609310638939-67860ab54244',
      bio: 'Tech journalist and consumer advocate. Specializes in breaking down complex tech specs into easy-to-understand reviews.',
      expertise: ['Televisions', 'Smart Appliances', 'User Experience']
    },
    {
      name: 'Kemi Ogundimu',
      role: 'Home Appliances Specialist',
      image: 'https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593',
      bio: 'Home economics expert and mother of three. Tests all products in real Nigerian family settings.',
      expertise: ['Kitchen Appliances', 'Washing Machines', 'Family Needs']
    }
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Complete Honesty',
      description: 'We test every product ourselves and share both the good and bad. No sugarcoating, no hidden agendas.'
    },
    {
      icon: HeartIcon,
      title: 'Nigerian Focus',
      description: 'Every review considers Nigerian weather, power conditions, and local availability. We understand your unique needs.'
    },
    {
      icon: LightBulbIcon,
      title: 'Educational Content',
      description: 'We don\'t just review products - we teach you how to make informed decisions and avoid common mistakes.'
    },
    {
      icon: TrophyIcon,
      title: 'Quality Standards',
      description: 'Only products that meet our strict quality and value standards earn our recommendation badge.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Products Reviewed' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50+', label: 'Brands Tested' },
    { number: '2M+', label: 'Naira Saved' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About TechNaija
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your trusted partner in making smart electronics and home appliance decisions in Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To empower Nigerian families with honest, comprehensive reviews and buying guides that help them make confident decisions when purchasing electronics and home appliances. We believe everyone deserves access to reliable information that saves them money and ensures they get the best value for their investment.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Why We Started TechNaija
              </h3>
              <p className="text-lg text-blue-700">
                After watching too many friends and family members get disappointed by expensive electronics that didn't live up to their promises, we decided to create a platform that provides honest, unbiased reviews specifically for the Nigerian market. Every product we review is tested in real Nigerian conditions - from Lagos heat to Abuja power fluctuations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              The numbers that drive our passion for helping Nigerian families
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              What guides every review, recommendation, and interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind every honest review and recommendation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Review Process
            </h2>
            <p className="text-xl text-gray-600">
              How we ensure every review meets our high standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research & Purchase',
                description: 'We buy products at full price from local retailers to ensure unbiased testing'
              },
              {
                step: '02',
                title: 'Real-World Testing',
                description: 'Minimum 30 days of testing in actual Nigerian home environments'
              },
              {
                step: '03',
                title: 'Performance Analysis',
                description: 'Detailed testing of key features, energy consumption, and durability'
              },
              {
                step: '04',
                title: 'Honest Review',
                description: 'Comprehensive write-up highlighting both pros and cons for informed decisions'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Community of Smart Shoppers
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get access to exclusive reviews, deal alerts, and buying guides delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;