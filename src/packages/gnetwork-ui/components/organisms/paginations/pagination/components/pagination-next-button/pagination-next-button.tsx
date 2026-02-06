'use client';

import type { PaginationNextButtonProps } from './pagination-next-button.props';

import { MdKeyboardArrowRight } from 'react-icons/md';

import { cn } from '../../../../../../utils/cn.util';

import styles from './pagination-next-button.module.css';

/**
 * @name PaginationNextButton
 *
 * @description Pagination next button component.
 *
 * @extends {PaginationNextButtonProps}
 *
 * @property {boolean} canNext - Whether the next page is available.
 * @property {() => void} onNext - The function to call when the next page is clicked.
 */
export const PaginationNextButton = ({
  canNext = true,
  onNext,
}: Readonly<PaginationNextButtonProps>) => (
  <button
    className={cn(
      styles.base,
      'px-2 py-2 rounded-r-md inset-ring inset-ring-gray-300 hover:bg-neutral-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:pointer-events-none',
    )}
    disabled={!canNext}
    onClick={onNext}
    type="button"
  >
    <span className="sr-only">Siguiente</span>
    <MdKeyboardArrowRight className="fill-neutral-500 size-6" />
  </button>
);
