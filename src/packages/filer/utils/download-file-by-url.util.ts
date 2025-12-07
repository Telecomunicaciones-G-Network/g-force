import { v4 as uuidv4 } from 'uuid';

export const downloadFileByUrl = async (
  src: string,
  filename?: string,
  fileExtension?: string,
): Promise<void> => {
  if (!src || typeof src !== 'string') return;

  try {
    const link = document.createElement('a');

    link.href = src;
    link.download = `${filename}.${fileExtension}` || uuidv4();
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (src.startsWith('blob:')) {
      setTimeout(() => URL.revokeObjectURL(src), 100);
    }
  } catch {
    return;
  }
};
