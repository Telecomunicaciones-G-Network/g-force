import type { VariantProps } from "class-variance-authority";
import type { ReactDiv } from "../../../../types";
import type { AlertSchemeType } from "./types";

import { alertVariants } from "./alert.style";

export interface AlertVariants extends VariantProps<typeof alertVariants> {
  className?: string;
  scheme?: AlertSchemeType;
}

export type AlertProps = ReactDiv & AlertVariants;
