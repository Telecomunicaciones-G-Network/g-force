# BrandSkeleton Component

A skeleton loader component for the GNetwork brand logo. This component provides a loading placeholder that mimics the shape and structure of the GNetwork logo, improving the perceived loading performance and user experience.

## Features

- 🎨 **Static SVG**: Optimized SVG skeleton with consistent styling
- ⚡ **Lightweight**: Minimal footprint with no dependencies
- 📱 **Responsive**: Maintains aspect ratio across different screen sizes
- ♿ **Accessible**: Includes proper ARIA labels for screen readers
- 🔄 **Loading State**: Perfect for async brand logo loading scenarios
- 🎯 **TypeScript**: Fully typed component (no props required)

## Usage

### Basic Usage

```tsx
import { BrandSkeleton } from "@/packages/gnetwork-ui/components/atoms/skeletons/brand-skeleton";

export function MyComponent() {
  return <BrandSkeleton />;
}
```

### While Loading Brand Component

```tsx
import { BrandSkeleton } from "@/packages/gnetwork-ui/components/atoms/skeletons/brand-skeleton";
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";
import { Suspense } from "react";

export function MyComponent() {
  return (
    <Suspense fallback={<BrandSkeleton />}>
      <Brand mode="light" />
    </Suspense>
  );
}
```

### Conditional Rendering

```tsx
import { BrandSkeleton } from "@/packages/gnetwork-ui/components/atoms/skeletons/brand-skeleton";
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";

export function MyComponent({ isLoading }: { isLoading: boolean }) {
  if (isLoading) {
    return <BrandSkeleton />;
  }

  return <Brand mode="light" />;
}
```

### In a Loading State

```tsx
import { BrandSkeleton } from "@/packages/gnetwork-ui/components/atoms/skeletons/brand-skeleton";
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";
import { useEffect, useState } from "react";

export function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async operation
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return isLoading ? <BrandSkeleton /> : <Brand mode="light" />;
}
```

## Props

This component does not accept any props. It's a static SVG skeleton designed to match the dimensions and aspect ratio of the GNetwork Brand component.

## Styling

The skeleton uses a neutral gray color (`#333333`) that works well in both light and dark themes. The SVG dimensions are:

- **Width**: 166px
- **Height**: 129px
- **ViewBox**: `0 0 166 129`
- **Aspect Ratio**: Preserved automatically

### Custom Styling

You can wrap the skeleton in a container to control its size:

```tsx
<div style={{ width: "100px", height: "auto" }}>
  <BrandSkeleton />
</div>
```

Or apply CSS classes:

```tsx
<div className="w-32 h-auto">
  <BrandSkeleton />
</div>
```

## Accessibility

The component includes built-in accessibility features:

- **ARIA Label**: `aria-label="GNetwork Skeleton"` for screen readers
- **Semantic Markup**: Uses proper SVG structure with `role="img"`
- **Alternative Text**: Screen readers will announce "GNetwork Skeleton" as a loading indicator

## Examples

### In a Header Component

```tsx
import { BrandSkeleton } from "@/packages/gnetwork-ui/components/atoms/skeletons/brand-skeleton";
import { Brand } from "@/packages/gnetwork-ui/components/atoms/vectors/brand";

export function Header({ isLoading }: { isLoading: boolean }) {
  return (
    <header className="flex items-center justify-between p-4">
      {isLoading ? <BrandSkeleton /> : <Brand mode="light" />}
      <nav>{/* Navigation items */}</nav>
    </header>
  );
}
```

### With Animation

You can add CSS animations to create a pulsing effect:

```tsx
import { BrandSkeleton } from "@/packages/gnetwork-ui/components/atoms/skeletons/brand-skeleton";

export function AnimatedBrandSkeleton() {
  return (
    <div className="animate-pulse">
      <BrandSkeleton />
    </div>
  );
}
```

### Responsive Sizing

```tsx
import { BrandSkeleton } from "@/packages/gnetwork-ui/components/atoms/skeletons/brand-skeleton";

export function ResponsiveLogo() {
  return (
    <div className="w-full max-w-[166px] h-auto">
      <BrandSkeleton />
    </div>
  );
}
```

### Multiple Skeletons in a Grid

```tsx
import { BrandSkeleton } from "@/packages/gnetwork-ui/components/atoms/skeletons/brand-skeleton";

export function LogoGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <BrandSkeleton />
      <BrandSkeleton />
      <BrandSkeleton />
    </div>
  );
}
```

## Technical Details

- **Component Type**: Functional Component (React)
- **Rendering**: Static SVG (no props, no state)
- **File Size**: Minimal (single SVG element)
- **Browser Support**: All modern browsers with SVG support
- **Performance**: Optimized SVG paths for fast rendering
- **Default Dimensions**: 166px × 129px (matches Brand component)

## SVG Structure

The skeleton consists of multiple `<path>` elements grouped within a `<g>` element with clipping applied. The paths are styled with a neutral gray fill (`#333333`) to provide a clear loading indicator.

## Use Cases

1. **Initial Page Load**: Display while the actual brand component loads
2. **Code Splitting**: Show while lazy-loaded components are fetched
3. **Async Data Loading**: Display during API calls that affect the brand display
4. **Network Delays**: Provide visual feedback during slow network conditions
5. **Suspense Boundaries**: Use as a fallback in React Suspense boundaries

## Best Practices

1. **Consistent Sizing**: Match the skeleton size with the actual Brand component size
2. **Loading State**: Always combine with a loading state mechanism
3. **Animation**: Consider adding subtle animations for better UX (pulse or shimmer)
4. **Theme Awareness**: The neutral gray works in both themes, but consider your design system
5. **Timeout**: Don't show skeletons indefinitely; implement timeout handling

## Integration with Brand Component

The BrandSkeleton is designed to match the dimensions of the Brand component:

```tsx
// BrandSkeleton dimensions
width: 166px
height: 129px

// Brand component default dimensions
width: 166px
height: 129px
```

This ensures a smooth transition when replacing the skeleton with the actual logo.

## Performance Considerations

- **Zero Dependencies**: Pure SVG component with no external dependencies
- **No JavaScript**: Static SVG rendered on the server
- **Minimal Re-renders**: No props or state to trigger re-renders
- **Efficient**: Small file size with optimized SVG paths
- **SSR Friendly**: Can be rendered on the server without issues

## Related Components

- **Brand**: The main GNetwork brand logo component
- Other skeleton components in the `/skeletons` directory

## Notes

- The skeleton uses the same SVG paths as the actual brand logo but with a solid color
- No props are needed as it's designed to be a drop-in loading placeholder
- The component maintains the original aspect ratio of the GNetwork logo
- Works seamlessly with both dark and light themes due to neutral gray color
- Can be easily wrapped in animation containers for enhanced loading effects
