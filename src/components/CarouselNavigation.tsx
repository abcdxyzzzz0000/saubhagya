import React from 'react';
import { CarouselNavigationProps } from '../types/faq';
import { useTranslation } from '../hooks/react-i18next';

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrevious,
  onNext,
  disabled = false,
  className = ''
}) => {
  const { t } = useTranslation();

  return (
    <div className={`carousel-navigation ${className}`}>
      <button
        className="carousel-navigation__button carousel-navigation__button--up"
        onClick={onPrevious}
        disabled={disabled}
        aria-label={t('faq.navigation.previous')}
        type="button"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path 
            d="M7 14L12 9L17 14" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      <button
        className="carousel-navigation__button carousel-navigation__button--down"
        onClick={onNext}
        disabled={disabled}
        aria-label={t('faq.navigation.next')}
        type="button"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path 
            d="M7 10L12 15L17 10" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselNavigation;