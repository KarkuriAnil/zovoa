
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Globe, Cube, CheckCircle, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCard from '../ui/animated-card';

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: "MVP Development",
      description: "Transform your product ideas into fully functional MVPs with our structured development process.",
      features: [
        "Structured submission flow",
        "Auto-generated demo documents",
        "Progress tracking dashboard",
        "Milestone payment system",
        "Expert development team"
      ],
      price: "Starting at $2,999",
      timeline: "4-8 weeks",
      cta: "Start MVP Project",
      link: "/mvp",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Business Websites",
      description: "Professional websites with eCommerce, booking systems, and custom integrations tailored to your business.",
      features: [
        "Template-driven approach",
        "eCommerce integration",
        "Booking systems",
        "Payment gateway setup",
        "Domain management"
      ],
      price: "Starting at $1,499",
      timeline: "2-4 weeks",
      cta: "Build Website",
      link: "/websites",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cube,
      title: "3D Brand Experiences",
      description: "Immersive 3D websites that showcase your brand with cutting-edge WebGL technology and interactive elements.",
      features: [
        "3D interactive experiences",
        "WebGL optimization",
        "Brand storytelling",
        "Mobile responsive",
        "Performance optimized"
      ],
      price: "Starting at $3,999",
      timeline: "6-10 weeks",
      cta: "Create 3D Experience",
      link: "/3d-brands",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're launching a new product, building a business presence, or creating an immersive brand experience, 
            we have the perfect solution for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 200} className="h-full">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mx-auto mb-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing and Timeline */}
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{service.price}</span>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{service.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={service.link} className="block">
                    <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">NDA Protection</h3>
              <p className="text-gray-600">Your ideas are protected with comprehensive NDAs and secure development practices.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guarantee with unlimited revisions until you're completely happy.</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">Milestone-based delivery ensures your project stays on track and within budget.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
