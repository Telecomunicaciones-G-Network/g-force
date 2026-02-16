import type { ModalCardHeaderProps } from './modal-card-header.props';

import { MdAppRegistration } from 'react-icons/md';

import { Text } from '../../../../../atoms/texts/text';
import { IconBadge } from '../../../../../molecules/badges/icon-badge';

import { cn } from '../../../../../../utils/cn.util';

import styles from './modal-card-header.module.css';

/**
 * @name ModalCardHeader
 *
 * @description Modal card header component
 *
 * @property {ReactChild} icon - Icon for the modal card header
 * @property {string} label - Label for the modal card header
 * @property {string} title - Title for the modal card header
 */
export const ModalCardHeader = ({
  icon,
  label = '',
  title = '',
}: Readonly<ModalCardHeaderProps>) => (
  <div className={cn(styles.base, 'gap-4 p-4')}>
    <IconBadge
      icon={
        icon ?? (
          <MdAppRegistration className="fill-red-600 min-h-6 min-w-6 size-6" />
        )
      }
    />
    <div className={styles.base__content}>
      {title && (
        <Text
          className="text-chromatic-inverted"
          level="xsmall"
          scheme="heading"
        >
          {title}
        </Text>
      )}
      {label && (
        <Text
          className="text-neutral-700 text-wrap!"
          level="small"
          scheme="paragraph"
        >
          {label}
        </Text>
      )}
    </div>
  </div>
);
