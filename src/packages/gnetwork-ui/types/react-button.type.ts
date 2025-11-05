import type { ComponentProps, Ref } from "react";

/**
 * React button type.
 *
 * @param className - The class name.
 * @param ref - The ref.
 */
export type ReactButton = ComponentProps<"button"> & {
  className?: string;
  ref?: Ref<HTMLButtonElement>;
};
