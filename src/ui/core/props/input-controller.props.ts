import type {
  Control,
  FieldPath,
  FieldValues,
  PathValue,
  RegisterOptions,
} from "react-hook-form";

export interface InputControllerProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  defaultValue?: PathValue<T, FieldPath<T>>;
  name: FieldPath<T>;
  onClear?: () => void;
  rules?: RegisterOptions<T, FieldPath<T>>;
}
