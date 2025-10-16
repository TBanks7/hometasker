import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FounderStory from './components/FounderStory.jsx';
import VettingProcess from './components/VettingProcess.jsx';
import CommunityImpact from './components/CommunityImpact.jsx';
import TeamSection from './components/TeamSection.jsx';
import TrustCertifications from './components/TrustCertifications.jsx';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FounderStory />
        <VettingProcess />
        <CommunityImpact />
        <TeamSection />
        <TrustCertifications />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="font-headline font-bold text-xl">HomeTasker</span>
              </div>
              <p className="text-sm text-primary-foreground/80 font-body">
                Your home's trusted partner for professional maintenance and care.
              </p>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80 font-body">
                <li>Home Maintenance</li>
                <li>Seasonal Services</li>
                <li>Emergency Repairs</li>
                <li>Property Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80 font-body">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80 font-body">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60 font-body">
              © {new Date()?.getFullYear()} HomeTasker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;