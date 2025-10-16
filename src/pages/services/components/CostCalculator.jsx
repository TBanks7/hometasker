import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

import Select from '../../../components/ui/Select';

const CostCalculator = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    propertySize: '',
    frequency: '',
    urgency: '',
    additionalServices: []
  });
  
  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const serviceOptions = [
    { value: 'cleaning', label: 'House Cleaning' },
    { value: 'lawn-care', label: 'Lawn Care' },
    { value: 'hvac', label: 'HVAC Maintenance' },
    { value: 'plumbing', label: 'Plumbing Services' },
    { value: 'electrical', label: 'Electrical Work' },
    { value: 'painting', label: 'Interior/Exterior Painting' }
  ];

  const propertySizeOptions = [
    { value: 'small', label: 'Small (< 1,500 sq ft)' },
    { value: 'medium', label: 'Medium (1,500 - 2,500 sq ft)' },
    { value: 'large', label: 'Large (2,500 - 4,000 sq ft)' },
    { value: 'xl', label: 'Extra Large (> 4,000 sq ft)' }
  ];

  const frequencyOptions = [
    { value: 'one-time', label: 'One-time Service' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' }
  ];

  const urgencyOptions = [
    { value: 'standard', label: 'Standard (3-5 days)' },
    { value: 'priority', label: 'Priority (1-2 days)' },
    { value: 'emergency', label: 'Emergency (Same day)' }
  ];

  const calculateEstimate = () => {
    setIsCalculating(true);
    
    // Mock calculation logic
    setTimeout(() => {
      const baseRates = {
        'cleaning': { small: 80, medium: 120, large: 180, xl: 250 },
        'lawn-care': { small: 50, medium: 75, large: 120, xl: 180 },
        'hvac': { small: 150, medium: 200, large: 280, xl: 350 },
        'plumbing': { small: 120, medium: 160, large: 220, xl: 300 },
        'electrical': { small: 100, medium: 140, large: 200, xl: 280 },
        'painting': { small: 300, medium: 500, large: 800, xl: 1200 }
      };

      const frequencyMultipliers = {
        'one-time': 1,
        'weekly': 0.85,
        'bi-weekly': 0.9,
        'monthly': 0.95,
        'quarterly': 1
      };

      const urgencyMultipliers = {
        'standard': 1,
        'priority': 1.25,
        'emergency': 1.5
      };

      const basePrice = baseRates?.[formData?.serviceType]?.[formData?.propertySize] || 100;
      const frequencyMultiplier = frequencyMultipliers?.[formData?.frequency] || 1;
      const urgencyMultiplier = urgencyMultipliers?.[formData?.urgency] || 1;

      const finalPrice = Math.round(basePrice * frequencyMultiplier * urgencyMultiplier);
      const priceRange = {
        min: Math.round(finalPrice * 0.8),
        max: Math.round(finalPrice * 1.2)
      };

      setEstimate({
        basePrice: finalPrice,
        range: priceRange,
        savings: formData?.frequency !== 'one-time' ? Math.round(basePrice * 0.15) : 0,
        breakdown: {
          service: serviceOptions?.find(s => s?.value === formData?.serviceType)?.label,
          size: propertySizeOptions?.find(s => s?.value === formData?.propertySize)?.label,
          frequency: frequencyOptions?.find(s => s?.value === formData?.frequency)?.label,
          urgency: urgencyOptions?.find(s => s?.value === formData?.urgency)?.label
        }
      });
      
      setIsCalculating(false);
      onCalculate && onCalculate(estimate);
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setEstimate(null);
  };

  const isFormValid = formData?.serviceType && formData?.propertySize && 
                     formData?.frequency && formData?.urgency;

  return (
    <div className="bg-card rounded-lg shadow-residential border border-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={20} color="white" />
        </div>
        <div>
          <h3 className="font-headline font-bold text-lg text-foreground">
            Cost Calculator
          </h3>
          <p className="text-sm text-muted-foreground">
            Get an instant estimate for your service needs
          </p>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        <Select
          label="Service Type"
          options={serviceOptions}
          value={formData?.serviceType}
          onChange={(value) => handleInputChange('serviceType', value)}
          placeholder="Select a service"
          required
        />

        <Select
          label="Property Size"
          options={propertySizeOptions}
          value={formData?.propertySize}
          onChange={(value) => handleInputChange('propertySize', value)}
          placeholder="Select property size"
          required
        />

        <Select
          label="Service Frequency"
          options={frequencyOptions}
          value={formData?.frequency}
          onChange={(value) => handleInputChange('frequency', value)}
          placeholder="How often do you need this service?"
          required
        />

        <Select
          label="Timeline"
          options={urgencyOptions}
          value={formData?.urgency}
          onChange={(value) => handleInputChange('urgency', value)}
          placeholder="When do you need this done?"
          required
        />
      </div>
      {/* Calculate Button */}
      <Button
        variant="default"
        fullWidth
        onClick={calculateEstimate}
        disabled={!isFormValid}
        loading={isCalculating}
        iconName="Calculator"
        iconPosition="left"
        className="mb-6"
      >
        Calculate Estimate
      </Button>
      {/* Results */}
      {estimate && (
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-foreground">
              ${estimate?.range?.min} - ${estimate?.range?.max}
            </div>
            <div className="text-sm text-muted-foreground">
              Estimated cost range
            </div>
            {estimate?.savings > 0 && (
              <div className="text-sm text-success font-medium mt-1">
                Save ${estimate?.savings} with recurring service!
              </div>
            )}
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <span className="text-foreground">{estimate?.breakdown?.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Property Size:</span>
              <span className="text-foreground">{estimate?.breakdown?.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frequency:</span>
              <span className="text-foreground">{estimate?.breakdown?.frequency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Timeline:</span>
              <span className="text-foreground">{estimate?.breakdown?.urgency}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <Button
              variant="outline"
              fullWidth
              iconName="FileText"
              iconPosition="left"
            >
              Get Detailed Quote
            </Button>
          </div>
        </div>
      )}
      <div className="mt-4 text-xs text-muted-foreground text-center">
        * Estimates are approximate. Final pricing may vary based on specific requirements and local market rates.
      </div>
    </div>
  );
};

export default CostCalculator;