
import React from 'react';
import { useMVPWorkflow } from '@/hooks/useMVPWorkflow';
import WorkflowStepper from '@/components/workflow/WorkflowStepper';
import IdeaSubmissionForm from '@/components/mvpWorkflow/IdeaSubmissionForm';
import DemoPreview from '@/components/mvpWorkflow/DemoPreview';
import DevelopmentTracking from '@/components/mvpWorkflow/DevelopmentTracking';
import DeliveryDashboard from '@/components/mvpWorkflow/DeliveryDashboard';

const MVP_STEPS = [
  {
    number: 1,
    title: 'Submit Idea',
    description: 'Share your MVP concept with us'
  },
  {
    number: 2,
    title: 'Preview & Payment',
    description: 'Review demo and choose package'
  },
  {
    number: 3,
    title: 'Development',
    description: 'Track progress and provide feedback'
  },
  {
    number: 4,
    title: 'Delivery',
    description: 'Access your completed MVP'
  }
];

const MVPWorkflow: React.FC = () => {
  const { state, dispatch } = useMVPWorkflow();

  const getCurrentStepNumber = () => {
    switch (state.step) {
      case 'submit': return 1;
      case 'preview': return 2;
      case 'tracking': return 3;
      case 'delivery': return 4;
      default: return 1;
    }
  };

  const renderCurrentStep = () => {
    switch (state.step) {
      case 'submit':
        return <IdeaSubmissionForm state={state} dispatch={dispatch} />;
      case 'preview':
        return <DemoPreview state={state} dispatch={dispatch} />;
      case 'tracking':
        return <DevelopmentTracking state={state} dispatch={dispatch} />;
      case 'delivery':
        return <DeliveryDashboard state={state} dispatch={dispatch} />;
      default:
        return <IdeaSubmissionForm state={state} dispatch={dispatch} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <WorkflowStepper 
        currentStep={getCurrentStepNumber()} 
        steps={MVP_STEPS} 
      />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default MVPWorkflow;
