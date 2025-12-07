import type { ModalProps } from './modal.props';

import { ModalContainer } from './components/modal-container';
import { ModalContent } from './components/modal-content';
import { ModalHeader } from './components/modal-header';
import { ModalTrigger } from './components/modal-trigger';

import { cn } from '../../../../utils/cn.util';

export const Modal = ({
  className = '',
  children,
  customModalCloseComponent,
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
        <ModalContainer>
          <ModalTrigger>{triggerComponent}</ModalTrigger>
          <ModalContent
            className={cn('sm:max-w-[425px]', className)}
            customModalCloseComponent={customModalCloseComponent}
          >
            <ModalHeader />
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};
