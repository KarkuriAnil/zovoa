
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MVPState, MVPWorkflowAction } from '@/types/mvpWorkflow';
import { useToast } from '@/hooks/use-toast';

interface DemoPreviewProps {
  state: MVPState;
  dispatch: React.Dispatch<MVPWorkflowAction>;
}

const PREVIEW_PACKAGES = [
  {
    type: 'free' as const,
    title: 'Basic Demo',
    price: 0,
    features: ['Static screenshots', 'Basic feature list', 'PDF summary'],
    description: 'Get a basic overview of your idea'
  },
  {
    type: 'interactive' as const,
    title: 'Interactive Prototype',
    price: 49,
    features: ['Interactive Figma prototype', 'Architecture diagram', 'Detailed feature specs', 'Priority roadmap'],
    description: 'Fully interactive prototype with technical specs'
  },
  {
    type: 'investor' as const,
    title: 'Investor Package',
    price: 199,
    features: ['Everything in Interactive', 'Professional PDF report', 'Market analysis', 'Shareable investor link', 'Video presentation'],
    description: 'Complete package ready for investor presentations'
  }
];

const SAMPLE_FEATURES = [
  { id: '1', title: 'User Authentication', description: 'Secure login and registration system', priority: 'high' as const },
  { id: '2', title: 'Dashboard', description: 'Main user interface and navigation', priority: 'high' as const },
  { id: '3', title: 'Payment Integration', description: 'Stripe payment processing', priority: 'medium' as const },
  { id: '4', title: 'Push Notifications', description: 'Real-time user notifications', priority: 'low' as const }
];

// Razorpay configuration
const RAZORPAY_KEY_ID = 'rzp_test_1234567890'; // Replace with your actual Razorpay key

declare global {
  interface Window {
    Razorpay: any;
  }
}

const DemoPreview: React.FC<DemoPreviewProps> = ({ state, dispatch }) => {
  const { toast } = useToast();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const initializeRazorpayPayment = async (amount: number, packageType: 'interactive' | 'investor') => {
    const scriptLoaded = await loadRazorpayScript();
    
    if (!scriptLoaded) {
      toast({
        title: "Payment Error",
        description: "Failed to load payment gateway. Please try again.",
        variant: "destructive"
      });
      return;
    }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'USD',
      name: 'IdeaLaunch',
      description: `${packageType === 'interactive' ? 'Interactive Prototype' : 'Investor Package'}`,
      image: '/favicon.ico',
      handler: function (response: any) {
        handlePaymentSuccess(response, packageType);
      },
      prefill: {
        name: 'John Doe', // This should come from user context
        email: 'john@example.com', // This should come from user context
        contact: '+1234567890' // This should come from user context
      },
      theme: {
        color: '#7C3AED'
      },
      modal: {
        ondismiss: function() {
          toast({
            title: "Payment Cancelled",
            description: "Payment was cancelled by user.",
            variant: "destructive"
          });
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handlePaymentSuccess = (response: any, packageType: 'interactive' | 'investor') => {
    console.log('Payment successful:', response);
    
    // Update state with successful payment
    dispatch({ type: 'SET_PREVIEW', payload: { 
      type: packageType, 
      accessToken: response.razorpay_payment_id,
      paymentStatus: 'success' as const,
      paymentId: response.razorpay_payment_id
    }});
    dispatch({ type: 'UPDATE_PAYMENTS', payload: { prototype: true } });
    dispatch({ type: 'SET_STEP', payload: 'tracking' });

    toast({
      title: "Payment Successful!",
      description: `Your ${packageType === 'interactive' ? 'Interactive Prototype' : 'Investor Package'} has been unlocked.`,
    });
  };

  const handlePayment = (packageType: 'free' | 'interactive' | 'investor') => {
    if (packageType === 'free') {
      dispatch({ type: 'SET_PREVIEW', payload: { type: packageType } });
      dispatch({ type: 'SET_STEP', payload: 'tracking' });
      toast({
        title: "Demo Unlocked",
        description: "Your basic demo is now available.",
      });
    } else {
      const selectedPackage = PREVIEW_PACKAGES.find(pkg => pkg.type === packageType);
      if (selectedPackage) {
        initializeRazorpayPayment(selectedPackage.price, packageType);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Panel - Preview */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Interactive Prototype</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              {state.preview.accessToken ? (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <p className="text-white text-lg">🎉 Figma Prototype Unlocked!</p>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">🔒</div>
                      <p className="text-lg font-semibold">Preview Mode</p>
                      <p className="text-sm">Unlock full access with payment</p>
                    </div>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <p className="text-white text-lg">Figma Prototype Embed</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Architecture Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-4xl mb-2">📊</div>
                <p>System Architecture Diagram</p>
                <p className="text-sm">(Mermaid.js visualization)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {SAMPLE_FEATURES.map((feature) => (
                <div key={feature.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Badge 
                    variant={feature.priority === 'high' ? 'destructive' : feature.priority === 'medium' ? 'default' : 'secondary'}
                  >
                    {feature.priority}
                  </Badge>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel - Pricing */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Choose Your Package</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {PREVIEW_PACKAGES.map((pkg) => (
                <div
                  key={pkg.type}
                  className={`border rounded-lg p-4 ${
                    state.preview.type === pkg.type ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{pkg.title}</h3>
                      <p className="text-sm text-gray-600">{pkg.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold">
                        {pkg.price === 0 ? 'Free' : `$${pkg.price}`}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1 mb-4">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={() => handlePayment(pkg.type)}
                    className={`w-full ${
                      pkg.type === 'investor' 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : pkg.type === 'interactive'
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-600 hover:bg-gray-700'
                    }`}
                    disabled={state.preview.type === pkg.type && state.preview.accessToken}
                  >
                    {state.preview.type === pkg.type && state.preview.accessToken 
                      ? '✓ Purchased' 
                      : pkg.price === 0 
                        ? 'Get Basic Demo' 
                        : `Pay $${pkg.price} with Razorpay`
                    }
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What happens next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">1</span>
                </div>
                <p>Your idea enters our review process</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">2</span>
                </div>
                <p>We create detailed wireframes and mockups</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">3</span>
                </div>
                <p>Development begins with regular updates</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">4</span>
                </div>
                <p>Final delivery with deployment options</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DemoPreview;
