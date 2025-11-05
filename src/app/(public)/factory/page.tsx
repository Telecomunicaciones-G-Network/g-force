import Image from "next/image";

import { Avatar } from "@gnetwork-ui/components/molecules/avatars/avatar";

import styles from "./page.module.css";

/**
 * Factory page component.
 */
export default function FactoryPage() {
  return (
    <div className={styles.base}>
      <Avatar
        image={{
          customImageComponent: (
            <Image
              alt="Avatar"
              className="responsive-image-cover"
              fill
              priority
              sizes="100%"
              src="/images/chat_user_avatar_1.png"
            />
          ),
        }}
      />
    </div>
  );
}
