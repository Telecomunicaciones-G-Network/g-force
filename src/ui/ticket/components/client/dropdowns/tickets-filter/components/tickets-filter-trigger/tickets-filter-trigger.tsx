'use client';

import type { TicketsFilterTriggerProps } from './tickets-filter-trigger.props';

import { MdFilterList, MdKeyboardArrowDown } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './tickets-filter-trigger.module.css';

/**
 * @name TicketFilterTrigger
 *
 * @description This component is used to trigger the ticket filter dropdown.
 *
 * @property {TicketsFilterProps['filterStatus']} filterStatus - The filter status.
 * @property {boolean} isFilterOpen - Whether the filter is open.
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} rest - The rest of the props.
 */
export const TicketsFilterTrigger = ({
  filterStatus,
  isFilterOpen = false,
  ...rest
}: Readonly<TicketsFilterTriggerProps>) => (
  <button
    {...rest}
    className={cn(
      styles.base,
      'bg-chromatic border border-solid border-neutral-200 hover:bg-neutral-50',
    )}
    type="button"
  >
    <MdFilterList className="size-6" />
    <Text
      align="left"
      as="span"
      className="flex-1"
      level="small"
      scheme="label"
    >
      Filtrar por: <b>{filterStatus}</b>
    </Text>
    <MdKeyboardArrowDown
      className={cn(
        styles.base__caret,
        'fill-neutral-800 size-6',
        isFilterOpen && 'rotate-180',
      )}
    />
  </button>
);
