import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection.jsx';
import ServiceCategories from './components/ServiceCategories.jsx';
import TestimonialCarousel from './components/TestimonialCarousel.jsx';
import ProviderSpotlight from './components/ProviderSpotlight.jsx';
import TrustSection from './components/TrustSection.jsx';
import CTASection from './components/CTASection.jsx';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>HomeTasker - Your Home Deserves Expert Care | Local Professional Services</title>
        <meta 
          name="description" 
          content="Connect with verified local professionals for all your home maintenance needs. Trusted by 50,000+ homeowners. Same-day service, 100% satisfaction guarantee. Get instant quotes today." 
        />
        <meta name="keywords" content="home services, local professionals, home maintenance, plumbing, electrical, HVAC, cleaning, landscaping, handyman" />
        <meta property="og:title" content="HomeTasker - Your Home Deserves Expert Care" />
        <meta property="og:description" content="More time for what matters most, while trusted experts handle life's necessary tasks." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section with Quick Quote */}
          <HeroSection />
          
          {/* Service Categories with Seasonal Reminders */}
          <ServiceCategories />
          
          {/* Customer Testimonials Carousel */}
          <TestimonialCarousel />
          
          {/* Featured Provider Spotlight */}
          <ProviderSpotlight />
          
          {/* Trust & Safety Section */}
          {/* <TrustSection /> */}
          
          {/* Call-to-Action Section */}
          <CTASection />
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">HT</span>
                  </div>
                  <span className="font-headline font-bold text-xl">HomeTasker</span>
                </div>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Your trusted neighborhood platform for professional home services. 
                  Connecting homeowners with verified local experts since 2020.
                </p>
                <div className="text-xs text-primary-foreground/60">
                  © {new Date()?.getFullYear()} HomeTasker. All rights reserved.
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-headline font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Plumbing Repair</li>
                  <li>Electrical Work</li>
                  <li>HVAC Service</li>
                  <li>House Cleaning</li>
                  <li>Landscaping</li>
                  <li>Handyman Services</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-headline font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>About Us</li>
                  <li>How It Works</li>
                  <li>Safety & Trust</li>
                  <li>Become a Provider</li>
                  <li>Careers</li>
                  <li>Press</li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-headline font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Help Center</li>
                  <li>Contact Us</li>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Guarantee</li>
                </ul>
                <div className="mt-6">
                  <div className="text-sm text-primary-foreground/80 mb-2">24/7 Support</div>
                  <div className="text-primary-foreground font-medium">(555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;