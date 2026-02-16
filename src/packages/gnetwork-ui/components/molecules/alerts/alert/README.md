# Alert Component

A flexible and accessible alert component for displaying important messages to users with different visual schemes.

## Features

- 🎨 **Multiple Schemes**: Error, Success, Wait, Warning, and Neutral variants
- 🎯 **Icon Support**: Automatic icons based on alert scheme (Material Design icons)
- 📦 **Flexible Content**: Supports any React children
- 🎭 **Customizable**: Extends standard div properties
- ♿ **Accessible**: Built with semantic HTML
- ⚠️ **Required `id`**: The component requires an `id` prop and logs a console warning when it is missing

## Installation

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";
import { AlertSchemes } from "@/packages/gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum";
```

## Props

| Prop        | Type                  | Default     | Description                                                                 |
| ----------- | --------------------- | ----------- | --------------------------------------------------------------------------- |
| `id`        | `string`              | -           | **Required.** Identifier for the alert. A console warning is shown if missing. |
| `scheme`    | `AlertSchemeType`     | `"neutral"` | Visual style variant of the alert (`error`, `neutral`, `success`, `wait`, `warning`) |
| `children`  | `ReactNode`           | -           | Content to display in the alert                                             |
| `className` | `string`              | -           | Additional CSS classes                                                      |
| `ref`       | `Ref<HTMLDivElement>` | -           | React ref object                                                            |

All standard HTML div attributes are also supported.

## Available Schemes

### `error`

Displays an error or danger message with a cancel icon.

- **Icon**: Cancel/X icon (`MdCancel`)
- **Colors**: Red background and text
- **Use Case**: Errors, failures, destructive actions

### `success`

Displays a success or confirmation message with a check icon.

- **Icon**: Check circle icon (`MdCheckCircle`)
- **Colors**: Tag green background and foreground
- **Use Case**: Successful operations, confirmations

### `wait`

Displays a pending or in-progress message with a timer icon.

- **Icon**: Timer icon (`MdOutlineTimer`)
- **Colors**: Dark blue background and foreground
- **Use Case**: Loading states, pending operations, waiting for action

### `neutral`

Displays a general informational message with an info icon.

- **Icon**: Info icon (`MdInfo`)
- **Colors**: Chromatic (inverted) background and text
- **Use Case**: General information, neutral notifications

### `warning`

Displays a warning or caution message with a warning icon.

- **Icon**: Warning icon (`MdWarning`)
- **Colors**: Warning background and border (100/300 shades)
- **Use Case**: Warnings, cautions, non-critical issues

## Usage Examples

### Basic Usage

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";

export default function Example() {
  return (
    <Alert id="alert-info" scheme="neutral">
      This is a general information message.
    </Alert>
  );
}
```

### Error Alert

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";
import { AlertSchemes } from "@/packages/gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum";

export default function ErrorExample() {
  return (
    <Alert id="alert-error" scheme={AlertSchemes.ERROR}>
      Something went wrong! Please try again.
    </Alert>
  );
}
```

### Success Alert

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";
import { AlertSchemes } from "@/packages/gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum";

export default function SuccessExample() {
  return (
    <Alert id="alert-success" scheme={AlertSchemes.SUCCESS}>
      Your changes have been saved successfully!
    </Alert>
  );
}
```

### Wait/Pending Alert

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";
import { AlertSchemes } from "@/packages/gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum";

export default function WaitExample() {
  return (
    <Alert id="alert-wait" scheme={AlertSchemes.WAIT}>
      Processing your request. Please wait...
    </Alert>
  );
}
```

### Warning Alert

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";
import { AlertSchemes } from "@/packages/gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum";

export default function WarningExample() {
  return (
    <Alert id="alert-warning" scheme={AlertSchemes.WARNING}>
      Please review your input before continuing.
    </Alert>
  );
}
```

### With Custom Styling

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";

export default function CustomExample() {
  return (
    <Alert id="alert-custom" scheme="success" className="shadow-lg mb-4">
      Custom styled alert with additional classes.
    </Alert>
  );
}
```

### With Complex Content

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";
import { AlertSchemes } from "@/packages/gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum";

export default function ComplexExample() {
  return (
    <Alert id="alert-complex" scheme={AlertSchemes.ERROR}>
      <div>
        <strong>Error:</strong> Unable to process payment.
        <ul className="mt-2 ml-4 list-disc">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
        </ul>
      </div>
    </Alert>
  );
}
```

## Styling

The Alert component uses CSS modules and class-variance-authority for styling:

### Base Styles

- Rounded corners (8px border-radius)
- Flexbox layout with centered items
- Minimum height: 64px
- Maximum width: 352px
- Responsive padding and gap
- Word break for long text

### Color Schemes

Each scheme applies specific background and text colors:

- **Error**: Red (`bg-red-600`, `text-red-100`)
- **Success**: Tag green background and foreground
- **Wait**: Dark blue background and foreground
- **Warning**: Warning colors (100/300 shades)
- **Neutral**: Chromatic inverted background and chromatic text

### Customization

You can extend the styling by:

1. Passing additional classes via `className` prop
2. Modifying the CSS module (`alert.module.css`)
3. Updating the variant definitions (`variants/alert-scheme.variant.ts`)

## Technical Details

### Component Structure

```
alert/
├── alert.tsx                 # Main component
├── alert.props.ts           # TypeScript prop definitions
├── alert.style.ts           # Style composition using CVA
├── alert.module.css         # CSS module for base styles
├── index.ts                 # Public exports
├── enums/
│   └── alert-scheme.enum.ts # Scheme enum values
├── types/
│   └── alert-scheme.type.ts # TypeScript types
└── variants/
    └── alert-scheme.variant.ts # Scheme variant styles
```

### Dependencies

- `react-icons/md`: For Material Design icons
- `class-variance-authority`: For variant styling
- Internal utility: `cn` for className merging

## Accessibility

- Uses semantic HTML (`div` with appropriate ARIA attributes when needed)
- Icons include appropriate sizing and color contrast
- Text content is readable with sufficient contrast ratios
- Supports all standard HTML div attributes for enhanced accessibility

## Best Practices

1. **Always provide `id`**: The component requires an `id` for proper rendering; omit it only if you intentionally accept the console warning.
2. **Keep messages concise**: The component has a max-width of 352px
3. **Use appropriate schemes**: Match the scheme to the message type (error, success, wait, warning, neutral)
4. **Add context**: Include actionable information when possible
5. **Consider placement**: Position alerts where users expect feedback
6. **Avoid overuse**: Too many alerts can overwhelm users

## License

This component is part of the G-Force UI library.
