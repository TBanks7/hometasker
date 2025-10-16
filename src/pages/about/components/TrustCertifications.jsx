import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustCertifications = () => {
  const certifications = [
    {
      name: "Better Business Bureau",
      rating: "A+",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Accredited business with highest rating for customer service and ethical practices",
      verified: true
    },
    {
      name: "HomeAdvisor Elite Service",
      rating: "Elite",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Top-tier service provider recognition for quality and customer satisfaction",
      verified: true
    },
    {
      name: "Angie\'s List Super Service",
      rating: "Winner",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Annual award for exceptional customer service and quality standards",
      verified: true
    },
    {
      name: "TrustPilot Excellence",
      rating: "4.8/5",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Excellent rating based on verified customer reviews and experiences",
      verified: true
    }
  ];

  const securityFeatures = [
    {
      icon: "Shield",
      title: "SSL Encryption",
      description: "Bank-level security for all data transmission and storage"
    },
    {
      icon: "Lock",
      title: "PCI Compliance",
      description: "Secure payment processing meeting industry standards"
    },
    {
      icon: "Eye",
      title: "Privacy Protection",
      description: "GDPR compliant data handling and privacy controls"
    },
    {
      icon: "FileCheck",
      title: "Insurance Verified",
      description: "All providers carry verified liability and workers' compensation"
    }
  ];

  const guarantees = [
    {
      icon: "CheckCircle",
      title: "Satisfaction Guarantee",
      description: "100% satisfaction or we\'ll make it right",
      details: "If you're not completely satisfied with the service, we'll work with the provider to resolve any issues or provide a full refund."
    },
    {
      icon: "Shield",
      title: "Quality Assurance",
      description: "Every job backed by our quality standards",
      details: "All work is guaranteed to meet our quality standards. If issues arise, we'll coordinate repairs at no additional cost."
    },
    {
      icon: "Clock",
      title: "On-Time Promise",
      description: "Punctual service or compensation",
      details: "If your provider is more than 30 minutes late without notice, you'll receive a service credit for your next booking."
    },
    {
      icon: "DollarSign",
      title: "Price Protection",
      description: "No hidden fees or surprise charges",
      details: "The price you\'re quoted is the price you pay. Any additional work requires your approval before proceeding."
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Best Home Services Platform",
      organization: "Tech Innovation Awards",
      description: "Recognized for innovative technology and customer experience"
    },
    {
      year: "2023",
      title: "Community Impact Award",
      organization: "National Home Services Association",
      description: "Honored for positive impact on local communities"
    },
    {
      year: "2023",
      title: "Customer Choice Award",
      organization: "Service Industry Excellence",
      description: "Voted by customers as top home services platform"
    },
    {
      year: "2022",
      title: "Startup of the Year",
      organization: "Regional Business Council",
      description: "Outstanding growth and community contribution"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Award" size={16} className="text-success" />
            <span className="text-sm font-body font-medium text-success">
              Trust & Certifications
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Your Trust is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            We've earned recognition from industry leaders and maintain the highest standards for security, quality, and customer protection.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-8">
            Industry Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="relative mb-4">
                  <Image
                    src={cert?.logo}
                    alt={cert?.name}
                    className="w-16 h-16 mx-auto rounded-lg object-cover"
                  />
                  {cert?.verified && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  )}
                </div>
                <h4 className="font-body font-semibold text-foreground mb-2">
                  {cert?.name}
                </h4>
                <div className="text-lg font-headline font-bold text-primary mb-2">
                  {cert?.rating}
                </div>
                <p className="text-sm text-muted-foreground font-body">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-8">
            Security & Privacy
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures?.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-body font-semibold text-foreground mb-2">
                  {feature?.title}
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-8">
            Our Guarantees
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {guarantees?.map((guarantee, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={guarantee?.icon} size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                      {guarantee?.title}
                    </h4>
                    <p className="text-primary font-body font-medium mb-3">
                      {guarantee?.description}
                    </p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {guarantee?.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Awards & Recognition
            </h3>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              We're honored to be recognized by industry leaders and organizations for our commitment to excellence and community impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {awards?.map((award, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Trophy" size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-body font-semibold text-accent">
                        {award?.year}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground font-body">
                        {award?.organization}
                      </span>
                    </div>
                    <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                      {award?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {award?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
              <Icon name="Star" size={16} className="text-success" />
              <span className="text-sm font-body font-medium text-success">
                Trusted by 50,000+ homeowners nationwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCertifications;