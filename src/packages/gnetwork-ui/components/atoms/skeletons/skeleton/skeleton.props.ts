import type { ReactDiv } from '../../../../types';

/**
 * Props for the Skeleton component.
 * Inherits all props from ReactDiv except 'children',
 * as Skeleton should not accept or render any children.
 */
export type SkeletonProps = Omit<ReactDiv, 'children'>;
