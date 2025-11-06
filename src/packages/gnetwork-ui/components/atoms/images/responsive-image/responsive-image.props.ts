import type {
  CSSObjectFitValue,
  ReactChild,
  ReactDiv,
} from "../../../../types";

export interface ResponsiveImageProps extends ReactDiv {
  alt?: string;
  cache?: boolean;
  className?: string;
  customImageComponent?: ReactChild;
  lazy?: boolean;
  objectFit?: CSSObjectFitValue;
  src?: string;
}
