import { MdOutlineAssignmentInd } from 'react-icons/md';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { IconBadge } from '@gnetwork-ui/components/molecules/badges/icon-badge';

import styles from './chat-auto-assign-conversation-modal-header.module.css';

/**
 * @name ChatAutoAssignConversationModalHeader
 *
 * @description Header component for the chat auto-assign conversation modal
 */
export const ChatAutoAssignConversationModalHeader = () => (
  <div className={styles.base}>
    <IconBadge
      icon={
        <MdOutlineAssignmentInd className="fill-red-600 min-h-6 min-w-6 rotate-y-180 size-6"/>
      }
    />
    
    <div className={styles.base__content}>
      <Text className="text-chromatic-inverted" level="xsmall" scheme="heading">
        ¿Asignarme la conversación?
      </Text>
    </div>
  </div>
);
