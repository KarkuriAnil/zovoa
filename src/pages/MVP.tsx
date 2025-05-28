
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
import { Code, ArrowRight, CheckCircle, Upload, FileText, Clock } from 'lucide-react';

const MVP = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    targetAudience: '',
    platform: '',
    features: [],
    timeline: '',
    budget: '',
    hasDesigns: false,
    additionalInfo: ''
  });

  const steps = [
    { number: 1, title: 'Project Details', description: 'Tell us about your MVP idea' },
    { number: 2, title: 'Technical Specs', description: 'Platform and feature requirements' },
    { number: 3, title: 'Timeline & Budget', description: 'Project scope and investment' },
    { number: 4, title: 'Review & Submit', description: 'Final review and submission' }
  ];

  const platforms = [
    { value: 'web', label: 'Web Application', description: 'Browser-based application' },
    { value: 'mobile', label: 'Mobile App', description: 'iOS and/or Android' },
    { value: 'desktop', label: 'Desktop App', description: 'Windows/Mac/Linux' },
    { value: 'cross-platform', label: 'Cross-Platform', description: 'Multiple platforms' }
  ];

  const coreFeatures = [
    'User Authentication',
    'User Dashboard',
    'Data Management',
    'Payment Integration',
    'Real-time Features',
    'Notifications',
    'Analytics',
    'API Integration',
    'File Upload',
    'Search Functionality'
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
    console.log('MVP submission:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl inline-flex mb-6">
              <Code className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              MVP <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Transform your product idea into a fully functional MVP with our structured development process and milestone-based delivery.
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
                      ? 'bg-blue-600 text-white' 
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
                        className={`h-full bg-blue-600 transition-all duration-300 ${
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {/* Step 1: Project Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="productName">Product Name *</Label>
                      <Input
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        placeholder="Enter your product name"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Product Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe your product idea, what problem it solves, and how it works..."
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="targetAudience">Target Audience *</Label>
                      <Textarea
                        id="targetAudience"
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleInputChange}
                        placeholder="Who are your target users? What are their pain points and needs?"
                        className="mt-2 min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Technical Specs */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label>Platform *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {platforms.map((platform) => (
                          <Card 
                            key={platform.value}
                            className={`cursor-pointer border-2 transition-colors ${
                              formData.platform === platform.value 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleSelectChange('platform', platform.value)}
                          >
                            <CardContent className="p-4">
                              <h3 className="font-semibold">{platform.label}</h3>
                              <p className="text-sm text-gray-600">{platform.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Core Features *</Label>
                      <p className="text-sm text-gray-600 mb-4">Select the features you need for your MVP</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {coreFeatures.map((feature) => (
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
                  </div>
                )}

                {/* Step 3: Timeline & Budget */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="timeline">Preferred Timeline *</Label>
                      <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your preferred timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4-6-weeks">4-6 weeks (Basic MVP)</SelectItem>
                          <SelectItem value="6-8-weeks">6-8 weeks (Standard MVP)</SelectItem>
                          <SelectItem value="8-12-weeks">8-12 weeks (Advanced MVP)</SelectItem>
                          <SelectItem value="12-plus-weeks">12+ weeks (Complex MVP)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget">Project Budget *</Label>
                      <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                          <SelectItem value="20k-35k">$20,000 - $35,000</SelectItem>
                          <SelectItem value="35k-50k">$35,000 - $50,000</SelectItem>
                          <SelectItem value="50k-plus">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasDesigns"
                        checked={formData.hasDesigns}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, hasDesigns: checked as boolean })
                        }
                      />
                      <Label htmlFor="hasDesigns">
                        I have existing designs, wireframes, or mockups
                      </Label>
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Any additional requirements, technical preferences, or special considerations..."
                        className="mt-2 min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-4">
                        <CheckCircle className="inline h-5 w-5 mr-2" />
                        Review Your MVP Submission
                      </h3>
                      <div className="space-y-3 text-sm">
                        <p><strong>Product:</strong> {formData.productName}</p>
                        <p><strong>Platform:</strong> {formData.platform}</p>
                        <p><strong>Features:</strong> {formData.features.join(', ')}</p>
                        <p><strong>Timeline:</strong> {formData.timeline}</p>
                        <p><strong>Budget:</strong> {formData.budget}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-4">
                        What Happens Next?
                      </h3>
                      <div className="space-y-3 text-sm text-blue-700">
                        <div className="flex items-start space-x-3">
                          <Clock className="h-5 w-5 mt-0.5" />
                          <div>
                            <strong>Within 24 hours:</strong> Our team will review your submission and contact you
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <FileText className="h-5 w-5 mt-0.5" />
                          <div>
                            <strong>Day 2-3:</strong> We'll create a detailed project proposal and demo document
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 mt-0.5" />
                          <div>
                            <strong>Week 1:</strong> Project kickoff with milestone-based development schedule
                          </div>
                        </div>
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
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    >
                      Submit MVP Request
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

export default MVP;
