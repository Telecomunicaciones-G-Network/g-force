// TODO: Debo implementar un error del dominio en la propagacion del error que se lanza en este mapper

import type { LoginResponse, LoginTransformed } from '../../domain/interfaces';

import { User } from '@module-user/domain/entities/user.entity';

export const loginMapper = (input: LoginResponse): LoginTransformed => {
  if (!input?.results) {
    throw new Error('Login response results are missing for login user mapper');
  }

  const user = new User(
    input?.results?.user?.id,
    input?.results?.user?.created_at,
    input?.results?.user?.date_joined,
    input?.results?.user?.email,
    input?.results?.user?.first_name,
    input?.results?.user?.is_active,
    input?.results?.user?.last_name,
    input?.results?.user?.permissions,
    input?.results?.user?.roles,
    input?.results?.user?.updated_at,
  );

  return {
    ...input,
    results: {
      access: input?.results?.access,
      refresh: input?.results?.refresh,
      user: user.toValues(),
    },
  };
};
