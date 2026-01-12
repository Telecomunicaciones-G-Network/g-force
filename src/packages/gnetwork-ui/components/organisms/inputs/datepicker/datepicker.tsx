'use client';

import type { DatePickerProps } from './datepicker.props';

import dayjs from 'dayjs';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Popover } from '../../../molecules/popovers/popover';
import { PopoverContent } from '../../../molecules/popovers/popover-content';
import { PopoverTrigger } from '../../../molecules/popovers/popover-trigger';

import { cn } from '../../../../utils/cn.util';

import { useDatePicker } from './datepicker.hook';

import styles from './datepicker.module.css';

import { Calendar } from '@ui/packages/gnetwork-ui/components/calendar';

export const DatePicker = ({
  containerClassName = '',
  disabled = false,
  error = false,
  fromDate,
  fullWidth = false,
  id,
  label = '',
  leftIcon,
  message = '',
  name = '',
  noErrorHandler = false,
  onChange,
  placeholder = 'Seleccione una fecha',
  required = false,
  toDate,
  triggerClassName = '',
  value,
}: Readonly<DatePickerProps>) => {
  const {
    date: internalDate,
    open,
    setDate: setInternalDate,
    setOpen,
  } = useDatePicker();

  // Use controlled value if provided, otherwise use internal state
  const date = value !== undefined ? value : internalDate;
  const setDate = (newDate: Date | undefined) => {
    if (onChange) {
      onChange(newDate);
    } else {
      setInternalDate(newDate);
    }
  };

  return (
    <div
      className={cn(
        styles.base,
        fullWidth && 'w-full',
        containerClassName,
        disabled ? 'opacity-50 cursor-not-allowed' : '',
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
      <Popover open={open} onOpenChange={setOpen} modal={false}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              styles.base__trigger,
              'bg-neutral-100 border border-neutral-200 py-2 px-4 rounded-sm',
              !date && 'text-muted-foreground',
              triggerClassName,
              error && 'border border-solid border-warning-200',
            )}
            id="date"
            type="button"
            disabled={disabled}
          >
            <div className={cn(styles.base__trigger_content, 'gap-[6px]')}>
              {leftIcon && leftIcon}
              <span className="font-normal text-sm">
                {date ? (
                  dayjs(date).format('D/M/YYYY')
                ) : (
                  <span className="text-input-placeholder">{placeholder}</span>
                )}
              </span>
            </div>
            <MdKeyboardArrowDown className="fill-neutral-500 min-h-6 min-w-6 size-6" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="center">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            fromDate={fromDate}
            toDate={toDate}
            startMonth={fromDate}
            endMonth={toDate}
            disabled={[
              ...(fromDate ? [{ before: fromDate }] : []),
              ...(toDate ? [{ after: toDate }] : []),
            ]}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {message && (
        <span
          className={cn(
            styles.base__message,
            'text-chromatic-inverted',
            noErrorHandler ? false : error && 'text-warning-200',
          )}
        >
          {message}
        </span>
      )}
    </div>
  );
};
