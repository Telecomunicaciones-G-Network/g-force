'use client';

import { createPortal } from 'react-dom';

import { useFloatingModal } from './floating-modal.hook';

export const FloatingModal = () => {
  const { elementRef, handleMouseDown, isDragging, position } =
    useFloatingModal();

  return (
    <>
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={elementRef}
            onMouseDown={handleMouseDown}
            style={{
              position: 'fixed',
              top: `${position.y}px`,
              left: `${position.x}px`,
              color: 'white',
              background: 'black',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 9999,
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              border: 'none',
              outline: 'none',
            }}
          >
            Floating element
          </div>,
          document.body,
        )}
    </>
  );
};
