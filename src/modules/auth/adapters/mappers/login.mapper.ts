import type { LoginRequest, LoginResponse } from '../../domain/interfaces';

import { LoginDTO } from '../../infrastructure/dtos/login.dto';

import { LoginViewModel } from '../../infrastructure/viewmodels/login.viewmodel';

export class LoginMapper {
  static mapFrom(input: LoginResponse): LoginViewModel {
    return {
      access: input?.results?.access,
      error: input?.error,
      refresh: input?.results?.refresh,
      user: input?.results?.user,
    };
  }

  static mapTo(output: LoginDTO): LoginRequest {
    return {
      email: output?.email,
      password: output?.password,
    };
  }
}
