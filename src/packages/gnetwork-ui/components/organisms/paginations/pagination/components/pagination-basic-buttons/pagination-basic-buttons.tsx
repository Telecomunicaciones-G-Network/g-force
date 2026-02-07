'use client';

import type { PaginationBasicButtonsProps } from './paginaation-basic-buttons.props';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Button } from '../../../../../molecules/buttons/button';

import { cn } from '../../../../../../utils/cn.util';

import styles from './pagination-basic-buttons.module.css';

/**
 * @name PaginationBasicButtons
 *
 * @description Pagination basic buttons component.
 *
 * @extends {PaginationBasicButtonsProps}
 *
 * @property {boolean} canPrevious - Whether the previous button is enabled.
 * @property {boolean} canNext - Whether the next button is enabled.
 * @property {() => void} onPrevious - The function to call when the previous button is clicked.
 * @property {() => void} onNext - The function to call when the next button is clicked.
 */
export const PaginationBasicButtons = ({
  canPrevious = true,
  canNext = true,
  onPrevious,
  onNext,
}: Readonly<PaginationBasicButtonsProps>) => (
  <div className={cn(styles.base, 'flex sm:hidden gap-2')}>
    <Button
      className={cn(
        styles.base_button,
        'border border-neutral-200 px-4 py-2 rounded-md text-xs',
      )}
      disabled={!canPrevious}
      onClick={onPrevious}
      type="button"
    >
      <MdKeyboardArrowLeft className="fill-neutral-500 size-6" />
    </Button>
    <Button
      className={cn(
        styles.base_button,
        'border border-neutral-200 px-4 py-2 rounded-md text-xs',
      )}
      disabled={!canNext}
      onClick={onNext}
      type="button"
    >
      <MdKeyboardArrowRight className="fill-neutral-500 size-6" />
    </Button>
  </div>
);
