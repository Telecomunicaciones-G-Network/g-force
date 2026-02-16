'use client';

import { useEffect, useRef, useState } from 'react';

export const useSelectInputTrigger = () => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current;

    if (!trigger) return;

    const observer = new MutationObserver(() => {
      const state = trigger.getAttribute('data-state');

      setIsOpen(state === 'open');
    });

    observer.observe(trigger, {
      attributes: true,
      attributeFilter: ['data-state'],
    });

    const initialState = trigger.getAttribute('data-state');

    setIsOpen(initialState === 'open');

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    isOpen,
    triggerRef,
  };
};
