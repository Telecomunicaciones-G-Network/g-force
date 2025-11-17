import type { LoginDTO } from '../dtos/login.dto';
import type { LoginViewModel } from '../viewmodels';

import { loginAdapter } from '../adapters/login.adapter';

import { loginUsecase } from '../dependencies/login.dependency';

import { LoginPresenter } from '../presenters/login.presenter';

export const Login = async (command: LoginDTO): Promise<LoginViewModel> => {
  const request = loginAdapter(command);

  const response = await loginUsecase.execute(request);

  return LoginPresenter(response);
};
