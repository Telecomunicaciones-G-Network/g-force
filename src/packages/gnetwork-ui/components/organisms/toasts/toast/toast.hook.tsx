'use client';

import type { ToastConfig } from './types';

import { toast } from 'sonner';

import { Toast } from './toast';

/**
 * @name useToast
 *
 * @description The hook for the toast component.
 *
 * @return showToast - Function to show the toast.
 */
export const useToast = () => {
  const showToast = (message: string, config?: ToastConfig) => {
    return toast.custom(
      (id) => (
        <Toast id={id?.toString()} {...config}>
          {' '}
          {message}
        </Toast>
      ),
      config,
    );
  };

  return {
    showToast,
  };
};
