import { useEffect, useRef, RefObject } from 'react';

interface TouchHandlers {
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

interface TouchState {
  startY: number;
  startTime: number;
  isScrolling: boolean;
}

export const useTouch = (
  elementRef: RefObject<HTMLElement>,
  handlers: TouchHandlers,
  options: {
    minSwipeDistance?: number;
    maxSwipeTime?: number;
    preventScroll?: boolean;
  } = {}
) => {
  const {
    minSwipeDistance = 50,
    maxSwipeTime = 300,
    preventScroll = true
  } = options;

  const touchState = useRef<TouchState>({
    startY: 0,
    startTime: 0,
    isScrolling: false
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchState.current = {
        startY: touch.clientY,
        startTime: Date.now(),
        isScrolling: false
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (preventScroll && !touchState.current.isScrolling) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const endY = touch.clientY;
      const endTime = Date.now();
      
      const deltaY = touchState.current.startY - endY;
      const deltaTime = endTime - touchState.current.startTime;
      
      // Check if it's a valid swipe
      if (
        Math.abs(deltaY) >= minSwipeDistance &&
        deltaTime <= maxSwipeTime
      ) {
        if (deltaY > 0 && handlers.onSwipeUp) {
          handlers.onSwipeUp();
        } else if (deltaY < 0 && handlers.onSwipeDown) {
          handlers.onSwipeDown();
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [elementRef, handlers, minSwipeDistance, maxSwipeTime, preventScroll]);
};