import { LoginUsecase } from '../../application/usecases/login.usecase';

import { HttpAuthRepository } from '../repositories/http-auth.repository';

import { gnetworkApiClient } from '@ui-core/fetchers/gnetwork-api-client.fetcher';

export const httpAuthRepository = new HttpAuthRepository(gnetworkApiClient);

export const loginUsecase = new LoginUsecase(httpAuthRepository);
