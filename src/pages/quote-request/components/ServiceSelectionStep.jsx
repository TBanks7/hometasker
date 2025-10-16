import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceSelectionStep = ({ selectedServices, onServiceToggle, onNext }) => {
  const serviceCategories = [
    {
      id: 'cleaning',
      name: 'House Cleaning',
      icon: 'Sparkles',
      description: 'Deep cleaning, regular maintenance, move-in/out cleaning',
      basePrice: 120,
      services: [
        { id: 'deep-clean', name: 'Deep Cleaning', price: 180 },
        { id: 'regular-clean', name: 'Regular Cleaning', price: 120 },
        { id: 'move-clean', name: 'Move-in/out Cleaning', price: 250 }
      ]
    },
    {
      id: 'plumbing',
      name: 'Plumbing Services',
      icon: 'Wrench',
      description: 'Repairs, installations, emergency fixes, maintenance',
      basePrice: 95,
      services: [
        { id: 'leak-repair', name: 'Leak Repair', price: 95 },
        { id: 'drain-cleaning', name: 'Drain Cleaning', price: 85 },
        { id: 'fixture-install', name: 'Fixture Installation', price: 150 }
      ]
    },
    {
      id: 'electrical',
      name: 'Electrical Work',
      icon: 'Zap',
      description: 'Wiring, outlets, lighting, safety inspections',
      basePrice: 110,
      services: [
        { id: 'outlet-install', name: 'Outlet Installation', price: 110 },
        { id: 'light-fixture', name: 'Light Fixture Setup', price: 95 },
        { id: 'electrical-repair', name: 'Electrical Repair', price: 125 }
      ]
    },
    {
      id: 'hvac',
      name: 'HVAC Services',
      icon: 'Wind',
      description: 'Heating, cooling, ventilation, maintenance',
      basePrice: 140,
      services: [
        { id: 'hvac-maintenance', name: 'HVAC Maintenance', price: 140 },
        { id: 'filter-replacement', name: 'Filter Replacement', price: 65 },
        { id: 'duct-cleaning', name: 'Duct Cleaning', price: 220 }
      ]
    },
    {
      id: 'landscaping',
      name: 'Landscaping',
      icon: 'Trees',
      description: 'Lawn care, gardening, seasonal cleanup, tree services',
      basePrice: 85,
      services: [
        { id: 'lawn-mowing', name: 'Lawn Mowing', price: 85 },
        { id: 'garden-maintenance', name: 'Garden Maintenance', price: 120 },
        { id: 'seasonal-cleanup', name: 'Seasonal Cleanup', price: 180 }
      ]
    },
    {
      id: 'handyman',
      name: 'General Handyman',
      icon: 'Hammer',
      description: 'Repairs, installations, maintenance, odd jobs',
      basePrice: 75,
      services: [
        { id: 'furniture-assembly', name: 'Furniture Assembly', price: 75 },
        { id: 'wall-mounting', name: 'Wall Mounting', price: 65 },
        { id: 'minor-repairs', name: 'Minor Repairs', price: 85 }
      ]
    }
  ];

  const isServiceSelected = (serviceId) => {
    return selectedServices?.some(service => service?.id === serviceId);
  };

  const handleServiceSelect = (category, service) => {
    const serviceData = {
      id: service?.id,
      categoryId: category?.id,
      categoryName: category?.name,
      serviceName: service?.name,
      price: service?.price,
      icon: category?.icon
    };
    onServiceToggle(serviceData);
  };

  const canProceed = selectedServices?.length > 0;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-headline font-bold text-2xl text-foreground mb-2">
          What services do you need?
        </h2>
        <p className="text-muted-foreground">
          Select all the services you'd like to include in your quote
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceCategories?.map((category) => (
          <div key={category?.id} className="bg-card rounded-lg border border-border p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={category?.icon} size={24} color="var(--color-primary)" />
              </div>
              <div>
                <h3 className="font-headline font-semibold text-lg text-foreground">
                  {category?.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Starting at ${category?.basePrice}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {category?.description}
            </p>
            
            <div className="space-y-2">
              {category?.services?.map((service) => (
                <div
                  key={service?.id}
                  onClick={() => handleServiceSelect(category, service)}
                  className={`p-3 rounded-lg border cursor-pointer transition-residential ${
                    isServiceSelected(service?.id)
                      ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-body font-medium text-sm">
                      {service?.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">${service?.price}</span>
                      {isServiceSelected(service?.id) && (
                        <Icon name="Check" size={16} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedServices?.length > 0 && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
          <h4 className="font-headline font-semibold text-foreground mb-2">
            Selected Services ({selectedServices?.length})
          </h4>
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedServices?.map((service) => (
              <div
                key={service?.id}
                className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                <Icon name={service?.icon} size={14} />
                <span>{service?.serviceName}</span>
                <span className="font-medium">${service?.price}</span>
                <button
                  onClick={() => onServiceToggle(service)}
                  className="hover:bg-primary/20 rounded-full p-0.5 transition-residential"
                >
                  <Icon name="X" size={12} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-body font-medium text-foreground">
              Estimated Total:
            </span>
            <span className="font-headline font-bold text-xl text-primary">
              ${selectedServices?.reduce((total, service) => total + service?.price, 0)}
            </span>
          </div>
        </div>
      )}
      <div className="flex justify-end pt-6">
        <Button
          variant="default"
          onClick={onNext}
          disabled={!canProceed}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Continue to Property Details
        </Button>
      </div>
    </div>
  );
};

export default ServiceSelectionStep;