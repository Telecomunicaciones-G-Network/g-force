import type { ChatConversationFooterProps } from './chat-conversation-footer.props';

import { MdSend } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';

import styles from './chat-conversation-footer.module.css';

export const ChatConversationFooter = ({
  disabledChat = false,
}: Readonly<ChatConversationFooterProps>) => (
  <div className={styles.base}>
    <div className={styles.base__input}>
      <ChatInput
        className="bg-chromatic"
        disabled={disabledChat}
        fullWidth
        id="chat_message_sender"
        name="message"
        placeholder="Escribir comentario..."
      />
      <Button className="px-2" disabled={disabledChat} color="red">
        <MdSend className="min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
      </Button>
    </div>
  </div>
);
