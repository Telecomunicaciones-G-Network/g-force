import { AuthRepository } from "../../domain/repositories/auth.repository";

import { LoginUsecase } from "../../application/login.usecase";

import { LoginMapper } from "../../adapters/mappers/login.mapper";

export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  private readonly loginUsecase = new LoginUsecase(this.authRepository);

  public async login(data: { email: string; password: string }): Promise<void> {
    const body = LoginMapper.mapTo(data);
    const response = await this.loginUsecase.execute(body);

    console.log(response);
  }
}
