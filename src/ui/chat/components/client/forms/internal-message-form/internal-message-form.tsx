'use client';

import { MdSend } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';

import { useInternalMessageForm } from './internal-message-form.hook';

import styles from './internal-message-form.module.css';

/**
 * @name InternalMessageForm
 *
 * @description This component is the internal message form.
 */
export const InternalMessageForm = () => {
  const { changeInternalMessage, internalMessage, onSubmit } =
    useInternalMessageForm();

  return (
    <form className={styles.base} onSubmit={onSubmit}>
      <ChatInput
        className="bg-chromatic"
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
        // TODO: Apply loading state while form is submitting
        type="submit"
      >
        {/* TODO: Icon must be the same as design */}
        <MdSend className="fill-chromatic min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
      </Button>
    </form>
  );
};
