# TabButton

A composite organism component that combines the `Tab` and `Button` molecules to create a button-styled tab trigger. Built on top of Radix UI's Tabs primitive.

## Overview

`TabButton` provides a seamless integration between tabs and buttons, allowing you to create tab interfaces with button-like appearance and behavior. It wraps the `Tab` component with a `Button` component using the `asChild` pattern for proper composition.

## Features

- 🎨 Button-styled tab triggers
- 🔄 Combines Tab and Button molecules
- ⚡ Built on Radix UI Tabs primitives
- 🎯 Type-safe with TypeScript
- ⚠️ Development warnings for missing required props
- 🎭 Supports all Tab and Button props
- 📱 Client-side component

## Installation

This component is part of the gnetwork-ui package. Import it from the organisms/tabs directory:

```typescript
import { TabButton } from '@/packages/gnetwork-ui/components/organisms/tabs/tab-button';
```

## Usage

### Basic Usage

```tsx
import { TabButton } from '@/packages/gnetwork-ui/components/organisms/tabs/tab-button';
import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs';

function MyTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabButton value="tab1">First Tab</TabButton>
        <TabButton value="tab2">Second Tab</TabButton>
        <TabButton value="tab3">Third Tab</TabButton>
      </TabsList>
      <TabsContent value="tab1">Content for tab 1</TabsContent>
      <TabsContent value="tab2">Content for tab 2</TabsContent>
      <TabsContent value="tab3">Content for tab 3</TabsContent>
    </Tabs>
  );
}
```

### With Custom Styling

```tsx
<TabButton value="custom" className="my-custom-class">
  Custom Styled Tab
</TabButton>
```

### With Ref

```tsx
const tabRef = useRef<HTMLButtonElement>(null);

<TabButton value="ref-tab" ref={tabRef}>
  Tab with Ref
</TabButton>
```

## Props

`TabButton` accepts all props from both `TabProps` (which extends `TabsPrimitive.TabsTriggerProps` and `ReactButton`).

### Required Props

| Prop       | Type        | Description                                    |
| ---------- | ----------- | ---------------------------------------------- |
| `value`    | `string`    | Unique identifier for the tab                  |
| `children` | `ReactNode` | Content to be displayed inside the tab button  |

### Optional Props

| Prop        | Type     | Default | Description                          |
| ----------- | -------- | ------- | ------------------------------------ |
| `className` | `string` | `''`    | Additional CSS classes               |
| `ref`       | `Ref`    | -       | Forward ref to the underlying button |
| `...rest`   | `object` | -       | All other Tab/Button props           |

## Component Structure

```
TabButton (organism)
  └── Tab (molecule) [asChild]
        └── Button (molecule) [isStatic, px-2]
              └── children
```

## API Reference

### TabButton Component

The component uses the `asChild` pattern to compose the Tab and Button components:

- The `Tab` component receives all props including `value`, `className`, and `ref`
- The `Button` component is rendered with:
  - `isStatic` prop set to `true`
  - Default padding class `px-2`
  - The provided `children`

## Developer Notes

### Warnings

The component includes development warnings for missing required props:

- **Missing `children`**: Warns when children prop is not provided
- **Missing `value`**: Warns when value prop is not provided

These warnings help during development to ensure proper component usage.

### Styling

- Default horizontal padding: `px-2`
- Inherits all Button styling capabilities
- Supports custom className for additional styling
- Button is rendered as static (`isStatic` prop)

## TypeScript

The component is fully typed using TypeScript:

```typescript
type TabProps = TabsPrimitive.TabsTriggerProps & ReactButton;

const TabButton: React.FC<Readonly<TabProps>>;
```

## Dependencies

- `@radix-ui/react-tabs` - Underlying tabs primitive
- `../../../molecules/buttons/button` - Button molecule
- `../../../molecules/tabs/tab/tab` - Tab molecule

## Related Components

- `Tab` - Base tab molecule component
- `Button` - Button molecule component
- `@radix-ui/react-tabs` - Radix UI Tabs components (TabsList, TabsContent, etc.)

## Best Practices

1. **Always provide a unique `value`**: Each TabButton within a TabsList must have a unique value
2. **Provide meaningful children**: Use clear, concise labels for better UX
3. **Group within TabsList**: Always use TabButton within a Radix UI TabsList component
4. **Combine with TabsContent**: Ensure corresponding TabsContent components exist for each tab value

## Examples

### Complete Tab System

```tsx
import { TabButton } from '@/packages/gnetwork-ui/components/organisms/tabs/tab-button';
import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs';

export function Dashboard() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="flex gap-2">
        <TabButton value="overview">Overview</TabButton>
        <TabButton value="analytics">Analytics</TabButton>
        <TabButton value="reports">Reports</TabButton>
        <TabButton value="settings">Settings</TabButton>
      </TabsList>

      <TabsContent value="overview">
        <h2>Overview Dashboard</h2>
        {/* Overview content */}
      </TabsContent>

      <TabsContent value="analytics">
        <h2>Analytics Dashboard</h2>
        {/* Analytics content */}
      </TabsContent>

      <TabsContent value="reports">
        <h2>Reports Dashboard</h2>
        {/* Reports content */}
      </TabsContent>

      <TabsContent value="settings">
        <h2>Settings Dashboard</h2>
        {/* Settings content */}
      </TabsContent>
    </Tabs>
  );
}
```

### With Icons

```tsx
import { TabButton } from '@/packages/gnetwork-ui/components/organisms/tabs/tab-button';
import { Icon } from '@/packages/gnetwork-ui/components/atoms/icons/icon';

<TabButton value="home">
  <Icon name="home" />
  Home
</TabButton>
```

## Accessibility

- Inherits all accessibility features from Radix UI Tabs
- Proper ARIA attributes are automatically applied
- Keyboard navigation supported (Arrow keys, Home, End)
- Screen reader friendly

## Browser Support

Supports all modern browsers that are compatible with:
- React 18+
- Radix UI primitives

## License

Part of the GNetwork UI component library.

