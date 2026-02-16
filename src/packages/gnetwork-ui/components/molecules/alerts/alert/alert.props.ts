import type { VariantProps } from 'class-variance-authority';
import type { ReactDiv } from '../../../../types';
import type { AlertSchemeType } from './types';

import { alertVariants } from './alert.style';

/**
 * @interface AlertVariants
 *
 * @description The variants for the alert component.
 *
 * @property {string} className - The class name for the alert component.
 * @property {AlertSchemeType} scheme - The scheme for the alert component.
 */
export interface AlertVariants extends VariantProps<typeof alertVariants> {
  className?: string;
  scheme?: AlertSchemeType;
}

/**
 * @name AlertProps
 *
 * @description The props for the alert component.
 *
 * @property {string} id - The id for the alert component.
 * @property {ReactDiv} ref - The ref for the alert component.
 * @property {AlertVariants} variants - The variants for the alert component.
 */
export interface AlertProps extends ReactDiv, AlertVariants {
  id: string;
}
