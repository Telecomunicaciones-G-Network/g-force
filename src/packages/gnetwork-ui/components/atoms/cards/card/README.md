# Card

A versatile and flexible card component that serves as a container for grouping related content with consistent styling.

## Features

- 🎨 Consistent styling with rounded corners and padding
- 🔄 Flexible layout with vertical flex direction
- 🎯 Supports all standard HTML div attributes
- 🎨 Customizable via className prop
- 📦 Built with TypeScript for type safety
- 🔗 Supports React ref forwarding

## Installation

This component is part of the `gnetwork-ui` package. Import it from the atoms directory:

```tsx
import { Card } from '@/packages/gnetwork-ui/components/atoms/cards/card';
```

## Usage

### Basic Usage

```tsx
import { Card } from '@/packages/gnetwork-ui/components/atoms/cards/card';

export default function Example() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card content goes here</p>
    </Card>
  );
}
```

### With Custom Styling

```tsx
import { Card } from '@/packages/gnetwork-ui/components/atoms/cards/card';

export default function CustomCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow">
      <h3>Custom Styled Card</h3>
      <p>This card has additional styling</p>
    </Card>
  );
}
```

### With Click Handler

```tsx
import { Card } from '@/packages/gnetwork-ui/components/atoms/cards/card';

export default function ClickableCard() {
  const handleClick = () => {
    console.log('Card clicked!');
  };

  return (
    <Card onClick={handleClick} className="cursor-pointer">
      <h3>Clickable Card</h3>
      <p>Click me!</p>
    </Card>
  );
}
```

### With Ref

```tsx
import { Card } from '@/packages/gnetwork-ui/components/atoms/cards/card';
import { useRef } from 'react';

export default function CardWithRef() {
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollToCard = () => {
    cardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card ref={cardRef}>
      <h3>Card with Ref</h3>
      <p>This card can be scrolled into view</p>
    </Card>
  );
}
```

## Props

The `Card` component accepts all standard HTML div element props through the `ReactDiv` type.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The content to be rendered inside the card |
| `className` | `string` | `''` | Additional CSS classes to apply to the card |
| `ref` | `Ref<HTMLDivElement>` | - | React ref object for the card element |
| `...rest` | `HTMLAttributes<HTMLDivElement>` | - | All other standard div attributes (onClick, onMouseEnter, etc.) |

## Default Styling

The Card component comes with the following default styles:

- **Border Radius**: 8px
- **Display**: Flex (column direction)
- **Gap**: 16px (1rem)
- **Padding**: 16px (via Tailwind's `p-4`)
- **Background**: Uses `bg-chromatic` utility class
- **Box Sizing**: border-box

## Customization

You can customize the Card component in multiple ways:

### Override Default Styles

```tsx
<Card className="!p-8 !gap-8">
  {/* Larger padding and gap */}
</Card>
```

### Add Background Colors

```tsx
<Card className="bg-blue-50 dark:bg-blue-900">
  {/* Custom background for light and dark mode */}
</Card>
```

### Add Borders

```tsx
<Card className="border-2 border-gray-200">
  {/* Add custom border */}
</Card>
```

## Accessibility

- The Card component renders as a semantic `<div>` element
- When used as an interactive element, ensure proper accessibility attributes are added:
  - Add `role="button"` and `tabIndex={0}` for clickable cards
  - Add appropriate `aria-label` or `aria-labelledby` attributes
  - Handle keyboard events (onKeyDown) for keyboard navigation

### Accessible Clickable Card Example

```tsx
<Card
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  aria-label="Select this option"
  className="cursor-pointer focus:ring-2 focus:ring-blue-500"
>
  <h3>Interactive Card</h3>
</Card>
```

## Related Components

- **CardHeader**: For standardized card headers
- **CardFooter**: For standardized card footers
- **CardContent**: For card content sections

## Notes

- The component uses the `cn` utility function for className merging
- The `bg-chromatic` class is a custom utility that adapts to the current theme
- All Tailwind CSS utility classes are supported through the `className` prop

