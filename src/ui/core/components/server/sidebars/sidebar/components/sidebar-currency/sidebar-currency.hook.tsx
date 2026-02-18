import { useMemo } from 'react';

import { useDashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout/dashboard-layout.hook';

import { useGetDollarRateQuery } from '@ui-chat/queries/get-dollar-rate-query.hook';

import type { SidebarCurrencyRate } from './interfaces';

export const useSidebarCurrency = () => {
  const { collapsed } = useDashboardLayout();

  const { data } = useGetDollarRateQuery();

  const currencyRates: SidebarCurrencyRate[] = useMemo(() => {
    if (!data?.success || !data?.results) return [];

    const { rate_today, rate_first_of_the_month } = data.results;

    const formatDate = (dateString: string) => {
      if (!dateString) return '';
      const [year, month, day] = dateString.split('-');
      return `${day}-${month}-${year}`;
    };

    const formatRate = (rateString: string) => {
      if (!rateString) return '';
      return rateString.replace('.', ',');
    };

    const firstOfMonthRate: SidebarCurrencyRate = {
      id: 'first_of_month',
      date: formatDate(rate_first_of_the_month.date),
      rate: formatRate(rate_first_of_the_month.rate),
    };

    const todayRate: SidebarCurrencyRate = {
      id: 'today',
      date: formatDate(rate_today.date),
      rate: formatRate(rate_today.rate),
    };

    return [firstOfMonthRate, todayRate];
  }, [data]);

  return {
    isSidebarCollapsed: collapsed,
    currencyRates,
  };
};
