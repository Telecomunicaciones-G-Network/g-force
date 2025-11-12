# Tabs

A complete, accessible tabs system built on top of Radix UI's Tabs primitive. This organism component serves as the root container and orchestrator for the entire tab interface, managing state and providing context for tab triggers and content panels.

## Features

- 🎯 **Radix UI Foundation**: Built on `@radix-ui/react-tabs` for robust accessibility
- ♿ **Accessible**: Full keyboard navigation, focus management, and ARIA attributes
- 🎨 **Customizable**: Accepts custom className and styling
- 🔧 **Flexible**: Supports controlled and uncontrolled modes
- ⚠️ **Developer Warnings**: Built-in console warnings for missing required props
- 🔄 **State Management**: Handles tab activation and synchronization automatically
- 📱 **Responsive**: Supports both horizontal and vertical orientations
- 🎭 **Composable**: Works seamlessly with Tab, TabContent, and TabsTriggers components

## Usage

### Basic Example

```tsx
import { Tabs } from '@/packages/gnetwork-ui/components/organisms/tabs/tabs';
import { TabsTriggers } from '@/packages/gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { TabContent } from '@/packages/gnetwork-ui/components/molecules/tabs/tab-content';

export const MyTabs = () => {
  return (
    <Tabs defaultValue="tab1">
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
    </Tabs>
  );
};
```

### Controlled Mode

```tsx
'use client';

import { useState } from 'react';

export const ControlledTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsTriggers>
        <Tab value="home">Home</Tab>
        <Tab value="profile">Profile</Tab>
        <Tab value="settings">Settings</Tab>
      </TabsTriggers>

      <TabContent value="home">Home content</TabContent>
      <TabContent value="profile">Profile content</TabContent>
      <TabContent value="settings">Settings content</TabContent>
    </Tabs>
  );
};
```

### With Custom Styling

```tsx
<Tabs
  defaultValue="overview"
  className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg"
>
  <TabsTriggers className="border-b border-gray-200">
    <Tab value="overview">Overview</Tab>
    <Tab value="analytics">Analytics</Tab>
  </TabsTriggers>

  <TabContent value="overview" className="p-6">
    Overview content
  </TabContent>
  <TabContent value="analytics" className="p-6">
    Analytics content
  </TabContent>
</Tabs>
```

### Vertical Orientation

```tsx
<Tabs
  defaultValue="dashboard"
  orientation="vertical"
  className="flex-row gap-4"
>
  <TabsTriggers className="flex-col w-48">
    <Tab value="dashboard">Dashboard</Tab>
    <Tab value="team">Team</Tab>
    <Tab value="projects">Projects</Tab>
  </TabsTriggers>

  <div className="flex-1">
    <TabContent value="dashboard">Dashboard content</TabContent>
    <TabContent value="team">Team content</TabContent>
    <TabContent value="projects">Projects content</TabContent>
  </div>
</Tabs>
```

### With Icons and Descriptions

```tsx
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

<Tabs defaultValue="home" className="w-full">
  <TabsTriggers className="grid grid-cols-3 gap-2">
    <Tab value="home" className="flex flex-col items-center gap-2 p-4">
      <FiHome size={24} />
      <span className="text-sm font-medium">Home</span>
      <span className="text-xs text-gray-500">Dashboard overview</span>
    </Tab>
    <Tab value="profile" className="flex flex-col items-center gap-2 p-4">
      <FiUser size={24} />
      <span className="text-sm font-medium">Profile</span>
      <span className="text-xs text-gray-500">User information</span>
    </Tab>
    <Tab value="settings" className="flex flex-col items-center gap-2 p-4">
      <FiSettings size={24} />
      <span className="text-sm font-medium">Settings</span>
      <span className="text-xs text-gray-500">Preferences</span>
    </Tab>
  </TabsTriggers>

  <TabContent value="home">Home content</TabContent>
  <TabContent value="profile">Profile content</TabContent>
  <TabContent value="settings">Settings content</TabContent>
</Tabs>
```

## Props

The `Tabs` component extends both `TabsPrimitive.TabsProps` and `ReactDiv` (excluding some conflicting properties).

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `defaultValue` | `string` | The initial active tab value. **Required** - triggers console warning if missing |
| `children` | `React.ReactNode` | Tab components (triggers and content). **Required** |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `ref` | `Ref<HTMLDivElement>` | - | React ref for the container element |
| `value` | `string` | - | Controlled mode: current active tab value |
| `onValueChange` | `(value: string) => void` | - | Callback when active tab changes |
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Tab list orientation |
| `dir` | `"ltr"` \| `"rtl"` | `"ltr"` | Text direction for internationalization |
| `activationMode` | `"automatic"` \| `"manual"` | `"automatic"` | Whether tabs activate on focus or require Enter/Space |
| `id` | `string` | - | HTML id attribute |
| `style` | `CSSProperties` | - | Inline styles |

All other standard div and Radix Tabs root props are also supported.

## Styling

### Default Styles

The component applies these base styles via CSS module:

```css
.base {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
}
```

The `flex-direction: column` layout stacks triggers above content by default. You can override this for custom layouts.

### Custom Styling Examples

#### Card-Style Tabs

```tsx
<Tabs
  defaultValue="tab1"
  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
>
  <TabsTriggers className="bg-gray-50 border-b border-gray-200 p-2">
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabsTriggers>

  <TabContent value="tab1" className="p-6">Content 1</TabContent>
  <TabContent value="tab2" className="p-6">Content 2</TabContent>
</Tabs>
```

#### Side-by-Side Layout (Vertical)

```tsx
<Tabs
  defaultValue="section1"
  orientation="vertical"
  className="flex-row gap-6 min-h-screen"
>
  <TabsTriggers className="flex-col w-64 bg-gray-100 p-4 rounded-lg">
    <Tab value="section1" className="w-full">Section 1</Tab>
    <Tab value="section2" className="w-full">Section 2</Tab>
  </TabsTriggers>

  <div className="flex-1">
    <TabContent value="section1">Section 1 content</TabContent>
    <TabContent value="section2">Section 2 content</TabContent>
  </div>
</Tabs>
```

#### Pill-Style Navigation

```tsx
<Tabs
  defaultValue="all"
  className="w-full"
>
  <TabsTriggers className="inline-flex gap-2 p-1 bg-gray-100 rounded-full">
    <Tab
      value="all"
      className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow"
    >
      All
    </Tab>
    <Tab
      value="active"
      className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow"
    >
      Active
    </Tab>
    <Tab
      value="archived"
      className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow"
    >
      Archived
    </Tab>
  </TabsTriggers>

  <TabContent value="all">All items</TabContent>
  <TabContent value="active">Active items</TabContent>
  <TabContent value="archived">Archived items</TabContent>
</Tabs>
```

## Accessibility

### Built-in Features

The Tabs component inherits comprehensive accessibility from Radix UI:

- **ARIA Roles**: Proper `role="tablist"`, `role="tab"`, and `role="tabpanel"` applied automatically
- **ARIA Attributes**:
  - `aria-selected` - Indicates active tab
  - `aria-controls` - Links tabs to their content panels
  - `aria-labelledby` - Links content panels to their tabs
  - `aria-orientation` - Indicates tab list direction
- **Keyboard Navigation**:
  - `Tab` - Moves focus into and out of the tab list
  - `Arrow Left/Right` - Navigate between tabs (horizontal)
  - `Arrow Up/Down` - Navigate between tabs (vertical)
  - `Home` - Jump to first tab
  - `End` - Jump to last tab
  - `Space/Enter` - Activate focused tab (manual mode)
- **Focus Management**: Proper focus ring and focus trapping

### Activation Modes

#### Automatic (Default)

Tabs activate immediately on focus (arrow key navigation):

```tsx
<Tabs defaultValue="tab1" activationMode="automatic">
  {/* Tabs activate as you arrow through them */}
</Tabs>
```

#### Manual

Tabs require Enter or Space to activate:

```tsx
<Tabs defaultValue="tab1" activationMode="manual">
  {/* Arrow through tabs, then press Enter/Space to activate */}
</Tabs>
```

### Best Practices

#### Provide meaningful labels:

```tsx
<Tabs defaultValue="overview" aria-label="Dashboard navigation">
  <TabsTriggers>
    <Tab value="overview">Overview</Tab>
    <Tab value="analytics">Analytics</Tab>
  </TabsTriggers>
</Tabs>
```

#### Ensure content matches labels:

```tsx
<Tab value="profile">User Profile</Tab>
{/* ... */}
<TabContent value="profile">
  <h2>User Profile</h2> {/* Heading matches tab label */}
  {/* ... */}
</TabContent>
```

#### Handle disabled states properly:

```tsx
<TabsTriggers>
  <Tab value="available">Available</Tab>
  <Tab value="premium" disabled title="Upgrade to access">
    Premium Features
  </Tab>
</TabsTriggers>
```

## Developer Warnings

The component includes helpful console warnings during development:

### Missing defaultValue Warning

```tsx
<Tabs>
  <TabsTriggers>
    <Tab value="tab1">Tab 1</Tab>
  </TabsTriggers>
</Tabs>
// Console: "Prop defaultValue is missing on Tabs component. This component can not be render appropiately."
```

**Fix:** Always provide a `defaultValue` (uncontrolled) or both `value` and `onValueChange` (controlled):

```tsx
<Tabs defaultValue="tab1">
  {/* ... */}
</Tabs>
```

## Controlled vs Uncontrolled

### Uncontrolled (Recommended for Simple Cases)

The component manages its own state:

```tsx
<Tabs defaultValue="home">
  <TabsTriggers>
    <Tab value="home">Home</Tab>
    <Tab value="settings">Settings</Tab>
  </TabsTriggers>

  <TabContent value="home">Home content</TabContent>
  <TabContent value="settings">Settings content</TabContent>
</Tabs>
```

### Controlled (For Complex State Management)

You manage the state:

```tsx
'use client';

import { useState } from 'react';

export const ControlledExample = () => {
  const [tab, setTab] = useState('home');

  const handleTabChange = (newTab: string) => {
    console.log('Tab changed to:', newTab);
    // Perform side effects, API calls, analytics, etc.
    setTab(newTab);
  };

  return (
    <Tabs value={tab} onValueChange={handleTabChange}>
      <TabsTriggers>
        <Tab value="home">Home</Tab>
        <Tab value="settings">Settings</Tab>
      </TabsTriggers>

      <TabContent value="home">Home content</TabContent>
      <TabContent value="settings">Settings content</TabContent>
    </Tabs>
  );
};
```

## Complete Example

```tsx
'use client';

import { useState } from 'react';
import { Tabs } from '@/packages/gnetwork-ui/components/organisms/tabs/tabs';
import { TabsTriggers } from '@/packages/gnetwork-ui/components/molecules/tabs/tabs-triggers';
import { Tab } from '@/packages/gnetwork-ui/components/molecules/tabs/tab';
import { TabContent } from '@/packages/gnetwork-ui/components/molecules/tabs/tab-content';
import { FiHome, FiBarChart2, FiSettings, FiUsers } from 'react-icons/fi';

export const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <TabsTriggers className="flex gap-1 p-2 bg-gray-50 border-b border-gray-200">
          <Tab
            value="overview"
            className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FiHome />
            <span>Overview</span>
          </Tab>
          <Tab
            value="analytics"
            className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FiBarChart2 />
            <span>Analytics</span>
          </Tab>
          <Tab
            value="team"
            className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FiUsers />
            <span>Team</span>
          </Tab>
          <Tab
            value="settings"
            className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FiSettings />
            <span>Settings</span>
          </Tab>
        </TabsTriggers>

        <TabContent value="overview" className="p-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900">Total Revenue</h3>
              <p className="text-3xl font-bold text-blue-600">$45,678</p>
              <p className="text-sm text-blue-700">+12% from last month</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900">Active Users</h3>
              <p className="text-3xl font-bold text-green-600">1,234</p>
              <p className="text-sm text-green-700">+8% from last month</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900">Conversions</h3>
              <p className="text-3xl font-bold text-purple-600">89%</p>
              <p className="text-sm text-purple-700">+3% from last month</p>
            </div>
          </div>
        </TabContent>

        <TabContent value="analytics" className="p-6">
          <h2 className="text-2xl font-bold mb-4">Analytics</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Traffic Sources</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Chart Placeholder</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">User Demographics</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Chart Placeholder</span>
              </div>
            </div>
          </div>
        </TabContent>

        <TabContent value="team" className="p-6">
          <h2 className="text-2xl font-bold mb-4">Team Management</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full" />
              <div className="flex-1">
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-600">john@example.com</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Admin
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full" />
              <div className="flex-1">
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-sm text-gray-600">jane@example.com</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Editor
              </span>
            </div>
          </div>
        </TabContent>

        <TabContent value="settings" className="p-6">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="company-name" className="block font-medium mb-2">
                Company Name
              </label>
              <input
                id="company-name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                defaultValue="Acme Corp"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                defaultValue="admin@acme.com"
              />
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <span>Enable email notifications</span>
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save Settings
            </button>
          </form>
        </TabContent>
      </Tabs>
    </div>
  );
};
```

## Data Attributes

The component and its children expose these data attributes for styling:

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-state` | `"active"` \| `"inactive"` | Tab activation state |
| `data-orientation` | `"horizontal"` \| `"vertical"` | Tab list orientation |
| `data-disabled` | `""` | Present when tab is disabled |

Example usage in CSS:

```css
.tabs[data-orientation="vertical"] {
  flex-direction: row;
}

.tabs[data-orientation="horizontal"] {
  flex-direction: column;
}
```

## Advanced Usage

### Persistent Tab State with URL

```tsx
'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export const URLTabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  const handleTabChange = (value: string) => {
    router.push(`?tab=${value}`);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      {/* ... */}
    </Tabs>
  );
};
```

### Tab State in Local Storage

```tsx
'use client';

import { useState, useEffect } from 'react';

export const PersistentTabs = () => {
  const [tab, setTab] = useState('home');

  useEffect(() => {
    const saved = localStorage.getItem('activeTab');
    if (saved) setTab(saved);
  }, []);

  const handleTabChange = (value: string) => {
    setTab(value);
    localStorage.setItem('activeTab', value);
  };

  return (
    <Tabs value={tab} onValueChange={handleTabChange}>
      {/* ... */}
    </Tabs>
  );
};
```

### Conditional Tab Rendering

```tsx
'use client';

import { useAuth } from '@/hooks/use-auth';

export const ConditionalTabs = () => {
  const { user, isAdmin } = useAuth();

  return (
    <Tabs defaultValue="dashboard">
      <TabsTriggers>
        <Tab value="dashboard">Dashboard</Tab>
        <Tab value="profile">Profile</Tab>
        {isAdmin && <Tab value="admin">Admin</Tab>}
      </TabsTriggers>

      <TabContent value="dashboard">Dashboard content</TabContent>
      <TabContent value="profile">Profile content</TabContent>
      {isAdmin && (
        <TabContent value="admin">Admin-only content</TabContent>
      )}
    </Tabs>
  );
};
```

### Dynamic Tabs from Data

```tsx
'use client';

interface TabData {
  id: string;
  label: string;
  content: React.ReactNode;
}

export const DynamicTabs = ({ tabs }: { tabs: TabData[] }) => {
  return (
    <Tabs defaultValue={tabs[0]?.id}>
      <TabsTriggers>
        {tabs.map((tab) => (
          <Tab key={tab.id} value={tab.id}>
            {tab.label}
          </Tab>
        ))}
      </TabsTriggers>

      {tabs.map((tab) => (
        <TabContent key={tab.id} value={tab.id}>
          {tab.content}
        </TabContent>
      ))}
    </Tabs>
  );
};
```

## Dependencies

- `@radix-ui/react-tabs` - Accessible tabs primitive
- `../../../../utils/cn.util` - Class name utility for merging classes
- `../../../../types` - TypeScript types for React props

## Component Structure

```
Tabs (organism)
└── TabsPrimitive.Root (Radix UI)
    ├── TabsTriggers (molecule)
    │   └── Tab (molecule)
    │       └── TabsPrimitive.Trigger
    └── TabContent (molecule)
        └── TabsPrimitive.Content
```

## Related Components

This component works as part of a tab system with these related components:

- [`Tab`](../../molecules/tabs/tab/README.md) - Individual tab trigger button
- [`TabContent`](../../molecules/tabs/tab-content/README.md) - Content panel for each tab
- [`TabsTriggers`](../../molecules/tabs/tabs-triggers/README.md) - Container for tab triggers
- [Radix UI Tabs Documentation](https://www.radix-ui.com/docs/primitives/components/tabs)

## Notes

- The `defaultValue` prop is **required** for uncontrolled mode
- For controlled mode, provide both `value` and `onValueChange`
- All `Tab` values must be unique within a `Tabs` instance
- Each `Tab` should have a matching `TabContent` with the same `value`
- Console warnings only appear in development mode
- The component uses `flex-direction: column` by default but can be customized
- Tab state is not persisted by default - implement URL or localStorage persistence as needed

## TypeScript Support

The component is fully typed with TypeScript:

```typescript
interface TabsProps
  extends TabsPrimitive.TabsProps,
    Omit<ReactDiv, 'children' | 'dir'> {
  defaultValue: string;
}
```

This provides full IntelliSense support and type checking for all props.

## Performance Considerations

- **Lazy Loading**: Tab content is only mounted when active (unless `forceMount` is used on TabContent)
- **Memoization**: Consider wrapping expensive tab content with `React.memo()`
- **Code Splitting**: Use dynamic imports for heavy tab content:

```tsx
import dynamic from 'next/dynamic';

const HeavyTabContent = dynamic(() => import('./HeavyTabContent'), {
  loading: () => <p>Loading...</p>,
});

<TabContent value="heavy">
  <HeavyTabContent />
</TabContent>
```

## Common Patterns

### E-commerce Product Tabs

```tsx
<Tabs defaultValue="description">
  <TabsTriggers>
    <Tab value="description">Description</Tab>
    <Tab value="specifications">Specifications</Tab>
    <Tab value="reviews">Reviews</Tab>
  </TabsTriggers>

  <TabContent value="description">{/* Product description */}</TabContent>
  <TabContent value="specifications">{/* Product specs */}</TabContent>
  <TabContent value="reviews">{/* Customer reviews */}</TabContent>
</Tabs>
```

### Settings Panel

```tsx
<Tabs defaultValue="general" orientation="vertical" className="flex-row gap-6">
  <TabsTriggers className="flex-col w-48">
    <Tab value="general">General</Tab>
    <Tab value="security">Security</Tab>
    <Tab value="notifications">Notifications</Tab>
    <Tab value="billing">Billing</Tab>
  </TabsTriggers>

  <div className="flex-1">
    <TabContent value="general">{/* General settings */}</TabContent>
    <TabContent value="security">{/* Security settings */}</TabContent>
    <TabContent value="notifications">{/* Notification settings */}</TabContent>
    <TabContent value="billing">{/* Billing settings */}</TabContent>
  </div>
</Tabs>
```

### Documentation Navigation

```tsx
<Tabs defaultValue="getting-started">
  <TabsTriggers className="sticky top-0 bg-white border-b">
    <Tab value="getting-started">Getting Started</Tab>
    <Tab value="api">API Reference</Tab>
    <Tab value="examples">Examples</Tab>
    <Tab value="changelog">Changelog</Tab>
  </TabsTriggers>

  <TabContent value="getting-started">{/* Getting started guide */}</TabContent>
  <TabContent value="api">{/* API documentation */}</TabContent>
  <TabContent value="examples">{/* Code examples */}</TabContent>
  <TabContent value="changelog">{/* Version history */}</TabContent>
</Tabs>
```

## Testing

### Example Test with React Testing Library

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from './tabs';
import { TabsTriggers } from '../tabs-triggers/tabs-triggers';
import { Tab } from '../tab/tab';
import { TabContent } from '../tab-content/tab-content';

describe('Tabs', () => {
  it('renders with default active tab', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsTriggers>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
        </TabsTriggers>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.queryByText('Content 2')).not.toBeVisible();
  });

  it('switches tabs on click', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsTriggers>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
        </TabsTriggers>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    fireEvent.click(screen.getByText('Tab 2'));

    expect(screen.getByText('Content 2')).toBeVisible();
    expect(screen.queryByText('Content 1')).not.toBeVisible();
  });

  it('calls onValueChange in controlled mode', () => {
    const handleChange = jest.fn();

    render(
      <Tabs value="tab1" onValueChange={handleChange}>
        <TabsTriggers>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
        </TabsTriggers>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    fireEvent.click(screen.getByText('Tab 2'));
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });
});
```

## Troubleshooting

### Tabs not switching

**Problem:** Clicking tabs doesn't change content.

**Solution:** Ensure each `Tab` value matches a `TabContent` value:

```tsx
<Tab value="home">Home</Tab>
{/* ... */}
<TabContent value="home">Content</TabContent> {/* Values must match */}
```

### Console warning about defaultValue

**Problem:** "Prop defaultValue is missing on Tabs component."

**Solution:** Always provide `defaultValue` for uncontrolled mode:

```tsx
<Tabs defaultValue="first-tab">
  {/* ... */}
</Tabs>
```

### Controlled mode not working

**Problem:** Tabs don't respond to state changes.

**Solution:** Provide both `value` and `onValueChange`:

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  {/* ... */}
</Tabs>
```

### Styling conflicts

**Problem:** Custom styles not applying correctly.

**Solution:** Use higher specificity or `!important`, or override the base class:

```tsx
<Tabs className="!flex-row" {/* Override flex-direction */}>
  {/* ... */}
</Tabs>
```

