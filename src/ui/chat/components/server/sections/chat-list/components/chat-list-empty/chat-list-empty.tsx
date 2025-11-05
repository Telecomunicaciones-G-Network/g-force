import { Icon } from "@gnetwork-ui/components/atoms/icons/icon";
import { Text } from "@gnetwork-ui/components/atoms/texts/text";

import styles from "./chat-list-empty.module.css";

/**
 * ChatListEmpty componente.
 */
export const ChatListEmpty = () => (
  <div className={styles.base}>
    <div className={styles.base__container}>
      <Icon name="message_empty" size={40} />
      <div className="base__content">
        <Text
          as="h5"
          className="text-center text-neutral-900"
          level="xsmall"
          scheme="heading"
        >
          No hay conversaciones
        </Text>
        <Text
          as="p"
          className="text-center text-neutral-600"
          level="small"
          scheme="paragraph"
        >
          Aún no se ha iniciado ningún chat. Cuando recibas un mensaje,
          aparecerá aquí.
        </Text>
      </div>
    </div>
  </div>
);
