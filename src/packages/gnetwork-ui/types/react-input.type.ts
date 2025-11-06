import type { ComponentProps, Ref } from "react";

export type ReactInput = ComponentProps<"input"> & {
  className?: string;
  ref?: Ref<HTMLInputElement>;
};
