import { MdAdd } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { LoginFormBrand } from '../login-form-brand/login-form-brand';

import styles from './login-form-header.module.css';

/**
 * @name LoginFormHeader
 *
 * @description Login form header component.
 */
export const LoginFormHeader = () => (
  <div className={styles.base}>
    <LoginFormBrand />
    <div className={styles.base__slogan}>
      <MdAdd className="fill-red-600" size={28} />
      <Text
        as="label"
        align="center"
        className="text-neutral-800"
        level="small"
        scheme="paragraph"
      >
        Que Internet
      </Text>
    </div>
  </div>
);
