# Alert Component

A flexible and accessible alert component for displaying important messages to users with different visual schemes.

## Features

- 🎨 **Multiple Schemes**: Error, Success, Wait, and Neutral variants
- 🎯 **Icon Support**: Automatic icons based on alert scheme
- 📦 **Flexible Content**: Supports any React children
- 🎭 **Customizable**: Extends standard div properties
- ♿ **Accessible**: Built with semantic HTML

## Installation

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";
import { AlertSchemes } from "@/packages/gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum";
```

## Props

| Prop        | Type                  | Default     | Description                       |
| ----------- | --------------------- | ----------- | --------------------------------- |
| `scheme`    | `AlertSchemeType`     | `"neutral"` | Visual style variant of the alert |
| `children`  | `ReactNode`           | -           | Content to display in the alert   |
| `className` | `string`              | -           | Additional CSS classes            |
| `ref`       | `Ref<HTMLDivElement>` | -           | React ref object                  |

All standard HTML div attributes are also supported.

## Available Schemes

### `error`

Displays an error or danger message with a warning icon.

- **Icon**: Cancel/X icon
- **Colors**: Warning background and border
- **Use Case**: Errors, failures, destructive actions

### `success`

Displays a success or confirmation message with a check icon.

- **Icon**: Check circle icon
- **Colors**: Success green background and border
- **Use Case**: Successful operations, confirmations

### `wait`

Displays a pending or in-progress message with a timer icon.

- **Icon**: Timer icon
- **Colors**: Blue background and border
- **Use Case**: Loading states, pending operations, waiting for action

### `neutral`

Displays a general informational message without an icon.

- **Icon**: None
- **Colors**: Gray background and border
- **Use Case**: General information, neutral notifications

## Usage Examples

### Basic Usage

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";

export default function Example() {
  return <Alert scheme="neutral">This is a general information message.</Alert>;
}
```

### Error Alert

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";
import { AlertSchemes } from "@/packages/gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum";

export default function ErrorExample() {
  return (
    <Alert scheme={AlertSchemes.ERROR}>
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
    <Alert scheme={AlertSchemes.SUCCESS}>
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
    <Alert scheme={AlertSchemes.WAIT}>
      Processing your request. Please wait...
    </Alert>
  );
}
```

### With Custom Styling

```tsx
import { Alert } from "@/packages/gnetwork-ui/components/molecules/alerts/alert";

export default function CustomExample() {
  return (
    <Alert scheme="success" className="shadow-lg mb-4">
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
    <Alert scheme={AlertSchemes.ERROR}>
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

Each scheme applies specific background, border, and text colors:

- **Error**: Warning colors (100/200/300 shades)
- **Success**: Success colors (100/200/300 shades)
- **Wait**: Dark blue colors
- **Neutral**: Gray colors (200/300 shades)

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

1. **Keep messages concise**: The component has a max-width of 352px
2. **Use appropriate schemes**: Match the scheme to the message type
3. **Add context**: Include actionable information when possible
4. **Consider placement**: Position alerts where users expect feedback
5. **Avoid overuse**: Too many alerts can overwhelm users

## License

This component is part of the G-Force UI library.
