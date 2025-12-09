import type { ToasterProps } from 'sonner';
import type { AlertProps } from '../../../../molecules/alerts/alert/alert.props';

export interface ToastConfig
  extends Omit<ToasterProps, 'id'>,
    Pick<AlertProps, 'className' | 'scheme'> {
  id: string;
}
