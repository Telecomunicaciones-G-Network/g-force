import type { ApiResponse } from "@module-core/interfaces";

export interface LoginResultUser {
  created_at: Date;
  date_joined: Date;
  email: string;
  first_name: string;
  id: string;
  is_active: boolean;
  last_name: string;
  permissions: string[];
  roles: string[];
  updated_at: Date;
}

export interface LoginResult {
  access: string;
  refresh: string;
  user: LoginResultUser;
}

export type LoginResponse = ApiResponse<LoginResult>;
