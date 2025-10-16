import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProviderSpotlight = () => {
  const featuredProviders = [
    {
      id: 1,
      name: "Mike\'s Plumbing Solutions",
      owner: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      rating: 4.9,
      reviewCount: 247,
      specializations: ["Emergency Repairs", "Pipe Installation", "Water Heaters"],
      yearsExperience: 12,
      responseTime: "< 2 hours",
      location: "Downtown & Riverside",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badges: ["Licensed", "Insured", "Background Checked"],
      recentWork: {
        title: "Kitchen Sink Repair",
        description: "Fixed leak and replaced faucet",
        completedDate: "Yesterday"
      },
      pricing: "From $85/hour",
      availability: "Available Today"
    },
    {
      id: 2,
      name: "Elite Electrical Services",
      owner: "Sarah Williams",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      rating: 5.0,
      reviewCount: 189,
      specializations: ["Smart Home Setup", "Panel Upgrades", "Lighting"],
      yearsExperience: 8,
      responseTime: "< 4 hours",
      location: "Oak Park & Maple Grove",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badges: ["Master Electrician", "Insured", "Smart Home Certified"],
      recentWork: {
        title: "Home Office Wiring",
        description: "Installed outlets and USB charging stations",
        completedDate: "2 days ago"
      },
      pricing: "From $120/hour",
      availability: "Available Tomorrow"
    },
    {
      id: 3,
      name: "GreenThumb Landscaping",
      owner: "Carlos Martinez",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 4.8,
      reviewCount: 156,
      specializations: ["Lawn Care", "Garden Design", "Tree Service"],
      yearsExperience: 15,
      responseTime: "< 6 hours",
      location: "All Areas",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badges: ["Licensed", "Eco-Certified", "Insured"],
      recentWork: {
        title: "Fall Cleanup Service",
        description: "Leaf removal and garden preparation",
        completedDate: "3 days ago"
      },
      pricing: "From $95/visit",
      availability: "Available This Week"
    }
  ];

  const liveActivity = [
    { provider: "Mike\'s Plumbing", service: "Emergency Repair", time: "2 min ago" },
    { provider: "CleanPro Services", service: "Deep Cleaning", time: "5 min ago" },
    { provider: "Elite Electrical", service: "Outlet Installation", time: "8 min ago" },
    { provider: "HandyFix Solutions", service: "Door Repair", time: "12 min ago" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Top-Rated Local Professionals
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Every provider is thoroughly vetted, insured, and committed to delivering 
            exceptional service to your neighborhood.
          </p>
        </div>

        {/* Live Activity Banner */}
        <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <h3 className="font-headline font-semibold text-foreground">Live Activity</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {liveActivity?.map((activity, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Icon name="Clock" size={14} className="text-success" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">{activity?.provider}</strong> booked for {activity?.service}
                </span>
                <span className="text-xs text-muted-foreground ml-auto">{activity?.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Providers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProviders?.map((provider) => (
            <div key={provider?.id} className="bg-card rounded-xl border border-border overflow-hidden shadow-residential hover:shadow-residential-lg transition-residential">
              {/* Provider Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={provider?.image}
                  alt={`${provider?.name} service work`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    provider?.availability?.includes('Today') 
                      ? 'bg-success text-success-foreground' :'bg-warning text-warning-foreground'
                  }`}>
                    {provider?.availability}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-foreground">{provider?.rating}</span>
                  </div>
                </div>
              </div>

              {/* Provider Info */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={provider?.avatar}
                    alt={provider?.owner}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-foreground">
                      {provider?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {provider?.owner} • {provider?.yearsExperience} years exp.
                    </p>
                  </div>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground ml-1">
                      {provider?.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({provider?.reviewCount} reviews)
                  </span>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {provider?.specializations?.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {provider?.badges?.map((badge) => (
                    <div key={badge} className="flex items-center gap-1">
                      <Icon name="Shield" size={12} className="text-success" />
                      <span className="text-xs text-success font-medium">{badge}</span>
                    </div>
                  ))}
                </div>

                {/* Recent Work */}
                <div className="bg-muted/50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="CheckCircle" size={14} className="text-success" />
                    <span className="text-sm font-medium text-foreground">Recent Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {provider?.recentWork?.title} - {provider?.recentWork?.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Completed {provider?.recentWork?.completedDate}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-foreground">{provider?.pricing}</div>
                    <div className="text-xs text-muted-foreground">
                      Response: {provider?.responseTime}
                    </div>
                  </div>
                  <Link
                    to={`quoteRequest?provider=${provider?.id}`}
                    className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-residential"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-card rounded-xl border border-border p-8">
          <h3 className="font-headline text-xl font-semibold text-foreground text-center mb-8">
            Why Homeowners Trust Our Network
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <h4 className="font-headline font-semibold text-foreground mb-2">Background Checked</h4>
              <p className="text-sm text-muted-foreground">
                Every provider undergoes thorough background verification
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileCheck" size={24} className="text-primary" />
              </div>
              <h4 className="font-headline font-semibold text-foreground mb-2">Licensed & Insured</h4>
              <p className="text-sm text-muted-foreground">
                All providers carry proper licensing and insurance coverage
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={24} className="text-accent" />
              </div>
              <h4 className="font-headline font-semibold text-foreground mb-2">Quality Guaranteed</h4>
              <p className="text-sm text-muted-foreground">
                100% satisfaction guarantee on all completed work
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-warning" />
              </div>
              <h4 className="font-headline font-semibold text-foreground mb-2">Fast Response</h4>
              <p className="text-sm text-muted-foreground">
                Quick response times for urgent home repair needs
              </p>
            </div>
          </div>
        </div>

        {/* View All Providers CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-outline border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-residential">
              Browse All Providers
              <Icon name="Users" size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProviderSpotlight;