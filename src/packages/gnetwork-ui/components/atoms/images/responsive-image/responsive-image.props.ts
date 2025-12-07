import type { RefObject, SyntheticEvent } from 'react';
import type {
  CSSObjectFitValue,
  ReactChild,
  ReactDiv,
} from '../../../../types';

export interface ResponsiveImageProps extends ReactDiv {
  alt?: string;
  cache?: boolean;
  className?: string;
  customImageComponent?: ReactChild;
  imageClassName?: string;
  imageRef?: RefObject<HTMLImageElement | null>;
  lazy?: boolean;
  objectFit?: CSSObjectFitValue;
  onLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  src?: string;
}
