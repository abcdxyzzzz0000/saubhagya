import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FAQCarouselProps, CarouselState } from '../types/faq';
import FAQItem from './FAQItem';
import CarouselNavigation from './CarouselNavigation';
import { useTouch } from '../hooks/useTouch';

const FAQCarousel: React.FC<FAQCarouselProps> = ({
  faqs,
  autoRotate = false,
  rotationInterval = 5000,
  visibleItems = 3,
  showNavigation = true,
  className = ''
}) => {
  const [state, setState] = useState<CarouselState>({
    currentIndex: 0,
    isAnimating: false,
    direction: 'down',
    visibleItems
  });

  const carouselRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    if (state.isAnimating) return;
    
    setState(prev => ({
      ...prev,
      isAnimating: true,
      direction: 'down',
      currentIndex: (prev.currentIndex + 1) % faqs.length
    }));

    setTimeout(() => {
      setState(prev => ({ ...prev, isAnimating: false }));
    }, 400);
  }, [state.isAnimating, faqs.length]);

  const handlePrevious = useCallback(() => {
    if (state.isAnimating) return;
    
    setState(prev => ({
      ...prev,
      isAnimating: true,
      direction: 'up',
      currentIndex: prev.currentIndex === 0 ? faqs.length - 1 : prev.currentIndex - 1
    }));

    setTimeout(() => {
      setState(prev => ({ ...prev, isAnimating: false }));
    }, 400);
  }, [state.isAnimating, faqs.length]);

  // Touch gesture support
  useTouch(carouselRef, {
    onSwipeUp: handleNext,
    onSwipeDown: handlePrevious
  }, {
    minSwipeDistance: 30,
    maxSwipeTime: 300,
    preventScroll: true
  });

  // Calculate visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      let newVisibleItems = visibleItems;
      
      if (width < 768) {
        newVisibleItems = 2;
      } else if (width < 1024) {
        newVisibleItems = 3;
      } else {
        newVisibleItems = 4;
      }
      
      setState(prev => ({ ...prev, visibleItems: newVisibleItems }));
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, [visibleItems]);

  // Auto-rotation logic
  useEffect(() => {
    if (autoRotate && !state.isAnimating) {
      autoRotateRef.current = setTimeout(() => {
        handleNext();
      }, rotationInterval);
    }

    return () => {
      if (autoRotateRef.current) {
        clearTimeout(autoRotateRef.current);
      }
    };
  }, [autoRotate, rotationInterval, state.currentIndex, state.isAnimating, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return;
      
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          handlePrevious();
          break;
        case 'ArrowDown':
          event.preventDefault();
          handleNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrevious]);

  // Get visible FAQ items
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < state.visibleItems; i++) {
      const index = (state.currentIndex + i) % faqs.length;
      items.push({
        ...faqs[index],
        isActive: i === Math.floor(state.visibleItems / 2)
      });
    }
    return items;
  };

  const visibleFAQs = getVisibleItems();

  return (
    <div 
      ref={carouselRef}
      className={`faq-carousel ${className}`}
      role="region"
      aria-label="Frequently Asked Questions Carousel"
      aria-live="polite"
      tabIndex={0}
    >
      {showNavigation && (
        <CarouselNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          disabled={state.isAnimating}
          className="faq-carousel__navigation--top"
        />
      )}

      <div 
        className={`faq-carousel__container ${state.isAnimating ? 'faq-carousel__container--animating' : ''}`}
        style={{
          transform: `translateY(${state.direction === 'up' ? '10px' : '-10px'})`,
          transition: state.isAnimating ? 'transform 0.4s ease-in-out' : 'none'
        }}
      >
        {visibleFAQs.map((faq, index) => (
          <FAQItem
            key={`${faq.id}-${state.currentIndex}-${index}`}
            faq={faq}
            isActive={faq.isActive}
            className="faq-carousel__item"
          />
        ))}
      </div>

      {showNavigation && (
        <CarouselNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          disabled={state.isAnimating}
          className="faq-carousel__navigation--bottom"
        />
      )}

      <div className="faq-carousel__indicator" aria-hidden="true">
        {state.currentIndex + 1} of {faqs.length}
      </div>
    </div>
  );
};

export default FAQCarousel;