'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * @type UseIntersectionObserverState
 *
 * @description The state for the useIntersectionObserver hook.
 *
 * @property {IntersectionObserverEntry} entry - The intersection observer entry.
 * @property {boolean} isIntersecting - Whether the element is intersecting.
 */
type UseIntersectionObserverState = {
  entry?: IntersectionObserverEntry;
  isIntersecting: boolean;
};

/**
 * @name UseIntersectionObserverOptions
 *
 * @description The options for the useIntersectionObserver hook.
 *
 * @property {boolean} freezeOnceVisible - Whether to freeze the intersection observer once the element is visible.
 * @property {boolean} initialIsIntersecting - Whether the element is initially intersecting.
 * @property {(isIntersecting: boolean, entry: IntersectionObserverEntry) => void} onChange - The callback function to call when the intersection changes.
 * @property {Element | Document | null} root - The root element to observe.
 * @property {string} rootMargin - The margin of the root element.
 * @property {number | number[]} threshold - The threshold for the intersection observer.
 */
type UseIntersectionObserverOptions = {
  freezeOnceVisible?: boolean;
  initialIsIntersecting?: boolean;
  onChange?: (
    isIntersecting: boolean,
    entry: IntersectionObserverEntry,
  ) => void;
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
};

/**
 * @name useIntersectionObserver
 *
 * @description This hook is used to observe the intersection of an element with the viewport.
 *
 * @property {boolean} freezeOnceVisible - Whether to freeze the intersection observer once the element is visible.
 * @property {boolean} initialIsIntersecting - Whether the element is initially intersecting.
 * @property {(isIntersecting: boolean, entry: IntersectionObserverEntry) => void} onChange - The callback function to call when the intersection changes.
 * @property {Element | Document | null} root - The root element to observe.
 * @property {string} rootMargin - The margin of the root element.
 * @property {number | number[]} threshold - The threshold for the intersection observer.
 *
 * @returns entry: IntersectionObserverEntry, isIntersecting: boolean, ref: Element | null
 * @returns isIntersecting: boolean, entry: IntersectionObserverEntry, ref: Element | null
 * @returns ref: Element | null
 */
export function useIntersectionObserver({
  freezeOnceVisible = false,
  initialIsIntersecting = false,
  onChange,
  root = null,
  rootMargin = '0%',
  threshold = 0,
}: UseIntersectionObserverOptions = {}) {
  const callbackRef =
    useRef<UseIntersectionObserverOptions['onChange']>(undefined);

  const [ref, setRef] = useState<Element | null>(null);
  const [state, setState] = useState<UseIntersectionObserverState>(() => ({
    isIntersecting: initialIsIntersecting,
    entry: undefined,
  }));

  callbackRef.current = onChange;

  const frozen = state?.entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    if (!ref) return;

    if (!('IntersectionObserver' in window)) return;

    if (frozen) return;

    let unobserve: (() => void) | undefined;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        const thresholds = Array.isArray(observer.thresholds)
          ? observer.thresholds
          : [observer.thresholds];

        entries.forEach((entry) => {
          const isIntersecting =
            entry.isIntersecting &&
            thresholds.some(
              (threshold) => entry.intersectionRatio >= threshold,
            );

          setState({ isIntersecting, entry });

          if (callbackRef.current) {
            callbackRef.current(isIntersecting, entry);
          }

          if (isIntersecting && freezeOnceVisible && unobserve) {
            unobserve();
            unobserve = undefined;
          }
        });
      },
      { threshold, root, rootMargin },
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin, frozen, freezeOnceVisible]);

  const prevRef = useRef<Element | null>(null);

  useEffect(() => {
    if (
      !ref &&
      state.entry?.target &&
      !freezeOnceVisible &&
      !frozen &&
      prevRef.current !== state.entry.target
    ) {
      prevRef.current = state.entry.target;
      setState({ isIntersecting: initialIsIntersecting, entry: undefined });
    }
  }, [ref, state.entry, freezeOnceVisible, frozen, initialIsIntersecting]);

  const result = [setRef, !!state.isIntersecting, state.entry];

  return {
    entry: result[2],
    isIntersecting: result[1],
    ref: result[0],
  };
}
