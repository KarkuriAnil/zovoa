
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 animate-bounce">
            <Sparkles className="w-4 h-4 mr-2" />
            Transform Ideas into Reality
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Turn Ideas & Brands into{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Reality
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            The complete platform for MVP development, business websites, and immersive 3D brand experiences. 
            From concept to deployment in record time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
              >
                View Live Demo
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-blue-100 p-3 rounded-xl mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">MVP Development</h3>
              <p className="text-gray-600 text-center">Complete product development with progress tracking and milestone payments</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-purple-100 p-3 rounded-xl mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Business Websites</h3>
              <p className="text-gray-600 text-center">Professional websites with eCommerce, booking systems, and custom integrations</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-pink-100 p-3 rounded-xl mb-4">
                <Sparkles className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3D Brand Experiences</h3>
              <p className="text-gray-600 text-center">Immersive 3D websites that showcase your brand with cutting-edge technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
