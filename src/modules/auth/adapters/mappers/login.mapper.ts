import type { LoginRequest, LoginResponse } from "../../domain/interfaces";

import { LoginDTO } from "../../infrastructure/dtos/login.dto";

import { LoginViewModel } from "../../infrastructure/viewmodels/login.viewmodel";

export class LoginMapper {
  static mapFrom(input: LoginResponse | Error): LoginViewModel | Error {
    if (input instanceof Error) {
      return input;
    }

    return {
      access: input?.results?.access,
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
