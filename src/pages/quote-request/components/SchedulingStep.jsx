import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const SchedulingStep = ({ scheduling, onSchedulingUpdate, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    urgency: scheduling?.urgency || '',
    preferredDate: scheduling?.preferredDate || '',
    timePreference: scheduling?.timePreference || '',
    flexibleScheduling: scheduling?.flexibleScheduling || false,
    recurringService: scheduling?.recurringService || '',
    specialInstructions: scheduling?.specialInstructions || ''
  });

  const urgencyOptions = [
    { value: 'emergency', label: 'Emergency (Same Day)', description: 'Urgent repair needed immediately' },
    { value: 'asap', label: 'ASAP (Within 24-48 hours)', description: 'High priority, schedule soon' },
    { value: 'this-week', label: 'This Week', description: 'Flexible within current week' },
    { value: 'next-week', label: 'Next Week', description: 'Can wait until next week' },
    { value: 'flexible', label: 'Flexible (Within 2 weeks)', description: 'No rush, best price preferred' }
  ];

  const timePreferenceOptions = [
    { value: 'morning', label: 'Morning (8 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
    { value: 'flexible', label: 'Flexible - Any time' }
  ];

  const recurringOptions = [
    { value: 'none', label: 'One-time service' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Every 2 weeks' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly (every 3 months)' },
    { value: 'seasonal', label: 'Seasonal (4 times per year)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    onSchedulingUpdate(formData);
    onNext();
  };

  const getMinDate = () => {
    const today = new Date();
    return today?.toISOString()?.split('T')?.[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (90 * 24 * 60 * 60 * 1000)); // 90 days from now
    return maxDate?.toISOString()?.split('T')?.[0];
  };

  const getUrgencyIcon = (urgency) => {
    switch (urgency) {
      case 'emergency': return 'AlertTriangle';
      case 'asap': return 'Clock';
      case 'this-week': return 'Calendar';
      case 'next-week': return 'CalendarDays';
      case 'flexible': return 'CalendarCheck';
      default: return 'Calendar';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'emergency': return 'text-error';
      case 'asap': return 'text-warning';
      case 'this-week': return 'text-primary';
      case 'next-week': return 'text-secondary';
      case 'flexible': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-headline font-bold text-2xl text-foreground mb-2">
          When do you need this done?
        </h2>
        <p className="text-muted-foreground">
          Help us match you with available service providers and get accurate scheduling
        </p>
      </div>
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        {/* Urgency Selection */}
        <div className="space-y-4">
          <h3 className="font-headline font-semibold text-lg text-foreground">
            How urgent is this service?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {urgencyOptions?.map((option) => (
              <div
                key={option?.value}
                onClick={() => handleInputChange('urgency', option?.value)}
                className={`p-4 rounded-lg border cursor-pointer transition-residential ${
                  formData?.urgency === option?.value
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <Icon 
                    name={getUrgencyIcon(option?.value)} 
                    size={20} 
                    className={formData?.urgency === option?.value ? 'text-primary' : getUrgencyColor(option?.value)}
                  />
                  <div className="flex-1">
                    <h4 className="font-body font-semibold text-sm text-foreground mb-1">
                      {option?.label}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {option?.description}
                    </p>
                  </div>
                  {formData?.urgency === option?.value && (
                    <Icon name="Check" size={16} className="text-primary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Date and Time Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Preferred Date
            </label>
            <input
              type="date"
              min={getMinDate()}
              max={getMaxDate()}
              value={formData?.preferredDate}
              onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <p className="text-xs text-muted-foreground">
              Leave blank if flexible with dates
            </p>
          </div>

          <Select
            label="Time Preference"
            placeholder="Select preferred time"
            options={timePreferenceOptions}
            value={formData?.timePreference}
            onChange={(value) => handleInputChange('timePreference', value)}
            description="When would you prefer the service?"
          />
        </div>

        {/* Flexible Scheduling */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="flexible"
            checked={formData?.flexibleScheduling}
            onChange={(e) => handleInputChange('flexibleScheduling', e?.target?.checked)}
            className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
          />
          <div>
            <label htmlFor="flexible" className="font-body font-medium text-foreground cursor-pointer">
              I'm flexible with scheduling for better pricing
            </label>
            <p className="text-sm text-muted-foreground">
              Service providers may offer discounts for flexible scheduling
            </p>
          </div>
        </div>

        {/* Recurring Service */}
        <Select
          label="Recurring Service"
          placeholder="Select frequency"
          options={recurringOptions}
          value={formData?.recurringService}
          onChange={(value) => handleInputChange('recurringService', value)}
          description="Would you like to set up regular service?"
        />

        {/* Special Instructions */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Special Scheduling Instructions
          </label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows={3}
            placeholder="Any specific scheduling requirements, restrictions, or preferences..."
            value={formData?.specialInstructions}
            onChange={(e) => handleInputChange('specialInstructions', e?.target?.value)}
          />
          <p className="text-xs text-muted-foreground">
            e.g., "Avoid Mondays", "Must be completed before 3 PM", "Call before arriving"
          </p>
        </div>
      </div>
      {/* Scheduling Tips */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} color="var(--color-accent)" />
          <div>
            <h4 className="font-headline font-semibold text-foreground mb-2">
              Scheduling Tips
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Flexible scheduling often results in better pricing</li>
              <li>• Morning appointments are typically more reliable</li>
              <li>• Recurring services receive priority scheduling</li>
              <li>• Emergency services may include additional fees</li>
              <li>• Weather may affect outdoor service scheduling</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onBack}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Back to Photos
        </Button>
        
        <Button
          variant="default"
          onClick={handleNext}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Continue to Contact Info
        </Button>
      </div>
    </div>
  );
};

export default SchedulingStep;