'use client';

import { useEffect } from 'react';

import { ALERT_DISMISS_DELAY } from './constants/alert-dimiss-delay.constant';

/**
 * @name UseAlertProps
 *
 * @description The props for the useAlert hook.
 *
 * @property {number} duration - The duration of the alert in milliseconds.
 * @property {VoidFunction} onClose - The function to call when the alert is closed.
 */
interface UseAlertProps {
  duration?: number;
  onClose?: VoidFunction;
}

/**
 * @name useAlert
 *
 * @description Hook to handle alert messages.
 *
 * @property {number} duration - The duration of the alert in milliseconds.
 * @property {VoidFunction} onClose - The function to call when the alert is closed.
 */
export const useAlert = ({
  duration = ALERT_DISMISS_DELAY,
  onClose,
}: Readonly<UseAlertProps>) => {
  useEffect(() => {
    if (!onClose) return;

    const timeoutId = window.setTimeout(() => {
      onClose?.();
    }, duration);

    return () => window.clearTimeout(timeoutId);
  }, [duration, onClose]);
};
