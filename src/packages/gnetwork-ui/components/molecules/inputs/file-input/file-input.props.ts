import type { ReactChild, ReactInput } from '../../../../types';
import type { FileData } from './interfaces';

export interface FileInputProps extends Omit<ReactInput, 'onChange'> {
  buttonAriaLabel?: string;
  children?: ReactChild;
  multiple?: boolean;
  onChange?: (files: FileList | null) => void;
  onFileSelect?: (fileData: FileData[]) => void;
}
