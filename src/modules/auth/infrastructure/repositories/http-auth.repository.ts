import type { ApiResponse } from "@module-core/interfaces";

import { HttpClient } from "@/src/packages/http-client/classes/http-client.class";

import { AuthRepository } from "../../domain/repositories/auth.repository";

export class HttpAuthRepository implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async login(body: { email: string; password: string }): Promise<
    ApiResponse<{
      refresh: string;
      access: string;
      user: {
        id: string;
        created_at: Date;
        date_joined: Date;
        email: string;
        first_name: string;
        is_active: boolean;
        last_name: string;
        permissions: string[];
        roles: string[];
        updated_at: Date;
      };
    }>
  > {
    const response = await this.httpClient.post<
      { email: string; password: string },
      ApiResponse<{
        refresh: string;
        access: string;
        user: {
          id: string;
          created_at: Date;
          date_joined: Date;
          email: string;
          first_name: string;
          is_active: boolean;
          last_name: string;
          permissions: string[];
          roles: string[];
          updated_at: Date;
        };
      }>
    >("/auth/login/", body);

    console.log(response);

    if (response instanceof Error) {
      return {
        status: 500,
        success: false,
        error: response.message,
      };
    }

    return response;
  }
}
