import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="w-full bg-card rounded-lg p-6 mb-6 shadow-residential">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-headline font-semibold text-lg text-foreground">
          Quote Progress
        </h3>
        <span className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {steps?.map((step, index) => (
          <React.Fragment key={step?.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-residential ${
                  index + 1 < currentStep
                    ? 'bg-success text-success-foreground'
                    : index + 1 === currentStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {index + 1 < currentStep ? (
                  <Icon name="Check" size={16} />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <span className="text-xs text-muted-foreground mt-2 text-center max-w-16">
                {step?.title}
              </span>
            </div>
            {index < steps?.length - 1 && (
              <div
                className={`flex-1 h-0.5 transition-residential ${
                  index + 1 < currentStep ? 'bg-success' : 'bg-border'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;