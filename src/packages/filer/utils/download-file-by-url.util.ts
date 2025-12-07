import { v4 as uuidv4 } from 'uuid';

export const downloadFileByUrl = async (
  url: string,
  filename?: string,
  fileExtension?: string,
): Promise<void> => {
  if (!url || typeof url !== 'string') return;

  try {
    const link = document.createElement('a');

    link.href = url;
    link.download = `${filename}.${fileExtension}` || uuidv4();
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (url.startsWith('blob:')) {
      setTimeout(() => URL.revokeObjectURL(url), 100);
    }
  } catch {
    return;
  }
};
