import type { Usecase } from "@module-core/interfaces";
import type { LoginRequest, LoginResponse } from "../domain/interfaces";

import { AuthRepository } from "../domain/repositories/auth.repository";

export class LoginUsecase
  implements Usecase<LoginRequest, LoginResponse | Error>
{
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(body: LoginRequest): Promise<LoginResponse | Error> {
    return await this.authRepository.login(body);
  }
}
