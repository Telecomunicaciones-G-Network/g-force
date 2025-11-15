import { AuthService } from '@module-auth/infrastructure/services/auth.service';

import { httpAuthRepository } from '@ui-auth/repositories/auth.repository';

export const authService = new AuthService(httpAuthRepository);
