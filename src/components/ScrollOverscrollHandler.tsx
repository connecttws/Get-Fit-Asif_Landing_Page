'use client';

import { useEffect } from 'react';

/**
 * Eliminates unwanted elastic bounce / rubber-banding at the bottom and sides
 * while keeping the native top pull-to-refresh functionality completely intact.
 */
export const ScrollOverscrollHandler: React.FC = () => {
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return;

      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchCurrentY - touchStartY; // negative = user dragging up to scroll down past bottom

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight;

      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 3;

      // If at bottom and trying to scroll further down, cancel the rubber-band elastic bounce
      if (isAtBottom && deltaY < 0) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }

      // At top (deltaY > 0), do not prevent default so native pull-to-refresh works naturally
    };

    const handleWheel = (e: WheelEvent) => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight;

      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 3;

      // Cancel bottom wheel overscroll bounce
      if (isAtBottom && e.deltaY > 0) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return null;
};
