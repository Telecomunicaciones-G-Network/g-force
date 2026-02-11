import type { AlertProps } from '../../../molecules/alerts/alert/alert.props';

import { Alert } from '../../../molecules/alerts/alert';

import { AlertSchemes } from '../../../molecules/alerts/alert/enums/alert-scheme.enum';

/**
 * @name Toast
 *
 * @description The toast component.
 *
 * @property {string} className - The class name for the alert component.
 * @property {React.ReactNode} children - The children for the alert component.
 * @property {string} id - The id for the alert component.
 * @property {React.Ref<HTMLDivElement>} ref - The ref for the alert component.
 * @property {AlertSchemeType} scheme - The scheme for the alert component.
 * @property {React.HTMLAttributes<HTMLDivElement>} rest - The rest props for the alert component.
 */
export const Toast = ({
  className = '',
  children,
  id,
  ref,
  scheme = AlertSchemes.NEUTRAL,
  ...rest
}: Readonly<AlertProps>) => (
  <Alert ref={ref} className={className} id={id} scheme={scheme} {...rest}>
    {children}
  </Alert>
);
