import type { PaginationProps } from '../../pagination.props';

/**
 * @name PaginationBasicButtonsProps
 *
 * @description Props for the PaginationBasicButtons component.
 *
 * @extends Pick<PaginationProps, 'canPrevious' | 'canNext' | 'onPrevious' | 'onNext'>
 *
 * @property {boolean} canPrevious - Whether the previous button is enabled.
 * @property {boolean} canNext - Whether the next button is enabled.
 * @property {VoidFunction} onPrevious - The function to call when the previous button is clicked.
 * @property {VoidFunction} onNext - The function to call when the next button is clicked.
 */
export type PaginationBasicButtonsProps = Pick<
  PaginationProps,
  'canPrevious' | 'canNext' | 'onPrevious' | 'onNext'
>;
