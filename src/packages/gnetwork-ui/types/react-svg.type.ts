import type { ComponentProps, Ref } from "react";

export type ReactSVG = ComponentProps<"svg"> & {
  className?: string;
  ref?: Ref<SVGSVGElement>;
};
