// TODO: Debo revisar mas a fondo este archivo

import { HttpAuthRepository } from "@module-auth/infrastructure/repositories/http-auth.repository";

import { gnetworkApiClient } from "@ui-core/fetchers/gnetwork-api-client.fetcher";

export const authRepository = new HttpAuthRepository(gnetworkApiClient);
