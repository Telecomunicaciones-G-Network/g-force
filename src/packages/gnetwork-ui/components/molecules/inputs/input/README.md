# Input Component

A flexible and customizable input component built with React and styled using class-variance-authority (CVA). This component provides a complete input solution with label, error states, icons, and various styling options.

## Features

- ✨ Built-in label support with required field indicator
- 🎨 Error state with custom styling and messages
- 🔍 Support for left and right icons
- 📏 Full-width and fit-width variants
- 🔒 Static and read-only modes
- ♿ Accessible with proper label-input association
- 🎯 TypeScript support with full type safety
- 🎨 Customizable with className overrides

## Import

```typescript
import { Input } from "@/packages/gnetwork-ui/components/molecules/inputs/input";
import type { InputProps } from "@/packages/gnetwork-ui/components/molecules/inputs/input";
```

## Props

### InputProps

The component extends all native HTML input attributes (`ReactInput`) plus the following custom props:

| Prop                 | Type         | Default  | Description                                                 |
| -------------------- | ------------ | -------- | ----------------------------------------------------------- |
| `className`          | `string`     | `""`     | Custom class name for the input container                   |
| `containerClassName` | `string`     | `""`     | Custom class name for the outer wrapper div                 |
| `error`              | `boolean`    | `false`  | Enables error state styling                                 |
| `fullWidth`          | `boolean`    | `false`  | Makes the input take full width of its container            |
| `id`                 | `string`     | -        | **Required** - HTML id attribute for the input              |
| `isStatic`           | `boolean`    | `false`  | Disables focus states and interactions (used with readOnly) |
| `label`              | `string`     | `""`     | Label text displayed above the input                        |
| `leftIcon`           | `ReactChild` | -        | Icon or element displayed on the left side of the input     |
| `message`            | `string`     | `""`     | Helper or error message displayed below the input           |
| `name`               | `string`     | -        | **Required** - HTML name attribute for the input            |
| `readOnly`           | `boolean`    | `false`  | Makes the input read-only (prevents editing)                |
| `required`           | `boolean`    | `false`  | Marks the field as required (adds asterisk to label)        |
| `rightIcon`          | `ReactChild` | -        | Icon or element displayed on the right side of the input    |
| `type`               | `string`     | `"text"` | HTML input type (text, email, password, etc.)               |
| `ref`                | `React.Ref`  | -        | React ref for the input element                             |

> **Note:** Either `id` or `name` prop is required. The component will log a warning if both are missing.

## Usage Examples

### Basic Input

```tsx
<Input id="username" name="username" placeholder="Enter your username" />
```

### Input with Label

```tsx
<Input
  id="email"
  name="email"
  label="Email Address"
  type="email"
  placeholder="you@example.com"
/>
```

### Input with Error State

```tsx
<Input
  id="password"
  name="password"
  label="Password"
  type="password"
  error={true}
  message="Password must be at least 8 characters"
/>
```

### Input with Icons

```tsx
import { SearchIcon, ClearIcon } from "@/icons";

<Input
  id="search"
  name="search"
  placeholder="Search..."
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon />}
/>;
```

### Full Width Input

```tsx
<Input
  id="description"
  name="description"
  label="Description"
  fullWidth={true}
  placeholder="Enter a description"
/>
```

### Required Field

```tsx
<Input
  id="email"
  name="email"
  label="Email"
  type="email"
  required={true}
  placeholder="you@example.com"
/>
```

### Read-Only Input

```tsx
<Input
  id="username"
  name="username"
  label="Username"
  value="john.doe"
  readOnly={true}
/>
```

### Static Input (No Focus States)

```tsx
<Input
  id="display-only"
  name="display-only"
  label="Account ID"
  value="ACC-12345"
  isStatic={true}
  readOnly={true}
/>
```

### Complete Example

```tsx
import { Input } from "@/packages/gnetwork-ui/components/molecules/inputs/input";
import { MailIcon } from "@/icons";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  return (
    <form>
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        leftIcon={<MailIcon />}
        error={error}
        message={error ? "Please enter a valid email" : ""}
        fullWidth={true}
        placeholder="you@example.com"
      />
    </form>
  );
};
```

## Variants

The component uses CVA (class-variance-authority) for variant management:

### Error Variant

- **`error: false`** (default): Standard border (`border-input-border`) with neutral colors and focus states
- **`error: true`**: Warning-colored border (`border-warning-200`) with error-specific focus shadow

### Full Width Variant

- **`fullWidth: false`** (default): Input takes only the space it needs (`w-fit`)
- **`fullWidth: true`**: Input expands to fill container width (`w-full`)

### Static Variant

- **`isStatic: false`** (default): Normal interactive input with focus states
- **`isStatic: true`**: Disables focus states and interactions (typically used with `readOnly`)

### Compound Variants

The component intelligently combines variants for optimal UX:

- **Non-error + Interactive**: Shows white border and white glow on focus (`shadow-[0_0_0_2.5px_rgba(255,255,255,0.6)]`)
- **Error + Interactive**: Shows warning border and orange glow on focus (`shadow-[0_0_0_2.5px_rgba(224,159,50,0.6)]`)
- **Static (error or non-error)**: No focus states applied, regardless of error state

## Styling

The component uses CSS modules for base styles and supports Tailwind CSS utility classes. You can customize:

- **Container**: Use `containerClassName` to style the outer wrapper
- **Input Container**: Use `className` to style the input container (with icons)
- **Input Element**: The input itself has predefined styles but inherits some properties

### CSS Classes Applied

The input container receives the following base classes:

- `gap-[6px]` - spacing between icons and input
- `min-h-[40px]` - minimum height
- `bg-input-background` - background color
- `py-2 px-3` - padding

The input element receives:

- `font-medium text-base text-chromatic-inverted text-left`
- `placeholder:text-input-placeholder` - placeholder styling

## Accessibility

- Properly associates labels with inputs using `htmlFor` and `id`
- Required fields are indicated with an asterisk (\*) in the label
- Supports all native input attributes for screen readers
- Error messages are displayed visibly below the input
- Focus states are clearly indicated with shadows (when not static)
- Read-only and static states prevent accidental input modifications

## Development Notes

- The component logs a console warning if neither `id` nor `name` is provided
- When `readOnly` is true, the component automatically applies static styling
- The `isStatic` prop can be combined with `readOnly` for display-only fields
- Uses the `cn` utility for merging class names
- Built with TypeScript for type safety
- Follows atomic design principles (molecule level)

## File Structure

```
input/
├── index.ts                       # Public exports
├── input.tsx                      # Main component
├── input.props.ts                 # TypeScript interfaces
├── input.style.ts                 # CVA variants and styling
├── input.module.css               # CSS modules
├── README.md                      # This file
└── variants/
    ├── input-error.variant.ts     # Error state styles
    ├── input-fullwidth.variant.ts # Width variant styles
    └── input-static.variant.ts    # Static/read-only state styles
```

## Related Components

- [SearchInput](../search-input/README.md) - A specialized input for search functionality
