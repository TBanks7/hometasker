import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const VettingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const vettingSteps = [
    {
      id: 1,
      title: "Application Review",
      icon: "FileText",
      description: "Comprehensive application screening including business licenses, insurance verification, and professional references.",
      details: [
        "Business license verification",
        "Professional liability insurance",
        "Workers\' compensation coverage",
        "Trade-specific certifications",
        "Professional references check"
      ],
      duration: "2-3 business days"
    },
    {
      id: 2,
      title: "Background Check",
      icon: "Shield",
      description: "Thorough background screening to ensure safety and trustworthiness for homeowner protection.",
      details: [
        "Criminal background check",
        "Identity verification",
        "Social security validation",
        "Address history verification",
        "Professional conduct review"
      ],
      duration: "3-5 business days"
    },
    {
      id: 3,
      title: "Skill Assessment",
      icon: "Award",
      description: "Practical evaluation of technical skills and service quality standards through portfolio review and testing.",
      details: [
        "Portfolio and work samples review",
        "Technical skill evaluation",
        "Customer service assessment",
        "Quality standards verification",
        "Pricing transparency check"
      ],
      duration: "1-2 business days"
    },
    {
      id: 4,
      title: "Final Approval",
      icon: "CheckCircle",
      description: "Complete profile setup with ongoing monitoring and quality assurance for continuous excellence.",
      details: [
        "Profile completion and verification",
        "Platform training completion",
        "Quality assurance agreement",
        "Ongoing performance monitoring",
        "Customer feedback integration"
      ],
      duration: "1 business day"
    }
  ];

  const trustMetrics = [
    {
      icon: "Shield",
      title: "100% Background Checked",
      description: "Every provider undergoes comprehensive background screening"
    },
    {
      icon: "FileCheck",
      title: "Fully Insured",
      description: "All providers carry liability and workers\' compensation insurance"
    },
    {
      icon: "Award",
      title: "Skill Verified",
      description: "Technical abilities assessed through portfolio and practical evaluation"
    },
    {
      icon: "Users",
      title: "Reference Validated",
      description: "Professional references contacted and verified before approval"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Shield" size={16} className="text-primary" />
            <span className="text-sm font-body font-medium text-primary">
              Rigorous Vetting Process
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            How We Ensure Quality
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Every HomeTasker professional goes through our comprehensive 4-step vetting process. We don't just check boxes – we build trust through thorough verification and ongoing quality assurance.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics?.map((metric, index) => (
            <div key={index} className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {metric?.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {metric?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vetting Steps */}
        <div className="bg-background rounded-2xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Steps Navigation */}
            <div className="p-8 border-r border-border">
              <h3 className="text-xl font-headline font-bold text-foreground mb-6">
                Vetting Process Steps
              </h3>
              <div className="space-y-4">
                {vettingSteps?.map((step, index) => (
                  <button
                    key={step?.id}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-4 rounded-xl transition-residential ${
                      activeStep === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card hover:bg-muted text-foreground'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeStep === index ? 'bg-white/20' : 'bg-primary/10'
                      }`}>
                        <Icon 
                          name={step?.icon} 
                          size={20} 
                          className={activeStep === index ? 'text-white' : 'text-primary'} 
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-body font-semibold">Step {step?.id}</h4>
                          <span className="text-xs opacity-75">{step?.duration}</span>
                        </div>
                        <p className="text-sm opacity-90">{step?.title}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step Details */}
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name={vettingSteps?.[activeStep]?.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-foreground">
                      {vettingSteps?.[activeStep]?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      Duration: {vettingSteps?.[activeStep]?.duration}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground font-body leading-relaxed">
                  {vettingSteps?.[activeStep]?.description}
                </p>

                <div className="space-y-3">
                  <h5 className="font-body font-semibold text-foreground">
                    What we verify:
                  </h5>
                  <ul className="space-y-2">
                    {vettingSteps?.[activeStep]?.details?.map((detail, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                        <span className="text-muted-foreground font-body">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-xl border border-accent/20">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-accent-foreground font-body">
                        <strong>Quality Guarantee:</strong> All providers maintain ongoing compliance with our standards through regular reviews and customer feedback monitoring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-headline font-bold text-foreground mb-4">
              Ready to Join Our Network?
            </h3>
            <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              Are you a skilled professional looking to connect with homeowners who value quality work? Learn about our provider application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-body font-medium transition-residential hover:bg-primary/90">
                <Icon name="UserPlus" size={16} />
                <span>Become a Provider</span>
              </button>
              <button className="inline-flex items-center space-x-2 bg-background text-foreground border border-border px-6 py-3 rounded-xl font-body font-medium transition-residential hover:bg-muted">
                <Icon name="Download" size={16} />
                <span>Download Requirements</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VettingProcess;