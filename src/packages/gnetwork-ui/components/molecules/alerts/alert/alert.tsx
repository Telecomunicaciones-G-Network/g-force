import type { AlertProps } from "./alert.props";

import { MdCancel, MdCheckCircle, MdOutlineTimer } from "react-icons/md";

import { AlertSchemes } from "./enums/alert-scheme.enum";

import { getAlertClassNames } from "./alert.style";

/**
 * Alert component.
 *
 * @param className - The class name.
 * @param children - The children.
 * @param ref - The ref.
 * @param scheme - The scheme.
 * @param rest - The rest props.
 */
export const Alert = ({
  className,
  children,
  ref,
  scheme,
  ...rest
}: Readonly<AlertProps>) => {
  const classes = getAlertClassNames({ className, scheme });

  return (
    <div className={classes} ref={ref} {...rest}>
      {scheme === AlertSchemes.ERROR && (
        <MdCancel className="min-h-6 min-w-6 text-warning-300" size={24} />
      )}
      {scheme === AlertSchemes.SUCCESS && (
        <MdCheckCircle className="min-h-6 min-w-6 text-success-300" size={24} />
      )}
      {scheme === AlertSchemes.WAIT && (
        <MdOutlineTimer className="min-h-6 min-w-6 text-wait-300" size={24} />
      )}
      {children}
    </div>
  );
};
