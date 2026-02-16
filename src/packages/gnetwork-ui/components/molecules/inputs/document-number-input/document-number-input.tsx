import type { InputProps } from '../input';

import { Input } from '../input';

export const DocumentNumberInput = (
  props: Readonly<Omit<InputProps, 'type'>>,
) => <Input type="text" {...props} />;
