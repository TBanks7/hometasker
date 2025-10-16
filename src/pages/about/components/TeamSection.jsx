import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "15+ years in home services industry with a passion for connecting communities through trusted professional relationships.",
      expertise: ["Business Strategy", "Community Building", "Quality Assurance"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Former construction project manager who ensures our operational excellence and provider network quality standards.",
      expertise: ["Operations Management", "Quality Control", "Process Optimization"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Chen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Tech innovator focused on creating seamless experiences that make home service booking effortless and transparent.",
      expertise: ["Platform Development", "User Experience", "Mobile Technology"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "James Wilson",
      role: "Director of Provider Relations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Licensed contractor and business owner who understands both sides of the service equation and builds lasting partnerships.",
      expertise: ["Provider Vetting", "Training Programs", "Relationship Management"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Lisa Park",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Dedicated to ensuring every homeowner experience exceeds expectations through proactive support and community engagement.",
      expertise: ["Customer Support", "Community Engagement", "Satisfaction Analytics"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Robert Thompson",
      role: "Head of Business Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Growth strategist expanding HomeTasker's reach while maintaining our commitment to local community values and quality.",
      expertise: ["Market Expansion", "Strategic Partnerships", "Growth Strategy"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const companyValues = [
    {
      icon: "Shield",
      title: "Trust First",
      description: "Every decision we make prioritizes building and maintaining trust between homeowners and service providers."
    },
    {
      icon: "Users",
      title: "Community Focused",
      description: "We believe in strengthening local communities by connecting neighbors with skilled local professionals."
    },
    {
      icon: "Award",
      title: "Quality Excellence",
      description: "We maintain the highest standards for service quality through rigorous vetting and ongoing monitoring."
    },
    {
      icon: "Heart",
      title: "Genuine Care",
      description: "We treat every home as if it were our own and every customer relationship as a long-term partnership."
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "We continuously improve our platform and processes to make home services more accessible and reliable."
    },
    {
      icon: "Handshake",
      title: "Transparency",
      description: "Clear communication, upfront pricing, and honest relationships are the foundation of everything we do."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Icon name="Compass" size={16} className="text-primary" />
              <span className="text-sm font-body font-medium text-primary">
                Our Values
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
              Our core values guide every interaction, decision, and innovation as we build the most trusted home services platform in America.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues?.map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={value?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                  {value?.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {value?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Icon name="Users" size={16} className="text-accent" />
              <span className="text-sm font-body font-medium text-accent-foreground">
                Meet Our Team
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              The People Behind HomeTasker
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
              Our diverse team combines deep industry expertise with a shared passion for building stronger communities through trusted professional relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers?.map((member, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border group hover:shadow-residential-lg transition-residential">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} color="white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-headline font-bold text-foreground mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-primary font-body font-medium mb-3">
                    {member?.role}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {member?.bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-body font-semibold text-foreground mb-2">
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member?.expertise?.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs font-body rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                    {Object.entries(member?.social)?.map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-residential"
                      >
                        <Icon 
                          name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : 'Github'} 
                          size={16} 
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision of building stronger communities through trusted professional relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-body font-medium transition-residential hover:bg-primary/90">
                <Icon name="Briefcase" size={16} />
                <span>View Open Positions</span>
              </button>
              <button className="inline-flex items-center space-x-2 bg-background text-foreground border border-border px-6 py-3 rounded-xl font-body font-medium transition-residential hover:bg-muted">
                <Icon name="Mail" size={16} />
                <span>Contact HR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;