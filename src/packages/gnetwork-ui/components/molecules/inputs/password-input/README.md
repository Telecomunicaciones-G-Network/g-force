# PasswordInput Component

A specialized password input component that wraps the base Input component with built-in password visibility toggle functionality. This component provides secure password entry with the ability to show/hide the password value on demand.

## Features

- ✨ Built-in label support with required field indicator
- 🔒 Pre-configured for password input type
- 👁️ Toggle visibility between password and text
- 🎨 Error state with custom styling and messages
- 🔍 Support for left icon (e.g., lock icon)
- 📏 Full-width and fit-width variants
- 🔒 Static and read-only modes
- ♿ Accessible with proper label-input association
- 🎯 TypeScript support with full type safety
- 🎨 Customizable with className overrides
- 🪝 Custom hook for password visibility management

## Import

```typescript
import { PasswordInput } from "@/packages/gnetwork-ui/components/molecules/inputs/password-input";
```

## Props

The component accepts all props from the base `Input` component **except** `type` (which is dynamically set to `"password"` or `"text"`) and `rightIcon` (which is reserved for the visibility toggle button).

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
| `ref`                | `React.Ref`  | -       | React ref for the input element                             |

> **Note:** Either `id` or `name` prop is required. All standard HTML input attributes are also supported. The `rightIcon` prop is reserved for the visibility toggle button and cannot be overridden.

## Usage Examples

### Basic Password Input

```tsx
<PasswordInput
  id="password"
  name="password"
  placeholder="Enter your password"
/>
```

### Password Input with Label

```tsx
<PasswordInput
  id="password"
  name="password"
  label="Password"
  placeholder="Enter your password"
/>
```

### Password Input with Error State

```tsx
<PasswordInput
  id="password"
  name="password"
  label="Password"
  error={true}
  message="Password must be at least 8 characters"
/>
```

### Password Input with Icon

```tsx
import { LockIcon } from "@/icons";

<PasswordInput
  id="password"
  name="password"
  label="Password"
  leftIcon={<LockIcon />}
  placeholder="Enter your password"
/>;
```

### Full Width Password Input

```tsx
<PasswordInput
  id="password"
  name="password"
  label="Password"
  fullWidth={true}
  placeholder="Enter your password"
/>
```

### Required Password Field

```tsx
<PasswordInput
  id="password"
  name="password"
  label="Password"
  required={true}
  placeholder="Enter your password"
/>
```

### Password Confirmation

```tsx
<PasswordInput
  id="confirm-password"
  name="confirm-password"
  label="Confirm Password"
  placeholder="Re-enter your password"
/>
```

### Complete Login Form Example

```tsx
import { PasswordInput } from "@/packages/gnetwork-ui/components/molecules/inputs/password-input";
import { EmailInput } from "@/packages/gnetwork-ui/components/molecules/inputs/email-input";
import { LockIcon, MailIcon } from "@/icons";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });

  const validatePassword = (value: string) => {
    setErrors((prev) => ({ ...prev, password: value.length < 8 }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <EmailInput
        id="email"
        name="email"
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        leftIcon={<MailIcon />}
        error={errors.email}
        fullWidth={true}
        required={true}
        placeholder="you@example.com"
      />

      <PasswordInput
        id="password"
        name="password"
        label="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          validatePassword(e.target.value);
        }}
        leftIcon={<LockIcon />}
        error={errors.password}
        message={
          errors.password ? "Password must be at least 8 characters" : ""
        }
        fullWidth={true}
        required={true}
        placeholder="Enter your password"
      />

      <button type="submit">Login</button>
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

## Password Visibility Toggle

The component includes a built-in visibility toggle button that:

- 👁️ **Shows password** when clicked (displays `MdOutlineVisibility` icon)
- 🔒 **Hides password** when clicked again (displays `MdOutlineVisibilityOff` icon)
- Dynamically switches input `type` between `"password"` and `"text"`
- Is always positioned on the right side of the input
- Includes `type="button"` to prevent form submission

### How It Works

The visibility toggle is managed by the `usePasswordInput` custom hook:

```typescript
const { showPassword, togglePassword } = usePasswordInput();
```

- **`showPassword`**: Boolean state indicating current visibility
- **`togglePassword`**: Function to toggle between show/hide states

## Password Validation

While the component handles visibility, you should implement your own password validation:

```tsx
const validatePassword = (
  password: string
): { valid: boolean; message: string } => {
  if (password.length < 8) {
    return { valid: false, message: "Password must be at least 8 characters" };
  }
  if (!/[A-Z]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain an uppercase letter",
    };
  }
  if (!/[a-z]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain a lowercase letter",
    };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, message: "Password must contain a number" };
  }
  return { valid: true, message: "" };
};

// Usage
const validation = validatePassword(passwordValue);

<PasswordInput
  id="password"
  name="password"
  error={!validation.valid}
  message={validation.message}
/>;
```

## Accessibility

- ♿ Properly associates labels with inputs using `htmlFor` and `id`
- ✅ Required fields are indicated with an asterisk (\*) in the label
- 🔒 Screen readers announce the field as "password" type
- 👁️ Toggle button includes proper button type to prevent form submission
- 💬 Error messages are displayed visibly below the input
- 🎯 Focus states are clearly indicated with shadows
- ⌨️ Fully keyboard accessible (tab navigation, enter/space to toggle)

## Security Considerations

- 🔒 Passwords are masked by default
- 👁️ Users can optionally reveal passwords for verification
- 🚫 Password values are not stored in component state (controlled by parent)
- 📋 Consider disabling autocomplete for sensitive password fields:
  ```tsx
  <PasswordInput autoComplete="new-password" />
  ```

## Styling

The component uses the same styling system as the base Input component. You can customize:

- **Container**: Use `containerClassName` to style the outer wrapper
- **Input Container**: Use `className` to style the input container (with icons)
- **Input Element**: Inherits predefined styles from the base Input component
- **Toggle Button**: Uses Material Design icons with fixed sizing (24px)

## Development Notes

- The `type` prop is dynamically set to `"password"` or `"text"` and cannot be overridden
- The `rightIcon` prop is reserved for the visibility toggle and cannot be customized
- Uses `react-icons/md` for visibility icons (Material Design)
- Component is marked with `"use client"` for Next.js client-side rendering
- Logs a console warning if neither `id` nor `name` is provided (inherited from base Input)
- Uses TypeScript's `Omit` utility to exclude the `type` prop from the interface
- Built with TypeScript for type safety
- Follows atomic design principles (molecule level)

## File Structure

```
password-input/
├── index.ts                   # Public exports
├── password-input.tsx         # Main component
├── password-input.hook.tsx    # Custom hook for visibility state
└── README.md                  # This file
```

## Custom Hook: `usePasswordInput`

The component includes a reusable custom hook for managing password visibility:

```typescript
export const usePasswordInput = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return { showPassword, togglePassword };
};
```

**Returns:**

- `showPassword`: Current visibility state (boolean)
- `togglePassword`: Function to toggle visibility state

## Related Components

- [Input](../input/README.md) - The base input component
- [EmailInput](../email-input/README.md) - A specialized input for email fields
- [SearchInput](../search-input/README.md) - A specialized input for search functionality

## Why Use PasswordInput?

Instead of manually managing password visibility:

```tsx
// ❌ Don't do this
const [show, setShow] = useState(false);
<Input
  type={show ? "text" : "password"}
  rightIcon={<button onClick={() => setShow(!show)}>Toggle</button>}
/>;
```

Use:

```tsx
// ✅ Do this
<PasswordInput ... />
```

**Benefits:**

1. **Built-in Functionality**: Password visibility toggle included out of the box
2. **Consistent UX**: All password fields use the same toggle behavior and icons
3. **Type Safety**: The `type` and `rightIcon` props are properly managed
4. **Maintainability**: Changes to password input behavior can be made in one place
5. **Accessibility**: Proper button type and keyboard interactions handled automatically
6. **Less Code**: No need to manage visibility state in every form

## Browser Compatibility

The component uses standard React features and is compatible with all modern browsers. The Material Design icons are provided by `react-icons` which has excellent browser support.
