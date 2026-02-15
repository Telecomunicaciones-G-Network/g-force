import type { ToasterProps } from 'sonner';
import type { AlertProps } from '../../../../molecules/alerts/alert/alert.props';

/**
 * @type ToastConfig
 *
 * @description The config for the toast component.
 *
 * @extends {ToasterProps} - The props for the toast component.
 * @extends {AlertProps} - The props for the alert component.
 */
export type ToastConfig = Omit<ToasterProps, 'id'> &
  Omit<AlertProps, 'children' | 'dir'>;
