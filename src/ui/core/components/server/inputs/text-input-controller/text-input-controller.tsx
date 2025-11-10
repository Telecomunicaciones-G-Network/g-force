import type { FieldValues } from "react-hook-form";
import type { TextInputControllerProps } from "./text-input-controller.props";

import { Controller } from "react-hook-form";

import { TextInput } from "@gnetwork-ui/components/molecules/inputs/text-input";

export const TextInputController = <T extends FieldValues = FieldValues>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<TextInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field, fieldState }) => (
      <TextInput
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
