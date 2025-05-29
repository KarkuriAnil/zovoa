
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, ArrowRight } from 'lucide-react';
import { ThreeDTemplate } from '../../../types/threeDWorkflow';
import ThreeDModel from '../ThreeDModel';

interface ThreeDTemplateGalleryProps {
  brandNicheId: string;
  selectedTemplate: ThreeDTemplate | null;
  onSelectTemplate: (template: ThreeDTemplate) => void;
  onNext: () => void;
  onBack: () => void;
}

const templates: ThreeDTemplate[] = [
  {
    id: 'minimalist-coffee',
    title: 'Zen Coffee Experience',
    description: 'Clean, minimalist design focusing on the coffee journey',
    modelUrl: '',
    demoUrl: 'https://example.com/demo1',
    tags: ['Minimalist', 'Interactive', 'Clean'],
    style: 'minimalist',
    brandNicheId: 'coffee-shop'
  },
  {
    id: 'photorealistic-fashion',
    title: 'Luxury Fashion Showcase',
    description: 'Photorealistic materials with advanced lighting',
    modelUrl: '',
    demoUrl: 'https://example.com/demo2',
    tags: ['Photorealistic', 'Luxury', 'Advanced'],
    style: 'photorealistic',
    brandNicheId: 'fashion-label'
  },
  {
    id: 'interactive-gallery',
    title: 'Dynamic Art Space',
    description: 'Interactive gallery with animated exhibitions',
    modelUrl: '',
    demoUrl: 'https://example.com/demo3',
    tags: ['Interactive', 'Dynamic', 'Immersive'],
    style: 'interactive',
    brandNicheId: 'art-gallery'
  }
];

const ThreeDTemplateGallery: React.FC<ThreeDTemplateGalleryProps> = ({
  brandNicheId,
  selectedTemplate,
  onSelectTemplate,
  onNext,
  onBack
}) => {
  const filteredTemplates = templates.filter(t => t.brandNicheId === brandNicheId);

  const getStyleColor = (style: string) => {
    switch (style) {
      case 'minimalist': return 'bg-blue-100 text-blue-800';
      case 'photorealistic': return 'bg-purple-100 text-purple-800';
      case 'interactive': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          3D Template Gallery
        </h2>
        <p className="text-xl text-gray-600">
          Choose your immersive 3D template with WebGL-powered previews
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredTemplates.map((template) => (
          <Card 
            key={template.id}
            className={`group cursor-pointer border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              selectedTemplate?.id === template.id 
                ? 'border-green-500 bg-gradient-to-br from-green-50 to-blue-50 shadow-xl ring-4 ring-green-200' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => onSelectTemplate(template)}
          >
            <CardContent className="p-6">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <ThreeDModel 
                  modelUrl={template.modelUrl} 
                  className="w-full h-48" 
                  autoRotate={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="mb-4 bg-white/90 hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(template.demoUrl, '_blank');
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                    {template.title}
                  </h3>
                  <Badge className={getStyleColor(template.style)}>
                    {template.style}
                  </Badge>
                </div>
                
                <p className="text-gray-600 text-sm">
                  {template.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          size="lg"
          className="px-8"
        >
          Back to Brands
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!selectedTemplate}
          size="lg"
          className="px-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform transition-all duration-300 hover:scale-105 disabled:opacity-50"
        >
          Customize Experience
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ThreeDTemplateGallery;
