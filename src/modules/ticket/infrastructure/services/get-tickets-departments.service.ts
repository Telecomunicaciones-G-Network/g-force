import { HttpCaches } from '@http-client/enums/http-caches.enum';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { TICKET_RESOURCES } from '../dictionaries/ticket-resources.dictionary';

interface DepartmentDTO {
  id: string;
  name: string;
}

interface DepartmentsResponseDTO {
  results: DepartmentDTO[];
  success: boolean;
  error?: string;
  status?: number;
}

export interface Department {
  label: string;
  value: string;
}

export const getTicketsDepartmentsService = async (): Promise<Department[]> => {
  const response = await gnetworkFetchApiClient.get<DepartmentsResponseDTO>(
    TICKET_RESOURCES.GET_TICKETS_DEPARTMENTS,
    {
      cache: HttpCaches.NO_STORE,
      next: {
        revalidate: 0,
      },
    },
  );

  if (response?.error || !response?.results) {
    throw new BaseException({
      message: response?.error || 'Error al obtener los departamentos',
      status: response?.status,
    });
  }

  // Map backend response to SelectInput format
  return response.results.map((dept) => ({
    label: dept.name,
    value: dept.id,
  }));
};
