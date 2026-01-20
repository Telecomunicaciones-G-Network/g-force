'use client';

import type { ReactButton } from '../../../../types';

import { MdKeyboardArrowUp } from 'react-icons/md';

import { cn } from '../../../../utils/cn.util';

import styles from './collapsible-button.module.css';

/**
 * Collapsible Button component.
 *
 * @property {Object} props - Props for CollapsibleButton.
 * @property {string} [props.className] - Additional class names to apply to the button.
 * @property {React.Ref<HTMLButtonElement>} [props.ref] - Ref to access the button element.
 * @property {...any} [props.rest] - Other standard <button> props.
 */
export const CollapsibleButton = ({
  className = '',
  ref,
  ...rest
}: Readonly<ReactButton>) => (
  <button
    type="button"
    className={cn(
      styles.base,
      'border border-solid border-neutral-200 bg-chromatic h-6 rounded-b-none rounded-t-lg w-[21px]',
      className,
    )}
    ref={ref}
    {...rest}
  >
    <MdKeyboardArrowUp className="fill-chromatic-inverted h-6 min-h-6 min-w-[19px] w-[19px]" />
  </button>
);
