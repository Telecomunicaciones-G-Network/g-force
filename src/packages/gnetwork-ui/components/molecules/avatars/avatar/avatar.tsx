import type { AvatarProps } from "./avatar.props";

import { ResponsiveImage } from "../../../atoms/images/responsive-image";

import { cn } from "../../../../utils/cn.util";

import styles from "./avatar.module.css";

/**
 * Avatar component.
 *
 * @param className - The optional class name.
 * @param image - The optional image props for the avatar, defined in ResponsiveImageProps.
 * @param ref - The ref.
 * @param ...rest - The rest props.
 */
export const Avatar = ({
  className = "",
  image,
  ref,
  ...rest
}: Readonly<AvatarProps>) => (
  <div
    ref={ref}
    className={cn(
      styles.base,
      "aspect-48/48 border-none gap-2 max-w-[48px] p-0 rounded-lg w-full",
      className,
    )}
    {...rest}
  >
    {(image?.src || image?.customImageComponent) && (
      <ResponsiveImage {...image} />
    )}
  </div>
);
