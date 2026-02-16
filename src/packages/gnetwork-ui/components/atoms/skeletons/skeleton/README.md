# Skeleton Component

A flexible and reusable skeleton loader component that provides a loading placeholder with a pulsing animation. Perfect for improving perceived performance and user experience during content loading states.

## Overview

The `Skeleton` component is a simple yet powerful loading indicator that displays an animated placeholder. It accepts all standard HTML div attributes, making it highly customizable and suitable for various use cases where content is being loaded asynchronously.

## Features

- ⚡ **Lightweight** - Minimal footprint with no external dependencies
- 🎨 **Animated** - Built-in pulse animation for visual feedback
- 🔧 **Flexible** - Accepts all standard HTML div attributes
- 📐 **Customizable** - Full control over styling via className prop
- 🎯 **TypeScript** - Fully typed with TypeScript support
- 🔗 **Ref Forwarding** - Supports React ref forwarding
- 📱 **Responsive** - Works seamlessly across all screen sizes
- 🎨 **Theme Aware** - Uses neutral colors that work in light and dark themes

## Installation

This component is part of the `gnetwork-ui` package. Import it from the atoms directory:

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';
```

## Usage

### Basic Usage

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function Example() {
  return <Skeleton />;
}
```

### Custom Dimensions

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function CustomSkeleton() {
  return (
    <Skeleton className="h-20 w-64" />
  );
}
```

### Multiple Skeletons

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function SkeletonList() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
```

### Card Skeleton

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function CardSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}
```

### Avatar Skeleton

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function AvatarSkeleton() {
  return (
    <Skeleton className="h-12 w-12 rounded-full" />
  );
}
```

### Loading State Pattern

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';
import { useState, useEffect } from 'react';

export default function ContentLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    // Simulate async data loading
    setTimeout(() => {
      setContent('Loaded content');
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  return <div>{content}</div>;
}
```

### With Suspense

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';
import { Suspense } from 'react';

function AsyncContent() {
  // Component that loads data asynchronously
  return <div>Async content</div>;
}

export default function SuspenseExample() {
  return (
    <Suspense fallback={<Skeleton className="h-32 w-full" />}>
      <AsyncContent />
    </Suspense>
  );
}
```

### Custom Styling

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function CustomStyledSkeleton() {
  return (
    <Skeleton
      className="h-16 w-16 rounded-full bg-blue-200 dark:bg-blue-800"
    />
  );
}
```

### With Ref

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';
import { useRef, useEffect } from 'react';

export default function SkeletonWithRef() {
  const skeletonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skeletonRef.current) {
      console.log('Skeleton element:', skeletonRef.current);
    }
  }, []);

  return <Skeleton ref={skeletonRef} className="h-20 w-full" />;
}
```

## Props

The `Skeleton` component accepts all standard HTML div element props through the `ReactDiv` type (excluding `children`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes to apply to the skeleton |
| `ref` | `Ref<HTMLDivElement>` | - | React ref object for the skeleton element |
| `...rest` | `HTMLAttributes<HTMLDivElement>` | - | All other standard div attributes (onClick, onMouseEnter, style, etc.) |

**Note**: The component does not accept a `children` prop as it's designed to be a self-contained loading placeholder.

## Default Styling

The Skeleton component comes with the following default styles:

- **Animation**: `animate-pulse` - Provides a smooth pulsing animation
- **Background**: `bg-neutral-200` - Neutral gray background color
- **Minimum Height**: `min-h-10` - Ensures a minimum height of 2.5rem (40px)
- **Border Radius**: `rounded-lg` - Rounded corners (0.5rem / 8px)
- **Width**: `w-full` - Full width of the container
- **Display**: `flex` - Flexbox display (from CSS module)
- **Box Sizing**: `border-box` - Includes padding and border in width calculations
- **Border**: `none` - No border
- **Outline**: `none` - No outline
- **Font Family**: `inherit` - Inherits font family from parent

All default styles are defined in the component and CSS module, and can be overridden via the `className` prop.

## Customization

You can customize the Skeleton component in multiple ways:

### Override Dimensions

```tsx
// Custom height and width
<Skeleton className="h-24 w-48" />

// Square skeleton
<Skeleton className="h-16 w-16" />

// Full width with custom height
<Skeleton className="h-8 w-full" />
```

### Override Colors

```tsx
// Custom background color
<Skeleton className="bg-gray-300 dark:bg-gray-700" />

// Colored skeleton
<Skeleton className="bg-blue-200 dark:bg-blue-800" />
```

### Override Border Radius

```tsx
// Circular skeleton
<Skeleton className="rounded-full h-12 w-12" />

// Square skeleton
<Skeleton className="rounded-none" />

// Custom border radius
<Skeleton className="rounded-xl" />
```

### Disable Animation

```tsx
// Remove pulse animation
<Skeleton className="animate-none" />
```

### Custom Animation

```tsx
// Use different animation
<Skeleton className="animate-bounce" />

// Custom animation speed
<Skeleton className="animate-pulse duration-1000" />
```

## Accessibility

The Skeleton component is built with accessibility in mind:

- **Semantic HTML** - Renders as a `<div>` element
- **ARIA Support** - Can be enhanced with ARIA attributes for better screen reader support
- **Loading Indicators** - Should be used with proper loading states and ARIA live regions

### Best Practices for Accessibility

1. **Use ARIA Labels**: Add descriptive labels for screen readers:

```tsx
<Skeleton
  aria-label="Loading content"
  className="h-20 w-full"
/>
```

2. **Combine with ARIA Live Regions**: Announce loading states:

```tsx
<div aria-live="polite" aria-busy="true">
  <Skeleton className="h-20 w-full" />
</div>
```

3. **Provide Context**: Use descriptive text or labels near skeletons:

```tsx
<div>
  <p className="sr-only">Loading user profile</p>
  <Skeleton className="h-32 w-full" />
</div>
```

## Examples

### Profile Card Skeleton

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function ProfileCardSkeleton() {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}
```

### Table Skeleton

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function TableSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton className="h-10 w-10 rounded" />
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-20" />
        </div>
      ))}
    </div>
  );
}
```

### Article Skeleton

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function ArticleSkeleton() {
  return (
    <article className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <div className="flex items-center space-x-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-64 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </article>
  );
}
```

### Form Skeleton

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function FormSkeleton() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-10 w-32" />
    </form>
  );
}
```

### Grid Skeleton

```tsx
import { Skeleton } from '@/packages/gnetwork-ui/components/atoms/skeletons/skeleton';

export default function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}
```

## Technical Details

### Component Structure

The Skeleton component is built with a simple, focused architecture:

- **`skeleton.tsx`**: Main component implementation
- **`skeleton.props.ts`**: TypeScript prop definitions
- **`skeleton.module.css`**: Base CSS module styles
- **`index.ts`**: Component exports

### Style Resolution

The component uses a cascading style resolution:

1. Base styles from `skeleton.module.css` (display, box-sizing, etc.)
2. Default Tailwind classes: `animate-pulse bg-neutral-200 min-h-10 rounded-lg w-full`
3. Custom `className` prop (can override defaults)

The `cn` utility function merges all styles, ensuring proper class name precedence.

### Animation

The skeleton uses Tailwind's `animate-pulse` utility, which creates a smooth opacity animation that pulses between 100% and 50% opacity. This provides a subtle, non-distracting loading indicator.

### Performance

- **Zero Dependencies**: Pure React component with no external dependencies
- **Minimal Re-renders**: Only re-renders when props change
- **Efficient**: Small bundle size with optimized CSS
- **SSR Friendly**: Can be rendered on the server without issues

## Best Practices

1. **Match Content Shape**: Design skeletons that match the shape of the content being loaded
2. **Consistent Sizing**: Use consistent skeleton sizes across similar content areas
3. **Loading States**: Always combine with proper loading state management
4. **Timeout Handling**: Don't show skeletons indefinitely; implement timeout handling
5. **Accessibility**: Add ARIA labels and live regions for screen readers
6. **Animation**: The default pulse animation is subtle; avoid adding additional animations
7. **Theme Awareness**: The neutral gray works in both themes, but consider your design system

## Use Cases

1. **Initial Page Load**: Display while content is being fetched
2. **Code Splitting**: Show while lazy-loaded components are fetched
3. **Async Data Loading**: Display during API calls
4. **Network Delays**: Provide visual feedback during slow network conditions
5. **Suspense Boundaries**: Use as a fallback in React Suspense boundaries
6. **Form Loading**: Show while form data is being loaded
7. **List Loading**: Display multiple skeletons while list data loads
8. **Image Loading**: Use as placeholder while images load

## Related Components

- **BrandSkeleton**: Specialized skeleton for the GNetwork brand logo
- Other skeleton components in the `/skeletons` directory

## Notes

- The component does not accept `children` as it's designed to be a self-contained placeholder
- The default `w-full` width can be overridden with custom width classes
- The `min-h-10` ensures skeletons are always visible, even when empty
- The neutral gray color (`bg-neutral-200`) works well in both light and dark themes
- Can be easily customized with Tailwind utility classes
- The pulse animation is subtle and non-distracting
- Works seamlessly with React Suspense and loading state patterns

