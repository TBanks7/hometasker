import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuoteSuccessModal = ({ isOpen, quoteData, onClose }) => {
  if (!isOpen) return null;

  const estimatedResponseTime = quoteData?.scheduling?.urgency === 'emergency' ?'30 minutes' 
    : quoteData?.scheduling?.urgency === 'asap' ?'2 hours' :'4-6 hours';

  const nextSteps = [
    {
      icon: 'Clock',
      title: 'Quote Processing',
      description: `We're matching you with qualified service providers. Expect your first quote within ${estimatedResponseTime}.`,
      status: 'active'
    },
    {
      icon: 'Users',title: 'Provider Matching',description: 'We\'ll send your request to 3-5 verified providers in your area who specialize in your needed services.',
      status: 'pending'
    },
    {
      icon: 'FileText',
      title: 'Receive Quotes',
      description: 'Compare detailed quotes with pricing, availability, and provider profiles to make the best choice.',
      status: 'pending'
    },
    {
      icon: 'Calendar',
      title: 'Schedule Service',
      description: 'Book your preferred provider directly through our platform with secure payment and scheduling.',
      status: 'pending'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-residential-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-success text-success-foreground p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-success-foreground/20 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" size={24} color="white" />
              </div>
              <div>
                <h2 className="font-headline font-bold text-xl">
                  Quote Request Submitted!
                </h2>
                <p className="text-success-foreground/80">
                  Request ID: QR-{Date.now()?.toString()?.slice(-6)}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-success-foreground/20 rounded-full flex items-center justify-center hover:bg-success-foreground/30 transition-residential"
            >
              <Icon name="X" size={16} color="white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Summary */}
          <div className="bg-card rounded-lg border border-border p-4">
            <h3 className="font-headline font-semibold text-foreground mb-3">
              Request Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Services:</span>
                <p className="font-medium text-foreground">
                  {quoteData?.services?.length || 0} selected
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">Estimated Total:</span>
                <p className="font-medium text-primary">
                  ${quoteData?.estimate || 0}
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">Expected Response:</span>
                <p className="font-medium text-foreground">
                  {estimatedResponseTime}
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">
              What Happens Next?
            </h3>
            <div className="space-y-4">
              {nextSteps?.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step?.status === 'active' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={step?.icon} size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body font-semibold text-foreground">
                      {step?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} color="var(--color-accent)" />
              <div>
                <h4 className="font-headline font-semibold text-foreground mb-2">
                  Important Information
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check your email for quote notifications and updates</li>
                  <li>• All providers are background-checked and insured</li>
                  <li>• You can modify or cancel your request anytime</li>
                  <li>• No payment required until you book a service</li>
                  <li>• Our customer support is available 24/7 for assistance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-card rounded-lg border border-border p-4">
            <h4 className="font-headline font-semibold text-foreground mb-3">
              Need Help or Have Questions?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} color="var(--color-primary)" />
                <div>
                  <p className="font-medium text-foreground">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">24/7 Support Line</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} color="var(--color-primary)" />
                <div>
                  <p className="font-medium text-foreground">support@hometasker.com</p>
                  <p className="text-sm text-muted-foreground">Email Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="default"
              fullWidth
              iconName="Home"
              iconPosition="left"
              asChild
            >
              <Link to="/homepage">
                Return to Homepage
              </Link>
            </Button>
            
            <Button
              variant="outline"
              fullWidth
              iconName="Plus"
              iconPosition="left"
              onClick={onClose}
            >
              Submit Another Quote
            </Button>
            
            <Button
              variant="secondary"
              fullWidth
              iconName="Wrench"
              iconPosition="left"
              asChild
            >
              <Link to="/services">
                Browse Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSuccessModal;