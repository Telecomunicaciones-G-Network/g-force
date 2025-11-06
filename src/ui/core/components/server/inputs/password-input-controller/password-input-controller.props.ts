import type { FieldValues } from "react-hook-form";
import type { InputProps } from "@gnetwork-ui/components/molecules/inputs/input";
import type { InputControllerProps } from "@ui-core/props";

export type PasswordInputControllerProps<T extends FieldValues = FieldValues> =
  Omit<InputProps, "error" | "message" | "name" | "type"> &
    InputControllerProps<T>;
