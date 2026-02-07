'use client';

import type { ReactDiv } from '../../../../types/react-div.type';

import { createPortal } from 'react-dom';

import { cn } from '../../../../utils/cn.util';

import { useFloatingModal } from './floating-modal.hook';

import styles from './floating-modal.module.css';

export const FloatingModal = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<ReactDiv>) => {
  const { elementRef, handleMouseDown, isDragging, isReady, position } =
    useFloatingModal();

  if (!children) {
    console.warn(
      'Prop children is missing on FloatingModal component. This component can not be render appropiately.',
    );
  }

  return (
    <>
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            className={cn(styles.base, className)}
            ref={ref ? ref : elementRef}
            onMouseDown={handleMouseDown}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              left: `${position.x}px`,
              opacity: isReady ? 1 : 0,
              pointerEvents: isReady ? 'auto' : 'none',
              top: `${position.y}px`,
            }}
            {...rest}
          >
            {children}
          </div>,
          document.body,
        )}
    </>
  );
};
