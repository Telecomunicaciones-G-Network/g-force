'use client';

import type { CollapsibleButtonProps } from './collapsible-button.props';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { cn } from '../../../../utils/cn.util';

import styles from './collapsible-button.module.css';

/**
 * @name CollapsibleButton
 *
 * @description This component is a collapsible button.
 *
 * @property {string} [props.className] - Additional class names to apply to the button.
 * @property {boolean} [props.isCollapsed] - Whether the button is collapsed.
 * @property {React.Ref<HTMLButtonElement>} [props.ref] - Ref to access the button element.
 */
export const CollapsibleButton = ({
  className = '',
  isCollapsed = false,
  ref,
  ...rest
}: Readonly<CollapsibleButtonProps>) => (
  <button
    className={cn(
      styles.base,
      'border border-solid border-neutral-200 bg-chromatic h-6 rounded-b-none rounded-t-lg w-[21px] disabled:opacity-50',
      className,
    )}
    ref={ref}
    type="button"
    {...rest}
  >
    {isCollapsed ? (
      <MdKeyboardArrowDown className="fill-chromatic-inverted h-6 min-h-6 min-w-[19px] w-[19px]" />
    ) : (
      <MdKeyboardArrowUp className="fill-chromatic-inverted h-6 min-h-6 min-w-[19px] w-[19px]" />
    )}
  </button>
);
