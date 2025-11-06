import type { AlertVariants } from "./alert.props";

import { cva } from "class-variance-authority";

import { cn } from "../../../../utils/cn.util";

import { alertSchemeVariant } from "./variants/alert-scheme.variant";

import styles from "./alert.module.css";

/**
 * Alert variant styles configuration using class-variance-authority.
 *
 * Defines the base styles and scheme variants for alert components.
 */
export const alertVariants = cva([styles.base, "border border-solid"], {
  variants: {
    scheme: alertSchemeVariant,
  },
  compoundVariants: [],
  defaultVariants: {
    scheme: "neutral",
  },
});

/**
 * Retorna los classNames completos del alert combinando variantes y clases.
 *
 * @param props - Props de configuración de variantes para el alert.
 * @param props.className - (Opcional) Clases CSS adicionales.
 * @param props.scheme - (Opcional) Variante de esquema visual del alert.
 * @returns {string} String de classNames combinados para el alert.
 */
export const getAlertClassNames = ({
  className = "",
  ...configVariants
}: AlertVariants): string => {
  return cn(alertVariants({ className, ...configVariants }));
};
