import { MdOutlineMessage } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { IconBadge } from '@gnetwork-ui/components/molecules/badges/icon-badge';

import styles from './chat-whatsapp-templates-modal-header.module.css';

/**
 * @name ChatWhatsappTemplatesModalHeader
 *
 * @description Header for "Nuevo chat de WhatsApp Business API" modal.
 */
export const ChatWhatsappTemplatesModalHeader = () => (
  <div className={styles.base}>
    <IconBadge
      icon={
        <MdOutlineMessage className="fill-red-700 min-h-6 min-w-6 size-6" />
      }
    />
    <div className={styles.base__content}>
      <Text className="text-chromatic-inverted" level="xsmall" scheme="heading">
        Nuevo chat de WhatsApp Business API
      </Text>
    </div>
  </div>
);
