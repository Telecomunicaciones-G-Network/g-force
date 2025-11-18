import { Axios } from '@http-client/classes/axios.class';
import { HttpClient } from '@http-client/classes/http-client.class';
import { Logger } from '@logger/classes/logger.class';

import { ENVS } from '@ui-core/envs/envs';

import { GNETWORK_HTTP_BASE_HEADERS } from '@ui-core/constants/gnetwork-http-base-headers.constant';

const logger = new Logger('GnetworkApiClient');

const fetcher = new Axios(
  {
    headers: GNETWORK_HTTP_BASE_HEADERS,
  },
  logger,
);

export const gnetworkApiClient = new HttpClient(
  ENVS.GNETWORK_API_BASE_URL,
  fetcher,
);
