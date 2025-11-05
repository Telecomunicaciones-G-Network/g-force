import type { ReactDiv } from "../../../../types";
import type { ResponsiveImageProps } from "../../../atoms/images/responsive-image/responsive-image.props";

/**
 * Avatar props.
 *
 * @param image       - The optional image props for the avatar, defined in ResponsiveImageProps.
 */
export interface AvatarProps extends ReactDiv {
  image?: ResponsiveImageProps;
}
