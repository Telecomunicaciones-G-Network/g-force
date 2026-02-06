# TableHeaderRow

Table header row component that provides a styled container for header cells (`<th>`) within an HTML table.

## Features

- 🎨 Predefined styles with vertical dividers between columns
- 📏 Fixed height of 10 units (`h-10` / `min-h-10`)
- 🔧 Full support for all native `<tr>` props
- ⚠️ Children validation with console warning
- 🎯 Ref forwarding for direct DOM element access

## Import

```typescript
import { TableHeaderRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-header-row';
```

## Props

The component extends all native `<tr>` (HTMLTableRowElement) props and includes:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactChild` | ✅ Yes | - | Row content, typically `<th>` components |
| `className` | `string` | ❌ No | `''` | Additional CSS classes (concatenated with base classes) |
| `ref` | `Ref<HTMLTableRowElement>` | ❌ No | - | Reference to the DOM `<tr>` element |

### Default CSS classes

- `divide-x` - Vertical dividers between cells
- `divide-neutral-200` - Divider color (light gray)
- `min-h-10` - Minimum height of 2.5rem (40px)
- `h-10` - Fixed height of 2.5rem (40px)

## Usage

### Basic example

```tsx
import { TableHeaderRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-header-row';

<table>
  <thead>
    <TableHeaderRow>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
    </TableHeaderRow>
  </thead>
</table>
```

### With custom classes

```tsx
<TableHeaderRow className="bg-gray-100 font-bold">
  <th>ID</th>
  <th>Product</th>
  <th>Price</th>
</TableHeaderRow>
```

### With ref

```tsx
const headerRef = useRef<HTMLTableRowElement>(null);

<TableHeaderRow ref={headerRef}>
  <th>Column 1</th>
  <th>Column 2</th>
</TableHeaderRow>
```

### With native tr props

```tsx
<TableHeaderRow
  onClick={() => console.log('Header clicked')}
  onMouseEnter={() => console.log('Mouse entered')}
  data-testid="table-header"
>
  <th>Header 1</th>
  <th>Header 2</th>
</TableHeaderRow>
```

## Validation

The component includes validation that logs a console warning if the `children` prop is not provided:

```
⚠️ Prop children is missing on TableHeaderRow component. This component cannot be rendered appropriately.
```

## Component structure

```
table-header-row/
├── index.ts              # Component export
├── table-header-row.tsx  # Implementation
└── README.md            # Documentation
```

## Related type

The component uses the `ReactTableRow` type defined in:

```typescript
// @/packages/gnetwork-ui/types/react-table-row.type.ts
export type ReactTableRow = ComponentProps<'tr'> & {
  className?: string;
  children: ReactChild;
  ref?: Ref<HTMLTableRowElement>;
};
```

## Notes

- This component is designed specifically for header rows (`<thead>`)
- Children should be `<th>` elements to maintain correct HTML semantics
- Custom CSS classes are merged with base classes; they do not replace them
- The component is part of the GNetwork UI design system
