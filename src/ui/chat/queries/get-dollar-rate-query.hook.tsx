'use client';

import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { getDollarRateService } from '@module-chat/infrastructure/services/get-dollar-rate.service';
import type { GetDollarRateResponse } from '@module-chat/domain/interfaces';

export const useGetDollarRateQuery = (): UseQueryResult<
  GetDollarRateResponse,
  Error
> => {
  return useQuery({
    queryKey: ['getDollarRate'],
    queryFn: () => getDollarRateService(),
    retry: false,
    refetchOnWindowFocus: false,
  });
};
