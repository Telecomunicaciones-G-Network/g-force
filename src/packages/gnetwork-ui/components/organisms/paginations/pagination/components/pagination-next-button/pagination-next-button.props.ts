import type { PaginationProps } from '../../pagination.props';

/**
 * @name PaginationNextButtonProps
 *
 * @description Props for the PaginationNextButton component.
 *
 * @extends Pick<PaginationProps, 'canNext' | 'onNext'>
 */
export type PaginationNextButtonProps = Pick<
  PaginationProps,
  'canNext' | 'onNext'
>;
