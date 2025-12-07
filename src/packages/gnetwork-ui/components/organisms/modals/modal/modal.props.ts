import type { PropsWithChildren } from 'react';
import type { ReactChild } from '../../../../types';

export interface ModalProps extends PropsWithChildren {
  className?: string;
  customModalCloseComponent?: ReactChild;
  triggerComponent: ReactChild;
}
