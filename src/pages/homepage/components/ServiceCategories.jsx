import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceCategories = () => {
  const serviceCategories = [
    {
      id: 'plumbing',
      name: 'Plumbing',
      description: 'Repairs, installations, and emergency fixes',
      icon: 'Wrench',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      providers: 145,
      avgPrice: '$85',
      seasonal: false,
      urgent: true
    },
    {
      id: 'electrical',
      name: 'Electrical',
      description: 'Wiring, outlets, and lighting solutions',
      icon: 'Zap',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      providers: 98,
      avgPrice: '$120',
      seasonal: false,
      urgent: true
    },
    {
      id: 'hvac',
      name: 'HVAC',
      description: 'Heating, cooling, and ventilation services',
      icon: 'Wind',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      providers: 76,
      avgPrice: '$150',
      seasonal: true,
      urgent: false
    },
    {
      id: 'cleaning',
      name: 'House Cleaning',
      description: 'Deep cleaning and regular maintenance',
      icon: 'Sparkles',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      providers: 203,
      avgPrice: '$75',
      seasonal: true,
      urgent: false
    },
    {
      id: 'landscaping',
      name: 'Landscaping',
      description: 'Lawn care, gardening, and outdoor maintenance',
      icon: 'Trees',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      providers: 167,
      avgPrice: '$95',
      seasonal: true,
      urgent: false
    },
    {
      id: 'handyman',
      name: 'Handyman',
      description: 'General repairs and home improvements',
      icon: 'Hammer',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      providers: 189,
      avgPrice: '$65',
      seasonal: false,
      urgent: false
    }
  ];

  const seasonalReminders = [
    {
      season: 'Fall',
      tasks: ['Gutter Cleaning', 'HVAC Maintenance', 'Winterization'],
      icon: 'Leaf',
      color: 'text-orange-600'
    },
    {
      season: 'Winter',
      tasks: ['Snow Removal', 'Heating Repair', 'Pipe Insulation'],
      icon: 'Snowflake',
      color: 'text-blue-600'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Services for Every Home Need
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            From urgent repairs to seasonal maintenance, our verified local professionals 
            are ready to help you maintain your home sanctuary.
          </p>
        </div>

        {/* Seasonal Reminders */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {seasonalReminders?.map((reminder) => (
            <div key={reminder?.season} className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Icon name={reminder?.icon} size={24} className={reminder?.color} />
                <h3 className="font-headline text-lg font-semibold text-foreground">
                  {reminder?.season} Maintenance Reminders
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {reminder?.tasks?.map((task) => (
                  <span
                    key={task}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {task}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories?.map((category) => (
            <Link
              key={category?.id}
              to={`/services?category=${category?.id}`}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-residential-lg transition-residential"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category?.image}
                  alt={`${category?.name} service`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-residential"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon name={category?.icon} size={20} className="text-primary" />
                  </div>
                </div>
                {category?.urgent && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-error text-error-foreground text-xs font-medium rounded-full">
                      Emergency Available
                    </span>
                  </div>
                )}
                {category?.seasonal && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      Seasonal
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  {category?.name}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {category?.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">
                      {category?.providers} providers
                    </span>
                    <span className="text-foreground font-medium">
                      From {category?.avgPrice}
                    </span>
                  </div>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="text-primary group-hover:translate-x-1 transition-residential" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-residential">
              View All Services
              <Icon name="ArrowRight" size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;