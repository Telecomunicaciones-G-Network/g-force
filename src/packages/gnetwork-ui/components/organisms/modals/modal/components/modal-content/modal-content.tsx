import type { ModalContentProps } from './modal-content.props';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { ModalClose } from '../modal-close';
import { ModalOverlay } from '../modal-overlay';

import { cn } from '../../../../../../utils/cn.util';

const DialogPortal = DialogPrimitive.Portal;

import styles from './modal-content.module.css';

export const ModalContent = ({
  className = '',
  children,
  customModalCloseComponent,
  hideModalClose = false,
  modalOverlayChildren,
  preventCloseOnEscape = false,
  preventCloseOnOutsideClick = false,
}: Readonly<ModalContentProps>) => {
  if (!children) {
    console.warn(
      'Prop children is missing on ModalContent component. This component can not be render appropiately.',
    );
  }

  return (
    <DialogPortal>
      <ModalOverlay>{modalOverlayChildren}</ModalOverlay>
      <DialogPrimitive.Content
        className={cn(
          styles.base,
          'bg-chromatic duration-200 flex-col gap-6 p-0 rounded-2xl w-full data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          className,
        )}
        onCloseAutoFocus={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => {
          if (preventCloseOnEscape) {
            e.preventDefault();
          }
        }}
        onPointerDownOutside={(e) => {
          if (preventCloseOnOutsideClick) {
            e.preventDefault();
            return;
          }

          const target = e.target as HTMLElement;

          if (
            target.tagName === 'BUTTON' ||
            target.closest('button') ||
            target.closest('[data-prevent-close]')
          ) {
            e.preventDefault();
          }
        }}
      >
        {children}
        {!hideModalClose &&
          (customModalCloseComponent ? (
            customModalCloseComponent
          ) : (
            <ModalClose />
          ))}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
};
