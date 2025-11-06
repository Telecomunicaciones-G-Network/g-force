"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";

import { ClientCrypto } from "@crypto/classes/client-crypto.class";

import { loginAction } from "@ui-auth/actions/login.action";

import { Alert } from "@gnetwork-ui/components/molecules/alerts/alert";
import { Button } from "@gnetwork-ui/components/molecules/buttons/button";
import { EmailInputController } from "@ui-core/components/server/inputs/email-input-controller";
import { PasswordInputController } from "@ui-core/components/server/inputs/password-input-controller";
import { LoginBrand } from "./components/login-brand/login-brand";

import { ENVS } from "@ui-core/envs/envs";

import { cn } from "@gnetwork-ui/utils/cn.util";

import styles from "./login-form.module.css";

const loginFormSchema = zod.object({
  email: zod.string().email("El email no es válido"),
  password: zod
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginFormData = zod.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const formData = new FormData();

    const encryptedPayload = await ClientCrypto.encryptObject(
      {
        email: data.email,
        password: data.password,
      },
      ENVS.CRYPTO_KEY,
    );

    formData.append("payload", encryptedPayload);

    const result = await loginAction({}, formData);

    console.log(result);
  };

  return (
    <form
      className={cn(
        styles.base,
        "gap-6 items-center justify-start pb-4 pt-0 px-4 tablet:gap-8 tablet:items-start tablet:justify-center tablet:pb-8 tablet:px-[204px]",
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      {false && (
        <div className={styles.base__alert}>
          <Alert className="animated-fade-in">alerta</Alert>
        </div>
      )}
      <LoginBrand />
      <div className={styles.base__form}>
        <div className={styles.base__input}>
          <EmailInputController
            control={control}
            fullWidth
            id="login_email"
            label="Email"
            name="email"
            placeholder="Introduce tu email"
            required
          />
        </div>
        <div className={styles.base__input}>
          <PasswordInputController
            control={control}
            fullWidth
            id="login_password"
            label="Contraseña"
            name="password"
            placeholder="Introduce tu contraseña"
            required
          />
        </div>
      </div>
      <div className={styles.base__button}>
        <Button color="red" disabled={isSubmitting} fullWidth type="submit">
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
};
