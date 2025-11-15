# Tab

A flexible tab trigger component built on top of Radix UI's Tabs primitive. This component serves as the interactive trigger element within a tab navigation system, providing accessible and customizable tab switching functionality.

## Features

- 🎯 **Radix UI Foundation**: Built on `@radix-ui/react-tabs` for robust accessibility
- ♿ **Accessible**: Full keyboard navigation and ARIA attributes out of the box
- 🎨 **Customizable**: Accepts custom className and styling
- 🔧 **Flexible**: Supports all standard button and Radix Tabs trigger props
- ⚠️ **Developer Warnings**: Built-in console warnings for missing required props
- 🔄 **Controlled**: Works within Radix Tabs context for state management

## Usage

### Basic Example

```tsx
import * as Tabs from '@radix-ui/react-tabs';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';

export const MyTabs = () => {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
      </Tabs.List>

      <Tabs.Content value="tab1">First tab content</Tabs.Content>
      <Tabs.Content value="tab2">Second tab content</Tabs.Content>
      <Tabs.Content value="tab3">Third tab content</Tabs.Content>
    </Tabs.Root>
  );
};
```

### With Custom Styling

```tsx
<Tab
  value="profile"
  className="px-6 py-3 text-sm font-medium hover:bg-gray-100"
>
  Profile
</Tab>
```

### With Icons

```tsx
import { FiHome, FiSettings } from 'react-icons/fi';

<Tabs.List>
  <Tab value="home" className="flex items-center gap-2">
    <FiHome />
    <span>Home</span>
  </Tab>
  <Tab value="settings" className="flex items-center gap-2">
    <FiSettings />
    <span>Settings</span>
  </Tab>
</Tabs.List>
```

### Disabled State

```tsx
<Tab value="disabled-tab" disabled>
  Disabled Tab
</Tab>
```

### With Custom Ref

```tsx
'use client';

import { useRef } from 'react';

export const TabsWithRef = () => {
  const tabRef = useRef<HTMLButtonElement>(null);

  const focusTab = () => {
    tabRef.current?.focus();
  };

  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tab value="tab1" ref={tabRef}>First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
      </Tabs.List>
      <button onClick={focusTab}>Focus First Tab</button>
    </Tabs.Root>
  );
};
```

## Props

The `Tab` component accepts all props from both `TabsPrimitive.TabsTriggerProps` and `ReactButton` (standard button HTML attributes).

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | Unique identifier for the tab. **Required** - triggers console warning if missing |
| `children` | `React.ReactNode` | Tab label content. **Required** - triggers console warning if missing |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `ref` | `Ref<HTMLButtonElement>` | - | React ref for the button element |
| `disabled` | `boolean` | `false` | Disables tab interaction and prevents events |
| `onClick` | `function` | - | Click event handler |
| `onKeyDown` | `function` | - | Keyboard event handler |
| `id` | `string` | - | HTML id attribute |
| `aria-label` | `string` | - | Accessible label for screen readers |
| `title` | `string` | - | Tooltip text on hover |

All other standard button and Radix Tabs trigger props are also supported.

## Styling

### Default Styles

The component applies these base styles:

```css
.base {
  box-sizing: border-box;
  font-family: inherit;
  display: inline-flex;
}
```

Additional utility classes applied by default:
- `items-center` - Vertical centering
- `justify-center` - Horizontal centering
- `whitespace-nowrap` - Prevents text wrapping
- `disabled:pointer-events-none` - Disables pointer events when disabled

### Custom Styling Examples

#### Styled Tabs

```tsx
<Tabs.Root defaultValue="home">
  <Tabs.List className="flex border-b border-gray-200">
    <Tab
      value="home"
      className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
    >
      Home
    </Tab>
    <Tab
      value="profile"
      className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
    >
      Profile
    </Tab>
  </Tabs.List>
</Tabs.Root>
```

#### Pill Style Tabs

```tsx
<Tab
  value="messages"
  className="rounded-full px-6 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
>
  Messages
</Tab>
```

## Accessibility

### Built-in Features

The Tab component inherits full accessibility from Radix UI Tabs:

- **ARIA Roles**: Proper `role="tab"` applied automatically
- **ARIA Attributes**: `aria-selected`, `aria-controls` managed by Radix
- **Keyboard Navigation**:
  - `Tab` - Moves focus into and out of the tab list
  - `Arrow Left/Right` - Navigate between tabs
  - `Home/End` - Jump to first/last tab
  - `Space/Enter` - Activate focused tab (when not automatic)

### Best Practices

#### Always provide meaningful labels:

```tsx
<Tab value="settings" aria-label="User settings">
  ⚙️
</Tab>
```

#### For icon-only tabs, include accessible text:

```tsx
<Tab value="notifications" title="Notifications" aria-label="Notifications">
  <BellIcon aria-hidden="true" />
</Tab>
```

#### Handle disabled state clearly:

```tsx
<Tab
  value="premium"
  disabled
  aria-label="Premium features (requires subscription)"
  title="Upgrade to access"
>
  Premium ⭐
</Tab>
```

## Developer Warnings

The component includes helpful console warnings during development:

### Missing Children Warning

```tsx
<Tab value="empty" />
// Console: "Prop children is missing on Tab component. This component can not be render appropiately."
```

### Missing Value Warning

```tsx
<Tab>My Tab</Tab>
// Console: "Prop value is missing on Tab component. This component can not be render appropiately."
```

## Complete Example

```tsx
'use client';

import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

export const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List className="flex gap-2 border-b border-gray-200 p-2">
        <Tab
          value="home"
          className="flex items-center gap-2 px-4 py-2 rounded-t-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
        >
          <FiHome />
          <span>Home</span>
        </Tab>

        <Tab
          value="profile"
          className="flex items-center gap-2 px-4 py-2 rounded-t-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
        >
          <FiUser />
          <span>Profile</span>
        </Tab>

        <Tab
          value="settings"
          className="flex items-center gap-2 px-4 py-2 rounded-t-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
        >
          <FiSettings />
          <span>Settings</span>
        </Tab>
      </Tabs.List>

      <Tabs.Content value="home" className="p-4">
        <h2>Home Content</h2>
      </Tabs.Content>

      <Tabs.Content value="profile" className="p-4">
        <h2>Profile Content</h2>
      </Tabs.Content>

      <Tabs.Content value="settings" className="p-4">
        <h2>Settings Content</h2>
      </Tabs.Content>
    </Tabs.Root>
  );
};
```

## Data Attributes

The component exposes these data attributes for styling based on state:

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-state` | `"active"` \| `"inactive"` | Current tab activation state |
| `data-disabled` | `""` | Present when tab is disabled |
| `data-orientation` | `"horizontal"` \| `"vertical"` | Inherited from Tabs.Root |

Example usage in CSS:

```css
.tab[data-state="active"] {
  border-bottom: 2px solid blue;
  color: blue;
}

.tab[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Dependencies

- `@radix-ui/react-tabs` - Accessible tabs primitive
- `../../../../utils/cn.util` - Class name utility for merging classes
- `../../../../types/react-button.type` - TypeScript types for button props

## Component Structure

```
Tab (molecule)
└── TabsPrimitive.Trigger (Radix UI)
    └── children (tab label content)
```

## Integration with Tab System

The Tab component works alongside other tab-related components:

- **TabsTriggers** - Container for multiple Tab components
- **TabContent** - Content panels for each tab

Example of full integration:

```tsx
import * as Tabs from '@radix-ui/react-tabs';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { TabsTriggers } from '@/packages/gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { TabContent } from '@/packages/gnetwork-ui/components/molecules/tabs/tab-content';

<Tabs.Root defaultValue="tab1">
  <TabsTriggers>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabsTriggers>

  <TabContent value="tab1">Content 1</TabContent>
  <TabContent value="tab2">Content 2</TabContent>
</Tabs.Root>
```

## Related Components

- [`TabContent`](../tab-content/README.md) - Content panel component for tabs
- [`TabsTriggers`](../tabs-triggers/README.md) - Container component for tab triggers
- [Radix UI Tabs Documentation](https://www.radix-ui.com/docs/primitives/components/tabs)

## Notes

- The `value` prop must match a corresponding `TabContent` value for proper functionality
- The component must be used within a `Tabs.Root` and `Tabs.List` context from Radix UI
- Console warnings only appear in development mode and are stripped in production builds
- The component uses `inline-flex` display by default for flexible layouts
- Disabled tabs cannot be activated or receive keyboard focus

## TypeScript Support

The component is fully typed with TypeScript:

```typescript
type TabProps = TabsPrimitive.TabsTriggerProps & ReactButton;
```

This provides full IntelliSense support and type checking for all props.

