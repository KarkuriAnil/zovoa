
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MVPState, MVPWorkflowAction } from '@/types/mvpWorkflow';

interface IdeaSubmissionFormProps {
  state: MVPState;
  dispatch: React.Dispatch<MVPWorkflowAction>;
}

const AUDIENCE_SUGGESTIONS = ['GenZ', 'SMEs', 'Millennials', 'B2B', 'B2C', 'Enterprises', 'Startups'];

const IdeaSubmissionForm: React.FC<IdeaSubmissionFormProps> = ({ state, dispatch }) => {
  const [audienceInput, setAudienceInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleAudienceAdd = (audience: string) => {
    if (audience && !state.idea.audience.includes(audience)) {
      dispatch({
        type: 'UPDATE_IDEA',
        payload: { audience: [...state.idea.audience, audience] }
      });
      setAudienceInput('');
    }
  };

  const handleAudienceRemove = (audience: string) => {
    dispatch({
      type: 'UPDATE_IDEA',
      payload: { audience: state.idea.audience.filter(a => a !== audience) }
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!state.idea.name.trim()) {
      newErrors.name = 'Product name is required';
    }
    
    if (state.idea.description.length < 100) {
      newErrors.description = 'Description must be at least 100 characters';
    }
    
    if (state.idea.audience.length === 0) {
      newErrors.audience = 'At least one target audience is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch({ type: 'SET_STEP', payload: 'preview' });
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Submit Your MVP Idea
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="product-name">Product Name</Label>
          <Input
            id="product-name"
            value={state.idea.name}
            onChange={(e) => dispatch({
              type: 'UPDATE_IDEA',
              payload: { name: e.target.value }
            })}
            placeholder="Enter your product name"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={state.idea.description}
            onChange={(e) => dispatch({
              type: 'UPDATE_IDEA',
              payload: { description: e.target.value }
            })}
            placeholder="Describe your product idea in detail (minimum 100 characters)"
            rows={6}
            className={errors.description ? 'border-red-500' : ''}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{state.idea.description.length}/100 characters minimum</span>
            {errors.description && <span className="text-red-500">{errors.description}</span>}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Target Audience</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {state.idea.audience.map((audience) => (
              <span
                key={audience}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {audience}
                <button
                  onClick={() => handleAudienceRemove(audience)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={audienceInput}
              onChange={(e) => setAudienceInput(e.target.value)}
              placeholder="Add target audience"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAudienceAdd(audienceInput);
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => handleAudienceAdd(audienceInput)}
            >
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            <span className="text-sm text-gray-500">Suggestions:</span>
            {AUDIENCE_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleAudienceAdd(suggestion)}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
              >
                {suggestion}
              </button>
            ))}
          </div>
          {errors.audience && <p className="text-red-500 text-sm">{errors.audience}</p>}
        </div>

        <div className="space-y-2">
          <Label>Platform</Label>
          <RadioGroup
            value={state.idea.platform}
            onValueChange={(value) => dispatch({
              type: 'UPDATE_IDEA',
              payload: { platform: value as MVPState['idea']['platform'] }
            })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mobile" id="mobile" />
              <Label htmlFor="mobile">Mobile App</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="web" id="web" />
              <Label htmlFor="web">Web App</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="desktop" id="desktop" />
              <Label htmlFor="desktop">Desktop</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cross" id="cross" />
              <Label htmlFor="cross">Cross-Platform</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Attachments</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500">
              Drag & drop files here (PDF, FIGMA, ZIP)
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Or click to browse files
            </p>
          </div>
        </div>

        <Button 
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700"
          size="lg"
        >
          Generate Preview
        </Button>
      </CardContent>
    </Card>
  );
};

export default IdeaSubmissionForm;
