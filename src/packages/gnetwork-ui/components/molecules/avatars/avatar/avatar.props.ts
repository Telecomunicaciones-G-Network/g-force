// PENDING:

import type { ReactDiv } from '../../../../types';
import type { ResponsiveImageProps } from '../../../atoms/images/responsive-image/responsive-image.props';

export interface AvatarProps extends ReactDiv {
  customBackgroundColor?: string;
  image?: ResponsiveImageProps;
  username?: string;
}
