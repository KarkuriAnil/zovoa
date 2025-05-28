
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Globe, ArrowRight, CheckCircle, Eye, Star } from 'lucide-react';

const Websites = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    description: '',
    features: [],
    domain: '',
    hasContent: false,
    additionalInfo: ''
  });

  const steps = [
    { number: 1, title: 'Business Info', description: 'Tell us about your business' },
    { number: 2, title: 'Choose Template', description: 'Select your design template' },
    { number: 3, title: 'Features & Setup', description: 'Configure your website features' },
    { number: 4, title: 'Launch Details', description: 'Domain and go-live setup' }
  ];

  const industries = [
    'Restaurant & Food',
    'Professional Services',
    'E-commerce & Retail',
    'Healthcare',
    'Real Estate',
    'Education',
    'Technology',
    'Creative & Design',
    'Fitness & Wellness',
    'Consulting',
    'Other'
  ];

  const templates = [
    {
      id: 1,
      name: 'Professional Services',
      category: 'Business',
      rating: 4.9,
      reviews: 127,
      features: ['Contact Forms', 'Service Pages', 'Team Profiles', 'Testimonials'],
      preview: 'https://example.com/demo1',
      price: '$1,499',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Restaurant Deluxe',
      category: 'Food & Beverage',
      rating: 4.8,
      reviews: 98,
      features: ['Online Menu', 'Reservations', 'Gallery', 'Location Map'],
      preview: 'https://example.com/demo2',
      price: '$1,799',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'E-commerce Pro',
      category: 'Retail',
      rating: 4.9,
      reviews: 156,
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Inventory'],
      preview: 'https://example.com/demo3',
      price: '$2,299',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Creative Portfolio',
      category: 'Creative',
      rating: 4.7,
      reviews: 89,
      features: ['Portfolio Gallery', 'Project Showcase', 'Client Testimonials', 'Contact'],
      preview: 'https://example.com/demo4',
      price: '$1,399',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Healthcare Plus',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 76,
      features: ['Appointment Booking', 'Service Pages', 'Insurance Info', 'Patient Portal'],
      preview: 'https://example.com/demo5',
      price: '$1,899',
      image: '/placeholder.svg'
    },
    {
      id: 6,
      name: 'Real Estate Elite',
      category: 'Real Estate',
      rating: 4.8,
      reviews: 112,
      features: ['Property Listings', 'Search Filters', 'Agent Profiles', 'Virtual Tours'],
      preview: 'https://example.com/demo6',
      price: '$2,099',
      image: '/placeholder.svg'
    }
  ];

  const websiteFeatures = [
    'Contact Forms',
    'Online Booking/Appointments',
    'E-commerce/Online Store',
    'Payment Gateway Integration',
    'Blog/News Section',
    'Photo Gallery',
    'Customer Reviews',
    'Social Media Integration',
    'Google Maps Integration',
    'Email Newsletter Signup',
    'Live Chat Support',
    'Multi-language Support'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFeatureToggle = (feature: string) => {
    const features = formData.features.includes(feature)
      ? formData.features.filter(f => f !== feature)
      : [...formData.features, feature];
    setFormData({ ...formData, features });
  };

  const handleSubmit = () => {
    console.log('Website submission:', { ...formData, selectedTemplate });
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl inline-flex mb-6">
              <Globe className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Business <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Websites</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Professional websites with eCommerce, booking systems, and custom integrations tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    currentStep >= step.number 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className="text-sm font-medium text-gray-900">{step.title}</p>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 mx-4 h-0.5 bg-gray-200">
                      <div 
                        className={`h-full bg-purple-600 transition-all duration-300 ${
                          currentStep > step.number ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription>
                  {steps[currentStep - 1].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Business Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Enter your business name"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Select onValueChange={(value) => handleSelectChange('industry', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description">Business Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe your business, what you offer, and your target customers..."
                        className="mt-2 min-h-[120px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Choose Template */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Choose Your Website Template</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {templates.map((template) => (
                          <Card 
                            key={template.id}
                            className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-lg ${
                              selectedTemplate?.id === template.id 
                                ? 'border-purple-500 bg-purple-50' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => setSelectedTemplate(template)}
                          >
                            <CardHeader className="pb-3">
                              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center">
                                <span className="text-gray-500 text-sm">Template Preview</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{template.name}</CardTitle>
                                <Badge variant="secondary">{template.category}</Badge>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                  <span className="ml-1 text-sm font-medium">{template.rating}</span>
                                </div>
                                <span className="text-sm text-gray-600">({template.reviews})</span>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="space-y-3">
                                <div>
                                  <h4 className="font-medium text-sm mb-2">Includes:</h4>
                                  <ul className="space-y-1">
                                    {template.features.slice(0, 3).map((feature, idx) => (
                                      <li key={idx} className="text-xs text-gray-600">• {feature}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t">
                                  <span className="text-lg font-bold text-purple-600">{template.price}</span>
                                  <Button size="sm" variant="outline">
                                    <Eye className="h-3 w-3 mr-1" />
                                    Preview
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Features & Setup */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label>Website Features *</Label>
                      <p className="text-sm text-gray-600 mb-4">Select the features you need for your website</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {websiteFeatures.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature}
                              checked={formData.features.includes(feature)}
                              onCheckedChange={() => handleFeatureToggle(feature)}
                            />
                            <Label htmlFor={feature} className="text-sm">{feature}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasContent"
                        checked={formData.hasContent}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, hasContent: checked as boolean })
                        }
                      />
                      <Label htmlFor="hasContent">
                        I have existing content (text, images, logos) ready
                      </Label>
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Requirements</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Any specific design preferences, integrations, or special requirements..."
                        className="mt-2 min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Launch Details */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="domain">Domain Name</Label>
                      <Input
                        id="domain"
                        name="domain"
                        value={formData.domain}
                        onChange={handleInputChange}
                        placeholder="Enter your domain (e.g., mybusiness.com) or leave blank for our help"
                        className="mt-2"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Don't have a domain? We can help you purchase and set up the perfect domain for your business.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-4">
                        <CheckCircle className="inline h-5 w-5 mr-2" />
                        Your Website Summary
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Business:</strong> {formData.businessName}</p>
                        <p><strong>Industry:</strong> {formData.industry}</p>
                        <p><strong>Template:</strong> {selectedTemplate?.name}</p>
                        <p><strong>Features:</strong> {formData.features.join(', ')}</p>
                        <p><strong>Domain:</strong> {formData.domain || 'Need assistance with domain'}</p>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-4">
                        What Happens Next?
                      </h3>
                      <div className="space-y-2 text-sm text-green-700">
                        <p>• We'll review your requirements and create a custom proposal</p>
                        <p>• Our design team will prepare your template with your branding</p>
                        <p>• We'll handle all technical setup including domain and hosting</p>
                        <p>• Your website will be live within 2-4 weeks</p>
                        <p>• Full training and documentation provided upon completion</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button
                      onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      disabled={currentStep === 2 && !selectedTemplate}
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    >
                      Submit Website Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Websites;
