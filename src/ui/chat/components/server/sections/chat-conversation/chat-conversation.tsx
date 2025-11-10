// TODO: Debo fragmentar este componente en varias partes

import { Fragment } from "react";

import { MdCall, MdMailOutline, MdMoreVert, MdSend } from "react-icons/md";

import { Text } from "@gnetwork-ui/components/atoms/texts/text";
import { Button } from "@gnetwork-ui/components/molecules/buttons/button";
import { ChatInput } from "@gnetwork-ui/components/molecules/inputs/chat-input";
import { ChatMessage } from "@gnetwork-ui/components/organisms/blocks/chat-message";

import { chatMessages } from "@ui-chat/iterators/chat-messages.iterator";

import { cn } from "@gnetwork-ui/utils/cn.util";

import styles from "./chat-conversation.module.css";

export const ChatConversation = () => (
  <section className={cn(styles.base, "divide-y divide-neutral-200")}>
    <div className={styles.base__header}>
      <Text as="h3" level="large" scheme="label">
        Angela Goncalves
      </Text>
      <div className={styles.base__header_buttons}>
        <Button className="px-2" isStatic>
          <MdCall className="min-h-6 min-w-6 size-6" />
        </Button>
        <Button className="px-2" isStatic>
          <MdMailOutline className="min-h-6 min-w-6 size-6" />
        </Button>
        <Button className="px-2" isStatic>
          <MdMoreVert className="min-h-6 min-w-6 size-6" />
        </Button>
      </div>
    </div>
    <div className={styles.base__content}>
      <div className={styles.base__chat}>
        {chatMessages?.map((chatMessage) => (
          <Fragment key={chatMessage?.id}>
            {chatMessage?.message && (
              <ChatMessage
                direction={chatMessage?.direction}
                time={chatMessage?.time}
                username={chatMessage?.username}
              >
                {chatMessage?.message}
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
  </section>
);
