import type {
  CSSObjectFitValue,
  ReactChild,
  ReactDiv,
} from "../../../../types";

/**
 * Responsive image props.
 *
 * @param alt - The alt text.
 * @param cache - The cache.
 * @param className - The class name.
 * @param customImageComponent - The custom image component.
 * @param lazy - The lazy.
 * @param objectFit - The object fit.
 * @param src - The source.
 */
export interface ResponsiveImageProps extends ReactDiv {
  alt?: string;
  cache?: boolean;
  className?: string;
  customImageComponent?: ReactChild;
  lazy?: boolean;
  objectFit?: CSSObjectFitValue;
  src?: string;
}
