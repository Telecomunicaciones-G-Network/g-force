import type { PropsWithChildren } from 'react';
import type { ModalProps } from '../../modal.props';

export interface ModalContentProps
  extends PropsWithChildren,
    Pick<
      ModalProps,
      | 'customModalCloseComponent'
      | 'hideModalClose'
      | 'modalOverlayChildren'
      | 'preventCloseOnEscape'
      | 'preventCloseOnOutsideClick'
    > {
  className?: string;
}
