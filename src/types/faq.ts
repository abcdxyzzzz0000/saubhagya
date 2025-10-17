export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCarouselProps {
  faqs: FAQItem[];
  autoRotate?: boolean;
  rotationInterval?: number;
  visibleItems?: number;
  showNavigation?: boolean;
  className?: string;
}

export interface CarouselState {
  currentIndex: number;
  isAnimating: boolean;
  direction: 'up' | 'down';
  visibleItems: number;
}

export interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  disabled?: boolean;
  className?: string;
}