'use client';

import type { PaginationPreviousButtonProps } from './pagination-previous-button.props';

import { MdKeyboardArrowLeft } from 'react-icons/md';

import { cn } from '../../../../../../utils/cn.util';

import styles from './pagination-previous-button.module.css';

export const PaginationPreviousButton = ({
  canPrevious = true,
  onPrevious,
}: Readonly<PaginationPreviousButtonProps>) => (
  <button
    className={cn(
      styles.base,
      'px-2 py-2 inset-ring inset-ring-gray-300 rounded-l-md hover:bg-neutral-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:pointer-events-none',
    )}
    disabled={!canPrevious}
    onClick={onPrevious}
    type="button"
  >
    <span className="sr-only">Anterior</span>
    <MdKeyboardArrowLeft className="fill-neutral-500 size-6" />
  </button>
);
