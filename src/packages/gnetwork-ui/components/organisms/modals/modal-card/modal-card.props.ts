import type { PropsWithChildren } from 'react';
import type { ReactChild } from '../../../../types/react-child.type';
import type { ModalProps } from '../modal/modal.props';

/**
 * @name ModalCardProps
 *
 * @extends PropsWithChildren
 *
 * @property {string} className - Class name for the modal card
 * @property {Omit<ModalProps, 'children'>} modalProps - Modal props
 */
export interface ModalCardProps extends PropsWithChildren {
  className?: string;
  headerIcon?: ReactChild;
  headerLabel?: string;
  modalProps: Omit<ModalProps, 'children'>;
  title?: string;
}
