// TODO: Debo revisar mas a fondo este archivo

import { AuthService } from "@module-auth/infrastructure/services/auth.service";

import { authRepository } from "@ui-auth/repositories/auth.repository";

export const authService = new AuthService(authRepository);
