// PENDING:

'use client';

import { Fragment } from 'react';

import { MdSend } from 'react-icons/md';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';
import { ChatMessage } from '@gnetwork-ui/components/organisms/blocks/chat-message';

import { useChatConversation } from './chat-conversation.hook';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-conversation.module.css';
import { ChatConversationHeader } from './components/chat-conversation-header';

export const ChatConversation = () => {
  const { isError, isLoading, messages, messagesContainerRef } =
    useChatConversation();

  return (
    <section className={cn(styles.base, 'divide-y divide-neutral-200')}>
      <ChatConversationHeader />
      {
        <>
          {isLoading && <div>...loading</div>}
          {isError && <div>error</div>}
          {!isLoading && !isError && messages?.length > 0 && (
            <div className={styles.base__content}>
              <div
                ref={messagesContainerRef}
                className={cn(
                  styles.base__chat,
                  'gap-6 px-4 py-6 tablet:gap-8 tablet:px-8 lg:gap-6 lg:p-6',
                )}
              >
                {messages?.map((message) => (
                  <Fragment key={message?.id}>
                    {message?.id && (
                      <ChatMessage
                        direction={
                          message?.direction === 'INCOMING'
                            ? 'incoming'
                            : 'outgoing'
                        }
                        time={isoToTime(message?.createdAt ?? '')}
                        username={message?.sender?.name}
                      >
                        {message?.text}
                      </ChatMessage>
                    )}
                  </Fragment>
                ))}
              </div>
              <div className={styles.base__footer}>
                <div className={styles.base__sender}>
                  <ChatInput
                    className="bg-chromatic"
                    fullWidth
                    id="chat_message_sender"
                    name="message"
                    placeholder="Escribir comentario..."
                  />
                  <Button className="px-2" color="red">
                    <MdSend className="min-h-[16.99px] h-[16.99px] min-w-[19.73px] w-[19.73px]" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      }
    </section>
  );
};
