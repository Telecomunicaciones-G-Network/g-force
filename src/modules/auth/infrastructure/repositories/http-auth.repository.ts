// TODO: Debo crear un build para colocar el recurso y la accion al llamar al endpoint

import type { LoginRequest, LoginResponse } from "../../domain/interfaces";

import { HttpClient } from "@http-client/classes/http-client.class";

import { AuthRepository } from "../../domain/repositories/auth.repository";

export class HttpAuthRepository implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async login(data: LoginRequest): Promise<LoginResponse | Error> {
    return await this.httpClient.post<LoginRequest, LoginResponse | Error>(
      "/user/auth/login/",
      data,
    );
  }
}
