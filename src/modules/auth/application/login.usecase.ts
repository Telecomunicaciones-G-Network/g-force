import type { Usecase } from '@module-core/interfaces';
import type { LoginRequest, LoginResponse } from '../domain/interfaces';

import { AuthRepository } from '../domain/repositories/auth.repository';

export class LoginUsecase implements Usecase<LoginRequest, LoginResponse> {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(data: LoginRequest): Promise<LoginResponse> {
    return await this.authRepository.login(data);
  }
}
