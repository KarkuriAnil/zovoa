
export interface MVPState {
  step: 'submit' | 'preview' | 'tracking' | 'delivery';
  idea: {
    name: string;
    description: string;
    audience: string[];
    platform: 'mobile' | 'web' | 'desktop' | 'cross';
    attachments: string[]; // S3 URLs
  };
  preview: {
    type: 'free' | 'interactive' | 'investor';
    accessToken?: string;
  };
  payments: {
    prototype: boolean;
    design: boolean;
    development: boolean;
  };
  status: 'review' | 'design' | 'development' | 'ready';
}

export interface IdeaSubmission {
  name: string;
  description: string;
  audience: string[];
  platform: 'mobile' | 'web' | 'desktop' | 'cross';
  attachments: File[];
}

export interface PreviewPackage {
  type: 'free' | 'interactive' | 'investor';
  figmaEmbed?: string;
  architectureDiagram?: string;
  features: Feature[];
  price: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface DevelopmentPhase {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'done';
  dateStarted?: string;
  dateCompleted?: string;
  feedback: Comment[];
  milestonePayment?: number;
}

export interface Comment {
  id: string;
  text: string;
  timestamp: string;
  attachments?: string[];
}

export type MVPWorkflowAction =
  | { type: 'SET_STEP'; payload: MVPState['step'] }
  | { type: 'UPDATE_IDEA'; payload: Partial<MVPState['idea']> }
  | { type: 'SET_PREVIEW'; payload: Partial<MVPState['preview']> }
  | { type: 'UPDATE_PAYMENTS'; payload: Partial<MVPState['payments']> }
  | { type: 'SET_STATUS'; payload: MVPState['status'] };
