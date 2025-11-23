import type { ReactSVG } from '../../../../types';

export interface BrandSkeletonProps extends Omit<ReactSVG, 'color'> {
  ariaLabel?: string;
  height?: string;
  rotate?: number;
  width?: string;
}
