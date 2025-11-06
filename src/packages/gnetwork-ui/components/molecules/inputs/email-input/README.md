# EmailInput Component

A specialized email input component that wraps the base Input component with the `type="email"` attribute pre-configured. This component provides all the features of the Input component while ensuring proper email validation and keyboard support on mobile devices.

## Features

- ✨ Built-in label support with required field indicator
- 📧 Pre-configured for email input type
- 🎨 Error state with custom styling and messages
- 🔍 Support for left and right icons (e.g., mail icon)
- 📏 Full-width and fit-width variants
- 🔒 Static and read-only modes
- ♿ Accessible with proper label-input association
- 🎯 TypeScript support with full type safety
- 🎨 Customizable with className overrides
- 📱 Optimized keyboard layout for email entry on mobile devices

## Import

```typescript
import { EmailInput } from "@/packages/gnetwork-ui/components/molecules/inputs/email-input";
```

## Props

The component accepts all props from the base `Input` component **except** `type` (which is fixed to `"email"`).

| Prop                 | Type         | Default | Description                                                 |
| -------------------- | ------------ | ------- | ----------------------------------------------------------- |
| `className`          | `string`     | `""`    | Custom class name for the input container                   |
| `containerClassName` | `string`     | `""`    | Custom class name for the outer wrapper div                 |
| `error`              | `boolean`    | `false` | Enables error state styling                                 |
| `fullWidth`          | `boolean`    | `false` | Makes the input take full width of its container            |
| `id`                 | `string`     | -       | **Required** - HTML id attribute for the input              |
| `isStatic`           | `boolean`    | `false` | Disables focus states and interactions (used with readOnly) |
| `label`              | `string`     | `""`    | Label text displayed above the input                        |
| `leftIcon`           | `ReactChild` | -       | Icon or element displayed on the left side of the input     |
| `message`            | `string`     | `""`    | Helper or error message displayed below the input           |
| `name`               | `string`     | -       | **Required** - HTML name attribute for the input            |
| `readOnly`           | `boolean`    | `false` | Makes the input read-only (prevents editing)                |
| `required`           | `boolean`    | `false` | Marks the field as required (adds asterisk to label)        |
| `rightIcon`          | `ReactChild` | -       | Icon or element displayed on the right side of the input    |
| `ref`                | `React.Ref`  | -       | React ref for the input element                             |

> **Note:** Either `id` or `name` prop is required. All standard HTML input attributes are also supported.

## Usage Examples

### Basic Email Input

```tsx
<EmailInput id="email" name="email" placeholder="you@example.com" />
```

### Email Input with Label

```tsx
<EmailInput
  id="email"
  name="email"
  label="Email Address"
  placeholder="you@example.com"
/>
```

### Email Input with Error State

```tsx
<EmailInput
  id="email"
  name="email"
  label="Email Address"
  error={true}
  message="Please enter a valid email address"
/>
```

### Email Input with Icon

```tsx
import { MailIcon } from "@/icons";

<EmailInput
  id="email"
  name="email"
  label="Email"
  leftIcon={<MailIcon />}
  placeholder="you@example.com"
/>;
```

### Full Width Email Input

```tsx
<EmailInput
  id="email"
  name="email"
  label="Email Address"
  fullWidth={true}
  placeholder="Enter your email"
/>
```

### Required Email Field

```tsx
<EmailInput
  id="email"
  name="email"
  label="Email"
  required={true}
  placeholder="you@example.com"
/>
```

### Read-Only Email Display

```tsx
<EmailInput
  id="user-email"
  name="user-email"
  label="Your Email"
  value="john.doe@example.com"
  readOnly={true}
/>
```

### Complete Form Example

```tsx
import { EmailInput } from "@/packages/gnetwork-ui/components/molecules/inputs/email-input";
import { MailIcon } from "@/icons";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(value));
  };

  return (
    <form>
      <EmailInput
        id="email"
        name="email"
        label="Email Address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
        leftIcon={<MailIcon />}
        error={error}
        message={error ? "Please enter a valid email address" : ""}
        fullWidth={true}
        required={true}
        placeholder="you@example.com"
      />
    </form>
  );
};
```

## Variants

The component inherits all variants from the base Input component:

### Error Variant

- **`error: false`** (default): Standard border with neutral colors and focus states
- **`error: true`**: Warning-colored border with error-specific focus shadow

### Full Width Variant

- **`fullWidth: false`** (default): Input takes only the space it needs
- **`fullWidth: true`**: Input expands to fill container width

### Static Variant

- **`isStatic: false`** (default): Normal interactive input with focus states
- **`isStatic: true`**: Disables focus states and interactions

## Browser Behavior

The email input type provides native browser features:

- **Mobile Keyboards**: Shows optimized keyboard layout with `@` and `.` keys readily accessible
- **Validation**: Browsers provide basic email format validation (though you should implement your own validation)
- **Autocomplete**: Supports browser's email autocomplete when the name/id is properly set

## Validation

While the component uses `type="email"` for native browser hints, you should implement your own email validation:

```tsx
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Usage
<EmailInput
  id="email"
  name="email"
  error={!validateEmail(emailValue)}
  message={!validateEmail(emailValue) ? "Invalid email format" : ""}
/>;
```

## Accessibility

- ♿ Properly associates labels with inputs using `htmlFor` and `id`
- ✅ Required fields are indicated with an asterisk (\*) in the label
- 🔍 Screen readers announce the field as "email" type
- 💬 Error messages are displayed visibly below the input
- 🎯 Focus states are clearly indicated with shadows
- 📱 Mobile devices show appropriate keyboard for email entry

## Styling

The component uses the same styling system as the base Input component. You can customize:

- **Container**: Use `containerClassName` to style the outer wrapper
- **Input Container**: Use `className` to style the input container (with icons)
- **Input Element**: Inherits predefined styles from the base Input component

## Development Notes

- The `type` prop is fixed to `"email"` and cannot be overridden
- The component is a thin wrapper around the base Input component
- Logs a console warning if neither `id` nor `name` is provided
- Uses TypeScript's `Omit` utility to exclude the `type` prop from the interface
- Built with TypeScript for type safety
- Follows atomic design principles (molecule level)

## File Structure

```
email-input/
├── index.ts           # Public exports
├── email-input.tsx    # Main component
└── README.md          # This file
```

## Related Components

- [Input](../input/README.md) - The base input component
- [PasswordInput](../password-input/README.md) - A specialized input for password fields
- [SearchInput](../search-input/README.md) - A specialized input for search functionality

## Why Use EmailInput?

Instead of using:

```tsx
<Input type="email" ... />
```

Use:

```tsx
<EmailInput ... />
```

**Benefits:**

1. **Type Safety**: The `type` prop cannot be accidentally changed
2. **Consistency**: Ensures all email inputs across your app use the same configuration
3. **Clarity**: Makes code more semantic and readable
4. **Maintainability**: Changes to email input behavior can be made in one place
