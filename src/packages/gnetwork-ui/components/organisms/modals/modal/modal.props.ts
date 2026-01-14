import type { PropsWithChildren } from 'react';
import type { ReactChild } from '../../../../types';

export interface ModalProps extends PropsWithChildren {
  className?: string;
  customModalCloseComponent?: ReactChild;
  hideModalClose?: boolean;
  isOpen?: boolean;
  modalOverlayChildren?: ReactChild;
  onOpenChange?: (open: boolean) => void;
  preventCloseOnEscape?: boolean;
  preventCloseOnOutsideClick?: boolean;
  triggerComponent: ReactChild;
}
