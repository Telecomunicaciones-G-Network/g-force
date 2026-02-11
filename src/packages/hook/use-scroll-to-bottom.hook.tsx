'use client';

import { useCallback, useEffect, useRef } from 'react';

export interface UseScrollToBottomProps {
  autoScroll?: boolean;
  behavior?: ScrollBehavior;
  dependencies?: unknown[];
}

export interface UseScrollToBottomReturn<T extends HTMLElement> {
  ref: React.RefObject<T>;
  scrollToBottom: VoidFunction;
}

export const useScrollToBottom = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollToBottomProps = {},
): UseScrollToBottomReturn<T> => {
  const {
    autoScroll = false,
    behavior = 'smooth',
    dependencies = [],
  } = options;

  const ref = useRef<T>(null);

  const scrollToBottom = useCallback(() => {
    if (!ref.current) return;

    let lastScrollHeight = ref.current.scrollHeight;
    let stableCount = 0;
    const maxStableChecks = 10;
    const checkInterval = 50;

    const performScroll = () => {
      if (!ref.current) return;

      const currentScrollHeight = ref.current.scrollHeight;

      if (currentScrollHeight !== lastScrollHeight) {
        lastScrollHeight = currentScrollHeight;
        stableCount = 0;
      } else {
        stableCount++;
      }

      ref.current.scrollTo({
        top: currentScrollHeight,
        behavior,
      });

      if (stableCount >= maxStableChecks) {
        return;
      }

      setTimeout(performScroll, checkInterval);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        performScroll();
      });
    });
  }, [behavior]);

  useEffect(() => {
    if (autoScroll) {
      scrollToBottom();
    }
  }, [autoScroll, scrollToBottom, ...dependencies]);

  return {
    ref: ref as React.RefObject<T>,
    scrollToBottom,
  };
};
