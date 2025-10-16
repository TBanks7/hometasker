import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Downtown District",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      service: "Plumbing Repair",
      content: `HomeTasker saved the day when our kitchen sink started flooding at 8 PM. 
      The plumber arrived within 2 hours, fixed the issue professionally, and even gave us tips 
      to prevent future problems. Outstanding service!`,
      date: "2 days ago",
      verified: true,
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "Riverside Heights",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      service: "HVAC Maintenance",
      content: `Scheduled seasonal HVAC maintenance through HomeTasker and couldn't be happier. 
      The technician was thorough, explained everything clearly, and helped us save on energy costs. 
      Will definitely use them again!`,
      date: "1 week ago",
      verified: true,
      beforeAfter: null
    },
    {
      id: 3,
      name: "Jennifer Chen",
      location: "Oak Park",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      service: "House Cleaning",
      content: `The deep cleaning service exceeded all expectations. Our home sparkles like never before! 
      The team was professional, efficient, and used eco-friendly products. HomeTasker made booking 
      so easy and the results speak for themselves.`,
      date: "3 days ago",
      verified: true,
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Maple Grove",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      service: "Electrical Work",
      content: `Had multiple electrical outlets installed in our home office. The electrician was 
      punctual, professional, and completed the work safely and efficiently. Great communication 
      throughout the process. Highly recommend HomeTasker!`,
      date: "5 days ago",
      verified: true,
      beforeAfter: null
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials?.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from homeowners who trust HomeTasker for their home maintenance needs.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-residential-lg border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Testimonial Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-headline text-lg font-semibold text-foreground">
                        {currentTestimonial?.name}
                      </h3>
                      {currentTestimonial?.verified && (
                        <Icon name="BadgeCheck" size={16} className="text-success" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonial?.location} • {currentTestimonial?.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {currentTestimonial?.rating}.0
                  </span>
                  <span className="text-sm text-muted-foreground">
                    • {currentTestimonial?.service}
                  </span>
                </div>

                <blockquote className="font-body text-lg text-foreground leading-relaxed mb-6">
                  "{currentTestimonial?.content}"
                </blockquote>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Shield" size={14} className="text-success" />
                  <span>Verified Customer</span>
                </div>
              </div>

              {/* Before/After Images or Service Image */}
              <div className="bg-muted/50 p-8 lg:p-12 flex items-center justify-center">
                {currentTestimonial?.beforeAfter ? (
                  <div className="space-y-4">
                    <h4 className="font-headline text-center text-foreground font-semibold mb-4">
                      Before & After
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <Image
                          src={currentTestimonial?.beforeAfter?.before}
                          alt="Before service"
                          className="w-full h-32 object-cover rounded-lg mb-2"
                        />
                        <span className="text-xs text-muted-foreground">Before</span>
                      </div>
                      <div className="text-center">
                        <Image
                          src={currentTestimonial?.beforeAfter?.after}
                          alt="After service"
                          className="w-full h-32 object-cover rounded-lg mb-2"
                        />
                        <span className="text-xs text-muted-foreground">After</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Star" size={32} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Exceptional service quality
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-residential"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-residential ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-residential"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div className="font-headline text-3xl font-bold text-foreground mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="font-headline text-3xl font-bold text-foreground mb-2">2.5K+</div>
            <div className="text-sm text-muted-foreground">Verified Providers</div>
          </div>
          <div className="text-center">
            <div className="font-headline text-3xl font-bold text-foreground mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-headline text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;