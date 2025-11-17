import type { UserValues } from '@module-user/domain/interfaces';
import type { LoginResponse } from './login-response.interface';

export interface LoginTransformed extends Omit<LoginResponse, 'results'> {
  results?: {
    access: string;
    refresh: string;
    user: UserValues;
  };
}
