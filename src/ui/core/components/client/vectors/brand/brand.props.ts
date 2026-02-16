import type { BrandProps as BrandPropsBase } from '@gnetwork-ui/components/atoms/vectors/brand';

export interface BrandProps extends Omit<BrandPropsBase, 'mode'> {
  skeletonClassName?: string;
}
