# ButtonGroup Component

Flexible container component for rendering multiple buttons in a horizontal layout. Built with React and TypeScript, it provides a clean way to group related actions with conditional rendering support.

## Features

- 🎯 **Multiple buttons**: Render an array of buttons in a single container
- 🔄 **Conditional rendering**: Show/hide buttons based on `isActive` flag
- 📐 **Flexible layout**: Automatic spacing and alignment with flexbox
- 🎨 **Customizable**: Accepts all standard div props for styling
- ♿ **Accessible**: Inherits accessibility from Button components
- 🔧 **Type-safe**: Full TypeScript support with proper prop types

## Installation

```tsx
import { ButtonGroup } from "@/packages/gnetwork-ui/components/organisms/buttons/button-group";
```

## Basic Usage

```tsx
import { ButtonGroup } from "@/packages/gnetwork-ui/components/organisms/buttons/button-group";

export default function Example() {
  const buttons = [
    {
      id: "save",
      children: "Save",
      onClick: () => console.log("Saved!"),
    },
    {
      id: "cancel",
      children: "Cancel",
      onClick: () => console.log("Cancelled!"),
    },
  ];

  return <ButtonGroup buttons={buttons} />;
}
```

## API / Props

| Prop       | Type                | Default | Description                                    |
| ---------- | ------------------- | ------- | ---------------------------------------------- |
| `buttons`  | `ButtonGroupButton[]` | -       | **Required.** Array of button configurations   |
| `className` | `string`            | `""`    | Additional CSS classes for the container       |
| `ref`      | `React.Ref`         | -       | Reference to the container div element         |
| `...rest`  | `ReactDiv`          | -       | All standard HTML div attributes               |

### ButtonGroupButton

Each button in the `buttons` array extends `ButtonProps` with additional properties:

| Prop      | Type      | Default | Description                                    |
| --------- | --------- | ------- | ---------------------------------------------- |
| `id`      | `string`  | -       | **Required.** Unique identifier for the button |
| `isActive` | `boolean` | `true`  | Whether the button should be rendered          |
| `...rest` | `ButtonProps` | -    | All Button component props (see below)         |

### Button Props

Each button accepts all props from the [Button component](../molecules/buttons/button/README.md), including:

- `children`: Button content (required)
- `type`: `"button"` | `"submit"` | `"reset"`
- `color`: `"default"` | `"gray"` | `"red"`
- `size`: `"default"` | `"medium"` | `"big"`
- `scheme`: `"default"` | `"outline"`
- `fullWidth`: `boolean`
- `isStatic`: `boolean`
- `loading`: `boolean`
- `disabled`: `boolean`
- `leftIcon`: `ReactNode`
- `rightIcon`: `ReactNode`
- `onClick`: `(event: MouseEvent) => void`
- And all other standard button HTML attributes

## Examples

### Basic Button Group

```tsx
function BasicExample() {
  const buttons = [
    {
      id: "primary",
      children: "Primary Action",
      onClick: () => handlePrimary(),
    },
    {
      id: "secondary",
      children: "Secondary Action",
      onClick: () => handleSecondary(),
    },
  ];

  return <ButtonGroup buttons={buttons} />;
}
```

### Conditional Rendering

```tsx
function ConditionalExample() {
  const [canEdit, setCanEdit] = useState(true);
  const [canDelete, setCanDelete] = useState(false);

  const buttons = [
    {
      id: "edit",
      children: "Edit",
      isActive: canEdit,
      onClick: () => handleEdit(),
    },
    {
      id: "delete",
      children: "Delete",
      isActive: canDelete,
      color: "red",
      onClick: () => handleDelete(),
    },
  ];

  return <ButtonGroup buttons={buttons} />;
}
```

### With Button Variants

```tsx
function VariantsExample() {
  const buttons = [
    {
      id: "cancel",
      children: "Cancel",
      scheme: "outline",
      color: "gray",
      onClick: () => handleCancel(),
    },
    {
      id: "save",
      children: "Save",
      color: "default",
      onClick: () => handleSave(),
    },
    {
      id: "delete",
      children: "Delete",
      color: "red",
      scheme: "outline",
      onClick: () => handleDelete(),
    },
  ];

  return <ButtonGroup buttons={buttons} />;
}
```

### With Icons

```tsx
import { Save, X, Trash2 } from "lucide-react";

function IconsExample() {
  const buttons = [
    {
      id: "cancel",
      children: "Cancel",
      leftIcon: <X />,
      scheme: "outline",
      onClick: () => handleCancel(),
    },
    {
      id: "save",
      children: "Save",
      leftIcon: <Save />,
      onClick: () => handleSave(),
    },
    {
      id: "delete",
      children: "Delete",
      leftIcon: <Trash2 />,
      color: "red",
      scheme: "outline",
      onClick: () => handleDelete(),
    },
  ];

  return <ButtonGroup buttons={buttons} />;
}
```

### Loading States

```tsx
function LoadingExample() {
  const [isSaving, setIsSaving] = useState(false);

  const buttons = [
    {
      id: "cancel",
      children: "Cancel",
      isActive: !isSaving,
      scheme: "outline",
      onClick: () => handleCancel(),
    },
    {
      id: "save",
      children: "Save",
      loading: isSaving,
      onClick: async () => {
        setIsSaving(true);
        await handleSave();
        setIsSaving(false);
      },
    },
  ];

  return <ButtonGroup buttons={buttons} />;
}
```

### Custom Styling

```tsx
function CustomStylingExample() {
  const buttons = [
    { id: "btn1", children: "Button 1", onClick: () => {} },
    { id: "btn2", children: "Button 2", onClick: () => {} },
  ];

  return (
    <ButtonGroup
      buttons={buttons}
      className="my-custom-class"
      style={{ padding: "1rem" }}
    />
  );
}
```

### Dynamic Button Groups

```tsx
function DynamicExample() {
  const [actions, setActions] = useState([
    { id: "action1", label: "Action 1", enabled: true },
    { id: "action2", label: "Action 2", enabled: false },
  ]);

  const buttons = actions
    .filter((action) => action.enabled)
    .map((action) => ({
      id: action.id,
      children: action.label,
      onClick: () => handleAction(action.id),
    }));

  return <ButtonGroup buttons={buttons} />;
}
```

## Layout

The ButtonGroup component uses flexbox with the following default styles:

- `display: flex`
- `align-items: center`
- `gap: 1rem` (gap-4)
- `justify-content: space-between` (justify-between)

Buttons are automatically spaced and aligned. The container accepts all standard div props for further customization.

## Behavior

- **Missing buttons prop**: The component will log a console warning if the `buttons` prop is not provided
- **Inactive buttons**: Buttons with `isActive: false` are not rendered
- **Key prop**: Each button uses its `id` as the React key for efficient rendering
- **Fragment wrapper**: Each button is wrapped in a Fragment to support conditional rendering

## Technologies

- **React 18+**: UI framework
- **TypeScript**: Static typing
- **CSS Modules**: Isolated styles
- **Button Component**: Uses the Button molecule component

## Accessibility

The ButtonGroup component inherits accessibility features from the Button components:

- ✅ Full keyboard support for all buttons
- ✅ Proper focus management
- ✅ ARIA attributes from Button components
- ✅ Semantic HTML structure

## Development Notes

- The component shows a console warning if `buttons` prop is missing
- Each button must have a unique `id` for proper React key handling
- The `isActive` prop defaults to `true` if not specified
- All Button component features (loading, disabled, icons, etc.) are available for each button in the group

## File Structure

```
button-group/
├── button-group.tsx         # Main component
├── button-group.props.ts    # TypeScript definitions
├── button-group.module.css  # CSS styles
├── index.ts                 # Exports
└── README.md                # This documentation
```

## License

This component is part of the G-Network UI Library.

