import type { PropsWithChildren } from 'react';
import type { AlertProps } from '../../../molecules/alerts/alert/alert.props';

export interface ToastProps
  extends PropsWithChildren,
    Pick<AlertProps, 'className' | 'scheme'> {
  id: string;
}
