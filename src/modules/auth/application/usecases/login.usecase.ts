import type { Usecase } from '@module-core/interfaces';
import type { LoginRequest, LoginTransformed } from '../../domain/interfaces';
import type { AuthRepository } from '../../domain/repositories';

import { BaseError } from '@module-core/errors/base-error.error';

import { LoginError } from '../../domain/errors/login.error';
import { LoginNotAuthorizedError } from '../../domain/errors/login-not-authorized.error';

export class LoginUsecase implements Usecase<LoginRequest, LoginTransformed> {
  constructor(private readonly authRepository: AuthRepository) {}

  public async execute(request: LoginRequest): Promise<LoginTransformed> {
    return this.authRepository
      .login(request)
      .then((response) => response)
      .catch((err) => {
        const error = err as BaseError;

        if (error?.status === 401) {
          throw new LoginNotAuthorizedError();
        }

        throw new LoginError();
      });
  }
}
