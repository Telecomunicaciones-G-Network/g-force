import type { ReactChild } from '../../../../../../types/react-child.type';
import type { ModalCardProps } from '../../modal-card.props';

/**
 * @name ModalCardHeaderProps
 *
 * @extends Pick<ModalCardProps, 'title'>
 *
 * @property {ReactChild} icon - Icon for the modal card header
 * @property {string} title - Title for the modal card header
 * @property {string} label - Label for the modal card header
 */
export interface ModalCardHeaderProps extends Pick<ModalCardProps, 'title'> {
  icon?: ReactChild;
  label?: string;
}
