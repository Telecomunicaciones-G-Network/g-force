# SearchInput Component

A specialized search input component built on top of the Input component. It provides a pre-configured search input with a search icon, making it perfect for search bars and search functionality throughout your application.

## Features

- 🔍 Pre-configured search icon on the left
- ✨ Inherits all Input component features
- 🎨 Error state with custom styling and messages
- 📏 Full-width and fit-width variants
- ♿ Fully accessible
- 🎯 TypeScript support with full type safety
- 🎨 Customizable with className overrides

## Import

```typescript
import { SearchInput } from "@/packages/gnetwork-ui/components/molecules/inputs/search-input";
import type { InputProps } from "@/packages/gnetwork-ui/components/molecules/inputs/input";
```

## Props

### InputProps

The component accepts all the same props as the [Input component](../input/README.md):

| Prop                 | Type         | Default  | Description                                              |
| -------------------- | ------------ | -------- | -------------------------------------------------------- |
| `className`          | `string`     | `""`     | Custom class name for the input container                |
| `containerClassName` | `string`     | `""`     | Custom class name for the outer wrapper div              |
| `error`              | `boolean`    | `false`  | Enables error state styling                              |
| `fullWidth`          | `boolean`    | `false`  | Makes the input take full width of its container         |
| `id`                 | `string`     | -        | **Required** - HTML id attribute for the input           |
| `label`              | `string`     | `""`     | Label text displayed above the input                     |
| `message`            | `string`     | `""`     | Helper or error message displayed below the input        |
| `name`               | `string`     | -        | **Required** - HTML name attribute for the input         |
| `rightIcon`          | `ReactChild` | -        | Icon or element displayed on the right side of the input |
| `type`               | `string`     | `"text"` | HTML input type (text, email, password, etc.)            |
| `ref`                | `React.Ref`  | -        | React ref for the input element                          |

> **Note:** The `leftIcon` prop is pre-configured with the search icon (MdOutlineSearch) and cannot be overridden.

> **Note:** Either `id` or `name` prop is required. The component will log a warning if both are missing.

## Usage Examples

### Basic Search Input

```tsx
<SearchInput id="search" name="search" placeholder="Search..." />
```

### Search Input with Label

```tsx
<SearchInput
  id="global-search"
  name="globalSearch"
  label="Search"
  placeholder="Search for items..."
/>
```

### Search Input with Full Width

```tsx
<SearchInput
  id="search"
  name="search"
  placeholder="Search..."
  fullWidth={true}
/>
```

### Search Input with Right Icon (Clear Button)

```tsx
import { MdClose } from "react-icons/md";

<SearchInput
  id="search"
  name="search"
  placeholder="Search..."
  rightIcon={
    <button type="button" onClick={handleClear} aria-label="Clear search">
      <MdClose size={20} />
    </button>
  }
/>;
```

### Search Input with Error State

```tsx
<SearchInput
  id="search"
  name="search"
  placeholder="Search..."
  error={true}
  message="Search query is too short"
/>
```

### Complete Example with State Management

```tsx
import { useState } from "react";
import { SearchInput } from "@/packages/gnetwork-ui/components/molecules/inputs/search-input";
import { MdClose } from "react-icons/md";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Validate search query
    if (value.length > 0 && value.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setError(false);
  };

  return (
    <SearchInput
      id="search"
      name="search"
      label="Search Products"
      value={query}
      onChange={handleSearch}
      placeholder="Search for products..."
      fullWidth={true}
      error={error}
      message={error ? "Please enter at least 3 characters" : ""}
      rightIcon={
        query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="cursor-pointer"
          >
            <MdClose size={20} />
          </button>
        )
      }
    />
  );
};
```

### Search Input in a Navigation Bar

```tsx
<nav className="flex items-center gap-4">
  <Logo />
  <SearchInput
    id="nav-search"
    name="navSearch"
    placeholder="Search..."
    fullWidth={true}
  />
  <UserMenu />
</nav>
```

## Variants

The component inherits all variants from the Input component:

### Error Variant

- **`error: false`** (default): Standard border with neutral colors and focus states
- **`error: true`**: Warning-colored border with error-specific focus shadow

### Full Width Variant

- **`fullWidth: false`** (default): Input takes only the space it needs (`w-fit`)
- **`fullWidth: true`**: Input expands to fill container width (`w-full`)

## Styling

The component uses the same styling system as the Input component. You can customize:

- **Container**: Use `containerClassName` to style the outer wrapper
- **Input Container**: Use `className` to style the input container (with icons)
- **Input Element**: The input itself has predefined styles but inherits some properties

### Pre-configured Icon

The SearchInput comes with a pre-configured search icon (MdOutlineSearch) from `react-icons/md` with a size of 24px, positioned on the left side of the input.

## Accessibility

- Properly associates labels with inputs using `htmlFor` and `id`
- Supports all native input attributes for screen readers
- Error messages are displayed visibly below the input
- Focus states are clearly indicated with shadows
- The search icon is purely decorative and doesn't interfere with screen readers

## When to Use

Use the SearchInput component when you need:

- ✅ A search bar in navigation headers
- ✅ Product or content search functionality
- ✅ Filter inputs in data tables
- ✅ Quick search boxes in dashboards
- ✅ Any search-related input field

Use the base Input component when you need:

- ❌ Custom icons other than the search icon
- ❌ Form inputs (email, password, etc.)
- ❌ Text inputs without a search context

## Development Notes

- Built on top of the [Input component](../input/README.md)
- Uses `MdOutlineSearch` icon from `react-icons/md`
- Maintains the same API as the Input component for consistency
- The `leftIcon` prop is pre-configured and cannot be customized

## File Structure

```
search-input/
├── index.ts           # Public exports
├── search-input.tsx   # Main component
└── README.md          # This file
```

## Related Components

- [Input](../input/README.md) - The base input component that SearchInput extends

## Migration from Input

If you're currently using the Input component with a search icon, you can easily migrate to SearchInput:

**Before:**

```tsx
import { Input } from "@/packages/gnetwork-ui/components/molecules/inputs/input";
import { MdOutlineSearch } from "react-icons/md";

<Input
  id="search"
  name="search"
  leftIcon={<MdOutlineSearch size={24} />}
  placeholder="Search..."
/>;
```

**After:**

```tsx
import { SearchInput } from "@/packages/gnetwork-ui/components/molecules/inputs/search-input";

<SearchInput id="search" name="search" placeholder="Search..." />;
```
