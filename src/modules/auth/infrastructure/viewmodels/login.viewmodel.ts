import type { UserValues } from '@module-user/domain/interfaces';

export interface LoginViewModel {
  refresh?: string;
  token?: string;
  user?: UserValues;
}
