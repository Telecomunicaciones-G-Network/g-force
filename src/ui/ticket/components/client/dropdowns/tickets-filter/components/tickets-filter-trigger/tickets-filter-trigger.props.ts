import type { TicketsFilterProps } from '../../tickets-filter.props';

/**
 * @name TicketsFilterTriggerProps
 *
 * @property {TicketsFilterProps['filterStatus']} filterStatus - The filter status.
 * @property {boolean} isFilterOpen - Whether the filter is open.
 */
export interface TicketsFilterTriggerProps
  extends Pick<TicketsFilterProps, 'filterStatus'> {
  isFilterOpen?: boolean;
}
