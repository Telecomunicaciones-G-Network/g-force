'use client';

import type { ChangeEvent, FormEvent } from 'react';

import { useCallback, useState } from 'react';

import { useEmitSendInternalMessage } from '@ui-chat/hooks/emit-send-internal-message.hook';

/**
 * Internal message form hook
 *
 * This hook manages the internal message form state and submission.
 */
export const useInternalMessageForm = () => {
  const [internalMessage, setInternalMessage] = useState<string>('');

  const { emitSendInternalMessage } = useEmitSendInternalMessage();

  const changeInternalMessage = (event: ChangeEvent<HTMLInputElement>) =>
    setInternalMessage(event?.target?.value);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!internalMessage?.trim()) return;

    emitSendInternalMessage({
      internalMessage,
      onSuccess,
    });
  };

  const onSuccess = useCallback(() => setInternalMessage(''), []);

  return {
    changeInternalMessage,
    internalMessage,
    onSubmit,
  };
};
