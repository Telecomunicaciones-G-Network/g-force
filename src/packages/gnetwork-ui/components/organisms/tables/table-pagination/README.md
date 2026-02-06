# TablePagination

Table pagination component that displays a range summary (e.g. "Showing 1–10 of 100 records") and page navigation controls. Renders as a footer bar with a `Pagination` component and extends standard `div` attributes.

## Usage

```tsx
import { TablePagination } from '@gnetwork-ui/organisms/tables/table-pagination';

<TablePagination
  page={1}
  pageIndex={0}
  limit={10}
  totalRegisters={100}
  totalPages={10}
  canNext={true}
  canPrevious={false}
  goToNextPage={() => {}}
  goToPreviousPage={() => {}}
  onPageChange={(page) => {}}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | `number` | `1` | Current page (1-based). |
| `pageIndex` | `number` | `0` | Current page index (0-based), used by the inner `Pagination` component. |
| `limit` | `number` | `10` | Number of items per page. |
| `totalRegisters` | `number` | `0` | Total number of records. |
| `totalPages` | `number` | `0` | Total number of pages. |
| `canNext` | `boolean` | `true` | Whether the next page is available. |
| `canPrevious` | `boolean` | `true` | Whether the previous page is available. |
| `goToNextPage` | `() => void` | — | Called when the user goes to the next page. |
| `goToPreviousPage` | `() => void` | — | Called when the user goes to the previous page. |
| `onPageChange` | `(page: number) => void` | — | Called when the user selects a specific page. |
| `className` | `string` | `''` | Additional CSS class for the root element. |
| `ref` | `React.Ref<HTMLDivElement>` | — | Ref for the root `div`. |

All other `HTMLDivElement` props are forwarded to the root `div`.

## Dependencies

- **Pagination** – Used for previous/next and page-number controls.
- **Text** – Used for the range summary label.

## Layout

- **Left**: Range text (e.g. "Showing 1 - 10 of 100 records").
- **Right**: Pagination controls (previous, page numbers, next).

## Note

The range summary text is currently hardcoded in Spanish ("Mostrando … de … registros"). For English or other locales, consider replacing this with a localized string or a `summaryText` / `renderSummary` prop.
