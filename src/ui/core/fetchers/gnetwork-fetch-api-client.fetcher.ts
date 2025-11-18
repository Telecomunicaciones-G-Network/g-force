// CHECKED:

import { Fetch } from '@http-client/classes/fetch.class';
import { HttpClient } from '@http-client/classes/http-client.class';
import { Logger } from '@logger/classes/logger.class';

import { ENVS } from '@ui-core/envs/envs';

import { GNETWORK_HTTP_BASE_HEADERS } from '@ui-core/constants/gnetwork-http-base-headers.constant';

const logger = new Logger('GnetworkFetchApiClient');

const fetcher = new Fetch(
  {
    headers: GNETWORK_HTTP_BASE_HEADERS,
    parseResponseOnCamelCase: true,
  },
  logger,
);

export const gnetworkFetchApiClient = new HttpClient(
  ENVS.GNETWORK_API_BASE_URL,
  fetcher,
);
