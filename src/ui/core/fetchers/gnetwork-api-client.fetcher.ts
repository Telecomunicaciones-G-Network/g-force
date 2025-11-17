import { Axios } from '@http-client/classes/axios.class';
import { HttpClient } from '@http-client/classes/http-client.class';
import { Logger } from '@logger/classes/logger.class';

import { ENVS } from '@ui-core/envs/envs';

const logger = new Logger('GnetworkApiClient');

const fetcher = new Axios(
  {
    headers: {
      Accept: 'application/json; version=1.0.0',
      'Content-Type': 'application/json',
    },
  },
  logger,
);

export const gnetworkApiClient = new HttpClient(
  ENVS.GNETWORK_API_BASE_URL,
  fetcher,
);
