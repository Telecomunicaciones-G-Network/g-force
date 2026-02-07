import type { LoginRequest } from '../../domain/interfaces';
import type { LoginDTO } from '../dtos';

export const loginAdapter = (output: LoginDTO): LoginRequest => {
  return {
    ...output,
  };
};
