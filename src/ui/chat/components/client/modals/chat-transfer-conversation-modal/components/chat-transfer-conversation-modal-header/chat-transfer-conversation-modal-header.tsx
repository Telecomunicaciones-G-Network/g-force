import { MdCompareArrows } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { IconBadge } from '@gnetwork-ui/components/molecules/badges/icon-badge';

import styles from './chat-transfer-conversation-modal-header.module.css';

export const ChatTransferConversationModalHeader = () => (
  <div className={styles.base}>
    <IconBadge
      icon={
        <MdCompareArrows className="fill-red-600 min-h-6 min-w-6 rotate-y-180 size-6" />
      }
    />
    <div className={styles.base__content}>
      <Text className="text-chromatic-inverted" level="xsmall" scheme="heading">
        Transferir chat
      </Text>
      <Text
        className="text-neutral-700 text-wrap!"
        level="small"
        scheme="paragraph"
      >
        Puedes transferir el chat a un equipo o agente diferente.
      </Text>
    </div>
  </div>
);
