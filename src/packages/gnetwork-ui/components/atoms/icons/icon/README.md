# Icon Component

A flexible and customizable icon component for the Nebula UI library that supports SVG icons with fallback handling, click interactions, and server-side rendering compatibility.

## Features

- 🎨 **Customizable**: Size, color, and styling options with CSS modules
- 🔄 **SSR Optimized**: Built for server-side rendering with efficient SVG parsing
- 🖱️ **Interactive**: Optional click handler support with keyboard navigation
- 🛡️ **Error Handling**: Graceful fallback for unknown icons
- 📱 **Accessible**: Built-in accessibility features with proper ARIA attributes
- ⚡ **Performance**: Optimized server-side rendering with no hydration issues

## Installation

```tsx
import { Icon } from "@nebula-ui/components/atoms/icons/icon";
```

## Basic Usage

```tsx
import { Icon } from '@nebula-ui/components/atoms/icons/icon';

// Basic icon
<Icon name="present_outlined" />

// With custom size and color
<Icon
  name="present_outlined"
  size={32}
  color="#ff6b6b"
/>

// With click handler
<Icon
  name="present_outlined"
  onClick={() => console.log('Icon clicked!')}
/>
```

## Props

| Prop        | Type                          | Default          | Description                                          |
| ----------- | ----------------------------- | ---------------- | ---------------------------------------------------- |
| `name`      | `keyof typeof iconDictionary` | **Required**     | The name of the icon from the icon dictionary        |
| `size`      | `number \| string`            | `24`             | Size of the icon in pixels                           |
| `color`     | `string`                      | `'currentColor'` | Color of the icon (uses CSS currentColor by default) |
| `className` | `string`                      | `''`             | Additional CSS classes to apply                      |
| `onClick`   | `() => void`                  | `undefined`      | Click handler function (makes icon clickable)        |

## Examples

### Different Sizes

```tsx
<Icon name="present_outlined" size={16} />
<Icon name="present_outlined" size={24} />
<Icon name="present_outlined" size={32} />
<Icon name="present_outlined" size="2rem" />
```

### Custom Colors

```tsx
<Icon name="present_outlined" color="#ff6b6b" />
<Icon name="present_outlined" color="var(--primary-color)" />
<Icon name="present_outlined" color="rgb(255, 107, 107)" />
```

### Clickable Icons

```tsx
<Icon
  name="present_outlined"
  onClick={() => handlePresentClick()}
  className="hover:opacity-80 transition-opacity"
/>
```

### With Custom Styling

```tsx
<Icon
  name="present_outlined"
  className="rounded-full bg-blue-100 p-2"
  size={40}
  color="#3b82f6"
/>
```

### Server-Side Rendering

The component is optimized for server-side rendering and automatically handles unknown icons with a fallback component:

```tsx
<Icon name="present_outlined" />
```

## Available Icons

The component uses an icon dictionary that contains SVG strings. Currently available icons:

- `present_outlined` - A gift/present icon with outlined style

To add new icons, update the `iconDictionary` in `dictionaries/icon.dictionary.ts`.

## Architecture

### Components

- **`Icon`**: Main component that renders SVG icons with server-side rendering support
- **`ButtonIcon`**: Wrapper component for clickable icons with keyboard navigation
- **`UnknownIcon`**: Fallback component for unknown icons

### Utilities

- **`parseSVGServer`**: Parses SVG strings to extract attributes like fill, stroke, viewBox, etc. for server-side rendering
- **`processIconClassNames`**: Processes and combines CSS classes for icon styling

## Error Handling

The component handles various error scenarios gracefully:

1. **Unknown Icon**: Shows `UnknownIcon` component when icon name is not found
2. **SSR Issues**: Returns `null` or fallback component during server-side rendering
3. **Invalid SVG**: Gracefully handles malformed SVG strings

## Accessibility

- Icons are marked with `aria-hidden="true"` to prevent screen reader confusion
- Clickable icons support keyboard navigation (Enter and Space keys)
- Each icon includes a descriptive title element

## Performance Considerations

- Server-side SVG parsing with `parseSVGServer` utility for optimal performance
- No client-side hydration mismatches due to server-side rendering approach
- Minimal re-renders with proper component structure
- CSS modules provide efficient styling without runtime overhead

## TypeScript Support

The component is fully typed with TypeScript:

### Main Interfaces

```tsx
interface IconProps {
  className?: string;
  color?: string;
  name: keyof typeof iconDictionary;
  onClick?: () => void;
  size?: number | string;
}

interface ButtonIconProps
  extends PropsWithChildren<
    Pick<IconProps, "className" | "onClick" | "size">
  > {}

interface ParseSVGAttributesInterface {
  fill: string;
  innerHTML: string;
  stroke: string;
  strokeLinecap: string;
  strokeLinejoin: string;
  strokeWidth: string;
  viewBox: string;
}
```

## Styling

The component uses CSS modules and Tailwind CSS classes for styling:

### CSS Modules

- **`icon.module.css`**: Base styles for the icon container
  - `base`: Inline-flex display with proper box-sizing and font inheritance
- **`button-icon.module.css`**: Styles for clickable icon buttons
  - `base`: Button reset styles with cursor pointer and proper focus handling

### Tailwind Integration

- Default classes: `items-center justify-center`
- Stroke color: `*:stroke-foreground` (uses CSS custom properties)
- Custom classes can be applied via the `className` prop and are processed by `processIconClassNames`

## Browser Support

- Modern browsers with SVG support
- React 18+
- TypeScript 4.5+

## Contributing

When adding new icons:

1. Add the SVG string to `iconDictionary`
2. Ensure the SVG follows the expected format with proper attributes
3. Test the icon with different sizes and colors
4. Update this documentation if needed
