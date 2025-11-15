# DashboardLayout

A responsive dashboard layout component that provides a structured layout with a fixed sidebar, header, and main content area. Perfect for building admin panels, dashboards, and application interfaces.

## Features

- **Responsive Design**: Sidebar automatically hides on mobile/tablet devices and displays on large screens (lg breakpoint and above)
- **Fixed Sidebar**: 256px wide sidebar that stays fixed while scrolling
- **Customizable Header**: Configurable header height with default of 72px
- **Flexible Content Areas**: Accepts any React content for sidebar, header, and main body
- **TypeScript Support**: Fully typed with TypeScript interfaces
- **Extensible**: Extends standard HTML div props for maximum flexibility

## Installation

```tsx
import { DashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout';
```

## Props

### DashboardLayoutProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactChild` | Yes | - | Main content to be rendered in the body area |
| `headerContent` | `ReactChild` | Yes | - | Content to be rendered in the header |
| `sidebarContent` | `ReactChild` | Yes | - | Content to be rendered in the sidebar |
| `className` | `string` | No | `''` | Additional CSS classes to apply to the root element |
| `headerHeight` | `string` | No | `'72px'` | Custom height for the header (CSS value) |
| `ref` | `RefObject<HTMLDivElement>` | No | - | Ref to the root div element |
| `...rest` | `ReactDiv` | No | - | All standard HTML div props are supported |

## Usage

### Basic Example

```tsx
import { DashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout';

function MyDashboard() {
  return (
    <DashboardLayout
      headerContent={<div>Header Content</div>}
      sidebarContent={<nav>Sidebar Navigation</nav>}
    >
      <div>Main Dashboard Content</div>
    </DashboardLayout>
  );
}
```

### With Custom Header Height

```tsx
<DashboardLayout
  headerContent={<HeaderComponent />}
  sidebarContent={<SidebarNavigation />}
  headerHeight="80px"
>
  <DashboardContent />
</DashboardLayout>
```

### With Custom Styling

```tsx
<DashboardLayout
  className="custom-dashboard-class"
  headerContent={<HeaderComponent />}
  sidebarContent={<SidebarNavigation />}
>
  <DashboardContent />
</DashboardLayout>
```

### With Ref

```tsx
import { useRef } from 'react';

function MyDashboard() {
  const layoutRef = useRef<HTMLDivElement>(null);

  return (
    <DashboardLayout
      ref={layoutRef}
      headerContent={<HeaderComponent />}
      sidebarContent={<SidebarNavigation />}
    >
      <DashboardContent />
    </DashboardLayout>
  );
}
```

## Component Structure

The `DashboardLayout` component is composed of three sub-components:

### 1. DashboardLayoutSidebar
- **Position**: Fixed on the left side
- **Width**: 256px
- **Visibility**: Hidden on mobile/tablet, visible on `lg` breakpoint and above
- **Z-index**: 50
- **Props**: `sidebarContent`

### 2. DashboardLayoutHeader
- **Default Height**: 72px
- **Customizable**: Can be overridden with `headerHeight` prop
- **Position**: Sticky/fixed at the top
- **Props**: `headerContent`, `headerHeight`

### 3. DashboardLayoutBody
- **Purpose**: Main content area
- **Layout**: Automatically adjusts padding on large screens to account for sidebar
- **Props**: `children`

## Responsive Behavior

- **Mobile/Tablet (< lg breakpoint)**:
  - Sidebar is hidden
  - Main content takes full width
  - No left padding applied

- **Desktop (≥ lg breakpoint)**:
  - Sidebar is visible and fixed on the left (256px wide)
  - Main content area has `256px` left padding to prevent overlap
  - Header and body are positioned to the right of the sidebar

## Warnings

The component will log console warnings if:
- `children` prop is missing
- `headerContent` prop is missing
- `sidebarContent` prop is missing

While these warnings won't prevent rendering, the layout may not display correctly without these required props.

## Notes

- The component uses Tailwind CSS classes for responsive behavior (`lg:pl-[256px]`, `lg:fixed`, etc.)
- The sidebar uses `z-50` to ensure it stays above other content
- All standard HTML div attributes are supported through the `ReactDiv` type extension
- The component uses CSS Modules for styling (`dashboard-layout.module.css`)

