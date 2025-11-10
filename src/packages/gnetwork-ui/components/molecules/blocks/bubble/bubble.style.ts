import type { BubbleVariants } from "./bubble.props";

import { cva } from "class-variance-authority";

import { cn } from "@gnetwork-ui/utils/cn.util";

import { bubbleModes } from "./variants/bubble-mode.variant";

import styles from "./bubble.module.css";

export const bubbleVariants = cva([styles.base], {
  variants: {
    mode: bubbleModes,
  },
  compoundVariants: [],
  defaultVariants: {
    mode: "unknown",
  },
});

export const getBubbleClassNames = ({
  className = "",
  ...configVariants
}: BubbleVariants): string => {
  return cn(bubbleVariants({ className, ...configVariants }));
};
