# Toast

Toast notifications built on [Sonner](https://sonner.emilkowal.ski/) and the [Alert](../molecules/alerts/alert) component. Use them to show short-lived feedback (success, error, warning, etc.) to the user.

## Installation

Ensure the app root renders the Sonner `Toaster` (e.g. in your root layout):

```tsx
import { Toaster } from 'sonner';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
```

## Usage

### `useToast` hook

Use the hook to get a `showToast` function and display toasts from any client component:

```tsx
'use client';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';
import { AlertSchemes } from '@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum';

function MyComponent() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast('Ticket created successfully', { scheme: AlertSchemes.SUCCESS });
  };

  const handleError = () => {
    showToast('Something went wrong', {
      id: 'my-error-toast',
      scheme: AlertSchemes.ERROR,
      position: 'top-right',
      duration: 5000,
    });
  };

  return (
    // ...
  );
}
```

### `Toast` component

The `Toast` component is a thin wrapper around `Alert` and is intended to be used via `showToast` (which uses Sonner’s `toast.custom`). You typically don’t render `<Toast />` directly in JSX unless you are customizing the toast rendering.

## API

### `useToast()`

Returns an object with:

| Property     | Type                                      | Description                    |
| ------------ | ----------------------------------------- | ------------------------------ |
| `showToast`  | `(message: string, config?: ToastConfig) => void` | Shows a toast with the given message and optional config. |

### `showToast(message, config?)`

| Argument  | Type           | Required | Description                |
| --------- | -------------- | -------- | -------------------------- |
| `message` | `string`       | Yes      | Text shown in the toast.   |
| `config`  | `ToastConfig?` | No       | Options for appearance and behavior. |

### `ToastConfig`

Extends Sonner’s toast options and Alert props (without `children` and `dir`). Common options:

| Property    | Type            | Description |
| ----------- | --------------- | ----------- |
| `scheme`    | `AlertSchemeType` | Visual style: `'error'`, `'neutral'`, `'success'`, `'wait'`, `'warning'`. Default: `'neutral'`. |
| `className` | `string`        | Extra CSS classes for the toast. |
| `id`        | `string`        | Stable id for the toast (e.g. for deduplication). |
| `position`  | `Position`      | Placement (e.g. `'top-right'`, `'bottom-center'`). |
| `duration`  | `number`        | How long the toast stays visible (ms). |

For the full set of options, see [Sonner’s API](https://sonner.emilkowal.ski/) and the [Alert](../molecules/alerts/alert) component props.

### Schemes (`AlertSchemes`)

| Value     | Usage |
| --------- | ----- |
| `ERROR`   | Errors and failed actions. |
| `NEUTRAL` | General information (default). |
| `SUCCESS` | Successful actions. |
| `WAIT`    | Loading or in-progress state. |
| `WARNING` | Warnings and caution. |

## Examples

**Success message:**

```tsx
showToast('Ticket created successfully', { scheme: AlertSchemes.SUCCESS });
```

**Error with custom id and position:**

```tsx
showToast('Error sending message', {
  id: 'send-message-error',
  scheme: AlertSchemes.ERROR,
  position: 'top-right',
});
```

**Custom duration and width:**

```tsx
showToast('File format not allowed', {
  className: 'min-w-[min(380px,100%)]',
  duration: 3000,
});
```

## Exports

- `Toast` – Toast UI component (Alert-based).
- `ToastConfig` – Type for toast configuration.
- `useToast` – Hook that returns `{ showToast }`.

Import the hook from:

`@gnetwork-ui/components/organisms/toasts/toast/toast.hook`

Import schemes from:

`@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum`
