# ModalCard Component

A reusable modal card component that provides a structured layout with a header section (icon, title, and label) and a content area.

## Features

- **Structured Layout**: Divided header and content sections with consistent styling
- **Customizable Header**: Supports custom icons, titles, and descriptive labels
- **Flexible Content**: Accepts any React children for the content area
- **Responsive**: Adapts to different screen sizes with a default max-width of 400px on small screens
- **Built on Modal**: Extends the base Modal component with additional structure
- **Type-Safe**: Fully typed with TypeScript interfaces

## Props

### ModalCardProps

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `className` | `string` | No | `''` | Additional CSS classes for the modal card |
| `headerIcon` | `ReactChild` | No | `<MdInfoOutline />` | Custom icon displayed in the header badge |
| `headerLabel` | `string` | No | `''` | Descriptive text displayed below the title |
| `title` | `string` | No | `''` | Main heading text in the header |
| `modalProps` | `Omit<ModalProps, 'children'>` | Yes | - | Props passed to the underlying Modal component |
| `children` | `React.ReactNode` | Yes | - | Content displayed in the modal body |

## Usage

### Basic Example

```tsx
import { ModalCard } from '@/packages/gnetwork-ui/components/organisms/modals/modal-card';
import { MdCheckCircle } from 'react-icons/md';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <ModalCard
      title="Success"
      headerLabel="Your action was completed successfully"
      headerIcon={<MdCheckCircle className="text-green-600" />}
      modalProps={{
        open,
        onOpenChange: setOpen,
      }}
    >
      <p>Your changes have been saved.</p>
      <button onClick={() => setOpen(false)}>Close</button>
    </ModalCard>
  );
}
```

### Custom Styling

```tsx
<ModalCard
  className="sm:max-w-[600px]"
  title="Custom Modal"
  headerLabel="This modal has custom width"
  modalProps={{
    open: true,
    onOpenChange: setOpen,
  }}
>
  <div className="space-y-4">
    <p>Content goes here</p>
  </div>
</ModalCard>
```

### Without Custom Icon

```tsx
<ModalCard
  title="Information"
  headerLabel="Default info icon will be displayed"
  modalProps={{
    open: isOpen,
    onOpenChange: setIsOpen,
  }}
>
  <p>When no headerIcon is provided, a default info icon appears.</p>
</ModalCard>
```

## Component Structure

The ModalCard component is composed of:

1. **Modal** (base component)
   - Handles the overlay, positioning, and open/close behavior

2. **ModalCardHeader**
   - Displays an icon badge
   - Shows the title and label text
   - Automatically styled with consistent spacing

3. **ModalCardContent**
   - Contains the children passed to ModalCard
   - Provides consistent padding and spacing

## File Structure

```
modal-card/
├── modal-card.tsx              # Main component
├── modal-card.props.ts         # TypeScript interface
├── README.md                   # Documentation
└── components/
    ├── modal-card-header/
    │   ├── modal-card-header.tsx
    │   ├── modal-card-header.props.ts
    │   ├── modal-card-header.module.css
    │   └── index.ts
    └── modal-card-content/
        ├── modal-card-content.tsx
        ├── modal-card-content.module.css
        └── index.ts
```

## Styling

The component uses a combination of:
- **Tailwind CSS**: For utility classes and responsive design
- **CSS Modules**: For component-specific styles in header and content
- **Divider**: The header and content are separated by a neutral divider line

Default styling includes:
- Max width of 400px on small screens (can be overridden with `className`)
- Consistent 4-unit padding in header and content areas
- Neutral divider line between sections

## Dependencies

- React (client component with `'use client'` directive)
- `react-icons/md` for default info icon
- Base `Modal` component from `../modal`
- `IconBadge` component for header icon display
- `Text` component for typography
- `cn` utility for className merging

## Notes

- The component will log a console warning if `children` prop is missing
- The default header icon is `MdInfoOutline` styled in red
- All modal-related props (open state, triggers, etc.) should be passed via `modalProps`
