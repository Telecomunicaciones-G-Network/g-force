'use client';

import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { useChatEmpty } from './chat-empty.hook';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-empty.module.css';

export const ChatEmpty = () => {
  const { activeChat } = useChatEmpty();

  return (
    <>
      {(activeChat === null || activeChat === undefined) && (
        <section className={cn(styles.base, 'hidden lg:flex')}>
          <div className={styles.base__container}>
            <Icon name="message_info" size={40} />
            <Text
              as="h5"
              className="text-center text-neutral-900"
              level="xsmall"
              scheme="heading"
            >
              Sin chat activo
            </Text>
            <Text
              as="p"
              className="text-center text-neutral-600"
              level="small"
              scheme="paragraph"
            >
              El panel mostrará la conversación y los datos del cliente cuando
              abras un chat desde la lista.
            </Text>
          </div>
        </section>
      )}
    </>
  );
};
