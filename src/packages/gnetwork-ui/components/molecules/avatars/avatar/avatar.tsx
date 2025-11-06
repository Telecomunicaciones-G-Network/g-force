import type { AvatarProps } from "./avatar.props";

import { ResponsiveImage } from "../../../atoms/images/responsive-image";

import { cn } from "../../../../utils/cn.util";

import styles from "./avatar.module.css";

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
