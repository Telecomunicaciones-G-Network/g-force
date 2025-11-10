// TODO: Debo crear bien la interfaz de User

import type { LoginResult, LoginResultUser } from "../../domain/interfaces";

export class LoginViewModel {
  access?: string;

  refresh?: string;

  user?: LoginResultUser;
}
