# BackButton

A specialized button component designed for navigation purposes, displaying a left-pointing arrow icon. This component is optimized for mobile layouts and provides a consistent back navigation experience.

## Features

- 🎯 **Mobile-first**: Automatically hidden on large screens (lg breakpoint and above)
- 🎨 **Transparent Design**: Built with a transparent background for flexible placement
- 🔒 **Static Styling**: Non-interactive visual states (no hover/focus effects)
- ⚡ **Icon-based**: Uses Material Design's back arrow icon
- 🔧 **Customizable**: Accepts all standard button props except predefined ones

## Usage

### Basic Example

```tsx
import { BackButton } from '@/packages/gnetwork-ui/components/organisms/buttons/back-button';

export const MyComponent = () => {
  const handleBack = () => {
    // Your navigation logic
    window.history.back();
  };

  return <BackButton onClick={handleBack} />;
};
```

### With Router (Next.js)

```tsx
'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/packages/gnetwork-ui/components/organisms/buttons/back-button';

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <BackButton onClick={() => router.back()} />
      <h1>Page Title</h1>
    </header>
  );
};
```

### Custom Styling

```tsx
<BackButton
  className="absolute left-4 top-4"
  onClick={handleBack}
  aria-label="Go back to previous page"
/>
```

## Props

The `BackButton` component accepts all standard button HTML attributes and `ButtonProps` from the base Button component, **except** the following props which are predefined:

### Omitted Props

| Prop | Reason |
|------|--------|
| `children` | Component uses a fixed icon |
| `color` | Fixed to `"transparent"` |
| `isStatic` | Always `true` |
| `leftIcon` | Icon is built-in |
| `rightIcon` | Icon is built-in |

### Available Props

All other `ButtonProps` are available, including:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `function` | - | Click event handler |
| `disabled` | `boolean` | `false` | Disable button interaction |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `asChild` | `boolean` | `false` | Render as child component (Radix Slot) |
| `size` | `ButtonSize` | - | Button size variant |
| `fullWidth` | `boolean` | - | Make button full width |
| `loading` | `boolean` | `false` | Show loading state |
| `scheme` | `string` | - | Color scheme variant |

## Styling

The component comes with predefined styles:

- **Padding**: `p-0` (no padding)
- **Icon Size**: `24px × 24px` (size-6)
- **Visibility**: Hidden on `lg` breakpoint and above
- **Color**: Transparent background
- **Icon**: Material Design back arrow (`MdArrowBack`)

### Responsive Behavior

```css
/* Mobile (default) */
.back-button { display: block; }

/* Desktop (lg breakpoint and above) */
@media (min-width: 1024px) {
  .back-button { display: none; }
}
```

## Accessibility

### Best Practices

Always provide an accessible label for screen readers:

```tsx
<BackButton
  onClick={handleBack}
  aria-label="Navigate to previous page"
  title="Back"
/>
```

### Keyboard Navigation

The component inherits full keyboard accessibility from the base Button component:
- **Space/Enter**: Triggers the onClick handler
- **Tab**: Focus navigation support

## Dependencies

- `react-icons/md` - Material Design icons
- `@radix-ui/react-slot` - Polymorphic component support (via Button)
- Base `Button` component from molecules

## Component Structure

```
BackButton (organism)
└── Button (molecule)
    └── MdArrowBack (icon)
```

## Examples

### With Link Behavior

```tsx
import Link from 'next/link';
import { BackButton } from '@/packages/gnetwork-ui/components/organisms/buttons/back-button';

export const NavigationHeader = () => (
  <BackButton asChild>
    <Link href="/dashboard">Back to Dashboard</Link>
  </BackButton>
);
```

### Conditional Rendering

```tsx
'use client';

import { usePathname } from 'next/navigation';
import { BackButton } from '@/packages/gnetwork-ui/components/organisms/buttons/back-button';

export const ConditionalBackButton = () => {
  const pathname = usePathname();
  const isRootPath = pathname === '/';

  if (isRootPath) return null;

  return <BackButton onClick={() => window.history.back()} />;
};
```

## Notes

- The component is specifically designed for mobile navigation patterns
- For desktop layouts, consider using a different navigation approach
- The transparent background allows it to blend with various header designs
- The static state (`isStatic`) means no visual feedback on hover/focus - ideal for minimal designs

## Related Components

- [`Button`](../../molecules/buttons/button/README.md) - Base button component
- Other navigation components in the organisms/buttons directory

