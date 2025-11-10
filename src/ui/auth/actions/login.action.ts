"use server";

import { ServerCrypto } from "@crypto/classes/server-crypto.class";

import { ENVS } from "@ui-core/envs/envs";

import { authService } from "@ui-auth/services/auth.service";

export type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
  success?: boolean;
  message?: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  try {
    const encryptedPayload = formData.get("payload") as string;

    if (!encryptedPayload) {
      return {
        errors: {
          _form: ["Payload can not be encrypted"],
        },
      };
    }

    const { email, password } = ServerCrypto.decryptObject<{
      email: string;
      password: string;
    }>(encryptedPayload, ENVS.CRYPTO_KEY);

    const data = { email, password };

    const response = await authService.login(data);

    if (response instanceof Error) {
      return {
        errors: {
          _form: [response.message || "Login failed"],
        },
      };
    }

    console.log("response", { response: response });

    return {
      success: true,
      message: "Login successful",
    };
  } catch (err) {
    const error = err as Error;
    return {
      errors: {
        _form: [error.message || "Login failed"],
      },
    };
  }
}
