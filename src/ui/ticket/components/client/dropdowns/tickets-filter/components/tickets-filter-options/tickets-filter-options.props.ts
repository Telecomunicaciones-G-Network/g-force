import type { TicketsFilterProps } from '../../tickets-filter.props';

/**
 * @name TicketsFilterOptionsProps
 *
 * @property {TicketsFilterProps['changeFilterStatus']} changeFilterStatus - The function to change the filter status.
 */
export type TicketsFilterOptionsProps = Pick<
  TicketsFilterProps,
  'changeFilterStatus'
>;
