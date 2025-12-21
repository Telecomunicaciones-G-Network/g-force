'use client';

import type { SelectInputTriggerProps } from './select-input-trigger.props';

import * as SelectPrimitive from '@radix-ui/react-select';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { getSelectInputTriggerClassNames } from './select-input-trigger.style';

import { cn } from '../../../../../../utils/cn.util';

import { useSelectInputTrigger } from './select-input-trigger.hook';

import styles from './select-input-trigger.module.css';

const SelectValue = SelectPrimitive.Value;

export const SelectInputTrigger = ({
  className = '',
  label = 'Seleccione una opción',
  fullWidth = false,
  ref,
  ...rest
}: Readonly<SelectInputTriggerProps>) => {
  const classes = getSelectInputTriggerClassNames({ className, fullWidth });
  const { isOpen, triggerRef } = useSelectInputTrigger();

  return (
    <SelectPrimitive.Trigger
      className={classes}
      ref={(node) => {
        triggerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      {...rest}
    >
      <div
        className={cn(
          styles.base__container,
          'bg-neutral-100 py-2 px-4 rounded-sm',
        )}
      >
        <SelectValue
          className="font-medium text-chromatic-inverted text-sm tracking-0"
          placeholder={label}
        />
        <SelectPrimitive.Icon asChild>
          {isOpen ? (
            <MdKeyboardArrowUp className="fill-neutral-500 min-h-6 min-w-6 size-6" />
          ) : (
            <MdKeyboardArrowDown className="fill-neutral-500 min-h-6 min-w-6 size-6" />
          )}
        </SelectPrimitive.Icon>
      </div>
    </SelectPrimitive.Trigger>
  );
};
