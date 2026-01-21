'use client';

import type { InternalMessageFormProps } from './internal-message-form.props';

import { MdSend } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';

import { useInternalMessageForm } from './internal-message-form.hook';

import styles from './internal-message-form.module.css';

export const InternalMessageForm = ({
  // TODO: I found out the way to get rid of disabledForm props transfer
  disabledForm = false,
}: Readonly<InternalMessageFormProps>) => {
  const { changeInternalMessage, internalMessage, onSubmit } =
    useInternalMessageForm();

  return (
    <form className={styles.base} onSubmit={onSubmit}>
      <ChatInput
        className="bg-chromatic"
        disabled={disabledForm}
        fullWidth
        hideLeftIcon
        id="internal_message_input"
        isStatic
        name="internalMessage"
        noErrorHandler
        noMessageHandler
        onChange={changeInternalMessage}
        placeholder="Escribir un mensaje interno..."
        value={internalMessage}
      />
      <Button
        className="px-2"
        color="black"
        disabled={disabledForm}
        type="submit"
      >
        {/* TODO: Icon must be the same as design */}
        <MdSend className="fill-chromatic min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
      </Button>
    </form>
  );
};
