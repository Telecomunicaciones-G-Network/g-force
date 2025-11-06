import type { ComponentProps, Ref } from "react";

/**
 * React svg type.
 *
 * @param className - The class name.
 * @param ref - The ref.
 */
export type ReactSVG = ComponentProps<"svg"> & {
  className?: string;
  ref?: Ref<SVGSVGElement>;
};
