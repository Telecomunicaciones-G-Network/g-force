import type { FieldValues } from "react-hook-form";
import type { PasswordInputControllerProps } from "./password-input-controller.props";

import { Controller } from "react-hook-form";

import { PasswordInput } from "@gnetwork-ui/components/molecules/inputs/password-input";

export const PasswordInputController = <T extends FieldValues = FieldValues>({
  control,
  defaultValue,
  id,
  name,
  rules,
  ...rest
}: Readonly<PasswordInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field, fieldState }) => (
      <PasswordInput
        error={!!fieldState.error}
        id={id || name}
        message={fieldState.error?.message}
        {...field}
        {...rest}
      />
    )}
    rules={rules}
  />
);
