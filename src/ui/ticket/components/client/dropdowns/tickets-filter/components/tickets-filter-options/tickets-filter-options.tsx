'use client';

import type { TicketFilterOption } from '@ui-ticket/interfaces';
import type { TicketsFilterOptionsProps } from './tickets-filter-options.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { TICKET_FILTER_OPTIONS } from '@ui-ticket/constants/ticket-filter-options.constant';

import styles from './tickets-filter-options.module.css';

/**
 * @name TicketsFilterOptions
 *
 * @description This component is used to filter tickets.
 *
 * @property {TicketsFilterProps['changeFilterStatus']} changeFilterStatus - The function to change the filter status.
 */
export const TicketsFilterOptions = ({
  changeFilterStatus,
}: Readonly<TicketsFilterOptionsProps>) => (
  <>
    {TICKET_FILTER_OPTIONS?.map((option: TicketFilterOption) => (
      <DropdownItem
        key={option?.value}
        className={cn(
          styles.base,
          'focus:[&_svg]:fill-chromatic! focus:**:text-chromatic! hover:[&_svg]:fill-chromatic! hover:**:text-chromatic!',
        )}
        onClick={() => changeFilterStatus?.(option?.value)}
      >
        <Text
          as="span"
          className="text-neutral-600"
          level="small"
          scheme="label"
        >
          {option?.label}
        </Text>
      </DropdownItem>
    ))}
  </>
);
