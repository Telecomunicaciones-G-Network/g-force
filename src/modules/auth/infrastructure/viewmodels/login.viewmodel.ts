import type { LoginResultUser } from "../../domain/interfaces";

export class LoginViewModel {
  access?: string;

  error?: string;

  refresh?: string;

  user?: LoginResultUser;
}
