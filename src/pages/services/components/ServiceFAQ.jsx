import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFAQ = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems?.has(index)) {
      newOpenItems?.delete(index);
    } else {
      newOpenItems?.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-card rounded-lg shadow-residential border border-border p-6">
      <h3 className="font-headline font-bold text-xl text-foreground mb-6 flex items-center">
        <Icon name="HelpCircle" size={20} className="mr-2" />
        {title}
      </h3>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left bg-muted/50 hover:bg-muted transition-residential flex items-center justify-between"
            >
              <span className="font-medium text-foreground">{faq?.question}</span>
              <Icon
                name={openItems?.has(index) ? "ChevronUp" : "ChevronDown"}
                size={16}
                color="var(--color-muted-foreground)"
              />
            </button>
            
            {openItems?.has(index) && (
              <div className="px-4 py-3 bg-background">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq?.answer}
                </p>
                {faq?.additionalInfo && (
                  <div className="mt-3 p-3 bg-muted/30 rounded border-l-4 border-primary">
                    <p className="text-xs text-muted-foreground">
                      <strong>Pro Tip:</strong> {faq?.additionalInfo}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFAQ;