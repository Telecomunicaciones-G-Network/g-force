import type { JSX, ReactNode } from "react";

/**
 * React child type.
 *
 * @param children - The children.
 */
export type ReactChild = string | JSX.Element | ReactNode | ReactNode[];
