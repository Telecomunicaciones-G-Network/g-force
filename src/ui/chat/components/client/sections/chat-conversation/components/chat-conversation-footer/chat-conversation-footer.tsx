'use client';

import type { ChatConversationFooterProps } from './chat-conversation-footer.props';

import { MdSend } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { ChatInputController } from '@ui-core/components/client/inputs/chat-input-controller';

import { useChatConversationFooter } from './chat-conversation-footer.hook';

import styles from './chat-conversation-footer.module.css';

export const ChatConversationFooter = ({
  disabledChat = false,
}: Readonly<ChatConversationFooterProps>) => {
  const { control, handleSubmit, onSubmit } = useChatConversationFooter();

  return (
    <div className={styles.base}>
      <form className={styles.base__input} onSubmit={handleSubmit(onSubmit)}>
        <ChatInputController
          className="bg-chromatic"
          control={control}
          disabled={disabledChat}
          fullWidth
          id="chat_message_sender"
          name="text"
          noErrorHandler
          noMessageHandler
          placeholder="Escribir comentario..."
        />
        <Button
          className="px-2"
          color="red"
          disabled={disabledChat}
          type="submit"
        >
          <MdSend className="min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
        </Button>
      </form>
    </div>
  );
};
