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
  className,
  bordered = false,
  label = 'Seleccione una opción',
  leftIcon,
  fullWidth = false,
  ref,
  triggerWrapperClassName = '',
  ...rest
}: Readonly<SelectInputTriggerProps>) => {
  const classes = getSelectInputTriggerClassNames({
    className,
    bordered,
    fullWidth,
  });
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
          !bordered && 'min-h-[38px] py-0',
          triggerWrapperClassName,
        )}
      >
        {leftIcon && leftIcon}
        <SelectValue
          className="select-value font-medium text-chromatic-inverted text-xs tracking-0 [data-placeholder]:text-input-placeholder!"
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
