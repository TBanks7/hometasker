import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onQuoteRequest }) => {
  const {
    id,
    title,
    description,
    icon,
    image,
    priceRange,
    duration,
    seasonal,
    popular,
    features,
    bundleDiscount
  } = service;

  return (
    <div className="bg-card rounded-lg shadow-residential border border-border overflow-hidden transition-residential hover:shadow-residential-lg group">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-residential group-hover:scale-105"
        />
        {popular && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
            Most Popular
          </div>
        )}
        {seasonal && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
            Seasonal
          </div>
        )}
        {bundleDiscount && (
          <div className="absolute bottom-3 right-3 bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
            Save {bundleDiscount}%
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={icon} size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="font-headline font-semibold text-lg text-foreground">
                {title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>{priceRange}</span>
                <span>•</span>
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {features?.slice(0, 3)?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={14} color="var(--color-success)" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
          {features?.length > 3 && (
            <div className="text-xs text-muted-foreground">
              +{features?.length - 3} more features
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            fullWidth
            onClick={() => onQuoteRequest(service)}
            iconName="Calculator"
            iconPosition="left"
          >
            Get Quote
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Info"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;