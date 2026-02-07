import type { FileData } from '../interfaces';

import { formatFileSize } from './format-file-size.util';

export const fileListToFileData = async (
  fileList: FileList,
): Promise<FileData[]> => {
  const files: FileData[] = [];

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];

    const fileData: FileData = {
      file,
      formattedSize: formatFileSize(file.size),
      name: file.name,
      size: file.size,
      type: file.type,
    };

    if (file?.type?.startsWith('image/')) {
      try {
        const preview = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (e) => resolve(e.target?.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        fileData.preview = preview;
      } catch (error) {
        console.error('Error creating image preview:', error);
      }
    }

    files.push(fileData);
  }

  return files;
};
