
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Niche } from '../../../types/workflow';

interface NicheSelectionProps {
  selectedNiche: Niche | null;
  onSelectNiche: (niche: Niche) => void;
  onNext: () => void;
}

const niches: Niche[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    description: 'Online stores with payment processing, inventory management, and customer accounts',
    icon: '🛒',
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Customer Accounts'],
    requiresKeys: ['razorpayKey', 'razorpaySecret']
  },
  {
    id: 'portfolio',
    title: 'Creative Portfolio',
    description: 'Showcase your work with stunning galleries and project showcases',
    icon: '🎨',
    features: ['Image Galleries', 'Project Showcase', 'Contact Forms', 'Blog'],
    requiresKeys: []
  },
  {
    id: 'booking',
    title: 'Booking & Appointments',
    description: 'Service businesses with appointment scheduling and calendar integration',
    icon: '📅',
    features: ['Calendar Integration', 'Online Booking', 'Payment Processing', 'Email Notifications'],
    requiresKeys: ['calendarKey', 'razorpayKey']
  },
  {
    id: 'immersive3d',
    title: 'Immersive 3D Experience',
    description: 'Next-gen websites with 3D models, VR/AR capabilities, and interactive experiences',
    icon: '🌐',
    features: ['3D Models', 'VR/AR Ready', 'Interactive Experiences', 'Immersive Navigation'],
    requiresKeys: []
  }
];

const NicheSelection: React.FC<NicheSelectionProps> = ({ selectedNiche, onSelectNiche, onNext }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Industry</h2>
        <p className="text-xl text-gray-600">Select the type of website that best fits your business needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {niches.map((niche) => (
          <Card 
            key={niche.id}
            className={`cursor-pointer border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              selectedNiche?.id === niche.id 
                ? 'border-purple-500 bg-purple-50 shadow-lg' 
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => onSelectNiche(niche)}
          >
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">{niche.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{niche.title}</h3>
              <p className="text-gray-600 mb-6">{niche.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key Features:</h4>
                {niche.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="text-sm text-gray-600">• {feature}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={onNext}
          disabled={!selectedNiche}
          size="lg"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Continue to Templates
        </Button>
      </div>
    </div>
  );
};

export default NicheSelection;
