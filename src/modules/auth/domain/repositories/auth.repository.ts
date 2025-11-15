import type { LoginRequest, LoginResponse } from '../interfaces';

export interface AuthRepository {
  login(data: LoginRequest): Promise<LoginResponse>;
}
