import type { TagProps } from './tag.props';

import { getTagClassNames } from './tag.style';

export const Tag = ({
  className,
  children,
  color,
  ref,
  ...rest
}: Readonly<TagProps>) => {
  const classes = getTagClassNames({ className, color });

  return (
    <div className={classes} ref={ref} {...rest}>
      {children}
    </div>
  );
};
