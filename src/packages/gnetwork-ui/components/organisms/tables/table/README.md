# Table

A table organism that wraps a semantic `<table>` in a styled container with an optional title and responsive horizontal scrolling.

## Features

- Optional header section with title
- Responsive layout with horizontal scroll on small viewports
- Composable with table molecules: `TableHead`, `TableHeaderRow`, `TableHeaderColumn`, `TableBody`, `TableRow`, `TableColumn`
- Extends native `div` props (`className`, `ref`, etc.)
- Styled with neutral borders, rounded corners, and light shadow

## Props

| Prop        | Type            | Default | Description                          |
| ----------- | --------------- | ------- | ------------------------------------ |
| `title`     | `string`        | `''`    | Title rendered in the header section |
| `className` | `string`        | `''`    | Additional CSS classes for the root  |
| `children`  | `ReactNode`     | —       | Table content (e.g. `thead`, `tbody`)|
| `ref`       | `Ref<HTMLDivElement>` | —  | Ref forwarded to the root `div`      |

All other props are passed to the root `div` (extends `ReactDiv`).

## Composition

Use the table molecules inside `Table` to build the markup:

- **TableHead** → `<thead>`
- **TableHeaderRow** → `<tr>` inside thead
- **TableHeaderColumn** → `<th>` for header cells
- **TableBody** → `<tbody>`
- **TableRow** → `<tr>` for body rows
- **TableColumn** → `<td>` for body cells

## Usage

### Basic example

```tsx
import { Table } from '@gnetwork-ui/components/organisms/tables/table';
import { TableHead } from '@gnetwork-ui/components/molecules/tables/table-head';
import { TableHeaderRow } from '@gnetwork-ui/components/molecules/tables/table-header-row';
import { TableHeaderColumn } from '@gnetwork-ui/components/molecules/tables/table-header-column';
import { TableBody } from '@gnetwork-ui/components/molecules/tables/table-body';
import { TableRow } from '@gnetwork-ui/components/molecules/tables/table-row';
import { TableColumn } from '@gnetwork-ui/components/molecules/tables/table-column';

<Table title="Agents">
  <TableHead>
    <TableHeaderRow>
      <TableHeaderColumn>Name</TableHeaderColumn>
      <TableHeaderColumn>Email</TableHeaderColumn>
    </TableHeaderRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableColumn>John</TableColumn>
      <TableColumn>john@example.com</TableColumn>
    </TableRow>
  </TableBody>
</Table>
```

### With TanStack Table

```tsx
import { flexRender } from '@tanstack/react-table';
import { Table } from '@gnetwork-ui/components/organisms/tables/table';
import { TableHead } from '@gnetwork-ui/components/molecules/tables/table-head';
import { TableHeaderRow } from '@gnetwork-ui/components/molecules/tables/table-header-row';
import { TableHeaderColumn } from '@gnetwork-ui/components/molecules/tables/table-header-column';

<Table title="Agents">
  {table.getHeaderGroups().map((headerGroup) => (
    <TableHead key={headerGroup.id}>
      <TableHeaderRow>
        {headerGroup.headers.map((header) => (
          <TableHeaderColumn key={header.id}>
            {flexRender(header.column.columnDef.header, header.getContext())}
          </TableHeaderColumn>
        ))}
      </TableHeaderRow>
    </TableHead>
  ))}
  {/* TableBody + rows with flexRender for cells */}
</Table>
```

## Notes

- The component logs a warning if `children` is missing, since the table cannot render correctly without content.
- The inner `<table>` is wrapped in scrollable containers so wide tables scroll horizontally on smaller screens.
