'use client';

import type {
  FloatingModalPosition,
  FloatingModalStartPosition,
} from './interfaces';

import { useEffect, useRef, useState } from 'react';

export const useFloatingModal = () => {
  const dragRef = useRef<FloatingModalStartPosition>({
    startX: 0,
    startY: 0,
  });
  const elementRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [position, setPosition] = useState<FloatingModalPosition>({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (['INPUT', 'TEXTAREA'].includes(target.tagName)) {
      return;
    }

    setIsDragging(true);

    dragRef.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    };
  };

  useEffect(() => {
    if (elementRef.current && !isReady) {
      const rect = elementRef.current.getBoundingClientRect();
      const centerX = (window.innerWidth - rect.width) / 2;
      const topMargin = 100;
      setPosition({
        x: Math.max(0, centerX),
        y: topMargin,
      });
      setIsReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        let newX = e.clientX - dragRef.current.startX;
        let newY = e.clientY - dragRef.current.startY;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return {
    elementRef,
    handleMouseDown,
    isDragging,
    isReady,
    position,
  };
};
