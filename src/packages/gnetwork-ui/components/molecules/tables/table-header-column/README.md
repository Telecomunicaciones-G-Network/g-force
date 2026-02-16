# TableHeaderColumn

Header column component for HTML tables that renders a `<th>` element with consistent, configurable styles.

## Description

`TableHeaderColumn` is a molecular component that encapsulates the logic and styles for table header columns. It provides predefined base styles and allows extension via a custom `className`.

## Import

```typescript
import { TableHeaderColumn } from '@/packages/gnetwork-ui/components/molecules/tables/table-header-column';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactChild` | Yes | - | Header column content |
| `className` | `string` | No | `''` | Additional CSS classes to customize styling |
| `ref` | `Ref<HTMLTableHeaderCellElement>` | No | - | Reference to the `<th>` DOM element |
| `...rest` | `ComponentProps<'th'>` | No | - | Any other valid props for the `<th>` element |

## Basic Usage

```tsx
import { TableHeaderColumn } from '@/packages/gnetwork-ui/components/molecules/tables/table-header-column';

function MyTable() {
  return (
    <table>
      <thead>
        <tr>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </tr>
      </thead>
    </table>
  );
}
```

## Examples

### With custom className

```tsx
<TableHeaderColumn className="bg-blue-100 font-bold">
  User
</TableHeaderColumn>
```

### With ref

```tsx
import { useRef } from 'react';

function MyTable() {
  const headerRef = useRef<HTMLTableHeaderCellElement>(null);

  return (
    <TableHeaderColumn ref={headerRef}>
      Column with Ref
    </TableHeaderColumn>
  );
}
```

### With native HTML props

```tsx
<TableHeaderColumn
  colSpan={2}
  style={{ minWidth: '200px' }}
>
  Expanded Column
</TableHeaderColumn>
```

## Default Styles

The component applies the following base styles:

- `font-medium` - Medium font weight
- `px-4` - Horizontal padding of 1rem
- `py-2` - Vertical padding of 0.5rem
- `text-left` - Left-aligned text
- `text-neutral-600` - Neutral gray text color
- `text-sm` - Small text size
- `scope="col"` - Accessibility attribute for columns

These styles can be overridden or extended via the `className` prop.

## Warnings

The component logs a console warning if the `children` prop is not provided:

```
Prop children is missing on TableHeaderColumn component. This component can not be render appropiately.
```

## Accessibility

- The component automatically sets `scope="col"` to improve accessibility
- Use descriptive text in `children` for screen readers
- Supports all standard ARIA props of the `<th>` element

## Technical Notes

- The component uses the `cn` utility to safely combine CSS classes
- Extends all native props of the HTML `<th>` element
- Compatible with refs for direct DOM access

## Related

- `TableHeaderRow` - Container component for header rows
- `Table` - Main table component
- `ReactTableHeaderColumn` - TypeScript type for the component props

## TODO

- Consider changing `HTMLTableHeaderCellElement` as it is deprecated (see type `ReactTableHeaderColumn`)
