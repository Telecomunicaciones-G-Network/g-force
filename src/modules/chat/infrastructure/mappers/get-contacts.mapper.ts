// TODO: Debo implementar un error del dominio en la propagacion del error que se lanza en este mapper

import { ForbiddenException } from '@module-core/errors/forbidden.error';

import type {
  GetContactsMappedResponse,
  GetContactsResponse,
} from '../../domain/interfaces';

import { snakeToCamelCase } from '@stringify/utils/snake-to-camelcase.util';

export const getContactsMapper = (
  input: GetContactsResponse,
): GetContactsMappedResponse => {
  if (!input?.results) {
    throw new ForbiddenException();
  }

  return snakeToCamelCase<GetContactsResponse>(
    input,
  ) as GetContactsMappedResponse;
};
