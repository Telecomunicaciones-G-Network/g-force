'use client';

import { MdAnnouncement } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { useChatEmpty } from './chat-empty.hook';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-empty.module.css';

export const ChatEmpty = () => {
  const { activeChat } = useChatEmpty();

  console.log('activeChat', activeChat);
  return (
    <>
      {(activeChat === null || activeChat === undefined) && (
        <section className={cn(styles.base, 'hidden lg:flex')}>
          <div className={styles.base__container}>
            <MdAnnouncement className="min-h-10 min-w-10 size-10" />
            <Text
              as="h5"
              className="text-neutral-100"
              level="xsmall"
              scheme="heading"
            >
              Sin chat activo
            </Text>
            <Text
              as="p"
              className="text-neutral-400"
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
