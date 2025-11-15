import { HttpAuthRepository } from '@module-auth/infrastructure/repositories/http-auth.repository';

import { gnetworkApiClient } from '@ui-core/fetchers/gnetwork-api-client.fetcher';

export const httpAuthRepository = new HttpAuthRepository(gnetworkApiClient);
