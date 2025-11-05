import type { ButtonVariants } from "./button.props";

import { cva } from "class-variance-authority";

import { cn } from "../../../../utils/cn.util";

import { buttonColors } from "./variants/button-color.variant";
import { buttonFullWidth } from "./variants/button-fullwidth.variant";
import { buttonSchemes } from "./variants/button-scheme.variant";
import { buttonSizes } from "./variants/button-size.variant";
import { buttonStatic } from "./variants/button-static.variant";

import styles from "./button.module.css";

/**
 * Button variant styles configuration using class-variance-authority.
 *
 * Defines the base styles and variant combinations for button components,
 * including color, size, scheme, and fullWidth variants.
 */
export const buttonVariants = cva(
  [
    styles.base,
    "justify-center ring-offset-background rounded-lg text-left transition-colors disabled:bg-button-background-disabled disabled:text-button-text-disabled focus-visible:outline-none [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  ],
  {
    variants: {
      color: buttonColors,
      fullWidth: buttonFullWidth,
      scheme: buttonSchemes,
      size: buttonSizes,
      isStatic: buttonStatic,
    },
    compoundVariants: [
      {
        color: "default",
        isStatic: false,
        class: "hover:bg-button-background-hover",
      },
      {
        color: "default",
        isStatic: true,
        class: "",
      },
      {
        color: "default",
        scheme: "outline",
        class:
          "bg-transparent border border-solid border-button-background text-button-text hover:bg-button-background hover:text-button-text hover:border hover:border-solid hover:border-button-border",
      },
      {
        color: "gray",
        scheme: "outline",
        class:
          "bg-transparent border border-solid border-gray text-gray hover:bg-gray hover:text-chromatic-inverted hover:border-none",
      },
      {
        color: "red",
        isStatic: false,
        class: "focus:bg-red-800 hover:bg-red-500",
      },
      {
        color: "red",
        isStatic: true,
        class: "",
      },
      {
        color: "red",
        scheme: "outline",
        class:
          "bg-transparent text-red-700 border border-solid border-red-700 hover:border-none hover:bg-red-700 hover:text-white",
      },
    ],
    defaultVariants: {
      color: "default",
      fullWidth: false,
      isStatic: false,
      scheme: "default",
      size: "default",
    },
  },
);

/**
 * Retorna los classNames completos del botón combinando variantes y clases.
 *
 * @param props - Props de configuración de variantes para el botón.
 * @param props.className - (Opcional) Clases CSS adicionales.
 * @param props.color - (Opcional) Variante de color del botón.
 * @param props.fullWidth - (Opcional) Si el botón debe ocupar el ancho completo.
 * @param props.scheme - (Opcional) Variante de esquema visual del botón.
 * @param props.size - (Opcional) Variante de tamaño del botón.
 * @param props.isStatic - (Opcional) Si el botón es estático o no.
 * @returns {string} String de classNames combinados para el botón.
 */
export const getButtonClassNames = ({
  className = "",
  ...configVariants
}: ButtonVariants): string => {
  return cn(buttonVariants({ className, ...configVariants }));
};
