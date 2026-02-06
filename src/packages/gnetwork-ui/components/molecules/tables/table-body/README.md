# TableBody

A molecule component that wraps the native HTML `<tbody>` element with consistent styling and typings for use in table layouts.

## Usage

```tsx
import { TableBody } from '@gnetwork-ui/components/molecules/tables/table-body';

<TableBody>
  <TableRow>
    <TableCell>Cell content</TableCell>
  </TableRow>
</TableBody>
```

With optional `className` and `ref`:

```tsx
<TableBody className="bg-neutral-50" ref={tbodyRef}>
  {rows.map((row) => (
    <TableRow key={row.id}>
      <TableCell>{row.label}</TableCell>
    </TableRow>
  ))}
</TableBody>
```

## Props

| Prop       | Type                              | Default | Description                                      |
| ---------- | --------------------------------- | ------- | ------------------------------------------------ |
| `className`| `string`                          | `''`    | Additional CSS classes for the table body.       |
| `children` | `ReactChild`                      | —       | Row(s) or other content to render inside tbody.  |
| `ref`      | `Ref<HTMLTableSectionElement>`     | —       | Ref forwarded to the underlying `<tbody>` node.  |

Any other valid `<tbody>` HTML attributes are forwarded via `...rest`.

## Styling

The component applies `divide-y divide-neutral-200` by default to separate rows with a neutral border. Override or extend styles with the `className` prop.

## Notes

- The component logs a console warning when `children` is missing, since an empty body may indicate a usage mistake.
- Use with table row components (e.g. `TableRow`, `TableHeader`) inside a parent `Table` for a full table structure.
