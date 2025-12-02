import type { ChatInputProps } from './chat-input.props';

import { MdAttachFile } from 'react-icons/md';

import { Input } from '../input';

export const ChatInput = ({
  customLeftIcon,
  ...rest
}: Readonly<ChatInputProps>) => (
  <Input
    leftIcon={
      customLeftIcon ? (
        customLeftIcon
      ) : (
        <MdAttachFile className="text-neutral-500 size-6" />
      )
    }
    type="text"
    {...rest}
  />
);
