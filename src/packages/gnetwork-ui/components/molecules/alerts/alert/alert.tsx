import type { AlertProps } from './alert.props';

import {
  MdCancel,
  MdCheckCircle,
  MdInfo,
  MdOutlineTimer,
  MdWarning,
} from 'react-icons/md';

import { AlertSchemes } from './enums/alert-scheme.enum';

import { getAlertClasses } from './alert.style';

/**
 * @name Alert
 *
 * @description The alert component.
 *
 * @property {React.ReactNode} children - The children for the alert component.
 * @property {string} className - The class name for the alert component.
 * @property {string} id - The id for the alert component.
 * @property {React.Ref<HTMLDivElement>} ref - The ref for the alert component.
 * @property {AlertSchemeType} scheme - The scheme for the alert component.
 */
export const Alert = ({
  children,
  className,
  id,
  ref,
  scheme,
  ...rest
}: Readonly<AlertProps>) => {
  const classes = getAlertClasses({ className, scheme });

  if (!id)
    console.warn(
      'Prop id is missing on Alert component. This component can not be render appropiately.',
    );

  if (!children)
    console.warn(
      'Prop children is missing on Alert component. This component can not be render appropiately.',
    );

  return (
    <div ref={ref} className={classes} id={id} {...rest}>
      {scheme === AlertSchemes.ERROR && (
        <MdCancel className="fill-red-100 min-h-6 min-w-6" size={24} />
      )}
      {scheme === AlertSchemes.NEUTRAL && (
        <MdInfo className="fill-chromatic min-h-6 min-w-6" size={24} />
      )}
      {scheme === AlertSchemes.SUCCESS && (
        <MdCheckCircle
          className=" fill-tag-green-foreground min-h-6 min-w-6"
          size={24}
        />
      )}
      {scheme === AlertSchemes.WAIT && (
        <MdOutlineTimer
          className="fill-dark-blue-foreground min-h-6 min-w-6"
          size={24}
        />
      )}
      {scheme === AlertSchemes.WARNING && (
        <MdWarning className="fill-warning-300 min-h-6 min-w-6" size={24} />
      )}
      {children}
    </div>
  );
};
