'use client';

import { AxiosError } from 'axios';

import { useDashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout/dashboard-layout.hook';

import { useQuery } from '@tanstack/react-query';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

interface HeadquarterResponse {
  results: {
    id: string;
    name: string;
  };
  status: number;
  success: boolean;
}

const getHeadquarter = (): Promise<HeadquarterResponse> => {
  return gnetworkAxiosApiClient
    .get<HeadquarterResponse>('/chat/organization/employee_headquarters')
    .then((response) => {
      return response as HeadquarterResponse;
    })
    .catch((error: AxiosError) => {
      console.error(error);

      throw error;
    });
};

export const useSidebarBranch = () => {
  const { collapsed } = useDashboardLayout();

  const { data: headquarter, isLoading } = useQuery<HeadquarterResponse>({
    queryKey: ['dashboard-layout'],
    queryFn: () => getHeadquarter(),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    isSidebarCollapsed: collapsed,
    headquarter: headquarter?.results?.name,
    isLoading,
  };
};
