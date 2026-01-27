'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useClickOutside
 *
 * This hook is used to handle clicks outside of an element.
 *
 * @property elementRef - The ref to the element.
 * @property isOpen - Whether the element is open.
 * @property toggleOpen - Toggle the open state.
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>() => {
  const elementRef = useRef<T>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeElement = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleOpen = useCallback(
    () => setIsOpen((prevValue) => !prevValue),
    [],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef?.current &&
        !elementRef?.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return {
    closeElement,
    elementRef,
    isOpen,
    toggleOpen,
  };
};
