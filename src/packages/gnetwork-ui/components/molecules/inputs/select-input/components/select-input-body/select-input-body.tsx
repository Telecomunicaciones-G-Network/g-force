'use client';

import type { SelectInputBodyProps } from './select-input-body.props';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '../../../../../../utils/cn.util';

import { SelectInputOptions } from '../select-input-options';

import styles from './select-input-body.module.css';

export const SelectInputBody = ({
  className = '',
  indicator = '',
  options = [],
  position = 'popper',
  sideOffset = 8,
  ref,
  ...rest
}: Readonly<SelectInputBodyProps>) => (
  <>
    {options && Array.isArray(options) && options?.length > 0 && (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={cn(
            styles.base,
            'border border-solid border-neutral-200 bg-chromatic min-w-[8rem] max-h-[330px] overflow-y-auto rounded-md shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className,
          )}
          position={position}
          ref={ref}
          sideOffset={sideOffset}
          {...rest}
        >
          <SelectPrimitive.Viewport
            className={cn(
              'p-1.5',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
            )}
          >
            <SelectInputOptions indicator={indicator} options={options} />
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )}
  </>
);
