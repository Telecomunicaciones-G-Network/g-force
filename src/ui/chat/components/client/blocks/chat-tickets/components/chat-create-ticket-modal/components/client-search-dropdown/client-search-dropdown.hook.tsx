import { useState, useCallback } from 'react';
// import { useQuery } from '@tanstack/react-query';

// import { getContactsService } from '@module-chat/infrastructure/services/get-contacts.service';

interface Client {
  fullName: string;
  id: string;
}

// Mock data para pruebas de diseño
const MOCK_CLIENTS: Client[] = [
  { id: '1', fullName: 'Adan Ramon, Perdomo Merchan' },
  { id: '2', fullName: 'Adelson Ramon, Velazquez Vazquez' },
  { id: '3', fullName: 'Adelson Ramon, Rengifo Gonzalez' },
  { id: '4', fullName: 'Adrian Ramon, Muchacho Blanco' },
  { id: '5', fullName: 'Adriana Mireya, Castillo Ramon' },
  { id: '6', fullName: 'Alberto Ramirez, Gonzalez Martinez' },
  { id: '7', fullName: 'Ana Maria, Rodriguez Perez' },
  { id: '8', fullName: 'Carlos Eduardo, Sanchez Lopez' },
  { id: '9', fullName: 'Diana Patricia, Torres Gomez' },
  { id: '10', fullName: 'Fernando Jose, Morales Castro' },
];

export const useClientSearchDropdown = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // TODO: Descomentar cuando se defina la integración con el endpoint
  // const { data, isLoading } = useQuery({
  //   queryKey: ['client-search', debouncedSearch],
  //   queryFn: async () => {
  //     if (!debouncedSearch || debouncedSearch.length < 2) {
  //       return { contacts: [] };
  //     }
  //     return await getContactsService({ search: debouncedSearch, limit: '10' });
  //   },
  //   enabled: debouncedSearch.length >= 2,
  // });

  const handleSearch = useCallback((value: string) => {
    const timer = setTimeout(() => {
      setDebouncedSearch(value);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Mock: Filtrar clientes por término de búsqueda
  const clients: Client[] = debouncedSearch.length >= 2
    ? MOCK_CLIENTS.filter((client) =>
        client.fullName.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    : [];

  // TODO: Descomentar cuando se use el endpoint real
  // const clients: Client[] =
  //   data?.contacts?.map((contact: any) => ({
  //     fullName: contact.name,
  //     id: contact.id,
  //   })) ?? [];

  const isLoading = false; // Mock: no loading state

  return {
    clients,
    handleSearch,
    isLoading,
    searchTerm,
    setSearchTerm,
  };
};
