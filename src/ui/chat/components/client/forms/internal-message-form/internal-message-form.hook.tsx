'use client';

import type { ChangeEvent, FormEvent } from 'react';

import { useCallback, useState } from 'react';

import { useEmitSendInternalMessage } from '@ui-chat/hooks/emit-send-internal-message.hook';

/**
 * @name useInternalMessageForm
 *
 * @description This hook manages the internal message form state and submission.
 *
 * @returns changeInternalMessage - Function to change the internal message.
 * @returns internalMessage - The internal message.
 * @returns onSubmit - Function to submit the internal message.
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
