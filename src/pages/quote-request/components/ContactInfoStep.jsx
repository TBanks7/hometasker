import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactInfoStep = ({ contactInfo, onContactUpdate, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: contactInfo?.firstName || '',
    lastName: contactInfo?.lastName || '',
    email: contactInfo?.email || '',
    phone: contactInfo?.phone || '',
    preferredContact: contactInfo?.preferredContact || 'phone',
    bestTimeToCall: contactInfo?.bestTimeToCall || '',
    communicationPreferences: contactInfo?.communicationPreferences || [],
    emergencyContact: contactInfo?.emergencyContact || '',
    specialInstructions: contactInfo?.specialInstructions || ''
  });

  const [errors, setErrors] = useState({});

  const contactMethodOptions = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'text', label: 'Text Message' },
    { value: 'email', label: 'Email' },
    { value: 'app', label: 'In-App Notification' }
  ];

  const callTimeOptions = [
    { value: 'morning', label: 'Morning (8 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
    { value: 'anytime', label: 'Anytime during business hours' }
  ];

  const communicationOptions = [
    { id: 'quotes', label: 'Quote updates and revisions' },
    { id: 'scheduling', label: 'Scheduling confirmations and changes' },
    { id: 'arrival', label: 'Service provider arrival notifications' },
    { id: 'completion', label: 'Service completion updates' },
    { id: 'follow-up', label: 'Follow-up and satisfaction surveys' },
    { id: 'promotions', label: 'Special offers and promotions' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleCommunicationToggle = (optionId) => {
    setFormData(prev => ({
      ...prev,
      communicationPreferences: prev?.communicationPreferences?.includes(optionId)
        ? prev?.communicationPreferences?.filter(id => id !== optionId)
        : [...prev?.communicationPreferences, optionId]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData?.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)\+]{10,}$/?.test(formData?.phone?.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onContactUpdate(formData);
      onNext();
    }
  };

  const formatPhoneNumber = (value) => {
    const phoneNumber = value?.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber?.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber?.slice(0, 3)}) ${phoneNumber?.slice(3)}`;
    }
    return `(${phoneNumber?.slice(0, 3)}) ${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e?.target?.value);
    handleInputChange('phone', formatted);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-headline font-bold text-2xl text-foreground mb-2">
          How can we reach you?
        </h2>
        <p className="text-muted-foreground">
          We'll use this information to send your quote and coordinate with service providers
        </p>
      </div>
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        {/* Basic Contact Information */}
        <div className="space-y-4">
          <h3 className="font-headline font-semibold text-lg text-foreground">
            Contact Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              value={formData?.firstName}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              error={errors?.firstName}
              required
            />

            <Input
              label="Last Name"
              type="text"
              placeholder="Enter your last name"
              value={formData?.lastName}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
              error={errors?.lastName}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
              description="We'll send your quote here"
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData?.phone}
              onChange={handlePhoneChange}
              error={errors?.phone}
              required
              description="For scheduling and updates"
            />
          </div>
        </div>

        {/* Communication Preferences */}
        <div className="space-y-4">
          <h3 className="font-headline font-semibold text-lg text-foreground">
            Communication Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Preferred Contact Method"
              placeholder="Select contact method"
              options={contactMethodOptions}
              value={formData?.preferredContact}
              onChange={(value) => handleInputChange('preferredContact', value)}
              description="How would you like us to contact you?"
            />

            <Select
              label="Best Time to Call"
              placeholder="Select best time"
              options={callTimeOptions}
              value={formData?.bestTimeToCall}
              onChange={(value) => handleInputChange('bestTimeToCall', value)}
              description="When are you usually available?"
            />
          </div>

          <Input
            label="Emergency Contact (Optional)"
            type="tel"
            placeholder="(555) 987-6543"
            value={formData?.emergencyContact}
            onChange={(e) => handleInputChange('emergencyContact', e?.target?.value)}
            description="Alternative contact for urgent matters"
          />
        </div>

        {/* Communication Preferences Checkboxes */}
        <div className="space-y-4">
          <h3 className="font-headline font-semibold text-lg text-foreground">
            What would you like to be notified about?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {communicationOptions?.map((option) => (
              <div
                key={option?.id}
                onClick={() => handleCommunicationToggle(option?.id)}
                className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-residential"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-residential ${
                    formData?.communicationPreferences?.includes(option?.id)
                      ? 'bg-primary border-primary' :'border-border'
                  }`}
                >
                  {formData?.communicationPreferences?.includes(option?.id) && (
                    <Icon name="Check" size={12} color="white" />
                  )}
                </div>
                <span className="font-body text-sm text-foreground">
                  {option?.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Instructions */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Special Communication Instructions
          </label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows={3}
            placeholder="Any specific communication preferences or instructions..."
            value={formData?.specialInstructions}
            onChange={(e) => handleInputChange('specialInstructions', e?.target?.value)}
          />
          <p className="text-xs text-muted-foreground">
            e.g., "Don't call during work hours", "Text before calling", "Use back door"
          </p>
        </div>
      </div>
      {/* Privacy Notice */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} color="var(--color-accent)" />
          <div>
            <h4 className="font-headline font-semibold text-foreground mb-2">
              Your Privacy Matters
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• We never share your contact information with third parties</li>
              <li>• Only verified service providers will have access to your details</li>
              <li>• You can update communication preferences anytime</li>
              <li>• All communications are logged for quality assurance</li>
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
          Back to Scheduling
        </Button>
        
        <Button
          variant="default"
          onClick={handleNext}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Review & Submit Quote
        </Button>
      </div>
    </div>
  );
};

export default ContactInfoStep;