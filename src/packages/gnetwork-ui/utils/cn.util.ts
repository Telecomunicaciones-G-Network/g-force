import type { ClassValue } from "clsx";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using `clsx` and merges Tailwind CSS classes using `twMerge`.
 *
 * This utility function is particularly useful for conditionally applying Tailwind CSS classes
 * while ensuring proper class merging (e.g., when you have conflicting Tailwind classes,
 * only the last one will be applied).
 *
 * @param inputs - Variable number of class values (strings, objects, arrays, or conditionally applied classes)
 * @returns A single string containing all merged and deduplicated class names
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
