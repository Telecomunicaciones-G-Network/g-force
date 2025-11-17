import type { LoginTransformed } from '../../domain/interfaces';
import type { LoginViewModel } from '../viewmodels';

export const LoginPresenter = (response: LoginTransformed): LoginViewModel => {
  return {
    refresh: response?.results?.refresh,
    token: response?.results?.access,
    user: response?.results?.user,
  };
};
