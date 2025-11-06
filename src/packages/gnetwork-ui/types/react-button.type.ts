import type { ComponentProps, Ref } from "react";

export type ReactButton = ComponentProps<"button"> & {
  className?: string;
  ref?: Ref<HTMLButtonElement>;
};
