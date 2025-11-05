import type { TextVariants } from "./text.props";

import { cva } from "class-variance-authority";

import { cn } from "../../../../utils/cn.util";

import { textAligns } from "./variants/text-align.variant";
import { textLevels } from "./variants/text-level.variant";
import { textSchemes } from "./variants/text-scheme.variant";
import { textSizes } from "./variants/text-size.variant";
import { textWeights } from "./variants/text-weight.variant";

import styles from "./text.module.css";

/**
 * Text variant styles configuration using class-variance-authority.
 *
 * Defines the base styles and variant combinations for text components,
 * including alignment, emphasis, italic, scheme, size, underline, and weight variants.
 */
export const textVariants = cva(
  [styles.base, "leading-[120%] text-foreground tracking-0"],
  {
    variants: {
      align: textAligns,
      emphasis: {
        true: "font-light text-gray-600",
        false: "",
      },
      italic: {
        true: "italic",
        false: "",
      },
      level: textLevels,
      scheme: textSchemes,
      size: textSizes,
      underline: {
        true: "underline underline-offset-2",
        false: "",
      },
      weight: textWeights,
    },
    compoundVariants: [
      {
        level: "large",
        scheme: "heading",
        class: "font-semibold text-[32px]",
      },
      {
        level: "medium",
        scheme: "heading",
        class: "font-semibold text-[28px]",
      },
      {
        level: "small",
        scheme: "heading",
        class: "font-semibold text-2xl",
      },
      {
        level: "xlarge",
        scheme: "heading",
        class: "font-semibold text-4xl",
      },
      {
        level: "xsmall",
        scheme: "heading",
        class: "font-semibold text-xl tracking-[0.3px]",
      },
      {
        level: "xxlarge",
        scheme: "heading",
        class: "font-semibold text-[40px]",
      },
      {
        level: "large",
        scheme: "label",
        class: "font-medium text-lg",
      },
      {
        scheme: "label",
        level: "medium",
        class: "font-medium text-base",
      },
      {
        level: "small",
        scheme: "label",
        class: "font-medium text-sm",
      },
      {
        level: "xsmall",
        scheme: "label",
        class: "font-medium text-xs",
      },
      {
        level: "large",
        scheme: "paragraph",
        class: "font-normal leading-[120%] text-lg",
      },
      {
        level: "medium",
        scheme: "paragraph",
        class: "font-normal leading-[120%] text-base",
      },
      {
        level: "small",
        scheme: "paragraph",
        class: "font-normal leading-[120%] text-sm",
      },
      {
        level: "xsmall",
        scheme: "paragraph",
        class: "font-normal leading-[120%] text-xs",
      },
    ],
    defaultVariants: {
      align: "left",
      emphasis: false,
      italic: false,
      level: "medium",
      scheme: "paragraph",
      size: "base",
      underline: false,
      weight: "normal",
    },
  },
);

/**
 * Generates text class names based on variant props.
 *
 * @param props - The text variant configuration props.
 * @param props.className - Optional additional CSS class names.
 * @param props.align - Optional text alignment variant.
 * @param props.emphasis - Optional flag to apply emphasis style.
 * @param props.italic - Optional flag to render italic text.
 * @param props.scheme - Optional text scheme (e.g., paragraph, heading, label).
 * @param props.size - Optional text size variant.
 * @param props.underline - Optional flag to underline text.
 * @param props.weight - Optional font weight variant.
 * @returns Combined class names string for the text element.
 */
export const getTextClassName = ({
  className = "",
  ...configVariants
}: TextVariants): string => {
  return cn(textVariants({ className, ...configVariants }));
};
