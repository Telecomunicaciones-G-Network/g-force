import { Icon } from "@gnetwork-ui/components/atoms/icons/icon";

import styles from "./chat-list-empty.module.css";

export const ChatListEmpty = () => (
  <div className={styles.base}>
    <div className={styles.base__container}>
      <Icon name="message_empty" size={40} />
    </div>
  </div>
);
