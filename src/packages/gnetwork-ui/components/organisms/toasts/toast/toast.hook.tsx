'use client';

import type { ToastConfig } from './interfaces';

import { toast } from 'sonner';

import { Toast } from './toast';

export const useToast = () => {
  const showToast = (message: string, config?: ToastConfig) => {
    return toast.custom(
      (id) => (
        <Toast
          className={config?.className}
          id={id.toString()}
          scheme={config?.scheme}
        >
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
