# Card

A versatile and flexible card component that serves as a container for grouping related content with consistent styling. Built with class-variance-authority (CVA) for powerful variant management.

## Features

- 🎨 Consistent styling with rounded corners and padding
- 🔄 Flexible layout with vertical flex direction
- 🎯 Supports all standard HTML div attributes
- 🎨 Customizable via className prop
- 📦 Built with TypeScript for type safety
- 🔗 Supports React ref forwarding
- ⚡ Variant system powered by class-variance-authority (CVA)
- 📏 Full-width variant for responsive layouts
- 🧩 Modular architecture with separate style and variant files

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

### Full Width Card

```tsx
import { Card } from '@/packages/gnetwork-ui/components/atoms/cards/card';

export default function FullWidthCard() {
  return (
    <Card fullWidth>
      <h2>Full Width Card</h2>
      <p>This card spans the full width of its container</p>
    </Card>
  );
}
```

### Combining Variants with Custom Styling

```tsx
import { Card } from '@/packages/gnetwork-ui/components/atoms/cards/card';

export default function CombinedCard() {
  return (
    <Card fullWidth className="shadow-lg border-2 border-gray-200">
      <h2>Full Width with Custom Styles</h2>
      <p>This card uses both the fullWidth variant and custom classes</p>
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

The `Card` component accepts all standard HTML div element props through the `ReactDiv` type, plus variant-specific props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The content to be rendered inside the card |
| `className` | `string` | `''` | Additional CSS classes to apply to the card |
| `fullWidth` | `boolean` | `false` | Whether the card should span the full width of its container |
| `ref` | `Ref<HTMLDivElement>` | - | React ref object for the card element |
| `...rest` | `HTMLAttributes<HTMLDivElement>` | - | All other standard div attributes (onClick, onMouseEnter, etc.) |

## Default Styling

The Card component comes with the following default styles:

- **Border Radius**: 8px (from CSS module)
- **Display**: Flex with column direction (from CSS module)
- **Gap**: 16px between child elements (via Tailwind's `gap-4`)
- **Padding**: 16px (via Tailwind's `p-4`)
- **Background**: Uses `bg-chromatic` utility class (adapts to theme)
- **Box Sizing**: border-box
- **Width**: Fits content by default (`w-fit`), or full width when `fullWidth={true}`

All default styles are defined in the CVA configuration in `card.style.ts` and can be overridden via the `className` prop.

## Customization

You can customize the Card component in multiple ways:

### Override Default Styles

```tsx
<Card className="p-8! gap-8!">
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

## Variants

The Card component uses class-variance-authority (CVA) for managing style variants. This provides type-safe and consistent variant handling.

### Available Variants

#### fullWidth

Controls the width behavior of the card:
- `false` (default): Card fits content width (`w-fit`)
- `true`: Card spans full container width (`w-full`)

### Variant System Architecture

The component follows a modular architecture:

```
card/
├── card.tsx                          # Main component
├── card.props.ts                     # TypeScript interfaces and types
├── card.style.ts                     # CVA configuration and style logic
├── card.module.css                   # Base CSS styles
├── variants/                         # Individual variant definitions
│   └── card-fullwidth.variant.ts    # Full width variant configuration
└── README.md                         # Documentation
```

### Adding Custom Variants

To add a new variant, follow these steps:

1. **Create a variant file** in the `variants/` directory:

```tsx
// variants/card-elevation.variant.ts
export const cardElevation = {
  none: '',
  low: 'shadow-sm',
  medium: 'shadow-md',
  high: 'shadow-lg',
} as const;
```

2. **Update `card.style.ts`** to include the new variant:

```tsx
import { cardElevation } from './variants/card-elevation.variant';

export const cardVariants = cva([styles.base, 'bg-chromatic gap-4 p-4'], {
  variants: {
    fullWidth: cardFullWidth,
    elevation: cardElevation, // Add new variant
  },
  compoundVariants: [],
  defaultVariants: {
    fullWidth: false,
    elevation: 'none', // Set default
  },
});
```

3. **Update `card.props.ts`** to include the variant type:

```tsx
export interface CardVariants extends VariantProps<typeof cardVariants> {
  className?: string;
  fullWidth?: boolean;
  elevation?: 'none' | 'low' | 'medium' | 'high'; // Add variant prop
}
```

4. **Pass the prop in `card.tsx`**:

```tsx
export const Card = ({
  className = '',
  children,
  fullWidth = false,
  elevation = 'none', // Add prop
  ref,
  ...rest
}: Readonly<CardProps>) => {
  const classes = getCardClassNames({ className, fullWidth, elevation });
  // ...
};
```

## Related Components

- **CardHeader**: For standardized card headers
- **CardFooter**: For standardized card footers
- **CardContent**: For card content sections

## Technical Details

### Component Structure

The Card component is built with a separation of concerns:

- **`card.tsx`**: Main component logic and rendering
- **`card.props.ts`**: TypeScript interfaces using CVA's `VariantProps`
- **`card.style.ts`**: Style configuration with `cva()` and helper functions
- **`card.module.css`**: Base CSS module styles
- **`variants/`**: Individual variant definitions for maintainability

### Style Resolution

The component uses a cascading style resolution:

1. Base styles from `card.module.css`
2. Default Tailwind classes: `bg-chromatic gap-4 p-4`
3. Variant classes based on props
4. Custom `className` prop (can override defaults)

The `getCardClassNames` function merges all styles using the `cn` utility, ensuring proper class name precedence.

## Notes

- The component uses the `cn` utility function for className merging
- The `bg-chromatic` class is a custom utility that adapts to the current theme
- All Tailwind CSS utility classes are supported through the `className` prop
- Variant definitions are kept in separate files for better maintainability
- The CVA system ensures type-safe variant props with autocomplete support

