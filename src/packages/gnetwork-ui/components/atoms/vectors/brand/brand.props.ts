import type { ReactSVG } from "../../../../types";
import type { BrandMode } from "./types";

/**
 * Brand props.
 *
 * @param ariaLabel - The aria label.
 * @param customColor - The custom color.
 * @param height - The height.
 * @param mode - The mode.
 * @param rotate - The rotate.
 * @param width - The width.
 */
export interface BrandProps extends Omit<ReactSVG, "color"> {
  ariaLabel?: string;
  height?: string;
  mode: BrandMode;
  rotate?: number;
  width?: string;
}
