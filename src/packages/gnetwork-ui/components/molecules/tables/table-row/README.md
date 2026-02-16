# TableRow

Table row component that provides a styled container for data cells (`<td>`) within the body of an HTML table.

## Features

- 🎨 Predefined styles with chromatic background and vertical dividers
- 📏 Fixed height of 14 units (`h-14` / `min-h-14`)
- 🔧 Full support for all native `<tr>` props
- ⚠️ Children validation with console warning
- 🎯 Ref forwarding for direct DOM element access

## Import

```typescript
import { TableRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-row';
```

## Props

The component extends all native `<tr>` (HTMLTableRowElement) props and includes:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactChild` | ✅ Yes | - | Row content, typically `<td>` components |
| `className` | `string` | ❌ No | `''` | Additional CSS classes (concatenated with base classes) |
| `ref` | `Ref<HTMLTableRowElement>` | ❌ No | - | Reference to the DOM `<tr>` element |

### Default CSS classes

- `bg-chromatic` - Chromatic-style background
- `divide-x` - Vertical dividers between cells
- `divide-neutral-200` - Divider color (light gray)
- `min-h-14` - Minimum height of 3.5rem (56px)
- `h-14` - Fixed height of 3.5rem (56px)

## Usage

### Basic example

```tsx
import { TableRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-row';

<table>
  <tbody>
    <TableRow>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Active</td>
    </TableRow>
  </tbody>
</table>
```

### With custom classes

```tsx
<TableRow className="hover:bg-gray-50 cursor-pointer">
  <td>Product A</td>
  <td>$99.99</td>
  <td>In stock</td>
</TableRow>
```

### With ref

```tsx
const rowRef = useRef<HTMLTableRowElement>(null);

<TableRow ref={rowRef}>
  <td>Data 1</td>
  <td>Data 2</td>
  <td>Data 3</td>
</TableRow>
```

### With native tr props

```tsx
<TableRow
  onClick={() => console.log('Row clicked')}
  onMouseEnter={() => console.log('Mouse over row')}
  data-testid="user-row"
>
  <td>User 1</td>
  <td>user@example.com</td>
  <td>Admin</td>
</TableRow>
```

### Full table example

```tsx
import { Table } from '@/packages/gnetwork-ui/components/organisms/tables/table';
import { TableHead } from '@/packages/gnetwork-ui/components/molecules/tables/table-head';
import { TableHeaderRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-header-row';
import { TableRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-row';

export const UsersTable = () => {
  const users = [
    { id: 1, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
    { id: 2, name: 'John Doe', email: 'john@example.com', role: 'User' },
  ];

  return (
    <table>
      <TableHead>
        <TableHeaderRow>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </TableHeaderRow>
      </TableHead>
      <tbody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};
```

## Validation

The component includes validation that logs a console warning if the `children` prop is not provided:

```
⚠️ Prop children is missing on TableRow component. This component cannot be rendered appropriately.
```

## Component structure

```
table-row/
├── index.ts         # Component export
├── table-row.tsx    # Implementation
└── README.md        # Documentation
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

- This component is designed for data rows in the table body (`<tbody>`)
- For header rows, use the `TableHeaderRow` component
- Children should be `<td>` elements to maintain correct HTML semantics
- Custom CSS classes are merged with base classes using the `cn()` utility; they do not replace them
- The component is part of the GNetwork UI design system
- Row height (56px) is greater than the header (40px) to improve data readability
