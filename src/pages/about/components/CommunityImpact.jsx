import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityImpact = () => {
  const impactStats = [
    {
      icon: "Home",
      number: "50,000+",
      label: "Homes Serviced",
      description: "Across 25+ cities nationwide"
    },
    {
      icon: "Users",
      number: "2,500+",
      label: "Local Professionals",
      description: "Verified and trusted providers"
    },
    {
      icon: "DollarSign",
      number: "$12M+",
      label: "Local Economy Impact",
      description: "Supporting community businesses"
    },
    {
      icon: "Clock",
      number: "500K+",
      label: "Hours Saved",
      description: "For busy homeowners"
    }
  ];

  const communityPrograms = [
    {
      icon: "Heart",
      title: "Community Care Initiative",
      description: "Free home maintenance services for elderly and disabled community members through our volunteer provider network.",
      impact: "250+ families helped annually"
    },
    {
      icon: "GraduationCap",
      title: "Skills Training Program",
      description: "Partnership with local trade schools to provide apprenticeships and skill development opportunities.",
      impact: "150+ professionals trained"
    },
    {
      icon: "Leaf",
      title: "Green Home Initiative",
      description: "Promoting eco-friendly home improvements and connecting homeowners with sustainable service options.",
      impact: "30% reduction in waste"
    },
    {
      icon: "Shield",
      title: "Emergency Response Network",
      description: "24/7 emergency service coordination during natural disasters and community emergencies.",
      impact: "500+ emergency responses"
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Homeowner, Austin TX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "HomeTasker didn't just fix my plumbing issue – they connected me with Mike, who's now my go-to professional for all home repairs. It's like having a trusted neighbor who happens to be an expert.",
      rating: 5,
      serviceType: "Plumbing & General Maintenance"
    },
    {
      name: "David Chen",
      role: "Property Manager, Seattle WA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "Managing 15 properties used to be a nightmare until I found HomeTasker. The quality consistency and reliable scheduling have transformed how I operate. Every provider feels like part of my team.",
      rating: 5,
      serviceType: "Property Management Services"
    },
    {
      name: "Jennifer Thompson",
      role: "Working Mom, Denver CO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "Between work and kids, I barely have time to breathe, let alone coordinate home repairs. HomeTasker's seasonal reminders and trusted provider network mean I never have to worry about home maintenance again.",
      rating: 5,
      serviceType: "Seasonal Home Maintenance"
    }
  ];

  const localMarkets = [
    { city: "Austin", state: "TX", providers: 180, established: "2019" },
    { city: "Seattle", state: "WA", providers: 220, established: "2020" },
    { city: "Denver", state: "CO", providers: 165, established: "2020" },
    { city: "Portland", state: "OR", providers: 145, established: "2021" },
    { city: "Phoenix", state: "AZ", providers: 190, established: "2021" },
    { city: "Nashville", state: "TN", providers: 135, established: "2022" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Heart" size={16} className="text-success" />
            <span className="text-sm font-body font-medium text-success">
              Community Impact
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Building Stronger Communities
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            HomeTasker isn't just about connecting homeowners with professionals – we're building stronger, more resilient communities where neighbors support neighbors and local businesses thrive.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats?.map((stat, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-headline font-bold text-foreground mb-1">
                {stat?.number}
              </div>
              <div className="text-sm font-body font-semibold text-foreground mb-2">
                {stat?.label}
              </div>
              <div className="text-xs text-muted-foreground font-body">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>

        {/* Community Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold text-foreground mb-4">
              Community Programs
            </h3>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              We believe in giving back to the communities that support us through meaningful programs that make a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityPrograms?.map((program, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={program?.icon} size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                      {program?.title}
                    </h4>
                    <p className="text-muted-foreground font-body mb-3 leading-relaxed">
                      {program?.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-success/10 px-3 py-1 rounded-full">
                      <Icon name="TrendingUp" size={12} className="text-success" />
                      <span className="text-xs font-body font-medium text-success">
                        {program?.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold text-foreground mb-4">
              What Our Community Says
            </h3>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Real stories from homeowners who've experienced the HomeTasker difference in their communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-body font-semibold text-foreground">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {testimonial?.role}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-accent fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                  "{testimonial?.content}"
                </p>
                
                <div className="text-xs text-muted-foreground font-body">
                  Service: {testimonial?.serviceType}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Market Presence */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold text-foreground mb-4">
              Local Market Presence
            </h3>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              We're proud to serve communities across the nation, with deep local roots and understanding of each market's unique needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localMarkets?.map((market, index) => (
              <div key={index} className="bg-background p-4 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-body font-semibold text-foreground">
                      {market?.city}, {market?.state}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      Est. {market?.established}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-headline font-bold text-primary">
                      {market?.providers}
                    </div>
                    <div className="text-xs text-muted-foreground font-body">
                      Providers
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground font-body mb-4">
              Don't see your city? We're expanding rapidly!
            </p>
            <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-body font-medium transition-residential hover:bg-primary/90">
              <Icon name="MapPin" size={16} />
              <span>Request Your City</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;