'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * @name useClickOutside
 *
 * @description This hook is used to manage the open state of an element and to detect clicks outside of the referenced element, allowing you to close it when a click occurs outside.
 *
 * @returns closeElement - Function to close the element.
 * @returns elementRef - Ref to attach to the element.
 * @returns isOpen - State indicating whether the element is open.
 * @returns toggleOpen - Function to toggle the open state.
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
