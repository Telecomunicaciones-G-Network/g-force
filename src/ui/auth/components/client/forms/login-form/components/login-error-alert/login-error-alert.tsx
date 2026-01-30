'use client';

import { useEffect, useState } from 'react';

import { Toast } from '@gnetwork-ui/components/organisms/toasts/toast/toast';

import { ToastSchemes } from '@gnetwork-ui/components/organisms/toasts/toast/enums/toast-schemes.enum';

interface LoginErrorAlertProps {
  message?: string;
  duration?: number;
}

export const LoginErrorAlert = ({
  message,
  duration = 4000,
}: Readonly<LoginErrorAlertProps>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!isVisible || !message) {
    return null;
  }

  return (
    <Toast scheme={ToastSchemes.WARNING} id="login-error-alert">
      {message}
    </Toast>
  );
};
