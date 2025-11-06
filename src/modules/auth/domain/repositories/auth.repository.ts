import type { ApiResponse } from "@module-core/interfaces";

export abstract class AuthRepository {
  abstract login(body: { email: string; password: string }): Promise<
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
  >;
}
