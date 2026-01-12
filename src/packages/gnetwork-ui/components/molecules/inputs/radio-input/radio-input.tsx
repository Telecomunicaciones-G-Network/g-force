import type { RadioInputProps } from './radio-input.props';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '../../../../utils/cn.util';

import styles from './radio-input.module.css';

export const RadioInput = ({
  className = '',
  containerClassName = '',
  id,
  label = '',
  ref,
  ...rest
}: Readonly<RadioInputProps>) => {
  return (
    <div
      className={cn(styles.base, 'gap-3 justify-between', containerClassName)}
    >
      {label && (
        <label className="font-normal text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          styles.base__radio,
          'aspect-square border border-chromatic-inverted h-4 w-4 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...rest}
      >
        <RadioGroupPrimitive.Indicator className={styles.base__indicator}>
          <div
            className={cn(
              styles.base__indicator_inner,
              'bg-red-500 h-2.5 w-2.5',
            )}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    </div>
  );
};
