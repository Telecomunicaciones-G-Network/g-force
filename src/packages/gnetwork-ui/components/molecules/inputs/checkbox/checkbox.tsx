'use client';

import type { CheckboxProps } from './checkbox.props';

import { forwardRef } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './checkbox.module.css';

/**
 * @name Checkbox
 *
 * @description A checkbox component for forms.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      className,
      defaultChecked,
      disabled = false,
      id,
      label,
      name,
      onChange,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={cn(styles.checkbox, className)}>
        <input
          checked={checked}
          className={styles.checkbox__input}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          ref={ref}
          type="checkbox"
          {...rest}
        />
        {label && (
          <label className={styles.checkbox__label} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
