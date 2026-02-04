import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';
import { HttpCaches } from '@http-client/enums/http-caches.enum';

export interface ClientContract {
  contract_number: number;
  status_name: string;
  status_code: string;
  client_type: number;
  client_type_name: string;
  installation_date: string;
  plan: string;
  speed_plan: string;
  nap_box: string;
  address: string;
  balance: {
    usd: number;
    usd_to_bs: number;
    bs: number;
    bs_to_usd: number;
    total_in_usd: number;
    total_in_bs: number;
  };
}

export interface Client {
  fullName: string;
  id: string;
  contracts: ClientContract[];
}

interface SearchClientResult {
  id: number;
  first_name: string;
  name: string;
  last_name: string;
  email: string;
  identification: string;
  contracts: ClientContract[];
  // biome-ignore lint/suspicious/noExplicitAny: <fix this>
  tickets: any[];
}

interface SearchClientResponse {
  results: SearchClientResult[];
  success: boolean;
  status: number;
  count: number;
}

export const useClientSearchDropdown = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Direct API call to search_client endpoint (bypassing wrong mapper)
  const { data, isLoading } = useQuery<SearchClientResponse>({
    queryKey: ['client-search', debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch || debouncedSearch.length < 2) {
        return { results: [], success: true, status: 200, count: 0 };
      }

      const response = await gnetworkFetchApiClient.get<SearchClientResponse>(
        '/chat/clients',
        {
          cache: HttpCaches.NO_STORE,
          next: { revalidate: 0 },
          searchParams: {
            query: debouncedSearch,
            page_size: '20',
          },
        },
      );

      return response;
    },
    enabled: debouncedSearch.length >= 2,
  });

  // Map results from API response (search_client returns 'results' not 'contacts')
  const clients: Client[] =
    data?.results?.map((client) => ({
      fullName: `${client.name} ${client.last_name}`.trim(),
      id: String(client.id),
      contracts: client.contracts ?? [],
    })) ?? [];

  return {
    clients,
    isLoading,
    searchTerm,
    setSearchTerm,
  };
};
