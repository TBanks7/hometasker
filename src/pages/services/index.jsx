import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCategory from './components/ServiceCategory.jsx';
import SeasonalWidget from './components/SeasonalWidget';
import BundlePackage from './components/BundlePackage.jsx';
import ServiceFAQ from './components/ServiceFAQ';
import CostCalculator from './components/CostCalculator';

const ServicesPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data for service categories
  const serviceCategories = [
    {
      id: 'cleaning',
      title: 'Cleaning Services',
      description: 'Professional cleaning for every corner of your home',
      icon: 'Sparkles',
      seasonal: false,
      services: [
        {
          id: 'house-cleaning',
          title: 'House Cleaning',
          description: 'Comprehensive cleaning service including all rooms, bathrooms, and kitchen. Our professional cleaners use eco-friendly products and bring all necessary equipment.',
          icon: 'Home',
          image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg',
          priceRange: '$80-250',
          duration: '2-4 hours',
          seasonal: false,
          popular: true,
          bundleDiscount: 15,
          features: [
            'All rooms and bathrooms',
            'Kitchen deep clean',
            'Eco-friendly products',
            'Insured professionals',
            'Satisfaction guarantee'
          ]
        },
        {
          id: 'deep-cleaning',
          title: 'Deep Cleaning',
          description: 'Intensive cleaning service perfect for move-ins, move-outs, or seasonal deep cleans. Includes detailed cleaning of all surfaces, appliances, and hard-to-reach areas.',
          icon: 'Zap',
          image: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg',
          priceRange: '$150-400',
          duration: '4-6 hours',
          seasonal: true,
          popular: false,
          features: [
            'Detailed surface cleaning',
            'Appliance interior cleaning',
            'Baseboards and trim',
            'Light fixture cleaning',
            'Cabinet interior cleaning'
          ]
        },
        {
          id: 'carpet-cleaning',
          title: 'Carpet Cleaning',
          description: 'Professional steam cleaning and stain removal for carpets and upholstery. Extends carpet life and improves indoor air quality.',
          icon: 'Square',
          image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg',
          priceRange: '$100-300',
          duration: '2-3 hours',
          seasonal: false,
          popular: false,
          features: [
            'Steam cleaning process',
            'Stain removal treatment',
            'Pet odor elimination',
            'Fast drying techniques',
            'Upholstery cleaning available'
          ]
        }
      ]
    },
    {
      id: 'maintenance',
      title: 'Home Maintenance',
      description: 'Essential maintenance to keep your home in perfect condition',
      icon: 'Wrench',
      seasonal: true,
      services: [
        {
          id: 'hvac-maintenance',
          title: 'HVAC Maintenance',
          description: 'Complete heating and cooling system maintenance including filter replacement, duct cleaning, and efficiency optimization.',
          icon: 'Wind',
          image: 'https://images.pexels.com/photos/8092/pexels-photo-8092.jpeg',
          priceRange: '$120-250',
          duration: '1-2 hours',
          seasonal: true,
          popular: true,
          features: [
            'Filter replacement',
            'System inspection',
            'Duct cleaning',
            'Efficiency testing',
            'Preventive maintenance'
          ]
        },
        {
          id: 'plumbing-services',
          title: 'Plumbing Services',
          description: 'Professional plumbing repairs and maintenance including leak fixes, drain cleaning, and fixture installation.',
          icon: 'Droplets',
          image: 'https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg',
          priceRange: '$100-400',
          duration: '1-3 hours',
          seasonal: false,
          popular: false,
          bundleDiscount: 10,
          features: [
            'Leak detection and repair',
            'Drain cleaning',
            'Fixture installation',
            'Water pressure optimization',
            'Emergency services available'
          ]
        },
        {
          id: 'electrical-work',
          title: 'Electrical Services',
          description: 'Licensed electrical work including outlet installation, lighting upgrades, and safety inspections.',
          icon: 'Zap',
          image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
          priceRange: '$80-350',
          duration: '1-4 hours',
          seasonal: false,
          popular: false,
          features: [
            'Licensed electricians',
            'Safety inspections',
            'Outlet installation',
            'Lighting upgrades',
            'Code compliance'
          ]
        }
      ]
    },
    {
      id: 'outdoor',
      title: 'Outdoor Services',
      description: 'Lawn care, landscaping, and exterior maintenance',
      icon: 'Trees',
      seasonal: true,
      services: [
        {
          id: 'lawn-care',
          title: 'Lawn Care',
          description: 'Complete lawn maintenance including mowing, edging, trimming, and seasonal treatments for a healthy, beautiful yard.',
          icon: 'Scissors',
          image: 'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg',
          priceRange: '$40-120',
          duration: '1-2 hours',
          seasonal: true,
          popular: true,
          bundleDiscount: 20,
          features: [
            'Mowing and edging',
            'Trimming and pruning',
            'Leaf removal',
            'Seasonal treatments',
            'Equipment provided'
          ]
        },
        {
          id: 'pressure-washing',
          title: 'Pressure Washing',
          description: 'Professional pressure washing for driveways, sidewalks, decks, and home exteriors to restore original appearance.',
          icon: 'Waves',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
          priceRange: '$150-400',
          duration: '2-4 hours',
          seasonal: true,
          popular: false,
          features: [
            'Driveway cleaning',
            'Deck restoration',
            'Siding cleaning',
            'Concrete cleaning',
            'Eco-friendly detergents'
          ]
        },
        {
          id: 'gutter-cleaning',
          title: 'Gutter Cleaning',
          description: 'Thorough gutter cleaning and inspection to prevent water damage and maintain proper drainage.',
          icon: 'CloudRain',
          image: 'https://images.pexels.com/photos/5691662/pexels-photo-5691662.jpeg',
          priceRange: '$120-280',
          duration: '2-3 hours',
          seasonal: true,
          popular: false,
          features: [
            'Complete debris removal',
            'Downspout cleaning',
            'Gutter inspection',
            'Minor repair identification',
            'Safety equipment included'
          ]
        }
      ]
    }
  ];

  // Mock data for bundle packages
  const bundlePackages = [
    {
      id: 'seasonal-prep',
      title: 'Seasonal Home Prep',
      description: 'Complete seasonal preparation package to keep your home ready for weather changes',
      services: [
        { name: 'HVAC Maintenance', individualPrice: 180 },
        { name: 'Gutter Cleaning', individualPrice: 200 },
        { name: 'Pressure Washing', individualPrice: 250 },
        { name: 'Basic Lawn Care', individualPrice: 80 }
      ],
      originalPrice: 710,
      bundlePrice: 549,
      savings: 161,
      savingsPercentage: 23,
      popular: true,
      duration: '1 full day',
      frequency: 'Twice yearly'
    },
    {
      id: 'maintenance-monthly',
      title: 'Monthly Maintenance',
      description: 'Regular monthly maintenance to keep your home in perfect condition year-round',
      services: [
        { name: 'House Cleaning', individualPrice: 120 },
        { name: 'Lawn Care', individualPrice: 60 },
        { name: 'Basic Maintenance Check', individualPrice: 80 }
      ],
      originalPrice: 260,
      bundlePrice: 199,
      savings: 61,
      savingsPercentage: 23,
      popular: false,
      duration: 'Monthly service',
      frequency: 'Every month'
    },
    {
      id: 'deep-clean-package',
      title: 'Deep Clean Package',
      description: 'Comprehensive deep cleaning package perfect for special occasions or seasonal refresh',
      services: [
        { name: 'Deep House Cleaning', individualPrice: 300 },
        { name: 'Carpet Cleaning', individualPrice: 200 },
        { name: 'Window Cleaning', individualPrice: 150 }
      ],
      originalPrice: 650,
      bundlePrice: 499,
      savings: 151,
      savingsPercentage: 23,
      popular: false,
      duration: '1-2 days',
      frequency: 'As needed'
    }
  ];

  // Mock FAQ data
  const generalFAQs = [
    {
      question: "How do I know if I need professional help or can DIY?",
      answer: "Consider professional help for tasks requiring specialized tools, safety equipment, or expertise. DIY is great for simple maintenance like changing air filters or basic cleaning. If you're unsure about safety or the task seems complex, it's always better to hire a professional.",
      additionalInfo: "Our service descriptions include DIY difficulty ratings to help you decide."
    },
    {
      question: "Are your service providers insured and background checked?",
      answer: "Yes, all our service providers undergo comprehensive background checks and carry full insurance coverage. We verify licenses, check references, and ensure they meet our quality standards before joining our network.",
      additionalInfo: "You can view each provider's certifications and insurance details on their profile page."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with the service, we'll work with the provider to make it right or provide a full refund. Your satisfaction is our top priority.",
      additionalInfo: "Most issues are resolved quickly through direct communication with your service provider."
    },
    {
      question: "How far in advance should I book services?",
      answer: "For standard services, we recommend booking 3-5 days in advance. Seasonal services like HVAC maintenance should be booked 1-2 weeks ahead. Emergency services are available same-day for urgent needs.",
      additionalInfo: "Popular time slots fill up quickly during peak seasons, so early booking ensures your preferred schedule."
    },
    {
      question: "Can I bundle multiple services together?",
      answer: "Absolutely! Bundling services often provides significant savings and convenience. You can create custom bundles or choose from our pre-designed packages. Our system will automatically calculate any applicable discounts.",
      additionalInfo: "Bundled services can often be completed in a single visit, saving you time and money."
    }
  ];

  const handleQuoteRequest = (service) => {
    navigate('quoteRequest', { state: { selectedService: service } });
  };

  const handleServiceSelect = (service) => {
    navigate('quoteRequest', { state: { selectedService: service } });
  };

  const handleBundleSelect = (bundle) => {
    navigate('quoteRequest', { state: { selectedBundle: bundle } });
  };

  const handleCalculateEstimate = (estimate) => {
    console.log('Estimate calculated:', estimate);
  };

  const filteredCategories = selectedFilter === 'all' 
    ? serviceCategories 
    : serviceCategories?.filter(category => 
        selectedFilter === 'seasonal' ? category?.seasonal : !category?.seasonal
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
              Professional Home Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From routine maintenance to seasonal preparations, our verified professionals 
              provide quality services that keep your home in perfect condition year-round.
            </p>
            
            {/* Service Filters */}
            <div className="flex justify-center space-x-2 mb-8">
              {[
                { key: 'all', label: 'All Services', icon: 'Grid3X3' },
                { key: 'seasonal', label: 'Seasonal Priority', icon: 'Calendar' },
                { key: 'regular', label: 'Year-Round', icon: 'Clock' }
              ]?.map((filter) => (
                <Button
                  key={filter?.key}
                  variant={selectedFilter === filter?.key ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter?.key)}
                  iconName={filter?.icon}
                  iconPosition="left"
                  size="sm"
                >
                  {filter?.label}
                </Button>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Verified Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Services Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Service Categories */}
            <div className="mb-12">
              {filteredCategories?.map((category) => (
                <ServiceCategory
                  key={category?.id}
                  category={category}
                  onQuoteRequest={handleQuoteRequest}
                />
              ))}
            </div>

            {/* Bundle Packages */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="font-headline font-bold text-3xl text-foreground mb-4">
                  Bundle Packages
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Save money and time with our carefully curated service bundles. 
                  Perfect for comprehensive home maintenance and seasonal preparations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bundlePackages?.map((bundle) => (
                  <BundlePackage
                    key={bundle?.id}
                    bundle={bundle}
                    onSelectBundle={handleBundleSelect}
                  />
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <ServiceFAQ faqs={generalFAQs} />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Cost Calculator */}
            <CostCalculator onCalculate={handleCalculateEstimate} />
            
            {/* Seasonal Widget */}
            <SeasonalWidget onServiceSelect={handleServiceSelect} />
            
            {/* Quick Contact */}
            <div className="bg-card rounded-lg shadow-residential border border-border p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} color="white" />
                </div>
                <h3 className="font-headline font-semibold text-lg text-foreground mb-2">
                  Need Help Choosing?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak with our home service experts to find the perfect solution for your needs.
                </p>
                <div className="space-y-2">
                  <Button variant="default" fullWidth iconName="Phone" iconPosition="left">
                    Call (555) 123-4567
                  </Button>
                  <Button variant="outline" fullWidth iconName="MessageCircle" iconPosition="left">
                    Live Chat
                  </Button>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Available 7 days a week, 8 AM - 8 PM
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-card rounded-lg shadow-residential border border-border p-6">
              <h3 className="font-headline font-semibold text-lg text-foreground mb-4">
                Why Choose HomeTasker?
              </h3>
              <div className="space-y-3">
                {[
                  { icon: 'Shield', text: 'Fully Insured Professionals' },
                  { icon: 'CheckCircle', text: 'Background Checked' },
                  { icon: 'Star', text: '100% Satisfaction Guarantee' },
                  { icon: 'Clock', text: 'Flexible Scheduling' },
                  { icon: 'DollarSign', text: 'Transparent Pricing' }
                ]?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name={item?.icon} size={16} color="var(--color-success)" />
                    <span className="text-sm text-foreground">{item?.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline font-bold text-3xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of homeowners who trust HomeTasker for their home service needs. 
            Get your free quote today and experience the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('quoteRequest')}
              iconName="FileText"
              iconPosition="left"
            >
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              iconName="Phone"
              iconPosition="left"
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} HomeTasker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;