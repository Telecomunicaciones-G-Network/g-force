import { Input } from "@gnetwork-ui/components/molecules/inputs/input";

import styles from "./chat-list.module.css";

export const ChatList = () => (
  <section className={styles.base}>
    <div className={styles.base__header}>
      <Input label="Usuario" placeholder="Introduce tu nombre de usuario" />
    </div>
  </section>
);
