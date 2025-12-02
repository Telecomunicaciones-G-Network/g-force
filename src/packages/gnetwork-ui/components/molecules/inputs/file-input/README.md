# FileInput Component

A flexible and customizable file input component that provides an enhanced user experience for file uploads with support for single and multiple file selection.

## Features

- ✅ Single and multiple file selection
- ✅ Custom trigger elements (buttons, icons, etc.)
- ✅ File type restrictions via `accept` attribute
- ✅ Automatic file data processing (size, preview, metadata)
- ✅ Accessible design with ARIA labels
- ✅ Disabled state support
- ✅ Type-safe with TypeScript
- ✅ Styled with CSS modules

## Installation

```tsx
import { FileInput } from '@/packages/gnetwork-ui/components/molecules/inputs/file-input';
import type { FileData } from '@/packages/gnetwork-ui/components/molecules/inputs/file-input/interfaces';
```

## Basic Usage

### Simple File Input

```tsx
import { FileInput } from '@/packages/gnetwork-ui/components/molecules/inputs/file-input';

export default function MyComponent() {
  const handleChange = (files: FileList | null) => {
    console.log('Selected files:', files);
  };

  return <FileInput onChange={handleChange} />;
}
```

### With File Data Processing

```tsx
import { FileInput } from '@/packages/gnetwork-ui/components/molecules/inputs/file-input';
import type { FileData } from '@/packages/gnetwork-ui/components/molecules/inputs/file-input/interfaces';

export default function MyComponent() {
  const handleFileSelect = (fileData: FileData[]) => {
    fileData.forEach(file => {
      console.log('File name:', file.name);
      console.log('File size:', file.formattedSize);
      console.log('File type:', file.type);
      console.log('Preview URL:', file.preview);
    });
  };

  return <FileInput onFileSelect={handleFileSelect} />;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accept` | `string` | - | File types to accept (e.g., `"image/*"`, `".pdf,.doc"`) |
| `buttonAriaLabel` | `string` | `"File input picker"` | Accessible label for the button |
| `children` | `ReactChild` | - | Custom trigger element (button content) |
| `className` | `string` | `""` | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disable the file input |
| `id` | `string` | - | HTML id attribute |
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `name` | `string` | - | HTML name attribute for form submissions |
| `onChange` | `(files: FileList \| null) => void` | - | Callback with raw FileList |
| `onFileSelect` | `(fileData: FileData[]) => void` | - | Callback with processed file data |
| `ref` | `Ref<HTMLInputElement>` | - | React ref for the input element |

## FileData Interface

The `onFileSelect` callback provides enriched file data:

```tsx
interface FileData {
  file: File;              // Original File object
  formattedSize: string;   // Human-readable size (e.g., "2.5 MB")
  name: string;            // File name
  preview?: string;        // Base64 preview for images
  size: number;            // Size in bytes
  type: string;            // MIME type
}
```

## Advanced Examples

### Multiple File Upload with Type Restriction

```tsx
<FileInput
  accept="image/*"
  multiple
  onFileSelect={(fileData) => {
    console.log(`Selected ${fileData.length} images`);
  }}
>
  <div className="custom-upload-button">
    📸 Upload Images
  </div>
</FileInput>
```

### PDF/Document Upload

```tsx
<FileInput
  accept=".pdf,.doc,.docx"
  onFileSelect={(fileData) => {
    const [file] = fileData;
    console.log(`Document: ${file.name} (${file.formattedSize})`);
  }}
>
  <button className="upload-btn">
    📄 Select Document
  </button>
</FileInput>
```

### With Image Preview

```tsx
import { useState } from 'react';
import { FileInput } from '@/packages/gnetwork-ui/components/molecules/inputs/file-input';
import type { FileData } from '@/packages/gnetwork-ui/components/molecules/inputs/file-input/interfaces';

export default function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (fileData: FileData[]) => {
    const [file] = fileData;
    if (file.preview) {
      setPreview(file.preview);
    }
  };

  return (
    <div>
      <FileInput
        accept="image/*"
        onFileSelect={handleFileSelect}
      >
        <span>Select Image</span>
      </FileInput>

      {preview && (
        <img src={preview} alt="Preview" />
      )}
    </div>
  );
}
```

### Disabled State

```tsx
<FileInput
  disabled
  onFileSelect={(fileData) => {
    // This won't be called when disabled
  }}
>
  <span>Upload Disabled</span>
</FileInput>
```

### Form Integration

```tsx
<form>
  <FileInput
    name="document"
    id="document-upload"
    accept=".pdf"
    onChange={(files) => {
      // Handle form submission with files
      const formData = new FormData();
      if (files) {
        Array.from(files).forEach(file => {
          formData.append('documents', file);
        });
      }
    }}
  />
</form>
```

## Styling

The component uses CSS modules and can be customized via the `className` prop:

```tsx
<FileInput className="my-custom-class">
  Custom Styled Upload
</FileInput>
```

The component applies a `data-disabled` attribute when disabled, allowing for CSS targeting:

```css
.my-custom-class[data-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Default Behavior

When no `children` are provided, the component displays a default trigger text:
- Single file mode: "Selecciona el archivo"
- Multiple file mode: "Selecciona los archivos"

## Accessibility

- Uses semantic `button` element for the trigger
- Hides the actual file input with `aria-hidden="true"`
- Provides customizable `buttonAriaLabel` for screen readers
- Properly handles keyboard navigation
- Respects disabled state

## Notes

- The `onFileSelect` callback processes files asynchronously to generate previews and formatted data
- Image files receive base64 preview URLs automatically
- File size formatting is human-readable (KB, MB, GB)
- The component is client-side only (`'use client'` directive)
- Errors during file processing are logged to the console

## Related Utilities

- `fileListToFileData` - Converts FileList to FileData array
- `formatFileSize` - Formats bytes to human-readable sizes

## Browser Compatibility

This component relies on standard HTML5 File API and should work in all modern browsers.

