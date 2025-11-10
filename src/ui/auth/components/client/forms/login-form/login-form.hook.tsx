import type { LoginFormData } from "./interface";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ClientCrypto } from "@crypto/classes/client-crypto.class";

import { ENVS } from "@ui-core/envs/envs";

import { loginAction } from "@ui-auth/actions/login.action";

import { loginFormSchema } from "./schemas/login-form.schema";

import { loginFormInitialValues } from "./login-form.state";

export const useLoginForm = () => {
  const {
    clearErrors: clearErrorsForm,
    control,
    formState,
    handleSubmit,
  } = useForm<LoginFormData>({
    defaultValues: loginFormInitialValues,
    mode: "onSubmit",
    resolver: zodResolver(loginFormSchema),
    reValidateMode: "onSubmit",
  });
  const { errors, isSubmitting } = formState;

  const clearErrors = (
    fieldName?: keyof LoginFormData | (keyof LoginFormData)[],
  ) => clearErrorsForm(fieldName);

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

  return {
    clearErrors,
    control,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
  };
};
