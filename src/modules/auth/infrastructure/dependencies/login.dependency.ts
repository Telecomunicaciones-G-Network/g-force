import { LoginUsecase } from '../../application/usecases/login.usecase';

import { HttpAuthRepository } from '../repositories/http-auth.repository';

export const httpAuthRepository = new HttpAuthRepository();

export const loginUsecase = new LoginUsecase(httpAuthRepository);
