import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { searchClientService } from '@module-chat/infrastructure/services/search-client.service';
import { getContactsService } from '@module-chat/infrastructure/services/get-contacts.service';
interface Client {
  fullName: string;
  id: string;
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

  // Real endpoint integration with search_client
  const { data, isLoading } = useQuery({
    queryKey: ['client-search', debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch || debouncedSearch.length < 2) {
        return { contacts: [] };
      }
      // return await searchClientService({ search: debouncedSearch, limit: '10' });
      return await getContactsService({ search: debouncedSearch, limit: '10' });
    },
    enabled: debouncedSearch.length >= 2,
  });

  // Map contacts from API response
  const clients: Client[] =
    data?.contacts?.map((contact: any) => ({
      fullName: contact.name,
      id: contact.id,
    })) ?? [];

  return {
    clients,
    isLoading,
    searchTerm,
    setSearchTerm,
  };
};
