import type { InputProps } from '../input';

import { MdAttachFile } from 'react-icons/md';

import { Input } from '../input';

export const ChatInput = (props: Readonly<Omit<InputProps, 'type'>>) => (
  <Input
    leftIcon={<MdAttachFile className="text-neutral-500 size-6" />}
    type="text"
    {...props}
  />
);
