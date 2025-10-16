import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSection = () => {
  const certifications = [
    {
      name: "Better Business Bureau",
      rating: "A+",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Accredited business with A+ rating"
    },
    {
      name: "HomeAdvisor",
      rating: "Elite Service",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Top-rated service provider network"
    },
    {
      name: "Angie\'s List",
      rating: "Super Service",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Consistently high customer ratings"
    }
  ];

  const guarantees = [
    {
      icon: "Shield",
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied with the service, we'll make it right or refund your money."
    },
    {
      icon: "Lock",
      title: "Secure Payment Protection",
      description: "Your payments are protected with bank-level security and escrow services for peace of mind."
    },
    {
      icon: "Clock",
      title: "On-Time Service Promise",
      description: "Our providers commit to punctual service. If they're late, you'll receive a service credit."
    },
    {
      icon: "Users",
      title: "Vetted Professional Network",
      description: "Every provider undergoes background checks, license verification, and insurance validation."
    }
  ];

  const mediaFeatures = [
    {
      outlet: "Local News Channel 7",
      headline: "HomeTasker Revolutionizes Local Home Services",
      date: "October 2024",
      type: "TV Feature"
    },
    {
      outlet: "City Business Journal",
      headline: "Top 10 Home Service Platforms for Busy Homeowners",
      date: "September 2024",
      type: "Article"
    },
    {
      outlet: "Neighborhood Magazine",
      headline: "Building Trust in the Digital Service Economy",
      date: "August 2024",
      type: "Cover Story"
    }
  ];

  const securityFeatures = [
    {
      icon: "FileCheck",
      title: "Background Verification",
      details: ["Criminal background checks", "Identity verification", "Reference validation"]
    },
    {
      icon: "Shield",
      title: "Insurance Coverage",
      details: ["General liability insurance", "Workers compensation", "Bonding protection"]
    },
    {
      icon: "Award",
      title: "License Validation",
      details: ["Professional licensing", "Certification verification", "Ongoing compliance"]
    },
    {
      icon: "Star",
      title: "Quality Monitoring",
      details: ["Customer feedback tracking", "Performance reviews", "Continuous improvement"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Your Trust is Our Foundation
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built comprehensive safeguards and verification processes to ensure 
            every interaction on HomeTasker meets the highest standards of safety and quality.
          </p>
        </div>

        {/* Certifications & Awards */}
        <div className="bg-card rounded-xl border border-border p-8 mb-12">
          <h3 className="font-headline text-xl font-semibold text-foreground text-center mb-8">
            Recognized Excellence
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cert?.logo}
                    alt={`${cert?.name} certification`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-headline font-semibold text-foreground mb-1">
                  {cert?.name}
                </h4>
                <div className="text-primary font-medium mb-2">{cert?.rating}</div>
                <p className="text-sm text-muted-foreground">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Verification Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
              Comprehensive Provider Vetting
            </h3>
            <p className="font-body text-muted-foreground mb-8">
              Every professional in our network undergoes a rigorous multi-step verification 
              process before they can serve homeowners through HomeTasker.
            </p>
            
            <div className="space-y-6">
              {securityFeatures?.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-foreground mb-2">
                      {feature?.title}
                    </h4>
                    <ul className="space-y-1">
                      {feature?.details?.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-success" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="font-headline text-xl font-semibold text-foreground mb-6">
              Our Guarantees to You
            </h3>
            <div className="space-y-6">
              {guarantees?.map((guarantee, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={guarantee?.icon} size={18} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-headline font-medium text-foreground mb-1">
                      {guarantee?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {guarantee?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Recognition */}
        <div className="bg-card rounded-xl border border-border p-8 mb-12">
          <h3 className="font-headline text-xl font-semibold text-foreground text-center mb-8">
            Featured in Local Media
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures?.map((feature, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Newspaper" size={16} className="text-primary" />
                  <span className="text-xs text-primary font-medium">{feature?.type}</span>
                </div>
                <h4 className="font-headline font-medium text-foreground mb-2">
                  {feature?.headline}
                </h4>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{feature?.outlet}</span>
                  <span>{feature?.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="font-headline text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">Insurance Coverage</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Background Checked</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;