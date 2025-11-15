# Text Component

A flexible and reusable text component built with React and TypeScript, designed to render text content with a comprehensive set of styling options. The component supports polymorphic rendering, allowing you to use it as any HTML element while maintaining type safety.

## Overview

The `Text` component is a versatile UI element that renders text content with extensive customization options including alignment, size, weight, scheme, level, and more. It uses `class-variance-authority` for variant management and supports polymorphic rendering for maximum flexibility.

## Features

- 🎨 **Polymorphic rendering** - Render as any HTML element (p, h1, h2, span, etc.)
- 🔧 **TypeScript support** - Fully typed with TypeScript and generic polymorphism
- 📐 **Multiple alignment options** - Support for left, right, center, justify, start, end
- 📏 **Size variants** - From xs to 9xl for different text sizes
- 💪 **Weight variants** - From thin to black for various font weights
- 🎯 **Scheme variants** - Heading, paragraph, and label schemes with compound variants
- 🔳 **Level variants** - Small, medium, and large levels
- ✨ **Special modifiers** - Italic, underline, emphasis styling
- 🎨 **Custom color** - Support for custom CSS color values
- ⚠️ **Development warnings** - Console warnings for missing children
- ♿ **Accessible** - Built with semantic HTML and accessibility in mind

## Installation

```typescript
import { Text } from "@nebula-ui/components/atoms/texts/text";
```

## Basic Usage

```tsx
import { Text } from '@nebula-ui/components/atoms/texts/text';

// Basic paragraph text
<Text>This is a basic paragraph text</Text>

// Heading text
<Text scheme="heading" level="lg">
  Main Heading
</Text>

// Label text
<Text scheme="label" size="sm">
  Label Text
</Text>

// Custom styled text
<Text
  size="xl"
  weight="bold"
  customColor="#FF5733"
  align="center"
>
  Custom Styled Text
</Text>

// Render as different HTML element
<Text as="h2" scheme="heading" level="md">
  Subheading
</Text>
```

## Props

The `Text` component supports polymorphic props, meaning you can pass any props that the underlying HTML element would accept, plus the following specific props:

| Prop          | Type                                                                                                             | Default       | Description                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------- |
| `as`          | `ElementType`                                                                                                    | `'p'`         | The HTML element to render (e.g., 'p', 'h1', 'span', 'div')          |
| `children`    | `ReactNode \| ReactNode[]`                                                                                       | -             | Content to display                                                   |
| `className`   | `string`                                                                                                         | `''`          | Additional CSS classes to apply                                      |
| `align`       | `'left' \| 'right' \| 'center' \| 'justify' \| 'start' \| 'end'`                                                 | `'left'`      | Text alignment                                                       |
| `size`        | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl' \| '8xl' \| '9xl'` | `'base'`      | Text size variant                                                    |
| `weight`      | `'thin' \| 'extralight' \| 'light' \| 'normal' \| 'medium' \| 'semibold' \| 'bold' \| 'extrabold' \| 'black'`    | `'normal'`    | Font weight                                                          |
| `scheme`      | `'paragraph' \| 'heading' \| 'label'`                                                                            | `'paragraph'` | Text scheme (affects styling when combined with level)               |
| `level`       | `'sm' \| 'md' \| 'lg'`                                                                                           | `'md'`        | Text level (works with scheme for compound variants)                 |
| `italic`      | `boolean`                                                                                                        | `false`       | Render text in italic style                                          |
| `underline`   | `boolean`                                                                                                        | `false`       | Underline the text                                                   |
| `emphasis`    | `boolean`                                                                                                        | `false`       | Apply lighter font with gray color                                   |
| `customColor` | `string`                                                                                                         | -             | Custom CSS color value to override text color                        |
| `ref`         | `Ref<T>`                                                                                                         | -             | Ref to the underlying element                                        |
| `...rest`     | `ComponentProps<T>`                                                                                              | -             | All other standard HTML element props for the specified 'as' element |

## Text Variants

### Alignment Variants

The `align` prop controls text alignment:

```tsx
<Text align="left">Left aligned text</Text>
<Text align="center">Center aligned text</Text>
<Text align="right">Right aligned text</Text>
<Text align="justify">Justified text</Text>
<Text align="start">Start aligned text</Text>
<Text align="end">End aligned text</Text>
```

### Size Variants

The `size` prop controls text size:

```tsx
<Text size="xs">Extra small text</Text>
<Text size="sm">Small text</Text>
<Text size="base">Base text</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra large text</Text>
<Text size="2xl">2XL text</Text>
<Text size="3xl">3XL text</Text>
<Text size="4xl">4XL text</Text>
<Text size="5xl">5XL text</Text>
<Text size="6xl">6XL text</Text>
<Text size="7xl">7XL text</Text>
<Text size="8xl">8XL text</Text>
<Text size="9xl">9XL text</Text>
```

### Weight Variants

The `weight` prop controls font weight:

```tsx
<Text weight="thin">Thin text</Text>
<Text weight="extralight">Extra light text</Text>
<Text weight="light">Light text</Text>
<Text weight="normal">Normal text</Text>
<Text weight="medium">Medium text</Text>
<Text weight="semibold">Semibold text</Text>
<Text weight="bold">Bold text</Text>
<Text weight="extrabold">Extra bold text</Text>
<Text weight="black">Black text</Text>
```

### Scheme Variants

The `scheme` prop defines the text's purpose and affects styling when combined with `level`:

#### Heading Scheme

Perfect for headings and titles:

```tsx
// Small heading (font-bold text-lg)
<Text scheme="heading" level="sm">Small Heading</Text>

// Medium heading (font-semibold text-2xl)
<Text scheme="heading" level="md">Medium Heading</Text>

// Large heading (font-semibold text-[32px])
<Text scheme="heading" level="lg">Large Heading</Text>
```

#### Paragraph Scheme

Default scheme for body text:

```tsx
<Text scheme="paragraph">Regular paragraph text</Text>
```

#### Label Scheme

Great for labels and captions:

```tsx
// Small label (font-normal text-xs)
<Text scheme="label" level="sm">Small Label</Text>

// Medium label (font-semibold text-xs)
<Text scheme="label" level="md">Medium Label</Text>

// Large label (font-medium text-base)
<Text scheme="label" level="lg">Large Label</Text>
```

### Special Modifiers

The `italic`, `underline`, and `emphasis` props add special styling:

```tsx
// Italic text
<Text italic>Italic text</Text>

// Underlined text
<Text underline>Underlined text</Text>

// Emphasis text (lighter font with gray color)
<Text emphasis>Emphasis text</Text>

// Combined modifiers
<Text italic underline>
  Italic and underlined text
</Text>
```

## Examples

### Typography Hierarchy

```tsx
// Main heading
<Text as="h1" scheme="heading" level="lg">
  Welcome to Nebula UI
</Text>

// Subheading
<Text as="h2" scheme="heading" level="md">
  Getting Started
</Text>

// Body paragraph
<Text scheme="paragraph">
  This is the main content of your application.
  It provides context and detailed information.
</Text>

// Label
<Text scheme="label" level="sm">
  Last updated: Today
</Text>
```

### Responsive Typography

```tsx
// Responsive sizes
<Text size={{ base: "sm", md: "lg", lg: "xl" }}>
  Responsive text that scales with screen size
</Text>
```

### Custom Styling

```tsx
// Custom color
<Text customColor="#3B82F6" size="lg" weight="semibold">
  Blue custom text
</Text>

// With custom classes
<Text
  className="uppercase tracking-wide"
  weight="bold"
  size="xl"
>
  Styled Text
</Text>

// Custom element with custom styling
<Text
  as="span"
  className="inline-block px-2 py-1 bg-blue-100 rounded"
>
  Inline tag text
</Text>
```

### Polymorphic Rendering

```tsx
// Render as different HTML elements
<Text as="div">Div element</Text>
<Text as="span">Span element</Text>
<Text as="h1">H1 element</Text>
<Text as="h2">H2 element</Text>
<Text as="h3">H3 element</Text>

// With full props support
<Text
  as="a"
  href="https://example.com"
  className="hover:underline"
>
  Link text
</Text>

<Text
  as="button"
  onClick={() => console.log('Clicked!')}
  weight="semibold"
>
  Button text
</Text>
```

### Compound Examples

```tsx
// Heading with all properties
<Text
  as="h1"
  scheme="heading"
  level="lg"
  align="center"
  italic
  customColor="#FF5733"
>
  Centered Red Italic Heading
</Text>

// Emphasis paragraph
<Text
  scheme="paragraph"
  size="lg"
  emphasis
  align="justify"
>
  This is an emphasized paragraph with justified alignment
</Text>

// Bold underlined label
<Text
  scheme="label"
  level="md"
  weight="bold"
  underline
>
  Important Label
</Text>
```

## Compound Variants

The Text component includes smart compound variants that automatically apply specific styling when certain `level` and `scheme` combinations are used:

| Scheme    | Level | Applied Classes             | Use Case           |
| --------- | ----- | --------------------------- | ------------------ |
| heading   | sm    | `font-bold text-lg`         | Small headings     |
| heading   | md    | `font-semibold text-2xl`    | Medium headings    |
| heading   | lg    | `font-semibold text-[32px]` | Large headings     |
| label     | sm    | `font-normal text-xs`       | Small labels       |
| label     | md    | `font-semibold text-xs`     | Medium labels      |
| label     | lg    | `font-medium text-base`     | Large labels       |
| paragraph | -     | `font-medium text-sm`       | Regular paragraphs |

These compound variants ensure consistent typography across your application without manual styling.

## Styling

The component uses CSS modules and Tailwind CSS for styling:

### Base Styles

```css
.base {
  /* Applied to all text elements */
}
```

### Default Variants

The component applies the following default styles:

- **Text color**: `text-foreground` (uses theme foreground color)
- **Line height**: `leading-[100%]`
- **Tracking**: `tracking-0`
- **Text alignment**: `left`

### Custom Styling

You can customize the appearance using the `className` prop:

```tsx
// Add custom spacing
<Text className="mb-4">Text with bottom margin</Text>

// Add hover effects
<Text className="hover:text-blue-500 transition-colors">
  Hoverable text
</Text>

// Add animations
<Text className="animate-pulse">Pulsing text</Text>

// Combine with other utilities
<Text
  className="uppercase tracking-widest text-center"
  weight="bold"
>
  Styled Heading
</Text>
```

### Custom Color

The `customColor` prop allows you to override the default text color:

```tsx
// Using custom color
<Text customColor="#FF5733">Custom colored text</Text>

// Custom color with other props
<Text
  customColor="rgb(59, 130, 246)"
  size="xl"
  weight="bold"
>
  Styled text with custom color
</Text>
```

## Accessibility

The Text component is built with accessibility in mind:

- **Semantic HTML** - Uses appropriate HTML elements based on the `as` prop
- **Screen readers** - Content is properly announced
- **Keyboard navigation** - Supports all standard keyboard interactions
- **Proper headings** - Use `as="h1"`, `as="h2"`, etc. for proper heading hierarchy
- **Focus management** - Can receive focus when used with interactive elements

### Best Practices

1. **Use proper heading hierarchy** - Start with h1, then h2, h3, etc.
2. **Provide meaningful content** - Always include descriptive children
3. **Maintain contrast** - Ensure sufficient color contrast for readability
4. **Use semantic elements** - Choose appropriate `as` values for your content

## Development Warnings

The component includes development-time warnings to help catch common issues:

- **Missing children warning** - If no `children` prop is provided, a console warning will be displayed:
  ```
  Prop children is missing on Text component. This component can not be render appropiately.
  ```

This helps developers identify when text elements are being rendered without content, which could indicate a bug in the application logic.

## Best Practices

1. **Use appropriate schemes** - Choose `heading`, `paragraph`, or `label` based on content type
2. **Maintain consistent levels** - Use consistent levels across similar content
3. **Combine variants wisely** - Use compound variants when possible for consistency
4. **Consider readability** - Ensure adequate contrast and sizing
5. **Use semantic HTML** - Choose appropriate `as` values for your content
6. **Always provide children** - Avoid rendering empty text elements
7. **Test with screen readers** - Ensure accessibility for all users

## TypeScript Support

The component is fully typed with TypeScript and supports polymorphic typing:

```typescript
import type { TextProps, TextComponent } from '@nebula-ui/components/atoms/texts/text';

// Type-safe props
const textProps: TextProps<'h1'> = {
  as: 'h1',
  children: 'TypeScript Heading',
  scheme: 'heading',
  level: 'lg',
  className: 'custom-class',
};

// Generic component type
const Text: TextComponent<'h1'> = /* ... */;
```

### Polymorphic Typing

The component supports full polymorphic typing, meaning TypeScript will infer the correct props based on the `as` prop:

```typescript
// TypeScript knows these are valid anchor props
<Text
  as="a"
  href="https://example.com"
  rel="noopener noreferrer"
>
  Link
</Text>

// TypeScript knows these are valid button props
<Text
  as="button"
  onClick={() => {}}
  disabled
>
  Button
</Text>
```

## Dependencies

- **React** - Core React library
- **TypeScript** - For type definitions
- **class-variance-authority** - For variant management
- **@nebula-ui/utils/cn.util** - For className utility function
- **@nebula-ui/types** - For TypeScript type definitions

## File Structure

```
text/
├── README.md                      # This documentation
├── text.tsx                       # Main component implementation
├── text.props.ts                  # TypeScript prop definitions
├── text.style.ts                  # Variant configuration
├── text.module.css                # Component base styles
├── index.ts                       # Component exports
├── types/                         # Type definitions
│   ├── index.ts
│   ├── text-align.type.ts
│   ├── text-level.type.ts
│   ├── text-scheme.type.ts
│   ├── text-size.type.ts
│   └── text-weight.type.ts
└── variants/                      # Variant configurations
    ├── text-align.variant.ts
    ├── text-level.variant.ts
    ├── text-scheme.variant.ts
    ├── text-size.variant.ts
    └── text-weight.variant.ts
```

## Contributing

When contributing to this component:

1. Follow the existing code style and patterns
2. Update this documentation for any new features
3. Ensure TypeScript types are properly defined
4. Add new variants when appropriate
5. Test accessibility with screen readers
6. Verify responsive behavior across devices
7. Test polymorphic rendering for different HTML elements

## Related Components

- **Button** - For clickable elements with text
- **Link** - For navigation with text content
- **Label** - For form labels
- **Heading** - For document headings

## Changelog

### v1.1.0

- Added compound variants for heading and label schemes
- Enhanced documentation with comprehensive examples
- Added custom color support
- Improved TypeScript polymorphic typing

### v1.0.0

- Initial release
- Basic text component with variant support
- Polymorphic rendering
- TypeScript support
- CSS modules for styling
- Compound variant system
