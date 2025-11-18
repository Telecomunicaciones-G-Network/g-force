// TODO: Debo implementar un error del dominio en la propagacion del error que se lanza en este mapper

import type { LoginResponse, LoginTransformed } from '../../domain/interfaces';

import { User } from '@module-user/domain/entities/user.entity';

export const loginMapper = (input: LoginResponse): LoginTransformed => {
  if (!input?.results) {
    throw new Error('Login response results are missing for login user mapper');
  }

  const user = new User({
    createdAt: input?.results?.user?.created_at,
    dateJoined: input?.results?.user?.date_joined,
    email: input?.results?.user?.email,
    firstname: input?.results?.user?.first_name,
    id: input?.results?.user?.id,
    isActive: input?.results?.user?.is_active,
    lastname: input?.results?.user?.last_name,
    permissions: input?.results?.user?.permissions,
    roles: input?.results?.user?.roles,
    updatedAt: input?.results?.user?.updated_at,
  });

  return {
    ...input,
    results: {
      access: input?.results?.access,
      refresh: input?.results?.refresh,
      user: user.toValues(),
    },
  };
};
