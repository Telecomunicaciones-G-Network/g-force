# TabContent

A flexible tab content panel component built on top of Radix UI's Tabs primitive. This component serves as the content container that displays when its corresponding tab is active, providing accessible and customizable tab panel functionality.

## Features

- 🎯 **Radix UI Foundation**: Built on `@radix-ui/react-tabs` for robust accessibility
- ♿ **Accessible**: Full ARIA attributes and screen reader support out of the box
- 🎨 **Customizable**: Accepts custom className and styling
- 🔧 **Flexible**: Supports all standard div and Radix Tabs content props
- ⚠️ **Developer Warnings**: Built-in console warnings for missing required props
- 🔄 **Controlled**: Works within Radix Tabs context for state management
- 🌊 **Auto-managed**: Visibility automatically controlled by tab state

## Usage

### Basic Example

```tsx
import * as Tabs from '@radix-ui/react-tabs';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { TabContent } from '@/packages/gnetwork-ui/components/molecules/tabs/tab-content';

export const MyTabs = () => {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
      </Tabs.List>

      <TabContent value="tab1">
        <h2>First Tab Content</h2>
        <p>This is the content for the first tab.</p>
      </TabContent>

      <TabContent value="tab2">
        <h2>Second Tab Content</h2>
        <p>This is the content for the second tab.</p>
      </TabContent>

      <TabContent value="tab3">
        <h2>Third Tab Content</h2>
        <p>This is the content for the third tab.</p>
      </TabContent>
    </Tabs.Root>
  );
};
```

### With Custom Styling

```tsx
<TabContent
  value="profile"
  className="p-6 bg-gray-50 rounded-lg shadow-md"
>
  <h2 className="text-2xl font-bold mb-4">User Profile</h2>
  <p>Profile information goes here...</p>
</TabContent>
```

### With Complex Content

```tsx
<TabContent value="dashboard" className="p-4">
  <div className="grid grid-cols-3 gap-4">
    <Card>
      <h3>Total Users</h3>
      <p>1,234</p>
    </Card>
    <Card>
      <h3>Revenue</h3>
      <p>$45,678</p>
    </Card>
    <Card>
      <h3>Active Sessions</h3>
      <p>89</p>
    </Card>
  </div>
</TabContent>
```

### With Animations

```tsx
<TabContent
  value="animated"
  className="animate-fade-in p-4"
  forceMount
>
  <p>This content appears with an animation.</p>
</TabContent>
```

### With Custom Ref

```tsx
'use client';

import { useRef, useEffect } from 'react';

export const TabsWithRef = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Scroll to top when content becomes visible
      contentRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tab value="tab1">Tab 1</Tab>
      </Tabs.List>

      <TabContent value="tab1" ref={contentRef}>
        <div style={{ height: '1000px' }}>
          Long scrollable content...
        </div>
      </TabContent>
    </Tabs.Root>
  );
};
```

## Props

The `TabContent` component accepts all props from both `TabsPrimitive.TabsContentProps` and `ReactDiv` (standard div HTML attributes).

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | Unique identifier for the tab content. Must match the corresponding Tab's value. **Required** - triggers console warning if missing |
| `children` | `React.ReactNode` | Content to display when the tab is active. **Required** - triggers console warning if missing |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `ref` | `Ref<HTMLDivElement>` | - | React ref for the div element |
| `forceMount` | `boolean` | `false` | Force mount the content even when inactive (useful for animations) |
| `id` | `string` | - | HTML id attribute |
| `aria-label` | `string` | - | Accessible label for screen readers |
| `role` | `string` | - | ARIA role (managed automatically by Radix) |
| `style` | `CSSProperties` | - | Inline styles |
| `onPointerDownOutside` | `function` | - | Event handler for clicks outside |

All other standard div and Radix Tabs content props are also supported.

## Styling

### Default Styles

The component applies these base styles:

```css
.base {
  box-sizing: border-box;
  font-family: inherit;
  display: flex;
}
```

The `display: flex` makes it easy to create flexible layouts within the content panel.

### Custom Styling Examples

#### Card-Style Content

```tsx
<TabContent
  value="card"
  className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
>
  <h2 className="text-xl font-semibold mb-4">Card Content</h2>
  <p className="text-gray-600">Beautiful card-style content panel.</p>
</TabContent>
```

#### Full-Width Content

```tsx
<TabContent
  value="fullwidth"
  className="w-full min-h-screen p-8 bg-gradient-to-br from-blue-50 to-purple-50"
>
  <h1>Full Page Content</h1>
</TabContent>
```

#### Scrollable Content

```tsx
<TabContent
  value="scroll"
  className="max-h-96 overflow-y-auto p-4 border border-gray-300 rounded"
>
  <div className="space-y-4">
    {longContent.map((item) => (
      <div key={item.id}>{item.content}</div>
    ))}
  </div>
</TabContent>
```

#### Grid Layout Content

```tsx
<TabContent
  value="grid"
  className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4"
>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
  <Card>Item 4</Card>
</TabContent>
```

## Accessibility

### Built-in Features

The TabContent component inherits full accessibility from Radix UI Tabs:

- **ARIA Roles**: Proper `role="tabpanel"` applied automatically
- **ARIA Attributes**:
  - `aria-labelledby` - Linked to the corresponding tab trigger
  - `tabindex="0"` - Makes content focusable when needed
- **Focus Management**: Keyboard focus handled appropriately
- **Hidden State**: Content is properly hidden when inactive (using `hidden` attribute or CSS)

### Best Practices

#### Provide meaningful headings:

```tsx
<TabContent value="about">
  <h2 id="about-heading">About Us</h2>
  <p>Company information...</p>
</TabContent>
```

#### Keep content structure semantic:

```tsx
<TabContent value="article" className="prose">
  <article>
    <h2>Article Title</h2>
    <section>
      <h3>Section 1</h3>
      <p>Content...</p>
    </section>
    <section>
      <h3>Section 2</h3>
      <p>Content...</p>
    </section>
  </article>
</TabContent>
```

#### Handle focus for interactive content:

```tsx
<TabContent value="form">
  <form>
    <label htmlFor="name">Name</label>
    <input id="name" type="text" autoFocus />
    <button type="submit">Submit</button>
  </form>
</TabContent>
```

## Developer Warnings

The component includes helpful console warnings during development:

### Missing Children Warning

```tsx
<TabContent value="empty" />
// Console: "Prop children is missing on TabContent component. This component can not be render appropiately."
```

### Missing Value Warning

```tsx
<TabContent>My Content</TabContent>
// Console: "Prop value is missing on TabContent component. This component can not be render appropiately."
```

## Complete Example

```tsx
'use client';

import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { TabContent } from '@/packages/gnetwork-ui/components/molecules/tabs/tab-content';

export const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="flex gap-2 border-b border-gray-200 mb-6">
          <Tab
            value="overview"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-500"
          >
            Overview
          </Tab>
          <Tab
            value="analytics"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-500"
          >
            Analytics
          </Tab>
          <Tab
            value="settings"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-500"
          >
            Settings
          </Tab>
        </Tabs.List>

        <TabContent
          value="overview"
          className="p-6 bg-white rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold">Total Views</h3>
              <p className="text-3xl">12,345</p>
            </div>
            <div className="p-4 bg-green-50 rounded">
              <h3 className="font-semibold">Conversions</h3>
              <p className="text-3xl">789</p>
            </div>
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="font-semibold">Revenue</h3>
              <p className="text-3xl">$45,678</p>
            </div>
          </div>
        </TabContent>

        <TabContent
          value="analytics"
          className="p-6 bg-white rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Analytics</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Traffic Sources</h3>
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                Chart Placeholder
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">User Demographics</h3>
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                Chart Placeholder
              </div>
            </div>
          </div>
        </TabContent>

        <TabContent
          value="settings"
          className="p-6 bg-white rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                defaultValue="user@example.com"
              />
            </div>
            <div>
              <label htmlFor="notifications" className="flex items-center gap-2">
                <input
                  id="notifications"
                  type="checkbox"
                  defaultChecked
                />
                <span>Enable email notifications</span>
              </label>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Settings
            </button>
          </form>
        </TabContent>
      </Tabs.Root>
    </div>
  );
};
```

## Data Attributes

The component exposes these data attributes for styling based on state:

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-state` | `"active"` \| `"inactive"` | Current content visibility state |
| `data-orientation` | `"horizontal"` \| `"vertical"` | Inherited from Tabs.Root |

Example usage in CSS:

```css
.tab-content[data-state="active"] {
  animation: fadeIn 0.2s ease-in;
}

.tab-content[data-state="inactive"] {
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

## Advanced Usage

### Lazy Loading Content

```tsx
'use client';

import { useState, useEffect } from 'react';

export const LazyTabContent = ({ value }: { value: string }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await fetch(`/api/data/${value}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    loadData();
  }, [value]);

  return (
    <TabContent value={value} className="p-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{/* Render data */}</div>
      )}
    </TabContent>
  );
};
```

### Force Mount for Animations

```tsx
<TabContent
  value="animated"
  forceMount
  className="data-[state=inactive]:hidden animate-fade-in"
>
  <p>Content with entrance animation</p>
</TabContent>
```

### Preserving Scroll Position

```tsx
'use client';

import { useRef, useEffect } from 'react';

export const ScrollPreservingTabs = () => {
  const scrollPositions = useRef<Record<string, number>>({});

  const saveScrollPosition = (value: string) => {
    const content = document.querySelector(`[data-value="${value}"]`);
    if (content) {
      scrollPositions.current[value] = content.scrollTop;
    }
  };

  return (
    <Tabs.Root>
      <TabContent
        value="long-content"
        className="h-96 overflow-y-auto"
        onBlur={() => saveScrollPosition('long-content')}
      >
        {/* Long content */}
      </TabContent>
    </Tabs.Root>
  );
};
```

## Dependencies

- `@radix-ui/react-tabs` - Accessible tabs primitive
- `../../../../utils/cn.util` - Class name utility for merging classes
- `../../../../types/react-div.type` - TypeScript types for div props

## Component Structure

```
TabContent (molecule)
└── TabsPrimitive.Content (Radix UI)
    └── children (panel content)
```

## Integration with Tab System

The TabContent component works alongside other tab-related components:

- **Tab** - Trigger button for showing tab content
- **TabsTriggers** - Container for multiple Tab components

Example of full integration:

```tsx
import * as Tabs from '@radix-ui/react-tabs';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { TabContent } from '@/packages/gnetwork-ui/components/molecules/tabs/tab-content';

<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </Tabs.List>

  <TabContent value="tab1">Content 1</TabContent>
  <TabContent value="tab2">Content 2</TabContent>
</Tabs.Root>
```

## Related Components

- [`Tab`](../tab/README.md) - Tab trigger component
- [`TabsTriggers`](../tabs-triggers/README.md) - Container component for tab triggers
- [Radix UI Tabs Documentation](https://www.radix-ui.com/docs/primitives/components/tabs)

## Notes

- The `value` prop must match a corresponding `Tab` value for proper functionality
- The component must be used within a `Tabs.Root` context from Radix UI
- Console warnings only appear in development mode and are stripped in production builds
- The component uses `display: flex` by default for flexible content layouts
- Only the active tab's content is rendered in the DOM by default (unless `forceMount` is used)
- Content is automatically hidden/shown based on the active tab state

## TypeScript Support

The component is fully typed with TypeScript:

```typescript
type TabContentProps = TabsPrimitive.TabsContentProps & ReactDiv;
```

This provides full IntelliSense support and type checking for all props.

## Performance Considerations

- **Lazy Rendering**: By default, inactive tab content is not mounted in the DOM, improving initial render performance
- **Force Mount**: Use `forceMount` only when necessary (e.g., for animations or preserving state)
- **Heavy Content**: Consider lazy loading or code splitting for heavy content components
- **Memoization**: For complex content, use `React.memo()` to prevent unnecessary re-renders

```tsx
import { memo } from 'react';

const HeavyContent = memo(() => {
  return <div>{/* Complex rendering logic */}</div>;
});

<TabContent value="heavy">
  <HeavyContent />
</TabContent>
```

