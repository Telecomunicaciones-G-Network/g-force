import type { PropsWithChildren } from "react";
import type { IconProps } from "../../icon.props";

/**
 * Button icon props.
 *
 * @param children - The children.
 * @param className - The class name.
 * @param onClick - The onClick.
 * @param size - The size.
 */
export type ButtonIconProps = PropsWithChildren<
  Pick<IconProps, "className" | "onClick" | "size">
>;
