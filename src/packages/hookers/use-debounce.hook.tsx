'use client';

import { useState, useEffect } from 'react';

/**
 * useDebounce is a custom React hook that debounces a changing value.
 *
 * @template T - The type of the value to debounce.
 * @param value - The value to debounce. The hook will return this value after the specified delay if it does not change.
 * @param delay - The delay in milliseconds to wait before updating the debounced value.
 * @returns The debounced value. This will only update if the value has not changed for the duration of the delay.
 *
 * @example
 * const debouncedSearchTerm = useDebounce(searchTerm, 300);
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
