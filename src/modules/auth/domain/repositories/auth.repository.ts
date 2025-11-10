import type { LoginRequest, LoginResponse } from "../interfaces";

export abstract class AuthRepository {
  abstract login(data: LoginRequest): Promise<LoginResponse | Error>;
}
