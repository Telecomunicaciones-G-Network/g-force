# TableHead

A React component that renders a semantic HTML `<thead>` element for table headers, part of the gnetwork-ui component library.

## Import

```typescript
import { TableHead } from '@/packages/gnetwork-ui/components/molecules/tables/table-head';
```

## Description

The `TableHead` component provides a standardized wrapper for table header sections. It extends the native HTML `<thead>` element with TypeScript support and includes validation to ensure proper usage.

## Props

The component extends all standard HTML `thead` attributes and includes the following specific props:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactChild` | Yes | - | The content to render inside the table head, typically `<tr>` elements containing `<th>` cells |
| `className` | `string` | No | `''` | CSS class names to apply to the thead element |
| `ref` | `Ref<HTMLTableSectionElement>` | No | - | React ref object for accessing the underlying thead DOM element |

## Usage

### Basic Example

```tsx
import { TableHead } from '@/packages/gnetwork-ui/components/molecules/tables/table-head';

export const SimpleTable = () => {
  return (
    <table>
      <TableHead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
        </tr>
      </tbody>
    </table>
  );
};
```

### With Custom Styling

```tsx
import { TableHead } from '@/packages/gnetwork-ui/components/molecules/tables/table-head';

export const StyledTable = () => {
  return (
    <table>
      <TableHead className="bg-gray-100 border-b-2 border-gray-300">
        <tr>
          <th className="px-4 py-2 text-left">Product</th>
          <th className="px-4 py-2 text-left">Price</th>
          <th className="px-4 py-2 text-left">Stock</th>
        </tr>
      </TableHead>
      <tbody>
        {/* table body content */}
      </tbody>
    </table>
  );
};
```

### With Ref

```tsx
import { useRef } from 'react';
import { TableHead } from '@/packages/gnetwork-ui/components/molecules/tables/table-head';

export const TableWithRef = () => {
  const theadRef = useRef<HTMLTableSectionElement>(null);

  const scrollToHeader = () => {
    theadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button onClick={scrollToHeader}>Scroll to Header</button>
      <table>
        <TableHead ref={theadRef} className="sticky top-0 bg-white">
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </TableHead>
        <tbody>
          {/* table body content */}
        </tbody>
      </table>
    </>
  );
};
```

### With Additional HTML Attributes

```tsx
import { TableHead } from '@/packages/gnetwork-ui/components/molecules/tables/table-head';

export const AccessibleTable = () => {
  return (
    <table>
      <TableHead
        className="table-header"
        data-testid="user-table-head"
        role="rowgroup"
      >
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Username</th>
          <th scope="col">Status</th>
        </tr>
      </TableHead>
      <tbody>
        {/* table body content */}
      </tbody>
    </table>
  );
};
```

## Type Definition

```typescript
type ReactTableHead = ComponentProps<'thead'> & {
  className?: string;
  children: ReactChild;
  ref?: Ref<HTMLTableSectionElement>;
};
```

## Features

- ✅ Full TypeScript support with type safety
- ✅ Extends native HTML thead element
- ✅ Supports all standard HTML attributes
- ✅ Built-in validation with console warnings
- ✅ Ref forwarding for DOM access
- ✅ Flexible styling through className prop

## Validation

The component includes built-in validation that warns developers in the console if the `children` prop is missing, helping prevent rendering issues during development.

## Best Practices

1. **Always provide children**: The component requires children to render properly. Typically, this should be a `<tr>` element containing `<th>` cells.

2. **Use semantic HTML**: This component renders a `<thead>` element, which should be used within a `<table>` element and contain table header cells (`<th>`).

3. **Accessibility**: When using the component, ensure proper table structure and use appropriate ARIA attributes and `scope` attributes on header cells for better accessibility.

4. **Styling**: Use the `className` prop for styling rather than inline styles when possible for better maintainability.

## Related Components

- `ReactTableHeaderColumn` - Type definition for table header cells (`<th>`)
- `ReactTableRow` - Type definition for table rows

## Notes

- This component is part of the gnetwork-ui design system
- It provides a thin wrapper around the native `<thead>` element with enhanced TypeScript support
- All standard HTML thead attributes are supported through prop spreading
