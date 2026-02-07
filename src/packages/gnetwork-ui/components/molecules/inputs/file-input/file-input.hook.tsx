'use client';

import type { ChangeEvent, MouseEvent } from 'react';
import type { FileData } from './interfaces';

import { useRef } from 'react';

import { fileListToFileData } from './utils/file-list-to-file-data.util';

interface UseFileInputProps {
  disabled?: boolean;
  onChange?: (files: FileList | null) => void;
  onFileSelect?: (fileData: FileData[]) => void;
}

export const useFileInput = ({
  disabled = false,
  onChange,
  onFileSelect,
}: UseFileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (onChange) {
      onChange(files);
    }

    if (onFileSelect && files && files.length > 0) {
      try {
        const fileData = await fileListToFileData(files);

        onFileSelect(fileData);
      } catch (error) {
        console.error('Error processing file:', error);
      }
    }
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    event.stopPropagation();

    inputRef.current?.click?.();
  };

  return {
    inputRef,
    handleChange,
    handleClick,
  };
};
