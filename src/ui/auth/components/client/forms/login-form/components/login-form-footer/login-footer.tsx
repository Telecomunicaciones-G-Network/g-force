import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import styles from './login-footer.module.css';

/**
 * @name LoginFormFooter
 *
 * @description Login form footer component.
 */
export const LoginFormFooter = () => (
  <div className={styles.base}>
    <div className={styles.base__separator}>
      <Separator />
    </div>
    <Text
      as="label"
      align="center"
      className="text-neutral-500"
      level="xsmall"
      scheme="label"
    >
      G-NETWORK - J500564015
    </Text>
  </div>
);
