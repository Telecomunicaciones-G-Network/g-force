// DONE:

'use client';

import { useCallback, useEffect, useRef } from 'react';

/**
 * Configuration options for the `useScrollToBottom` hook.
 *
 * @property {boolean} [autoScroll] - If true, automatically scrolls to the bottom when dependencies change.
 * @property {ScrollBehavior} [behavior] - The scroll animation behavior, e.g., 'smooth' or 'auto'. Defaults to 'smooth'.
 * @property {unknown[]} [dependencies] - Array of dependencies to trigger the auto-scroll effect when they change.
 */
export interface UseScrollToBottomProps {
  autoScroll?: boolean;
  behavior?: ScrollBehavior;
  dependencies?: unknown[];
}

/**
 * The return type of the `useScrollToBottom` hook.
 *
 * @template T - The HTMLElement type the ref will attach to.
 * @property {React.RefObject<T>} ref - A React ref to be attached to the scrollable container element.
 * @property {() => void} scrollToBottom - A function that scrolls the referenced element to its bottom.
 */
export interface UseScrollToBottomReturn<T extends HTMLElement> {
  ref: React.RefObject<T>;
  scrollToBottom: () => void;
}

/**
 * Hook to manage scrolling to the bottom of a container element
 * @param options - Configuration options for auto-scroll behavior
 * @returns Object containing ref and scrollToBottom function
 *
 * @example
 * ```tsx
 * const { ref, scrollToBottom } = useScrollToBottom<HTMLDivElement>({
 *   autoScroll: true,
 *   behavior: 'smooth',
 *   dependencies: [messages]
 * });
 *
 * return (
 *   <div ref={ref} style={{ overflow: 'auto', height: '400px' }}>
 *     {messages.map(msg => <div key={msg.id}>{msg.text}</div>)}
 *   </div>
 * );
 * ```
 */
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
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior,
      });
    }
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
