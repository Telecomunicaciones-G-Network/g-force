# Button Component

Versatile and accessible Button component built with React, TypeScript, and Class Variance Authority (CVA). Provides a consistent interface with support for multiple variants, states, icons, and composition via Radix UI Slot.

## Features

- ✨ **Multiple variants**: Customizable colors, sizes, and schemes
- 🎨 **Theming**: Full support for light/dark themes
- ♿ **Accessibility**: Meets WCAG standards
- 🔄 **Loading state**: Built-in spinner indicator
- 🎯 **Flexible composition**: Support for `asChild` via Radix UI Slot
- 🖼️ **Icons**: Support for left and right icons
- 📱 **Responsive**: Full width option
- 🎭 **States**: Disabled, loading, static, focus, hover

## Installation

```tsx
import { Button } from "@/packages/gnetwork-ui/components/molecules/buttons/button";
```

## Basic Usage

```tsx
export default function Example() {
  return <Button onClick={() => console.log("Clicked!")}>Click me</Button>;
}
```

## API / Props

| Prop        | Type                                  | Default     | Description                                          |
| ----------- | ------------------------------------- | ----------- | ---------------------------------------------------- |
| `children`  | `ReactNode`                           | -           | **Required.** Button content                         |
| `type`      | `"button"` \| `"submit"` \| `"reset"` | `"button"`  | HTML button type                                     |
| `color`     | `ButtonColorType`                     | `"default"` | Button color variant                                 |
| `size`      | `ButtonSizeType`                      | `"default"` | Button size                                          |
| `scheme`    | `ButtonSchemeType`                    | `"default"` | Button visual scheme                                 |
| `fullWidth` | `boolean`                             | `false`     | Whether the button takes full width of its container |
| `isStatic`  | `boolean`                             | `false`     | Disables hover/focus effects (static appearance)     |
| `loading`   | `boolean`                             | `false`     | Shows loading spinner                                |
| `disabled`  | `boolean`                             | `false`     | Disables the button                                  |
| `asChild`   | `boolean`                             | `false`     | Renders as a child element (composition with Slot)   |
| `leftIcon`  | `ReactNode`                           | -           | Icon to display on the left side                     |
| `rightIcon` | `ReactNode`                           | -           | Icon to display on the right side                    |
| `className` | `string`                              | -           | Additional CSS classes                               |
| `onClick`   | `(event: MouseEvent) => void`         | -           | Click event handler                                  |
| `ref`       | `React.Ref`                           | -           | Reference to the button element                      |

## Variants

### Colors

| Value     | Description                         |
| --------- | ----------------------------------- |
| `default` | Default design system color         |
| `gray`    | Gray variant with inverted text     |
| `red`     | Red variant for destructive actions |

```tsx
<Button color="default">Default Button</Button>
<Button color="gray">Gray Button</Button>
<Button color="red">Destructive Action</Button>
```

### Sizes

| Value     | Description                         |
| --------- | ----------------------------------- |
| `default` | Standard size (40px minimum height) |
| `medium`  | Medium size with extended padding   |
| `big`     | Large size (64px minimum height)    |

```tsx
<Button size="default">Default Size</Button>
<Button size="medium">Medium Size</Button>
<Button size="big">Big Size</Button>
```

### Schemes

| Value     | Description                                  |
| --------- | -------------------------------------------- |
| `default` | Default solid style                          |
| `outline` | Style with border and transparent background |

```tsx
<Button scheme="default">Solid Button</Button>
<Button scheme="outline">Outline Button</Button>
```

## Examples

### With Icons

```tsx
import { ChevronRight, Download } from "lucide-react";

function ExampleWithIcons() {
  return (
    <>
      <Button leftIcon={<Download />}>Download File</Button>

      <Button rightIcon={<ChevronRight />}>Continue</Button>
    </>
  );
}
```

### Loading State

```tsx
function ExampleLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await submitForm();
    setIsLoading(false);
  };

  return (
    <Button loading={isLoading} onClick={handleSubmit}>
      Submit Form
    </Button>
  );
}
```

### Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

### Composition with asChild

Useful for creating buttons that work as links:

```tsx
import Link from "next/link";

function ExampleAsChild() {
  return (
    <Button asChild>
      <Link href="/dashboard">Go to Dashboard</Link>
    </Button>
  );
}
```

### Disabled Button

```tsx
<Button disabled>Disabled Button</Button>
```

### Static Button (no hover effects)

```tsx
<Button isStatic>Static Button</Button>
```

### Variant Combinations

```tsx
function ComplexExample() {
  return (
    <>
      {/* Gray outline button */}
      <Button color="gray" scheme="outline">
        Cancel
      </Button>

      {/* Red outline destructive button */}
      <Button color="red" scheme="outline" size="medium">
        Delete Account
      </Button>

      {/* Large default button with icons */}
      <Button size="big" leftIcon={<CheckIcon />} rightIcon={<ArrowIcon />}>
        Complete Setup
      </Button>
    </>
  );
}
```

### Forms

```tsx
function FormExample() {
  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" fullWidth>
        Submit
      </Button>

      <Button type="reset" scheme="outline" color="gray">
        Reset
      </Button>
    </form>
  );
}
```

## Technologies

- **React 18+**: UI framework
- **TypeScript**: Static typing
- **Class Variance Authority (CVA)**: Variant system
- **Radix UI Slot**: Component composition
- **CSS Modules**: Isolated styles

## Accessibility

The Button component implements accessibility best practices:

- ✅ Full keyboard support
- ✅ Visible focus states
- ✅ Appropriate ARIA attributes
- ✅ Properly handled disabled states
- ✅ WCAG AA/AAA color contrast

## Development Notes

- The component shows a console warning if `children` is not provided
- Icons should be SVG with 24x24px size (size-6)
- The `loading` state hides button content and shows a spinner
- Icons are rendered using Radix UI `Slot` for flexibility

## File Structure

```
button/
├── button.tsx              # Main component
├── button.props.ts         # TypeScript definitions
├── button.style.ts         # Variants and styles with CVA
├── button.hook.tsx         # Custom logic (onClick handler)
├── button.module.css       # CSS styles
├── index.ts                # Exports
├── README.md               # This documentation
├── types/                  # TypeScript types
│   ├── button-color.type.ts
│   ├── button-scheme.type.ts
│   ├── button-size.type.ts
│   └── index.ts
└── variants/               # Variant definitions
    ├── button-color.variant.ts
    ├── button-scheme.variant.ts
    ├── button-size.variant.ts
    ├── button-fullwidth.variant.ts
    └── button-static.variant.ts
```

## License

This component is part of the G-Network UI Library.
