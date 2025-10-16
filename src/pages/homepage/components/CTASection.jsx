import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickActions = [
    {
      title: "Emergency Repair",
      description: "24/7 urgent home repairs",
      icon: "AlertCircle",
      color: "bg-error",
      textColor: "text-error-foreground",
      link: "/quote-request?urgent=true"
    },
    {
      title: "Schedule Service",
      description: "Plan your home maintenance",
      icon: "Calendar",
      color: "bg-primary",
      textColor: "text-primary-foreground",
      link: "/quote-request"
    },
    {
      title: "Browse Providers",
      description: "Find local professionals",
      icon: "Users",
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
      link: "/services"
    }
  ];

  const benefits = [
    "Instant quotes from verified professionals",
    "Same-day service availability",
    "100% satisfaction guarantee",
    "Secure payment protection",
    "24/7 customer support"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center ">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Home Maintenance Experience?
            </h2>
            <p className="font-body text-lg text-white/90 mb-8">
              Join thousands of homeowners who trust HomeTasker for reliable, 
              professional home services. Your home deserves expert care.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/quote-request">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  iconName="ArrowRight" 
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Search" 
                  iconPosition="left"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
                >
                  Browse Services
                </Button>
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-headline text-lg font-semibold text-white mb-3">
                Stay Updated with Seasonal Home Care Tips
              </h3>
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="secondary" 
                    iconName="Mail" 
                    iconPosition="left"
                  >
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-accent">
                  <Icon name="CheckCircle" size={20} />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
              <p className="text-xs text-white/70 mt-2">
                Get seasonal maintenance reminders and exclusive offers. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Right Content - Quick Actions */}
          {/* <div className="space-y-6">
            <h3 className="font-headline text-2xl font-bold text-white text-center lg:text-left mb-8">
              Quick Actions
            </h3>
            
            {quickActions?.map((action, index) => (
              <Link
                key={index}
                to={action?.link}
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-residential group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${action?.color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-residential`}>
                    <Icon name={action?.icon} size={24} className={action?.textColor} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline text-lg font-semibold text-white mb-1">
                      {action?.title}
                    </h4>
                    <p className="text-white/80">{action?.description}</p>
                  </div>
                  <Icon 
                    name="ArrowRight" 
                    size={20} 
                    className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-residential" 
                  />
                </div>
              </Link>
            ))} */}

            {/* Contact Info */}
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-headline text-lg font-semibold text-white mb-4">
                Need Help? We're Here 24/7
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span className="text-white">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span className="text-white">support@hometasker.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={16} className="text-accent" />
                  <span className="text-white">Live chat available</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom Stats */}
        <div className="border-t border-white/20 pt-12 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-headline text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-white mb-2">2.5K+</div>
              <div className="text-white/80">Verified Providers</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-white mb-2">500K+</div>
              <div className="text-white/80">Services Completed</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;