# Pagination

A reusable pagination component for navigating through paged content. It renders previous/next controls and a list of page numbers with ellipsis when there are many pages.

## Features

- **Previous / Next buttons** — Navigate to adjacent pages with optional disabled state.
- **Page numbers** — Clickable page items; current page is highlighted.
- **Ellipsis** — When `totalPages` is large (> 5), shows ellipsis between first/last and the range around the current page.
- **Accessible** — Uses `aria-label="Pagination"`, `aria-current="page"` for the active page, and screen-reader text for prev/next.
- **Responsive** — Hidden on small screens (`hidden sm:flex`), visible from `sm` and up.

## Installation

Import from the package index:

```tsx
import { Pagination } from '@/path-to/pagination';
```

## Usage

```tsx
const [pageIndex, setPageIndex] = useState(0);
const totalPages = 10;

<Pagination
  pageIndex={pageIndex}
  totalPages={totalPages}
  canPrevious={pageIndex > 0}
  canNext={pageIndex < totalPages - 1}
  onPrevious={() => setPageIndex((p) => Math.max(0, p - 1))}
  onNext={() => setPageIndex((p) => Math.min(totalPages - 1, p + 1))}
  onPageChange={(page) => setPageIndex(page)}
/>
```

## Props

| Prop           | Type                     | Default | Description                                           |
|----------------|--------------------------|---------|-------------------------------------------------------|
| `pageIndex`    | `number`                 | `0`     | Current page index (0-based).                         |
| `totalPages`   | `number`                 | `0`     | Total number of pages.                                |
| `canPrevious`  | `boolean`                | `true`  | Whether the previous button is enabled.               |
| `canNext`      | `boolean`                | `true`  | Whether the next button is enabled.                   |
| `onPrevious`   | `VoidFunction`             | —       | Called when the previous button is clicked.           |
| `onNext`       | `VoidFunction`             | —       | Called when the next button is clicked.               |
| `onPageChange` | `(page: number) => void` | —       | Called when a page number is clicked (0-based index). |
| `className`    | `string`                 | `''`    | Additional CSS class for the root container.          |
| `ref`          | `React.Ref<HTMLDivElement>` | —     | Ref for the root `div`.                               |

All standard `HTMLDivElement` attributes are also supported via rest props.

## Exports

- **Component:** `Pagination`
- **Types:** `PaginationProps`, `PaginationItem`, `PaginationItemPage`, `PaginationItemEllipsis`, `PAGINATION_ITEM_TYPE`

## Behavior

- **Page index:** `pageIndex` is 0-based; displayed page numbers are 1-based.
- **Few pages (≤ 5):** All page numbers are shown (e.g. `1 2 3 4 5`).
- **Many pages (> 5):** First page, ellipsis (if needed), pages around current, ellipsis (if needed), last page (e.g. `1 ... 4 5 6 ... 10`).
- **Styling:** Uses Tailwind and a local CSS module; active page uses a red accent (`bg-red-600`).

## Related

- `usePagination` — Hook that computes the list of page/ellipsis items from `pageIndex` and `totalPages`. Used internally by `Pagination`.
