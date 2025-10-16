import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SeasonalWidget = ({ onServiceSelect }) => {
  const [selectedSeason, setSelectedSeason] = useState('current');

  const getCurrentSeason = () => {
    const month = new Date()?.getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
  };

  const seasonalServices = {
    spring: {
      title: 'Spring Preparation',
      icon: 'Flower2',
      color: 'bg-green-100 text-green-800',
      services: [
        { name: 'Gutter Cleaning', urgency: 'high', price: '$150-250' },
        { name: 'HVAC Maintenance', urgency: 'medium', price: '$120-200' },
        { name: 'Lawn Care Setup', urgency: 'medium', price: '$80-150' },
        { name: 'Pressure Washing', urgency: 'low', price: '$200-400' }
      ]
    },
    summer: {
      title: 'Summer Maintenance',
      icon: 'Sun',
      color: 'bg-yellow-100 text-yellow-800',
      services: [
        { name: 'AC Tune-up', urgency: 'high', price: '$120-180' },
        { name: 'Pool Maintenance', urgency: 'high', price: '$100-200' },
        { name: 'Lawn Mowing', urgency: 'medium', price: '$40-80' },
        { name: 'Deck Staining', urgency: 'low', price: '$300-600' }
      ]
    },
    fall: {
      title: 'Fall Preparation',
      icon: 'Leaf',
      color: 'bg-orange-100 text-orange-800',
      services: [
        { name: 'Leaf Removal', urgency: 'high', price: '$100-200' },
        { name: 'Heating System Check', urgency: 'high', price: '$150-250' },
        { name: 'Gutter Cleaning', urgency: 'medium', price: '$150-250' },
        { name: 'Winterization', urgency: 'medium', price: '$200-400' }
      ]
    },
    winter: {
      title: 'Winter Services',
      icon: 'Snowflake',
      color: 'bg-blue-100 text-blue-800',
      services: [
        { name: 'Snow Removal', urgency: 'high', price: '$50-150' },
        { name: 'Heating Repair', urgency: 'high', price: '$200-500' },
        { name: 'Pipe Insulation', urgency: 'medium', price: '$100-300' },
        { name: 'Holiday Decorating', urgency: 'low', price: '$150-400' }
      ]
    }
  };

  const currentSeasonData = seasonalServices?.[getCurrentSeason()];
  const displaySeason = selectedSeason === 'current' ? getCurrentSeason() : selectedSeason;
  const displayData = seasonalServices?.[displaySeason];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-residential border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${displayData?.color}`}>
            <Icon name={displayData?.icon} size={20} />
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg text-foreground">
              {displayData?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              Recommended services for {displaySeason}
            </p>
          </div>
        </div>

        {/* Season Selector */}
        <div className="flex space-x-1 bg-muted rounded-lg p-1">
          {Object.keys(seasonalServices)?.map((season) => (
            <button
              key={season}
              onClick={() => setSelectedSeason(season)}
              className={`px-3 py-1 rounded text-xs font-medium transition-residential ${
                displaySeason === season
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {season?.charAt(0)?.toUpperCase() + season?.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {/* Services List */}
      <div className="space-y-3 mb-6">
        {displayData?.services?.map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-residential cursor-pointer"
            onClick={() => onServiceSelect(service)}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                service?.urgency === 'high' ? 'bg-error' :
                service?.urgency === 'medium' ? 'bg-warning' : 'bg-success'
              }`} />
              <div>
                <span className="font-medium text-foreground">{service?.name}</span>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span className={getUrgencyColor(service?.urgency)}>
                    {service?.urgency?.toUpperCase()} PRIORITY
                  </span>
                  <span>•</span>
                  <span>{service?.price}</span>
                </div>
              </div>
            </div>
            <Icon name="ChevronRight" size={16} color="var(--color-muted-foreground)" />
          </div>
        ))}
      </div>
      {/* Action */}
      <Button
        variant="outline"
        fullWidth
        iconName="Calendar"
        iconPosition="left"
      >
        Schedule Seasonal Maintenance
      </Button>
    </div>
  );
};

export default SeasonalWidget;