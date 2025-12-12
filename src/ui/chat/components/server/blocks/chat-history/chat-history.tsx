'use client';

import type { NoteValues } from '@module-chat/domain/interfaces';
import type { ChatHistoryProps } from './chat-history.props';

import { MdMoodBad } from 'react-icons/md';

import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatCommentCard } from '@ui-chat/components/server/cards/chat-comment-card';

import { ChatHistorySkeleton } from './components/chat-history-skeleton';

import { useChatHistory } from './chat-history.hook';

import styles from './chat-history.module.css';

export const ChatHistory = ({ title = '' }: Readonly<ChatHistoryProps>) => {
  const { isError, isLoading, notes } = useChatHistory();

  return (
    <ChatDetailsTabContentLayout title={title}>
      {isLoading && <ChatHistorySkeleton />}
      {!isLoading && isError && (
        <div className={styles.base__error}>
          <MdMoodBad className="min-h-10 min-w-10 size-10" />
          <Text
            as="h5"
            className="text-center text-neutral-900"
            level="medium"
            scheme="label"
          >
            Ha ocurrido un error al cargar las notas
          </Text>
        </div>
      )}
      {!isLoading && (
        <div className={styles.base}>
          {notes?.length === 0 && (
            <div className={styles.base__empty}>
              <Icon name="message_info" size={40} />
              <Text
                as="h5"
                className="text-center text-neutral-900"
                level="medium"
                scheme="label"
              >
                No hay notas que mostrar por el momento
              </Text>
            </div>
          )}
          {notes?.length > 0 && (
            <>
              <Text as="h5" level="medium" scheme="label">
                Notas de agentes anteriores
              </Text>
              <div className={styles.base__elements}>
                {notes?.map((note: NoteValues) => (
                  <ChatCommentCard key={note?.id} {...note} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </ChatDetailsTabContentLayout>
  );
};
