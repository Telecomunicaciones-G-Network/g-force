import type { ComponentProps, Ref } from "react";

/**
 * React input type.
 *
 * @param className - The class name.
 * @param ref - The ref.
 */
export type ReactInput = ComponentProps<"input"> & {
  className?: string;
  ref?: Ref<HTMLInputElement>;
};
