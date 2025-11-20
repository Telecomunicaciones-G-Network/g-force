import { LoginUsecase } from '../../application/usecases/login.usecase';

import { HttpAuthRepository } from '../repositories/http-auth.repository';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

export const httpAuthRepository = new HttpAuthRepository(
  gnetworkAxiosApiClient,
);

export const loginUsecase = new LoginUsecase(httpAuthRepository);
