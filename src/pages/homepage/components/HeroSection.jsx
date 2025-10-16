import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background via-card to-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full">
                <Icon name="Heart" size={16} className="text-accent" />
                <span className="text-sm font-body font-medium text-accent-foreground">
                  Trusted by 50,000+ homeowners
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-headline font-bold text-foreground leading-tight">
                Your Home's 
                <span className="text-primary"> Trusted</span> Partner
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                HomeTasker was born from a simple belief: your home deserves expert care, and you deserve peace of mind. We're the neighborhood's digital town square where homeowners and skilled professionals build lasting relationships based on quality work and mutual respect.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-headline font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground font-body">Happy Homeowners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground font-body">Verified Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground font-body">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-residential-lg">
              <Image
                src="https://cdn.prod.website-files.com/66b627a7b4000cc9cd5edf66/66b627a7b4000cc9cd5ee0da_Asset%208%402x.png"
                alt="Beautiful modern home exterior showcasing professional maintenance"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-residential">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={20} color="white" />
                </div>
                <div>
                  <div className="text-sm font-body font-semibold text-foreground">Fully Insured</div>
                  <div className="text-xs text-muted-foreground">Background Checked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;