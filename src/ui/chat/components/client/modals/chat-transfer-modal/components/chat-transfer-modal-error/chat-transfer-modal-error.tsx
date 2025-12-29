import { MdMoodBad } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import styles from './chat-transfer-modal-error.module.css';

export const ChatTransferModalError = () => (
  <div className={styles.base}>
    <MdMoodBad className="min-h-10 min-w-10 size-10" />
    <Text
      as="h5"
      className="text-center text-neutral-900"
      level="medium"
      scheme="label"
    >
      Ha ocurrido un error al obtener los equipos disponibles
    </Text>
  </div>
);
