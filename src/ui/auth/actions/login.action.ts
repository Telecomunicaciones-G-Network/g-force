// TODO: Debo revisar mas a fondo este archivo

"use server";

import axios from "axios";

import { ServerCrypto } from "@crypto/classes/server-crypto.class";

import { ENVS } from "@ui-core/envs/envs";

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
          _form: ["Datos inválidos"],
        },
      };
    }

    const { email, password } = ServerCrypto.decryptObject<{
      email: string;
      password: string;
    }>(encryptedPayload, ENVS.CRYPTO_KEY);

    const data = { email, password };

    // Validación
    if (!email || !email.includes("@")) {
      return {
        errors: {
          email: ["Email inválido"],
        },
      };
    }

    if (!password || password.length < 6) {
      return {
        errors: {
          password: ["La contraseña debe tener al menos 6 caracteres"],
        },
      };
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_GNETWORK_API_BASE_URL}/user/auth/login/`,
      data,
      {
        headers: {
          Accept: "application/json; version=1.0.0",
          "Content-Type": "application/json",
        },
      },
    );

    console.log("response", { response: response?.data });

    return {
      success: true,
      message: "login exitoso",
    };
  } catch (err) {
    const error = err as Error;
    return {
      errors: {
        _form: [error.message || "Error en el inicio de sesión"],
      },
    };
  }
}
