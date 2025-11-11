import type { LoginRequest, LoginResponse } from '../../domain/interfaces';

import { HttpClient } from '@http-client/classes/http-client.class';

import { AuthRepository } from '../../domain/repositories/auth.repository';

export class HttpAuthRepository implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async login(data: LoginRequest): Promise<LoginResponse> {
    return await this.httpClient.post<LoginRequest, LoginResponse>(
      '/user/auth/login/',
      data,
    );
  }
}
