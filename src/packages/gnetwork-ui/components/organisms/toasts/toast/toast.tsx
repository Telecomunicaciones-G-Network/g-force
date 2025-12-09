import type { ToastProps } from './toast.props';

import { Alert } from '../../../molecules/alerts/alert';

import { AlertSchemes } from '../../../molecules/alerts/alert/enums/alert-scheme.enum';

export const Toast = ({
  className = '',
  children,
  id,
  scheme = AlertSchemes.NEUTRAL,
}: Readonly<ToastProps>) => {
  return (
    <Alert className={className} id={id} scheme={scheme}>
      {children}
    </Alert>
  );
};
