import type { ToastProps } from './toast.props';

import { MdCancel, MdCheckCircle, MdOutlineTimer } from 'react-icons/md';

import { ToastSchemes } from './enums/toast-schemes.enum';

import { getToastClassNames } from './toast.style';

export const Toast = ({
  className = '',
  children,
  id,
  scheme = ToastSchemes.NEUTRAL,
}: Readonly<ToastProps>) => {
  const classes = getToastClassNames({ className, scheme });

  return (
    <div className={classes} id={id}>
      {scheme === ToastSchemes.ERROR && (
        <MdCancel className="min-h-6 min-w-6 text-red-100" size={24} />
      )}
      {scheme === ToastSchemes.NEUTRAL && (
        <MdCancel className="min-h-6 min-w-6 text-chromatic" size={24} />
      )}
      {scheme === ToastSchemes.SUCCESS && (
        <MdCheckCircle
          className="min-h-6 min-w-6 text-tag-green-foreground"
          size={24}
        />
      )}
      {scheme === ToastSchemes.WAIT && (
        <MdOutlineTimer className="min-h-6 min-w-6 text-wait-300" size={24} />
      )}
      {children}
    </div>
  );
};
