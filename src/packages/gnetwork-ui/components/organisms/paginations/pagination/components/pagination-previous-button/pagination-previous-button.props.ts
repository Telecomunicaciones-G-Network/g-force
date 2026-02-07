import type { PaginationProps } from '../../pagination.props';

/**
 * @name PaginationPreviousButtonProps
 *
 * @description Props for the PaginationPreviousButton component.
 *
 * @extends Pick<PaginationProps, 'canPrevious' | 'onPrevious'>
 */
export type PaginationPreviousButtonProps = Pick<
  PaginationProps,
  'canPrevious' | 'onPrevious'
>;
