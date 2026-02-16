'use client';

import { useEffect, useRef, useState } from 'react';

import { useIntersectionObserver } from './use-interseption-observer.hook';

/**
 * @name UseInfinityScrollOptions
 *
 * @description Options for the useInfinityScroll hook.
 *
 * @property {boolean} freezeOnceVisible - Pass-through to useIntersectionObserver.
 * @property {boolean} hasMore - Whether there are more items to load.
 * @property {boolean} isLoading - Whether a load is in progress (prevents duplicate requests).
 * @property {(element: HTMLDivElement | null) => void} onLoadMore - Called when the sentinel is visible and more can be loaded.
 * @property {boolean} requireUserScroll - If true, onLoadMore only runs after the user has scrolled at least once (avoids loading on mount when list is short).
 * @property {string} rootMargin - Pass-through to useIntersectionObserver.
 * @property {number | number[]} threshold - Pass-through to useIntersectionObserver (default 0).
 */
export interface UseInfinityScrollOptions {
  freezeOnceVisible?: boolean;
  hasMore?: boolean;
  isLoading?: boolean;
  onLoadMore?: () => void | Promise<void>;
  requireUserScroll?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * @name useInfinityScroll
 *
 * @description Reusable infinite scroll: intersection observer with a scroll container as root,
 * optional "load more" effect when the sentinel is visible, and optional "require user scroll" guard.
 *
 * @property {boolean} freezeOnceVisible - Whether to freeze the intersection observer once the element is visible.
 * @property {boolean} hasMore - Whether there are more items to load.
 * @property {boolean} isLoading - Whether a load is in progress (prevents duplicate requests).
 * @property {(element: HTMLDivElement | null) => void} onLoadMore - Called when the sentinel is visible and more can be loaded.
 * @property {boolean} requireUserScroll - If true, onLoadMore only runs after the user has scrolled at least once (avoids loading on mount when list is short).
 * @property {string} rootMargin - Pass-through to useIntersectionObserver.
 * @property {number | number[]} threshold - Pass-through to useIntersectionObserver (default 0).
 *
 * @returns containerRef - Callback ref for the scrollable container (sets the observer root).
 * @returns hasUserScrolledRef - Ref to set to true when the user scrolls (e.g. in onScroll). Used when requireUserScroll is true.
 * @returns isIntersecting - Whether the sentinel is intersecting the container.
 * @returns sentinelRef - Callback ref for the sentinel element (place at the end of the list).
 */
export const useInfinityScroll = (props: UseInfinityScrollOptions = {}) => {
  const {
    freezeOnceVisible = false,
    hasMore = false,
    isLoading = false,
    onLoadMore,
    requireUserScroll = false,
    rootMargin = '0%',
    threshold = 0,
  } = props;

  const hasUserScrolledRef = useRef<boolean>(false);

  const [scrollRoot, setScrollRoot] = useState<Element | null>(null);

  const { isIntersecting, ref: sentinelRef } = useIntersectionObserver({
    freezeOnceVisible,
    root: scrollRoot,
    rootMargin,
    threshold,
  });

  const containerRef = (element: HTMLDivElement | null) => {
    setScrollRoot(element);
  };

  useEffect(() => {
    if (!onLoadMore || !hasMore || isLoading || !isIntersecting) return;

    if (requireUserScroll && !hasUserScrolledRef.current) return;

    onLoadMore();
  }, [hasMore, isIntersecting, isLoading, onLoadMore, requireUserScroll]);

  return {
    containerRef,
    hasUserScrolledRef,
    isIntersecting,
    sentinelRef,
  };
};
