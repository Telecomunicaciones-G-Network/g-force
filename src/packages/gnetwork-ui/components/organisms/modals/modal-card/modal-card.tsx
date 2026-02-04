import type { ModalCardProps } from './modal-card.props';

import { Modal } from '../modal';

import { cn } from '../../../../utils/cn.util';

import { ModalCardContent } from './components/modal-card-content';
import { ModalCardHeader } from './components/modal-card-header';

import styles from './modal-card.module.css';

/**
 * @name ModalCard
 *
 * @description Modal card component
 *
 * @property {string} className - Class name for the modal card
 * @property {ReactChild} headerIcon - Icon for the modal card header
 * @property {string} title - Title for the modal card header
 * @property {Omit<ModalProps, 'children'>} modalProps - Modal props
 * @property {React.ReactNode} children - Children of the modal card
 */
export const ModalCard = ({
  className = '',
  headerIcon,
  headerLabel = '',
  title = '',
  modalProps,
  children,
}: ModalCardProps) => {
  if (!children) {
    console.warn(
      'Prop children is missing on ModalCard component. This component can not be render appropiately.',
    );
  }

  return (
    <Modal className={className} {...modalProps}>
      <div className={cn('divide-y divide-neutral-200', styles.base)}>
        <ModalCardHeader icon={headerIcon} label={headerLabel} title={title} />
        <ModalCardContent>{children}</ModalCardContent>
      </div>
    </Modal>
  );
};
