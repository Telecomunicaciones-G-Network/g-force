import type { LoginRequest, LoginResponse } from '../../domain/interfaces';

import { LoginDTO } from '../../infrastructure/dtos/login.dto';

export class LoginMapper {
  static mapTo(output: LoginDTO): LoginRequest {
    return {
      email: output?.email,
      password: output?.password,
    };
  }

  static mapFrom(input: LoginResponse): LoginResponse {
    return {
      ...input,
    };
  }
}
