# Tag Component

A lightweight and customizable Tag component built with React, TypeScript, and Class Variance Authority (CVA). Perfect for displaying labels, categories, status indicators, or any other type of classification.

## Features

- 🎨 **Multiple color variants**: Blue, gray, and green options
- 🎯 **Flexible content**: Supports text, icons, and mixed content
- 📦 **Compact design**: Optimized for minimal space usage
- 🔧 **TypeScript support**: Full type safety and IntelliSense
- ♿ **Accessible**: Semantic HTML with proper structure
- 🎭 **Customizable**: Easy to extend with className overrides

## Installation

```tsx
import { Tag } from "@/packages/gnetwork-ui/components/molecules/tags/tag";
```

## Basic Usage

```tsx
export default function Example() {
  return <Tag>Default Tag</Tag>;
}
```

## API / Props

| Prop        | Type             | Default  | Description                    |
| ----------- | ---------------- | -------- | ------------------------------ |
| `children`  | `ReactNode`      | -        | **Required.** Tag content      |
| `color`     | `TagColor`       | `"gray"` | Tag color variant              |
| `className` | `string`         | -        | Additional CSS classes         |
| `ref`       | `React.Ref`      | -        | Reference to the tag element   |
| `...rest`   | `HTMLDivProps`   | -        | All standard div HTML props    |

### TagColor Type

```typescript
type TagColor = "blue" | "gray" | "green";
```

## Variants

### Colors

| Value   | Description                              | Background Color                    | Text Color                      |
| ------- | ---------------------------------------- | ----------------------------------- | ------------------------------- |
| `blue`  | Blue variant for informational tags      | `bg-tag-blue-background`            | `text-tag-blue-foreground`      |
| `gray`  | Gray variant (default), neutral tags     | `bg-neutral-500`                    | `text-white`                    |
| `green` | Green variant for success/active states  | `bg-tag-green-background`           | `text-tag-green-foreground`     |

```tsx
<Tag color="blue">Information</Tag>
<Tag color="gray">Neutral</Tag>
<Tag color="green">Success</Tag>
```

## Examples

### Basic Tags

```tsx
function BasicExample() {
  return (
    <>
      <Tag>Default Tag</Tag>
      <Tag color="blue">Blue Tag</Tag>
      <Tag color="green">Green Tag</Tag>
    </>
  );
}
```

### Status Indicators

```tsx
function StatusExample() {
  return (
    <div>
      <Tag color="green">Active</Tag>
      <Tag color="gray">Inactive</Tag>
      <Tag color="blue">Pending</Tag>
    </div>
  );
}
```

### Category Labels

```tsx
function CategoryExample() {
  return (
    <article>
      <h2>Article Title</h2>
      <div>
        <Tag color="blue">Technology</Tag>
        <Tag color="green">Tutorial</Tag>
        <Tag color="gray">Beginner</Tag>
      </div>
      <p>Article content...</p>
    </article>
  );
}
```

### With Icons

```tsx
import { CheckIcon, AlertIcon, InfoIcon } from "@/icons";

function TagsWithIcons() {
  return (
    <>
      <Tag color="green">
        <CheckIcon size={16} />
        Verified
      </Tag>

      <Tag color="blue">
        <InfoIcon size={16} />
        Info
      </Tag>

      <Tag color="gray">
        <AlertIcon size={16} />
        Warning
      </Tag>
    </>
  );
}
```

### Custom Styling

```tsx
function CustomStyledTag() {
  return (
    <Tag
      color="blue"
      className="text-xs uppercase tracking-wider"
    >
      Custom Style
    </Tag>
  );
}
```

### Dynamic Tag List

```tsx
function DynamicTagList() {
  const tags = [
    { id: 1, label: "React", color: "blue" as const },
    { id: 2, label: "TypeScript", color: "green" as const },
    { id: 3, label: "CSS", color: "gray" as const },
  ];

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {tags.map((tag) => (
        <Tag key={tag.id} color={tag.color}>
          {tag.label}
        </Tag>
      ))}
    </div>
  );
}
```

### Conditional Color Based on State

```tsx
function ConditionalColorExample({ status }: { status: string }) {
  const getTagColor = (status: string): TagColor => {
    switch (status) {
      case "success":
        return "green";
      case "info":
        return "blue";
      default:
        return "gray";
    }
  };

  return <Tag color={getTagColor(status)}>{status}</Tag>;
}
```

### User Profile Tags

```tsx
function UserProfileExample() {
  return (
    <div>
      <h3>John Doe</h3>
      <div style={{ display: "flex", gap: "6px" }}>
        <Tag color="blue">Developer</Tag>
        <Tag color="green">Premium</Tag>
        <Tag color="gray">Verified</Tag>
      </div>
    </div>
  );
}
```

## Styling

### Base Styles

The Tag component includes the following base styles from `tag.module.css`:

- **Layout**: `display: flex`, `align-items: center`, `justify-content: center`
- **Size**: `min-height: 24px`, `width: fit-content`
- **Spacing**: `padding: 0px 16px`, `gap: 8px`
- **Typography**: `font-size: 14px`, `font-weight: 400`, `line-height: 100%`
- **Border**: `border-radius: 4px`, `border: none`
- **Box Model**: `box-sizing: border-box`

### Custom Classes

You can extend or override styles using the `className` prop:

```tsx
<Tag className="uppercase font-bold tracking-wide">
  Custom Styled
</Tag>
```

## Technologies

- **React 18+**: UI framework
- **TypeScript**: Static typing
- **Class Variance Authority (CVA)**: Variant system for managing color schemes
- **CSS Modules**: Scoped and isolated styles

## Accessibility

The Tag component follows accessibility best practices:

- ✅ Uses semantic HTML (`div` element)
- ✅ Proper color contrast for readability (text color paired with background)
- ✅ Supports all standard div attributes
- ✅ Content is readable by screen readers
- ✅ Can be used with ARIA attributes when needed

### ARIA Attributes Example

```tsx
<Tag color="green" role="status" aria-label="Account status: Active">
  Active
</Tag>
```

## Development Notes

- The default color variant is `gray` if no color is specified
- Content should be concise (typically 1-2 words)
- Icons work best at 16px size to match the tag's compact design
- The component accepts all standard HTML div props
- Uses the `cn` utility for merging class names
- Built with TypeScript for complete type safety

## Design Guidelines

### Best Practices

- ✅ **Do** use tags for categorization and status indication
- ✅ **Do** keep tag text short and descriptive
- ✅ **Do** use consistent colors for similar categories
- ✅ **Do** combine tags in groups with consistent spacing
- ❌ **Don't** use tags for interactive actions (use buttons instead)
- ❌ **Don't** overcrowd interfaces with too many tags
- ❌ **Don't** use tags for lengthy text content

### Recommended Use Cases

- Status indicators (Active, Pending, Completed)
- Category labels (Technology, Design, Business)
- User roles (Admin, Moderator, User)
- Feature badges (New, Premium, Beta)
- Filter labels (Applied filters in search/filter interfaces)
- Technology stack indicators (React, TypeScript, Node.js)

## File Structure

```
tag/
├── tag.tsx                    # Main component
├── tag.props.ts               # TypeScript definitions
├── tag.style.ts               # Variants and styles with CVA
├── tag.module.css             # CSS module styles
├── index.ts                   # Public exports
├── README.md                  # This documentation
├── types/                     # TypeScript types
│   ├── tag-color.type.ts      # Color type definition
│   └── index.ts               # Type exports
└── variants/                  # Variant definitions
    └── tag-color.variant.ts   # Color variant styles
```

## Related Components

- [Button](../../buttons/button/README.md) - For interactive elements
- [Badge](../../badges/badge/README.md) - For numerical indicators (if available)

## License

This component is part of the G-Network UI Library.

