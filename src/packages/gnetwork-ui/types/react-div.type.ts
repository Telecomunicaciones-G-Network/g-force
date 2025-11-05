import type { ComponentProps, ReactNode, Ref } from "react";

/**
 * React div type.
 *
 * @param className - The class name.
 * @param children - The children.
 * @param ref - The ref.
 */
export type ReactDiv = ComponentProps<"div"> & {
  className?: string;
  children?: ReactNode | ReactNode[];
  ref?: Ref<HTMLDivElement>;
};
