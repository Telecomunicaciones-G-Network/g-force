'use client';

import type { ButtonGroupButton, ButtonGroupProps } from './button-group.props';

import { Fragment } from 'react';

import { Button } from '../../../molecules/buttons/button';
import { Dropdown } from '../../dropdowns/dropdown';

import { cn } from '../../../../utils/cn.util';

import styles from './button-group.module.css';

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
      {buttons?.map(
        ({
          id,
          dropdownProps,
          isActive = true,
          isDropdown = false,
          ...rest
        }: ButtonGroupButton) => (
          <Fragment key={id}>
            {isActive &&
              (isDropdown ? (
                <Dropdown
                  triggerComponent={<Button {...rest} />}
                  {...dropdownProps}
                />
              ) : (
                <Button {...rest} />
              ))}
          </Fragment>
        ),
      )}
    </div>
  );
};
