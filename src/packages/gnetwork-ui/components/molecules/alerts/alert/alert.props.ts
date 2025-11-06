import type { VariantProps } from "class-variance-authority";
import type { ReactDiv } from "../../../../types";
import type { AlertSchemeType } from "./types";

import { alertVariants } from "./alert.style";

/**
 * Alert variants props.
 *
 * @param className - The class name.
 * @param scheme - The scheme.
 */
export interface AlertVariants extends VariantProps<typeof alertVariants> {
  className?: string;
  scheme?: AlertSchemeType;
}

/**
 * Alert props.
 *
 * @param className - The class name.
 * @param scheme - The scheme.
 */
export type AlertProps = ReactDiv & AlertVariants;
