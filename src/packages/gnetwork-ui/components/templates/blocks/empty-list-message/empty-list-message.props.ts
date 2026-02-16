import type { ReactChild, ReactDiv } from '../../../../types';

/**
 * @name EmptyListMessageProps
 *
 * @description Props for the EmptyListMessage component
 *
 * @property {string} explanation - Explanation of the empty list message
 * @property {ReactChild} icon - Icon to display in the empty list message
 * @property {string} message - Message to display in the empty list message
 */
export interface EmptyListMessageProps extends ReactDiv {
  explanation?: string;
  icon?: ReactChild;
  message?: string;
}
