import type { ReactSVG } from "../../../../types";
import type { BrandMode } from "./types";

export interface BrandProps extends Omit<ReactSVG, "color"> {
  ariaLabel?: string;
  height?: string;
  mode: BrandMode;
  rotate?: number;
  width?: string;
}
