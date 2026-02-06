# EmptyListMessage

A reusable block component that displays an empty-state message when a list or table has no items. It supports an optional icon, a main message, and an optional explanation.

## Usage

```tsx
import { EmptyListMessage } from '@gnetwork-ui/components/templates/blocks/empty-list-message';

<EmptyListMessage
  message="No items found"
  explanation="Create your first item to get started"
  icon={<YourIcon />}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | `'No hay registros disponibles por el momento'` | Main text shown in the empty state. |
| `explanation` | `string` | — | Optional heading/subtitle above the message. |
| `icon` | `ReactChild` | — | Optional icon or illustration to display above the text. |
| `className` | `string` | `''` | Additional CSS classes for the root element. |
| `ref` | `ReactRef` | — | Ref forwarded to the root `div`. |
| `...rest` | `ReactDiv` | — | Any other valid `div` props (e.g. `aria-*`, `data-*`). |

## When to use

- Empty tables or lists (e.g. no management agents, no chats).
- Search or filter results with no matches.
- First-time states where the user has not created any items yet.

Use a short, actionable `message` and, when helpful, an `explanation` and `icon` to guide the user.
