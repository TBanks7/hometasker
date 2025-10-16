import React from 'react';
import Icon from '../../../components/AppIcon';
import ServiceCard from './ServiceCard.jsx';

const ServiceCategory = ({ category, onQuoteRequest }) => {
  const { title, description, icon, services, seasonal } = category;

  return (
    <section className="mb-12">
      {/* Category Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <Icon name={icon} size={24} color="white" />
        </div>
        <div>
          <h2 className="font-headline font-bold text-2xl text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {seasonal && (
          <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            Seasonal Priority
          </div>
        )}
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard
            key={service?.id}
            service={service}
            onQuoteRequest={onQuoteRequest}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCategory;