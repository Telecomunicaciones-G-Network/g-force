import { HttpCaches } from '@http-client/enums/http-caches.enum';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { TICKET_RESOURCES } from '../dictionaries/ticket-resources.dictionary';

interface IssueDTO {
  id: number;
  name: string;
}

interface IssuesResponseDTO {
  results: IssueDTO[];
  success: boolean;
  error?: string;
  status?: number;
}

export interface Issue {
  label: string;
  value: string;
}

export interface GetTicketsIssuesRequest {
  department: string;
}

export const getTicketsIssuesService = async (
  request: GetTicketsIssuesRequest,
): Promise<Issue[]> => {
  const response = await gnetworkFetchApiClient.get<IssuesResponseDTO>(
    TICKET_RESOURCES.GET_TICKETS_ISSUES(request.department),
    {
      cache: HttpCaches.NO_STORE,
      next: {
        revalidate: 0,
      },
    },
  );

  if (response?.error || !response?.results) {
    throw new BaseException({
      message: response?.error || 'Error al obtener los asuntos',
      status: response?.status,
    });
  }

  // Map backend response to SelectInput format
  return response.results.map((issue) => ({
    label: issue.name,
    value: String(issue.id),
  }));
};
