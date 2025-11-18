import type { ApiErrorResponse } from '@module-core/interfaces';
import type {
  LoginRequest,
  LoginResponse,
  LoginTransformed,
} from '../../domain/interfaces';
import type { AuthRepository } from '../../domain/repositories';

import { AxiosError } from 'axios';

import { HttpClient } from '@http-client/classes/http-client.class';

import { BaseError } from '@module-core/errors/base-error.error';

import { AUTH_RESOURCES } from '../dictionaries/auth-resources.dictionary';

import { loginMapper } from '../mappers/login.mapper';

export class HttpAuthRepository implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  public async login(request: LoginRequest): Promise<LoginTransformed> {
    try {
      const response = await this.httpClient.post<LoginRequest, LoginResponse>(
        AUTH_RESOURCES.LOGIN,
        request,
      );

      return loginMapper(response);
    } catch (err) {
      const error = err as AxiosError<ApiErrorResponse>;

      throw new BaseError(
        error?.response?.data?.error,
        error?.response?.data?.status,
      );
    }
  }
}
