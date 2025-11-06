import type { AlertVariants } from "./alert.props";

import { cva } from "class-variance-authority";

import { cn } from "../../../../utils/cn.util";

import { alertSchemeVariant } from "./variants/alert-scheme.variant";

import styles from "./alert.module.css";

export const alertVariants = cva([styles.base, "border border-solid"], {
  variants: {
    scheme: alertSchemeVariant,
  },
  compoundVariants: [],
  defaultVariants: {
    scheme: "neutral",
  },
});

export const getAlertClassNames = ({
  className = "",
  ...configVariants
}: AlertVariants): string => {
  return cn(alertVariants({ className, ...configVariants }));
};
