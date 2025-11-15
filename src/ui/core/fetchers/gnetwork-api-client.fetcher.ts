import { Axios } from '@http-client/classes/axios.class';
import { HttpClient } from '@http-client/classes/http-client.class';
import { Logger } from '@logger/classes/logger.class';

import { ENVS } from '@ui-core/envs/envs';

const logger = new Logger('GnetworkApiClient');

const fetcher = new Axios(
  {
    baseURL: ENVS.GNETWORK_API_BASE_URL,
    headers: {
      Accept: 'application/json; version=1.0.0',
      'Content-Type': 'application/json',
    },
  },
  process.env.NODE_ENV === 'development' ? logger : undefined,
);

export const gnetworkApiClient = new HttpClient(
  ENVS.GNETWORK_API_BASE_URL,
  fetcher,
);
