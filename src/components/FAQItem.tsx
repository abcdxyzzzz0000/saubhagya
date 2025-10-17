import React from 'react';
import { FAQItem as FAQItemType } from '../types/faq';

interface FAQItemProps {
  faq: FAQItemType;
  isActive?: boolean;
  className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isActive = false, className = '' }) => {
  return (
    <div 
      className={`faq-item ${isActive ? 'faq-item--active' : ''} ${className}`}
      role="article"
      aria-labelledby={`faq-question-${faq.id}`}
      tabIndex={isActive ? 0 : -1}
    >
      <h3 
        id={`faq-question-${faq.id}`}
        className="faq-item__question"
      >
        {faq.question}
      </h3>
      <p 
        className="faq-item__answer"
        aria-describedby={`faq-question-${faq.id}`}
      >
        {faq.answer}
      </p>
    </div>
  );
};

export default FAQItem;