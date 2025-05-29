
import { useReducer } from 'react';
import { MVPState, MVPWorkflowAction } from '../types/mvpWorkflow';

const initialState: MVPState = {
  step: 'submit',
  idea: {
    name: '',
    description: '',
    audience: [],
    platform: 'web',
    attachments: []
  },
  preview: {
    type: 'free'
  },
  payments: {
    prototype: false,
    design: false,
    development: false
  },
  status: 'review'
};

function mvpWorkflowReducer(state: MVPState, action: MVPWorkflowAction): MVPState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'UPDATE_IDEA':
      return {
        ...state,
        idea: { ...state.idea, ...action.payload }
      };
    case 'SET_PREVIEW':
      return {
        ...state,
        preview: { ...state.preview, ...action.payload }
      };
    case 'UPDATE_PAYMENTS':
      return {
        ...state,
        payments: { ...state.payments, ...action.payload }
      };
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    default:
      return state;
  }
}

export const useMVPWorkflow = () => {
  const [state, dispatch] = useReducer(mvpWorkflowReducer, initialState);
  return { state, dispatch };
};
