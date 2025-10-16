import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProgressIndicator from './components/ProgressIndicator';
import ServiceSelectionStep from './components/ServiceSelectionStep.jsx';
import PropertyDetailsStep from './components/PropertyDetailsStep.jsx';
import PhotoUploadStep from './components/PhotoUploadStep.jsx';
import SchedulingStep from './components/SchedulingStep.jsx';
import ContactInfoStep from './components/ContactInfoStep.jsx';
import QuoteSummaryStep from './components/QuoteSummaryStep.jsx';
import QuoteSuccessModal from './components/QuoteSuccessModal.jsx';

const QuoteRequestPage = () => {
  const [currentStep, setCurrentStep] = useState(5);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedQuoteData, setSubmittedQuoteData] = useState(null);

  // Form data state
  const [selectedServices, setSelectedServices] = useState([]);
  const [propertyDetails, setPropertyDetails] = useState({});
  const [photos, setPhotos] = useState([]);
  const [scheduling, setScheduling] = useState({});
  const [contactInfo, setContactInfo] = useState({});

  const steps = [
    { id: 1, title: 'Services', component: 'ServiceSelection' },
    { id: 2, title: 'Property', component: 'PropertyDetails' },
    { id: 3, title: 'Photos', component: 'PhotoUpload' },
    { id: 4, title: 'Schedule', component: 'Scheduling' },
    { id: 5, title: 'Contact', component: 'ContactInfo' },
    { id: 6, title: 'Review', component: 'QuoteSummary' }
  ];

  const totalSteps = steps?.length;

  // Navigation handlers
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Data update handlers
  const handleServiceToggle = (service) => {
    setSelectedServices(prev => {
      const isSelected = prev?.some(s => s?.id === service?.id);
      if (isSelected) {
        return prev?.filter(s => s?.id !== service?.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handlePropertyUpdate = (data) => {
    setPropertyDetails(data);
  };

  const handlePhotosUpdate = (data) => {
    setPhotos(data);
  };

  const handleSchedulingUpdate = (data) => {
    setScheduling(data);
  };

  const handleContactUpdate = (data) => {
    setContactInfo(data);
  };

  const handleQuoteSubmit = (quoteData) => {
    setSubmittedQuoteData(quoteData);
    setShowSuccessModal(true);
    
    // Reset form for new quote
    setCurrentStep(1);
    setSelectedServices([]);
    setPropertyDetails({});
    setPhotos([]);
    setScheduling({});
    setContactInfo({});
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    setSubmittedQuoteData(null);
  };

  // Render current step component
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelectionStep
            selectedServices={selectedServices}
            onServiceToggle={handleServiceToggle}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <PropertyDetailsStep
            propertyDetails={propertyDetails}
            onPropertyUpdate={handlePropertyUpdate}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <PhotoUploadStep
            photos={photos}
            onPhotosUpdate={handlePhotosUpdate}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <SchedulingStep
            scheduling={scheduling}
            onSchedulingUpdate={handleSchedulingUpdate}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return (
          <ContactInfoStep
            contactInfo={contactInfo}
            onContactUpdate={handleContactUpdate}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 6:
        return (
          <QuoteSummaryStep
            selectedServices={selectedServices}
            propertyDetails={propertyDetails}
            photos={photos}
            scheduling={scheduling}
            contactInfo={contactInfo}
            onSubmit={handleQuoteSubmit}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Get Your Quote - HomeTasker | Professional Home Services</title>
        <meta 
          name="description" 
          content="Get instant quotes for home services. Our intelligent quote system matches you with verified local professionals for cleaning, repairs, maintenance, and more." 
        />
        <meta name="keywords" content="home service quotes, professional cleaning, home repairs, maintenance services, local contractors" />
        <meta property="og:title" content="Get Your Quote - HomeTasker" />
        <meta property="og:description" content="Get instant quotes for home services from verified local professionals." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Indicator */}
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
            steps={steps}
          />

          {/* Step Content */}
          <div className="bg-background">
            {renderCurrentStep()}
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Need help with your quote request?{' '}
              <a 
                href="tel:+15551234567" 
                className="text-primary hover:underline font-medium"
              >
                Call (555) 123-4567
              </a>{' '}
              or{' '}
              <a 
                href="mailto:support@hometasker.com" 
                className="text-primary hover:underline font-medium"
              >
                email our support team
              </a>
            </p>
          </div>
        </main>

        {/* Success Modal */}
        <QuoteSuccessModal
          isOpen={showSuccessModal}
          quoteData={submittedQuoteData}
          onClose={handleModalClose}
        />
      </div>
    </>
  );
};

export default QuoteRequestPage;