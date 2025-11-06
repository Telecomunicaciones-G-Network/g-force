import type { ApiResponse, Usecase } from "@module-core/interfaces";

import { AuthRepository } from "../domain/repositories/auth.repository";

export class LoginUsecase
  implements
    Usecase<
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
    >
{
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(body: { email: string; password: string }): Promise<
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
    return await this.authRepository.login(body);
  }
}
