# Flatlist

A flexible and performant list component built on top of Embla Carousel for displaying horizontal scrollable content.

## Features

- 🎯 **Carousel-based**: Powered by Embla Carousel for smooth scrolling
- 🎨 **Customizable**: Supports custom class names and all standard div props
- 📦 **Type-safe**: Full TypeScript support with proper type definitions
- ⚡ **Performance**: Optimized rendering with React fragments
- 🔧 **Flexible**: Accepts any React component as list items

## Props

### FlatlistProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | `FlatlistItem[]` | Yes | - | Array of items to display in the flatlist |
| `options` | `EmblaOptionsType` | No | - | Configuration options for Embla Carousel |
| `className` | `string` | No | `''` | Additional CSS class names for the container |
| `ref` | `React.Ref<HTMLDivElement>` | No | - | Ref for the outer container element |
| `...rest` | `React.HTMLAttributes<HTMLDivElement>` | No | - | Any additional HTML div attributes |

### FlatlistItem Interface

```typescript
interface FlatlistItem {
  id: string | number;
  item: ReactChild;
}
```

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string \| number` | Unique identifier for the list item |
| `item` | `ReactChild` | React component or element to render |

## Usage

### Basic Example

```tsx
import { Flatlist } from '@/packages/gnetwork-ui/components/organisms/lists/flatlist';

const items = [
  { id: 1, item: <div>Item 1</div> },
  { id: 2, item: <div>Item 2</div> },
  { id: 3, item: <div>Item 3</div> },
];

export function MyComponent() {
  return <Flatlist items={items} />;
}
```

### With Embla Options

```tsx
import { Flatlist } from '@/packages/gnetwork-ui/components/organisms/lists/flatlist';

const items = [
  { id: 1, item: <Card title="Card 1" /> },
  { id: 2, item: <Card title="Card 2" /> },
  { id: 3, item: <Card title="Card 3" /> },
];

const emblaOptions = {
  align: 'start',
  loop: false,
  dragFree: true,
};

export function MyCarousel() {
  return <Flatlist items={items} options={emblaOptions} />;
}
```

### With Custom Styling

```tsx
import { Flatlist } from '@/packages/gnetwork-ui/components/organisms/lists/flatlist';

const items = [
  { id: 'a', item: <ProductCard product={product1} /> },
  { id: 'b', item: <ProductCard product={product2} /> },
];

export function ProductList() {
  return (
    <Flatlist
      items={items}
      className="my-custom-class"
      style={{ padding: '20px' }}
    />
  );
}
```

### With Ref

```tsx
import { useRef } from 'react';
import { Flatlist } from '@/packages/gnetwork-ui/components/organisms/lists/flatlist';

export function ScrollableList() {
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    listRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Flatlist ref={listRef} items={items} />
      <button onClick={scrollToTop}>Scroll to top</button>
    </>
  );
}
```

## Embla Carousel Options

The `options` prop accepts any valid [Embla Carousel options](https://www.embla-carousel.com/api/options/). Common options include:

- `align`: `'start' | 'center' | 'end'` - Alignment of slides
- `loop`: `boolean` - Enable infinite loop
- `dragFree`: `boolean` - Enable free dragging
- `slidesToScroll`: `number | 'auto'` - Number of slides to scroll
- `containScroll`: `'trimSnaps' | 'keepSnaps'` - Contain scroll behavior

See the [Embla Carousel documentation](https://www.embla-carousel.com/api/options/) for a complete list of available options.

## Structure

```
flatlist/
├── flatlist.tsx              # Main component
├── flatlist.props.ts         # TypeScript prop definitions
├── flatlist.hook.tsx         # Custom hook for Embla integration
├── flatlist.module.css       # Component styles
├── interfaces/
│   ├── flatlist-item.interface.ts  # Item interface
│   └── index.ts
├── index.ts                  # Public exports
└── README.md                 # This file
```

## Notes

- The component will log a warning to the console if no items are provided or if the items array is empty
- Each item must have a unique `id` for proper React key management
- The component is marked as `'use client'` and is designed for client-side rendering
- The inner container receives the `className` prop, while the outer container has a fixed base style

## Dependencies

- `react`: React library
- `embla-carousel-react`: Embla Carousel React wrapper
- Internal utilities: `cn` (className utility)

## License

Part of the GNetwork UI component library.
