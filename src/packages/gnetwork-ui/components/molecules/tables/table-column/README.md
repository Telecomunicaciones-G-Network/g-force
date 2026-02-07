# TableColumn

Molecular component that represents a data cell (`<td>`) within a table row. It is used as a child of `TableRow` to define the content of each column in the body of the table.

## Features

- 🎨 Predefined styles (typography, padding, neutral color)
- 📏 `whitespace-nowrap` to prevent line breaks in the content
- 🔧 Full support for all native `<td>` props
- ⚠️ Children validation with a console warning
- 🎯 Ref forwarding for direct access to the DOM element

## Import

```typescript
import { TableColumn } from '@/packages/gnetwork-ui/components/molecules/tables/table-column';
```

## Props

This component extends all native `<td>` (HTMLTableDataCellElement) props and includes:

| Prop        | Type                           | Required | Default | Description                             |
|-------------|--------------------------------|----------|---------|-----------------------------------------|
| `children`  | `ReactChild`                   | ✅ Yes   | -       | Cell content (text, React nodes, etc.)  |
| `className` | `string`                       | ❌ No    | `''`    | Additional CSS classes                  |
| `ref`       | `Ref<HTMLTableDataCellElement>`| ❌ No    | -       | Reference to the `<td>` DOM element     |

### Default CSS classes applied

- `font-medium` - Medium font weight
- `px-4 py-2` - Horizontal and vertical padding
- `text-neutral-500` - Neutral grey text color
- `text-sm` - Small font size
- `whitespace-nowrap` - Prevents content wrapping

## Usage

### Basic Example

```tsx
import { TableRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-row';
import { TableColumn } from '@/packages/gnetwork-ui/components/molecules/tables/table-column';

<table>
  <tbody>
    <TableRow>
      <TableColumn>Juan Pérez</TableColumn>
      <TableColumn>juan@ejemplo.com</TableColumn>
      <TableColumn>Active</TableColumn>
    </TableRow>
  </tbody>
</table>
```

### With custom classes

```tsx
<TableRow>
  <TableColumn>Product A</TableColumn>
  <TableColumn>$99.99</TableColumn>
  <TableColumn className="text-right font-semibold">In stock</TableColumn>
</TableRow>
```

### With ref

```tsx
const cellRef = useRef<HTMLTableDataCellElement>(null);

<TableRow>
  <TableColumn ref={cellRef}>Data 1</TableColumn>
  <TableColumn>Data 2</TableColumn>
  <TableColumn>Data 3</TableColumn>
</TableRow>
```

### With native td props

```tsx
<TableRow>
  <TableColumn colSpan={2}>Combined cell</TableColumn>
  <TableColumn data-testid="cell-status">Active</TableColumn>
</TableRow>
```

### Full table example

```tsx
import { Table } from '@/packages/gnetwork-ui/components/organisms/tables/table';
import { TableHead } from '@/packages/gnetwork-ui/components/molecules/tables/table-head';
import { TableHeaderRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-header-row';
import { TableHeaderColumn } from '@/packages/gnetwork-ui/components/molecules/tables/table-header-column';
import { TableRow } from '@/packages/gnetwork-ui/components/molecules/tables/table-row';
import { TableColumn } from '@/packages/gnetwork-ui/components/molecules/tables/table-column';

export const UsersTable = () => {
  const users = [
    { id: 1, name: 'Ana García', email: 'ana@ejemplo.com', role: 'Admin' },
    { id: 2, name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'User' },
  ];

  return (
    <Table>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Role</TableHeaderColumn>
        </TableHeaderRow>
      </TableHead>
      <tbody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableColumn>{user.name}</TableColumn>
            <TableColumn>{user.email}</TableColumn>
            <TableColumn>{user.role}</TableColumn>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
```

## Validation

The component includes validation that emits a warning in the console if the `children` prop is not provided:

```
⚠️ Prop children is missing on TableColumn component. This component can not be render appropiately.
```

## Component Structure

```
table-column/
├── index.ts         # Component export
├── table-column.tsx # Implementation
└── README.md        # Documentation
```

## Related Type

The component uses the `ReactTableColumn` type defined in:

```typescript
// @/packages/gnetwork-ui/types/react-table-column.type.ts
export type ReactTableColumn = ComponentProps<'td'> & {
  className?: string;
  children: ReactChild;
  ref?: Ref<HTMLTableDataCellElement>;
};
```

## Notes

- This component is designed for data cells in the table body (`<tbody>`), inside a `TableRow`
- For header cells, use the `TableHeaderColumn` component
- The component is part of the GNetwork UI design system
- **TODO:** The type uses `HTMLTableDataCellElement`, which is deprecated; it is recommended to update it when the standard allows
