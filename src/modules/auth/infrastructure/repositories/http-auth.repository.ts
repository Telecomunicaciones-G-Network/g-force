import { HttpAdapter } from '@module-core/interfaces/http-adapter.interface';
import type { LoginRequest, LoginResponse } from '../../domain/interfaces';
import type { AuthRepository } from '../../domain/repositories/auth.repository';

export class HttpAuthRepository implements AuthRepository {
  constructor(private readonly httpClient: HttpAdapter) {}

  async login(data: LoginRequest): Promise<LoginResponse> {
    return await this.httpClient.post<LoginRequest, LoginResponse>(
      '/user/auth/login/',
      data,
    );
  }
}
