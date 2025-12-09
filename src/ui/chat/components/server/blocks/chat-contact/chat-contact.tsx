import type { ChatContactProps } from './chat-contact.props';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { ChatDetailsContactCloseConversationButton } from '@ui-chat/components/client/buttons/chat-details-contact-close-conversation-button';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatContactAvatar } from './components/chat-contact-avatar';

import styles from './chat-contact.module.css';

export const ChatContact = ({ title = '' }: Readonly<ChatContactProps>) => (
  <ChatDetailsTabContentLayout title={title}>
    <ChatContactAvatar />
    <div className={styles.base__content}>
      <div className={styles.base__info}>
        <Text as="span" level="small" scheme="label">
          Nombre:
        </Text>
        <Text
          as="span"
          align="end"
          className="text-neutral-500"
          level="small"
          scheme="label"
        >
          Angela Goncalves
        </Text>
      </div>
      <Separator />
      <div className={styles.base__info}>
        <Text as="span" level="small" scheme="label">
          Tipo de cliente:
        </Text>
        <Text
          as="span"
          align="end"
          className="text-neutral-500"
          level="small"
          scheme="label"
        >
          Natural
        </Text>
      </div>
      <Separator />
      <div className={styles.base__info}>
        <Text as="span" level="small" scheme="label">
          Estado actual:
        </Text>
        <Tag color="green">Activo</Tag>
      </div>
      <Separator />
      <div className={styles.base__info}>
        <Text as="span" level="small" scheme="label">
          Teléfono:
        </Text>
        <Text
          as="span"
          align="end"
          className="text-neutral-500"
          level="small"
          scheme="label"
        >
          0414-3526789
        </Text>
      </div>
      <Separator />
      <div className={styles.base__info}>
        <Text as="span" level="small" scheme="label">
          Correo:
        </Text>
        <Text
          as="span"
          className="text-neutral-500"
          level="small"
          scheme="label"
        >
          angela.gon@gmail.com
        </Text>
      </div>
    </div>
    <ChatDetailsContactCloseConversationButton />
  </ChatDetailsTabContentLayout>
);
