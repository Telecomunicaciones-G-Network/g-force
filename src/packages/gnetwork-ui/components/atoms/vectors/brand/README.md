# Brand Component

A customizable SVG logo component for the GNetwork brand. This component renders the GNetwork logo as an SVG with support for theme modes (dark/light), custom sizing, and accessibility features.

## Features

- 🌓 **Theme Modes**: Support for dark and light mode variants
- 📏 **Flexible Sizing**: Configurable width and height
- 🔄 **Rotation Support**: Optional rotation transformation
- ♿ **Accessibility**: Built-in ARIA labels and semantic markup
- 🎯 **TypeScript**: Fully typed with comprehensive prop interfaces
- 🎨 **CSS Modules**: Scoped styling with CSS modules
- ⚡ **Client-Side Rendering**: Optimized for Next.js client components

## Usage

### Basic Usage

```tsx
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";
import { BrandMode } from "@/packages/gnetwork-ui/components/atoms/vectors/brand/enum/brand-mode.enum";

export function MyComponent() {
  return <Brand mode={BrandMode.LIGHT} />;
}
```

### With Dark Mode

```tsx
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";
import { BrandMode } from "@/packages/gnetwork-ui/components/atoms/vectors/brand/enum/brand-mode.enum";

export function MyComponent() {
  return <Brand mode={BrandMode.DARK} />;
}
```

### Using Mode Type (String Literal)

```tsx
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";

export function MyComponent() {
  return <Brand mode="light" />;
}
```

### With Custom Styling and Rotation

```tsx
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";

export function MyComponent() {
  return (
    <Brand
      mode="dark"
      width="120px"
      height="30px"
      rotate={45}
      className="my-brand-logo"
      ariaLabel="GNetwork Brand Logo"
    />
  );
}
```

## Props

| Prop        | Type                | Default      | Required | Description                            |
| ----------- | ------------------- | ------------ | -------- | -------------------------------------- |
| `mode`      | `"dark" \| "light"` | -            | ✅ Yes   | Theme mode for the logo                |
| `ariaLabel` | `string`            | `'GNetwork'` | No       | Accessibility label for screen readers |
| `height`    | `string`            | `'129px'`    | No       | Height of the SVG logo                 |
| `width`     | `string`            | `'166px'`    | No       | Width of the SVG logo                  |
| `rotate`    | `number`            | `undefined`  | No       | Rotation angle in degrees              |

### Inherited Props

The component extends `ReactSVG` type (excluding `color`), which includes all standard SVG element props such as:

- `className` - Additional CSS classes
- `ref` - Ref to the SVG element
- `onClick` - Click event handler
- `style` - Inline styles
- `viewBox`
- `xmlns`
- `role`
- `fill`
- And other SVG attributes

## Styling

The component uses CSS modules for styling. The base styles include:

```css
.base {
  box-sizing: border-box;
  display: flex;
  height: auto;
  max-width: 100%;
}
```

### CSS Classes

- `.base`: The main container wrapper for the SVG

### Custom Styling

You can apply custom styles through the `className` prop:

```tsx
<Brand mode="light" className="my-custom-brand-style" />
```

The component applies the `*:fill-foreground` class to all child elements, providing a default foreground color for the logo paths that adapts to your theme.

## Accessibility

The component is built with accessibility in mind:

- **Semantic Markup**: Uses proper SVG structure with `role="img"`
- **ARIA Labels**: Configurable `ariaLabel` prop for screen readers (defaults to "GNetwork")
- **Focus Management**: Inherits focus behavior from SVG element
- **Theme Support**: Dark and light modes ensure proper contrast in different themes

## Examples

### Different Sizes

```tsx
// Small logo
<Brand mode="light" width="80px" height="60px" />

// Large logo
<Brand mode="dark" width="200px" height="150px" />

// Responsive logo
<Brand mode="light" width="100%" height="auto" />
```

### Theme Variants

```tsx
// Light theme
<Brand mode="light" />

// Dark theme
<Brand mode="dark" />
```

### Interactive Logo

```tsx
<Brand
  mode="light"
  onClick={() => console.log("Logo clicked!")}
  ariaLabel="Click to go home"
/>
```

### With Rotation

```tsx
// Rotate 45 degrees
<Brand mode="dark" rotate={45} />

// Rotate 90 degrees
<Brand mode="light" rotate={90} />
```

### Dynamic Theme Based on User Preference

```tsx
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";
import { useTheme } from "next-themes";

export function ThemedBrand() {
  const { theme } = useTheme();

  return <Brand mode={theme === "dark" ? "dark" : "light"} />;
}
```

## Technical Details

- **Dual Mode Support**: Renders different SVG paths for dark and light modes
- **Default Dimensions**: 166px width × 129px height (optimized for the GNetwork logo)
- **File Size**: Lightweight SVG implementation with optimized paths
- **Browser Support**: All modern browsers that support SVG
- **Performance**: Optimized SVG paths for minimal file size
- **Client-Side**: Marked as `'use client'` for Next.js compatibility

## Mode Validation

The component includes built-in validation for the required `mode` prop. If the mode prop is missing, the component will:

1. Log a warning to the console: `"Prop mode is missing on Brand component. This component can not be render appropiately."`
2. Return `null` and not render anything

This ensures that the logo always renders with the correct theme variant.

## Dependencies

- `@gnetwork-ui/types`: For TypeScript type definitions (ReactSVG)
- `@gnetwork-ui/utils/cn.util`: For className utility function
- `@gnetwork-ui/components/atoms/vectors/brand/enum/brand-mode.enum`: BrandMode enum

## Type Definitions

The component exports both an enum and a type for the mode prop:

```tsx
// Using enum (recommended for consistency)
import { BrandMode } from "@/packages/gnetwork-ui/components/atoms/vectors/brand/enum/brand-mode.enum";
<Brand mode={BrandMode.DARK} />

// Using string literal type
<Brand mode="dark" />
```

## Notes

- The component is marked as `'use client'` for Next.js compatibility
- The `mode` prop is **required** - the component will not render without it
- Different SVG paths are rendered for dark and light modes
- The component maintains the original aspect ratio of the GNetwork logo
- Rotation is applied to the container div, not the SVG itself
- The component uses `cn` utility for className concatenation
- Default fill color is applied via CSS class `*:fill-foreground`
- The foreground color automatically adapts based on your theme configuration
