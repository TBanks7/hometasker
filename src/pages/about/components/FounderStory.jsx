import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FounderStory = () => {
  const founderData = {
    name: "Sarah Mitchell",
    title: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    story: `After struggling to find reliable home service providers for my own family's needs, I realized there had to be a better way. Too many homeowners were dealing with unreliable contractors, unclear pricing, and the stress of not knowing who to trust with their most valuable asset - their home.\n\nHomeTasker was born from this frustration and a vision to create something different. We're not just another service marketplace; we're a community where trust is earned, quality is guaranteed, and homeowners can focus on what matters most while knowing their homes are in expert hands.\n\nEvery provider in our network goes through our rigorous vetting process because your peace of mind is worth it. We've built something I wish existed when I was searching for help with my own home.`,
    achievements: [
      "15+ years in home services industry",
      "Former VP at leading construction company",
      "Licensed contractor and business owner",
      "Community volunteer and local advocate"
    ]
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            HomeTasker began with a simple mission: to create a trusted community where homeowners and skilled professionals can connect with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={founderData?.image}
                    alt={founderData?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-foreground">
                    {founderData?.name}
                  </h3>
                  <p className="text-muted-foreground font-body">{founderData?.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                {founderData?.story?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground font-body leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-lg font-headline font-semibold text-foreground mb-4">
                Background & Expertise
              </h4>
              <ul className="space-y-3">
                {founderData?.achievements?.map((achievement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Award" size={16} className="text-accent flex-shrink-0" />
                    <span className="text-muted-foreground font-body">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Target" size={24} className="text-primary" />
                  <h4 className="text-xl font-headline font-bold text-foreground">Our Mission</h4>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  To protect and enhance the spaces where life happens through dependable, professional care. We believe every homeowner deserves access to trusted professionals who treat their home with the same care they would their own.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 p-8 rounded-2xl border border-border">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Eye" size={24} className="text-accent" />
                  <h4 className="text-xl font-headline font-bold text-foreground">Our Vision</h4>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  To be the neighborhood's digital town square where homeowners and skilled service providers build lasting relationships based on quality work, mutual respect, and shared commitment to community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-2xl font-headline font-bold text-primary mb-2">2019</div>
                <div className="text-sm text-muted-foreground font-body">Founded</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-2xl font-headline font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground font-body">Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;