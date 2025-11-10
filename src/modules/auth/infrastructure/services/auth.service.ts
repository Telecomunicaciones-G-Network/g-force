import { AuthRepository } from '../../domain/repositories/auth.repository';

import { LoginUsecase } from '../../application/login.usecase';

import { LoginMapper } from '../../adapters/mappers/login.mapper';

import { LoginDTO } from '../dtos/login.dto';

import { LoginViewModel } from '../viewmodels/login.viewmodel';

export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  private readonly loginUsecase = new LoginUsecase(this.authRepository);

  public async login(data: LoginDTO): Promise<LoginViewModel> {
    const body = LoginMapper.mapTo(data);

    const response = await this.loginUsecase.execute(body);

    return LoginMapper.mapFrom(response);
  }
}
