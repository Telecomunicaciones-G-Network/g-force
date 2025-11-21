'use client';

import type { ButtonGroupButton, ButtonGroupProps } from './button-group.props';

import { Fragment } from 'react';

import { Button } from '../../../molecules/buttons/button';

import { cn } from '../../../../utils/cn.util';

import styles from './button-group.module.css';

/**
 * ButtonGroup component
 *
 * Renders a flexible group of buttons in a horizontal layout.
 * Each button can be conditionally rendered using the `isActive` flag.
 *
 * @param {ButtonGroupProps} props - The props for the ButtonGroup component
 * @param {ButtonGroupButton[]} props.buttons - Array of button configuration objects (required)
 * @param {string} [props.className] - Additional class names for the group container
 * @param {React.Ref<HTMLDivElement>} [props.ref] - Reference to the group container element
 * @param {object} [props.rest] - Additional props spread to the container div
 */
export const ButtonGroup = ({
  className = '',
  buttons,
  ref,
  ...rest
}: Readonly<ButtonGroupProps>) => {
  if (!buttons) {
    console.warn(
      'Prop buttons is missing on ButtonGroup component. This component can not be render appropiately.',
    );
  }

  return (
    <div
      className={cn(styles.base, 'gap-4 justify-between', className)}
      ref={ref}
      {...rest}
    >
      {buttons?.map(({ id, isActive = true, ...rest }: ButtonGroupButton) => (
        <Fragment key={id}>{isActive && <Button {...rest} />}</Fragment>
      ))}
    </div>
  );
};
