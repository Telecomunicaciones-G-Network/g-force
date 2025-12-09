import { extensionToMimetypeDictionary } from '../dictionaries/extension-to-mimetype.dictionary';

export const parseFilesExtensionToFileInputAccept = (
  extensions: string[],
): string => {
  if (!Array.isArray(extensions) || extensions.length === 0) {
    return '';
  }

  const mimeTypes = extensions
    .map((ext) => {
      const normalizedExt = ext.toLowerCase().trim();

      return extensionToMimetypeDictionary?.[normalizedExt];
    })
    .filter(Boolean);

  return mimeTypes.join(',');
};
