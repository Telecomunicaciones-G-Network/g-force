import type { FieldValues } from "react-hook-form";
import type { EmailInputControllerProps } from "./email-input-controller.props";

import { Controller } from "react-hook-form";

import { EmailInput } from "@gnetwork-ui/components/molecules/inputs/email-input";

export const EmailInputController = <T extends FieldValues = FieldValues>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<EmailInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field, fieldState }) => (
      <EmailInput
        {...field}
        error={!!fieldState.error}
        id={id || name}
        message={fieldState.error?.message}
        onChange={(e) => {
          field.onChange(e);
          onClear?.();
        }}
        {...rest}
      />
    )}
    rules={rules}
  />
);
