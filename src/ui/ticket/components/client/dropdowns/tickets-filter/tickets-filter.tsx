'use client';

import type { TicketsFilterProps } from './tickets-filter.props';

import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';

import { TicketsFilterOptions } from './components/tickets-filter-options';
import { TicketsFilterTrigger } from './components/tickets-filter-trigger';

import { useTicketsFilter } from './tickets-filter.hook';

import styles from './tickets-filter.module.css';

/**
 * @name TicketsFilter
 *
 * @description This component is used to filter tickets.
 *
 * @property {TicketsFilterProps['changeFilterStatus']} changeFilterStatus - The function to change the filter status.
 * @property {TicketsFilterProps['filterStatus']} filterStatus - The filter status.
 */
export const TicketsFilter = ({
  changeFilterStatus,
  filterStatus,
}: Readonly<TicketsFilterProps>) => {
  const { isFilterOpen, setIsFilterOpen } = useTicketsFilter();

  return (
    <div className={styles.base}>
      <Dropdown
        open={isFilterOpen}
        onOpenChange={setIsFilterOpen}
        triggerComponent={
          <TicketsFilterTrigger
            filterStatus={filterStatus}
            isFilterOpen={isFilterOpen}
          />
        }
      >
        <TicketsFilterOptions changeFilterStatus={changeFilterStatus} />
      </Dropdown>
    </div>
  );
};
