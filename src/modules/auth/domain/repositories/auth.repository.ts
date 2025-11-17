import type { LoginRequest, LoginTransformed } from '../interfaces';

export interface AuthRepository {
  login(request: LoginRequest): Promise<LoginTransformed>;
}
