'use client';

import type { ModalProps } from './modal.props';

import { ModalContainer } from './components/modal-container';
import { ModalContent } from './components/modal-content';
import { ModalHeader } from './components/modal-header';
import { ModalTrigger } from './components/modal-trigger';

import { cn } from '../../../../utils/cn.util';

export const Modal = ({
  children,
  className = '',
  customModalCloseComponent,
  hideModalClose = false,
  isOpen = false,
  modalOverlayChildren,
  onOpenChange,
  triggerComponent,
}: Readonly<ModalProps>) => {
  if (!triggerComponent) {
    console.warn(
      'Prop triggerComponent is missing on Modal component. This component can not be render appropiately.',
    );
  }

  return (
    <>
      {triggerComponent && (
        <ModalContainer onOpenChange={onOpenChange} open={isOpen}>
          <ModalTrigger>{triggerComponent}</ModalTrigger>
          <ModalContent
            className={cn('sm:max-w-[518px]', className)}
            customModalCloseComponent={customModalCloseComponent}
            hideModalClose={hideModalClose}
            modalOverlayChildren={modalOverlayChildren}
            preventCloseOnEscape
            preventCloseOnOutsideClick
          >
            <ModalHeader />
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};
