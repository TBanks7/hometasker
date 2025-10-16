import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const QuoteSummaryStep = ({ 
  selectedServices, 
  propertyDetails, 
  photos, 
  scheduling, 
  contactInfo, 
  onSubmit, 
  onBack 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const totalEstimate = selectedServices?.reduce((total, service) => total + service?.price, 0);
  const urgencyMultiplier = scheduling?.urgency === 'emergency' ? 1.5 : scheduling?.urgency === 'asap' ? 1.2 : 1;
  const adjustedTotal = Math.round(totalEstimate * urgencyMultiplier);
  const recurringDiscount = scheduling?.recurringService && scheduling?.recurringService !== 'none' ? 0.1 : 0;
  const finalTotal = Math.round(adjustedTotal * (1 - recurringDiscount));

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions to continue.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit({
        services: selectedServices,
        property: propertyDetails,
        photos: photos,
        scheduling: scheduling,
        contact: contactInfo,
        estimate: finalTotal,
        submittedAt: new Date()?.toISOString()
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Flexible';
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getUrgencyLabel = (urgency) => {
    const labels = {
      'emergency': 'Emergency (Same Day)',
      'asap': 'ASAP (24-48 hours)',
      'this-week': 'This Week',
      'next-week': 'Next Week',
      'flexible': 'Flexible (2 weeks)'
    };
    return labels?.[urgency] || urgency;
  };

  const getRecurringLabel = (recurring) => {
    const labels = {
      'none': 'One-time service',
      'weekly': 'Weekly',
      'bi-weekly': 'Every 2 weeks',
      'monthly': 'Monthly',
      'quarterly': 'Quarterly',
      'seasonal': 'Seasonal'
    };
    return labels?.[recurring] || recurring;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-headline font-bold text-2xl text-foreground mb-2">
          Review Your Quote Request
        </h2>
        <p className="text-muted-foreground">
          Please review all details before submitting. You'll receive your quote within 2 hours.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Selected Services */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="font-headline font-semibold text-lg text-foreground mb-4 flex items-center">
              <Icon name="Wrench" size={20} className="mr-2" />
              Selected Services ({selectedServices?.length})
            </h3>
            
            <div className="space-y-3">
              {selectedServices?.map((service) => (
                <div key={service?.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name={service?.icon} size={18} color="var(--color-primary)" />
                    <div>
                      <span className="font-body font-medium text-foreground">
                        {service?.serviceName}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {service?.categoryName}
                      </p>
                    </div>
                  </div>
                  <span className="font-headline font-semibold text-primary">
                    ${service?.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="font-headline font-semibold text-lg text-foreground mb-4 flex items-center">
              <Icon name="Home" size={20} className="mr-2" />
              Property Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Property Type:</span>
                <p className="font-medium text-foreground capitalize">
                  {propertyDetails?.propertyType?.replace('-', ' ') || 'Not specified'}
                </p>
              </div>
              
              {propertyDetails?.squareFootage && (
                <div>
                  <span className="text-muted-foreground">Square Footage:</span>
                  <p className="font-medium text-foreground">
                    {propertyDetails?.squareFootage} sq ft
                  </p>
                </div>
              )}
              
              {propertyDetails?.bedrooms && (
                <div>
                  <span className="text-muted-foreground">Bedrooms:</span>
                  <p className="font-medium text-foreground">
                    {propertyDetails?.bedrooms}
                  </p>
                </div>
              )}
              
              {propertyDetails?.bathrooms && (
                <div>
                  <span className="text-muted-foreground">Bathrooms:</span>
                  <p className="font-medium text-foreground">
                    {propertyDetails?.bathrooms}
                  </p>
                </div>
              )}
              
              <div className="md:col-span-2">
                <span className="text-muted-foreground">Address:</span>
                <p className="font-medium text-foreground">
                  {propertyDetails?.address || 'Not provided'}
                </p>
              </div>
            </div>
          </div>

          {/* Photos */}
          {photos && photos?.length > 0 && (
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-headline font-semibold text-lg text-foreground mb-4 flex items-center">
                <Icon name="Camera" size={20} className="mr-2" />
                Uploaded Photos ({photos?.length})
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {photos?.slice(0, 8)?.map((photo) => (
                  <div key={photo?.id} className="relative">
                    <div className="w-full h-20 bg-muted rounded-lg overflow-hidden">
                      <Image
                        src={photo?.preview}
                        alt={photo?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {photo?.description && (
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {photo?.description}
                      </p>
                    )}
                  </div>
                ))}
                {photos?.length > 8 && (
                  <div className="w-full h-20 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      +{photos?.length - 8} more
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Scheduling & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-headline font-semibold text-lg text-foreground mb-4 flex items-center">
                <Icon name="Calendar" size={20} className="mr-2" />
                Scheduling
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Urgency:</span>
                  <p className="font-medium text-foreground">
                    {getUrgencyLabel(scheduling?.urgency)}
                  </p>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Preferred Date:</span>
                  <p className="font-medium text-foreground">
                    {formatDate(scheduling?.preferredDate)}
                  </p>
                </div>
                
                {scheduling?.timePreference && (
                  <div>
                    <span className="text-muted-foreground">Time Preference:</span>
                    <p className="font-medium text-foreground capitalize">
                      {scheduling?.timePreference?.replace('-', ' ')}
                    </p>
                  </div>
                )}
                
                <div>
                  <span className="text-muted-foreground">Service Frequency:</span>
                  <p className="font-medium text-foreground">
                    {getRecurringLabel(scheduling?.recurringService)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-headline font-semibold text-lg text-foreground mb-4 flex items-center">
                <Icon name="User" size={20} className="mr-2" />
                Contact Information
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Name:</span>
                  <p className="font-medium text-foreground">
                    {contactInfo?.firstName} {contactInfo?.lastName}
                  </p>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <p className="font-medium text-foreground">
                    {contactInfo?.email}
                  </p>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Phone:</span>
                  <p className="font-medium text-foreground">
                    {contactInfo?.phone}
                  </p>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Preferred Contact:</span>
                  <p className="font-medium text-foreground capitalize">
                    {contactInfo?.preferredContact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Summary Sidebar */}
        <div className="space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 sticky top-6">
            <h3 className="font-headline font-semibold text-lg text-foreground mb-4">
              Quote Summary
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Base Services:</span>
                <span className="font-medium">${totalEstimate}</span>
              </div>
              
              {urgencyMultiplier > 1 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {scheduling?.urgency === 'emergency' ? 'Emergency' : 'Rush'} Fee:
                  </span>
                  <span className="font-medium">
                    +${adjustedTotal - totalEstimate}
                  </span>
                </div>
              )}
              
              {recurringDiscount > 0 && (
                <div className="flex justify-between text-success">
                  <span>Recurring Service Discount:</span>
                  <span className="font-medium">
                    -${Math.round(adjustedTotal * recurringDiscount)}
                  </span>
                </div>
              )}
              
              <div className="border-t border-border pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-headline font-semibold text-foreground">
                    Estimated Total:
                  </span>
                  <span className="font-headline font-bold text-xl text-primary">
                    ${finalTotal}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-accent/10 rounded-lg">
              <p className="text-xs text-muted-foreground">
                * This is an estimate. Final pricing may vary based on actual scope of work and provider assessment.
              </p>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e?.target?.checked)}
                className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <div>
                <label htmlFor="terms" className="font-body text-sm text-foreground cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </label>
                <p className="text-xs text-muted-foreground mt-1">
                  By submitting, you agree to receive quotes from verified service providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onBack}
          iconName="ArrowLeft"
          iconPosition="left"
          disabled={isSubmitting}
        >
          Back to Contact Info
        </Button>
        
        <Button
          variant="default"
          onClick={handleSubmit}
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          disabled={!agreedToTerms}
        >
          {isSubmitting ? 'Submitting Quote...' : 'Submit Quote Request'}
        </Button>
      </div>
    </div>
  );
};

export default QuoteSummaryStep;