'use client';

import type { LoginErrorAlertProps } from './login-error-alert.props';

import { Alert } from '@gnetwork-ui/components/molecules/alerts/alert';

import { AlertSchemes } from '@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum';

import { useAlert } from '@gnetwork-ui/components/molecules/alerts/alert/alert.hook';

/**
 * @name LoginErrorAlert
 *
 * @description The login error alert component.
 *
 * @property {string} message - The message to display in the alert.
 * @property {VoidFunction} onClose - The function to call when the alert is closed.
 */
export const LoginErrorAlert = ({
  message = '',
  onClose,
}: Readonly<LoginErrorAlertProps>) => {
  useAlert({ onClose });

  return (
    <Alert id="login-error-alert" scheme={AlertSchemes.WARNING}>
      {message}
    </Alert>
  );
};
