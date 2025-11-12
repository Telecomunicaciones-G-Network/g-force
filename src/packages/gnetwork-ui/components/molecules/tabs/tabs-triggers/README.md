# TabsTriggers

A flexible container component for tab triggers built on top of Radix UI's Tabs primitive. This component wraps multiple `Tab` components to create a cohesive tab navigation list with accessible keyboard navigation and proper ARIA semantics.

## Features

- 🎯 **Radix UI Foundation**: Built on `@radix-ui/react-tabs` for robust accessibility
- ♿ **Accessible**: Full keyboard navigation and ARIA attributes out of the box
- 🎨 **Customizable**: Accepts custom className and styling
- 🔧 **Flexible**: Supports all standard div and Radix Tabs list props
- ⚠️ **Developer Warnings**: Built-in console warnings for missing required props
- 🔄 **Controlled**: Works within Radix Tabs context for state management
- 📱 **Responsive**: Easily adaptable for mobile and desktop layouts

## Usage

### Basic Example

```tsx
import * as Tabs from '@radix-ui/react-tabs';
import { TabsTriggers } from '@/packages/gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { TabContent } from '@/packages/gnetwork-ui/components/molecules/tabs/tab-content';

export const MyTabs = () => {
  return (
    <Tabs.Root defaultValue="tab1">
      <TabsTriggers>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
      </TabsTriggers>

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
<TabsTriggers className="gap-2 bg-gray-100 p-2 rounded-lg">
  <Tab value="home">Home</Tab>
  <Tab value="profile">Profile</Tab>
  <Tab value="settings">Settings</Tab>
</TabsTriggers>
```

### Horizontal Layout (Default)

```tsx
<TabsTriggers className="flex gap-4 border-b border-gray-200">
  <Tab value="overview">Overview</Tab>
  <Tab value="analytics">Analytics</Tab>
  <Tab value="reports">Reports</Tab>
</TabsTriggers>
```

### Vertical Layout

```tsx
<Tabs.Root defaultValue="tab1" orientation="vertical">
  <TabsTriggers className="flex-col items-start gap-2 w-48">
    <Tab value="tab1" className="w-full justify-start">Dashboard</Tab>
    <Tab value="tab2" className="w-full justify-start">Profile</Tab>
    <Tab value="tab3" className="w-full justify-start">Settings</Tab>
  </TabsTriggers>

  <TabContent value="tab1">Dashboard content</TabContent>
  <TabContent value="tab2">Profile content</TabContent>
  <TabContent value="tab3">Settings content</TabContent>
</Tabs.Root>
```

### With Icons

```tsx
import { FiHome, FiUser, FiSettings, FiBell } from 'react-icons/fi';

<TabsTriggers className="gap-1 bg-white shadow-sm rounded-lg p-1">
  <Tab value="home" className="flex items-center gap-2 px-4 py-2">
    <FiHome />
    <span>Home</span>
  </Tab>
  <Tab value="profile" className="flex items-center gap-2 px-4 py-2">
    <FiUser />
    <span>Profile</span>
  </Tab>
  <Tab value="settings" className="flex items-center gap-2 px-4 py-2">
    <FiSettings />
    <span>Settings</span>
  </Tab>
  <Tab value="notifications" className="flex items-center gap-2 px-4 py-2">
    <FiBell />
    <span>Notifications</span>
  </Tab>
</TabsTriggers>
```

### Pill Style

```tsx
<TabsTriggers className="gap-2 p-1 bg-gray-100 rounded-full">
  <Tab value="all" className="rounded-full px-6 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
    All
  </Tab>
  <Tab value="active" className="rounded-full px-6 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
    Active
  </Tab>
  <Tab value="completed" className="rounded-full px-6 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
    Completed
  </Tab>
</TabsTriggers>
```

### With Custom Ref

```tsx
'use client';

import { useRef, useEffect } from 'react';

export const TabsWithRef = () => {
  const triggersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggersRef.current) {
      // Access the triggers container
      console.log('Triggers width:', triggersRef.current.offsetWidth);
    }
  }, []);

  return (
    <Tabs.Root defaultValue="tab1">
      <TabsTriggers ref={triggersRef}>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
      </TabsTriggers>

      <TabContent value="tab1">Content 1</TabContent>
      <TabContent value="tab2">Content 2</TabContent>
    </Tabs.Root>
  );
};
```

## Props

The `TabsTriggers` component accepts all props from both `TabsPrimitive.TabsListProps` and `ReactDiv` (standard div HTML attributes, excluding `children` and `dir` from div).

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode` | Tab trigger components (typically `Tab` components). **Required** - triggers console warning if missing |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `ref` | `Ref<HTMLDivElement>` | - | React ref for the div element |
| `id` | `string` | - | HTML id attribute |
| `aria-label` | `string` | - | Accessible label for screen readers |
| `role` | `string` | - | ARIA role (managed automatically by Radix) |
| `style` | `CSSProperties` | - | Inline styles |
| `loop` | `boolean` | `true` | Whether to loop keyboard navigation |

All other standard div and Radix Tabs list props are also supported.

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
- `h-fit` - Height fits content
- `items-center` - Vertical centering
- `justify-center` - Horizontal centering

### Custom Styling Examples

#### Bordered Tabs

```tsx
<TabsTriggers className="flex gap-0 border-b-2 border-gray-200">
  <Tab
    value="home"
    className="px-6 py-3 border-b-2 border-transparent -mb-0.5 data-[state=active]:border-blue-500"
  >
    Home
  </Tab>
  <Tab
    value="profile"
    className="px-6 py-3 border-b-2 border-transparent -mb-0.5 data-[state=active]:border-blue-500"
  >
    Profile
  </Tab>
</TabsTriggers>
```

#### Card Style Container

```tsx
<TabsTriggers className="gap-1 p-1 bg-white rounded-lg shadow-md">
  <Tab value="tab1" className="px-4 py-2 rounded data-[state=active]:bg-blue-50">
    Tab 1
  </Tab>
  <Tab value="tab2" className="px-4 py-2 rounded data-[state=active]:bg-blue-50">
    Tab 2
  </Tab>
  <Tab value="tab3" className="px-4 py-2 rounded data-[state=active]:bg-blue-50">
    Tab 3
  </Tab>
</TabsTriggers>
```

#### Full Width Tabs

```tsx
<TabsTriggers className="flex w-full border-b border-gray-200">
  <Tab value="tab1" className="flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
    Tab 1
  </Tab>
  <Tab value="tab2" className="flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
    Tab 2
  </Tab>
  <Tab value="tab3" className="flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
    Tab 3
  </Tab>
</TabsTriggers>
```

#### Scrollable Tabs (Mobile)

```tsx
<TabsTriggers className="flex gap-2 overflow-x-auto scrollbar-hide px-4">
  <Tab value="tab1" className="px-4 py-2 whitespace-nowrap">Tab 1</Tab>
  <Tab value="tab2" className="px-4 py-2 whitespace-nowrap">Tab 2</Tab>
  <Tab value="tab3" className="px-4 py-2 whitespace-nowrap">Tab 3</Tab>
  <Tab value="tab4" className="px-4 py-2 whitespace-nowrap">Tab 4</Tab>
  <Tab value="tab5" className="px-4 py-2 whitespace-nowrap">Tab 5</Tab>
</TabsTriggers>
```

#### Centered with Max Width

```tsx
<TabsTriggers className="flex gap-4 max-w-2xl mx-auto">
  <Tab value="home">Home</Tab>
  <Tab value="about">About</Tab>
  <Tab value="contact">Contact</Tab>
</TabsTriggers>
```

## Accessibility

### Built-in Features

The TabsTriggers component inherits full accessibility from Radix UI Tabs:

- **ARIA Roles**: Proper `role="tablist"` applied automatically
- **ARIA Attributes**:
  - `aria-orientation` - Indicates horizontal or vertical layout
  - Manages focus and active states for child tabs
- **Keyboard Navigation**:
  - `Tab` - Moves focus into and out of the tab list
  - `Arrow Left/Right` - Navigate between horizontal tabs
  - `Arrow Up/Down` - Navigate between vertical tabs (when orientation="vertical")
  - `Home` - Focus first tab
  - `End` - Focus last tab
  - `Space/Enter` - Activate focused tab

### Best Practices

#### Provide accessible labels when needed:

```tsx
<TabsTriggers aria-label="Main navigation">
  <Tab value="home">Home</Tab>
  <Tab value="about">About</Tab>
</TabsTriggers>
```

#### Use semantic structure:

```tsx
<nav>
  <TabsTriggers aria-label="Page sections">
    <Tab value="overview">Overview</Tab>
    <Tab value="details">Details</Tab>
    <Tab value="reviews">Reviews</Tab>
  </TabsTriggers>
</nav>
```

#### Handle disabled tabs appropriately:

```tsx
<TabsTriggers>
  <Tab value="available">Available</Tab>
  <Tab value="premium" disabled title="Requires premium subscription">
    Premium ⭐
  </Tab>
</TabsTriggers>
```

## Developer Warnings

The component includes helpful console warnings during development:

### Missing Children Warning

```tsx
<TabsTriggers />
// Console: "Prop children is missing on TabsTriggers component. This component can not be render appropiately."
```

## Complete Example

```tsx
'use client';

import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { TabsTriggers } from '@/packages/gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { TabContent } from '@/packages/gnetwork-ui/components/molecules/tabs/tab-content';
import { FiHome, FiTrendingUp, FiSettings, FiBell } from 'react-icons/fi';

export const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <TabsTriggers className="flex gap-1 bg-gray-100 p-1 rounded-lg mb-6">
          <Tab
            value="overview"
            className="flex items-center gap-2 px-6 py-3 rounded-md transition-colors data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FiHome className="w-4 h-4" />
            <span className="font-medium">Overview</span>
          </Tab>

          <Tab
            value="analytics"
            className="flex items-center gap-2 px-6 py-3 rounded-md transition-colors data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FiTrendingUp className="w-4 h-4" />
            <span className="font-medium">Analytics</span>
          </Tab>

          <Tab
            value="settings"
            className="flex items-center gap-2 px-6 py-3 rounded-md transition-colors data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FiSettings className="w-4 h-4" />
            <span className="font-medium">Settings</span>
          </Tab>

          <Tab
            value="notifications"
            className="flex items-center gap-2 px-6 py-3 rounded-md transition-colors data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FiBell className="w-4 h-4" />
            <span className="font-medium">Notifications</span>
            <span className="ml-1 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
              3
            </span>
          </Tab>
        </TabsTriggers>

        <TabContent
          value="overview"
          className="p-6 bg-white rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600">Total Users</h3>
              <p className="text-3xl font-bold mt-2">12,345</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
              <p className="text-3xl font-bold mt-2">$45,678</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600">Active Now</h3>
              <p className="text-3xl font-bold mt-2">89</p>
            </div>
          </div>
        </TabContent>

        <TabContent
          value="analytics"
          className="p-6 bg-white rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Analytics</h2>
          <p className="text-gray-600">Detailed analytics and charts will appear here.</p>
        </TabContent>

        <TabContent
          value="settings"
          className="p-6 bg-white rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <p className="text-gray-600">Configure your dashboard preferences here.</p>
        </TabContent>

        <TabContent
          value="notifications"
          className="p-6 bg-white rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-medium">New user signup</p>
              <p className="text-sm text-gray-600">2 minutes ago</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="font-medium">Payment received</p>
              <p className="text-sm text-gray-600">1 hour ago</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="font-medium">System update available</p>
              <p className="text-sm text-gray-600">3 hours ago</p>
            </div>
          </div>
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
| `data-orientation` | `"horizontal"` \| `"vertical"` | Layout orientation inherited from Tabs.Root |

Example usage in CSS:

```css
.tabs-triggers[data-orientation="vertical"] {
  flex-direction: column;
  align-items: flex-start;
}

.tabs-triggers[data-orientation="horizontal"] {
  flex-direction: row;
}
```

## Advanced Usage

### Responsive Tabs

```tsx
'use client';

import { useMediaQuery } from '@/packages/hookers/use-media-query.hook';

export const ResponsiveTabs = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Tabs.Root defaultValue="tab1" orientation={isMobile ? 'horizontal' : 'vertical'}>
      <TabsTriggers
        className={isMobile
          ? 'flex gap-2 overflow-x-auto'
          : 'flex-col gap-2 w-48'
        }
      >
        <Tab value="tab1">Dashboard</Tab>
        <Tab value="tab2">Profile</Tab>
        <Tab value="tab3">Settings</Tab>
      </TabsTriggers>

      <TabContent value="tab1">Dashboard content</TabContent>
      <TabContent value="tab2">Profile content</TabContent>
      <TabContent value="tab3">Settings content</TabContent>
    </Tabs.Root>
  );
};
```

### With Scroll Buttons

```tsx
'use client';

import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const ScrollableTabs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      <button
        onClick={() => scroll('left')}
        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
      >
        <FiChevronLeft />
      </button>

      <TabsTriggers
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide flex-1"
      >
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
      </TabsTriggers>

      <button
        onClick={() => scroll('right')}
        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};
```

### Dynamic Tabs

```tsx
'use client';

import { useState } from 'react';

export const DynamicTabs = () => {
  const [tabs, setTabs] = useState([
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
  ]);

  const addTab = () => {
    const newId = `tab${tabs.length + 1}`;
    setTabs([...tabs, { id: newId, label: `Tab ${tabs.length + 1}` }]);
  };

  return (
    <div>
      <Tabs.Root defaultValue={tabs[0]?.id}>
        <TabsTriggers className="flex gap-2">
          {tabs.map((tab) => (
            <Tab key={tab.id} value={tab.id}>
              {tab.label}
            </Tab>
          ))}
        </TabsTriggers>

        {tabs.map((tab) => (
          <TabContent key={tab.id} value={tab.id}>
            Content for {tab.label}
          </TabContent>
        ))}
      </Tabs.Root>

      <button onClick={addTab} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add Tab
      </button>
    </div>
  );
};
```

### With Badge Indicators

```tsx
<TabsTriggers className="flex gap-2 bg-gray-100 p-1 rounded-lg">
  <Tab value="all" className="relative px-4 py-2">
    All Messages
  </Tab>
  <Tab value="unread" className="relative px-4 py-2">
    Unread
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
      5
    </span>
  </Tab>
  <Tab value="starred" className="relative px-4 py-2">
    Starred
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
      2
    </span>
  </Tab>
</TabsTriggers>
```

## Dependencies

- `@radix-ui/react-tabs` - Accessible tabs primitive
- `../../../../utils/cn.util` - Class name utility for merging classes
- `../../../../types` - TypeScript type definitions

## Component Structure

```
TabsTriggers (molecule)
└── TabsPrimitive.List (Radix UI)
    └── children (Tab components)
```

## Integration with Tab System

The TabsTriggers component works alongside other tab-related components:

- **Tab** - Individual tab trigger button
- **TabContent** - Content panels for each tab

Example of full integration:

```tsx
import * as Tabs from '@radix-ui/react-tabs';
import { TabsTriggers } from '@/packages/gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
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

- [`Tab`](../tab/README.md) - Individual tab trigger component
- [`TabContent`](../tab-content/README.md) - Content panel component for tabs
- [Radix UI Tabs Documentation](https://www.radix-ui.com/docs/primitives/components/tabs)

## Notes

- The component must be used within a `Tabs.Root` context from Radix UI
- Console warnings only appear in development mode and are stripped in production builds
- The component uses `inline-flex` display by default, making it easy to position
- Child `Tab` components automatically receive proper focus management
- The `loop` prop (inherited from Radix) controls whether keyboard navigation wraps around

## TypeScript Support

The component is fully typed with TypeScript:

```typescript
export type TabsTriggersProps = TabsPrimitive.TabsListProps &
  Omit<ReactDiv, 'children' | 'dir'>;
```

This provides full IntelliSense support and type checking for all props.

## Performance Considerations

- **Lightweight**: Minimal overhead, just a wrapper around Radix's List component
- **Efficient Rendering**: Only the triggers are rendered, content is handled separately
- **Keyboard Navigation**: Efficiently managed by Radix UI's roving tabindex
- **No Re-renders**: Component doesn't re-render when tab state changes (managed by Radix context)

## Browser Support

The component works in all modern browsers that support:
- ES6+ JavaScript
- CSS Flexbox
- ARIA attributes
- Keyboard events

Compatible with:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

