'use client';

import type { SelectInputProps } from './select-input.props';

import * as SelectPrimitive from '@radix-ui/react-select';

import { SelectInputBody } from './components/select-input-body';
import { SelectInputTrigger } from './components/select-input-trigger';

import { cn } from '../../../../utils/cn.util';

import styles from './select-input.module.css';

const Select = SelectPrimitive.Root;

export const SelectInput = ({
  bordered = false,
  className = '',
  customMessageClassName = '',
  defaultValue,
  disabled = false,
  error = false,
  fullWidth = false,
  id,
  indicator = '',
  label = '',
  leftIcon,
  message = '',
  name,
  onValueChange,
  options = [],
  required = false,
  triggerClassName,
  triggerLabel = '',
  triggerWrapperClassName = '',
  value,
  ...rest
}: Readonly<SelectInputProps>) => {
  if (!options || !Array.isArray(options) || options?.length === 0) {
    console.warn(
      'Prop options is missing or is not valid on SelectInput component. This component can not be render appropiately.',
    );
  }

  return (
    <div
      className={cn(
        styles.base,
        fullWidth && 'w-full',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
      )}
    >
      {label && (
        <label
          className={cn(styles.base__label, 'text-chromatic-inverted')}
          htmlFor={id || name}
        >
          {label} {required ? ' *' : ''}
        </label>
      )}
      <Select
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      >
        <SelectInputTrigger
          className={triggerClassName}
          bordered={bordered}
          fullWidth={fullWidth}
          label={triggerLabel}
          leftIcon={leftIcon}
          triggerWrapperClassName={triggerWrapperClassName}
        />
        <SelectInputBody indicator={indicator} options={options} {...rest} />
      </Select>
      {message && (
        <span
          className={cn(
            styles.base__message,
            'text-chromatic-inverted',
            error && 'text-warning-200',
            customMessageClassName,
          )}
        >
          {message}
        </span>
      )}
    </div>
  );
};
