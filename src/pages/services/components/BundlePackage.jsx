import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BundlePackage = ({ bundle, onSelectBundle }) => {
  const {
    id,
    title,
    description,
    services,
    originalPrice,
    bundlePrice,
    savings,
    savingsPercentage,
    popular,
    duration,
    frequency
  } = bundle;

  return (
    <div className={`bg-card rounded-lg shadow-residential border-2 transition-residential hover:shadow-residential-lg ${
      popular ? 'border-primary' : 'border-border'
    }`}>
      {popular && (
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
          Most Popular Bundle
        </div>
      )}
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="font-headline font-bold text-xl text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {description}
          </p>
          
          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl font-bold text-foreground">
                ${bundlePrice}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                ${originalPrice}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="bg-success text-success-foreground px-2 py-1 rounded-full font-medium">
                Save ${savings} ({savingsPercentage}%)
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              {frequency} • {duration}
            </div>
          </div>
        </div>

        {/* Services Included */}
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-3 flex items-center">
            <Icon name="Package" size={16} className="mr-2" />
            Services Included
          </h4>
          <div className="space-y-2">
            {services?.map((service, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="Check" size={14} color="var(--color-success)" />
                <span className="text-sm text-foreground">{service?.name}</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  ${service?.individualPrice}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={14} color="var(--color-primary)" />
              <span className="text-foreground">Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={14} color="var(--color-primary)" />
              <span className="text-foreground">Priority Scheduling</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={14} color="var(--color-primary)" />
              <span className="text-foreground">Verified Professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={14} color="var(--color-primary)" />
              <span className="text-foreground">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <Button
          variant={popular ? "default" : "outline"}
          fullWidth
          onClick={() => onSelectBundle(bundle)}
          iconName="ShoppingCart"
          iconPosition="left"
        >
          Select Bundle
        </Button>
      </div>
    </div>
  );
};

export default BundlePackage;