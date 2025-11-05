# Avatar Component

A flexible and customizable avatar component built for the Nebula UI design system. The Avatar component displays user profile pictures or generates initials from provided names as a fallback.

## Features

- **Image support** - Display user profile images using the ResponsiveImage component
- **Initials fallback** - Automatically generates initials from first and last name when no image is provided
- **Flexible sizing** - Default 48x48px size, customizable through className
- **Responsive design** - Adapts to different screen sizes
- **TypeScript support** - Fully typed with comprehensive prop interfaces
- **Customizable styling** - Supports additional CSS classes and standard HTML attributes

## Usage

```tsx
import { Avatar } from '@nebula-ui/components/molecules/avatars/avatar';

// With initials avatar
<Avatar firstname="John" lastname="Doe" />

// With image
<Avatar
  image={{
    src: '/path/to/image.jpg',
    alt: 'John Doe',
  }}
/>

// With custom className
<Avatar
  firstname="Dave"
  lastname="Mejia"
  className="rounded-2xl"
/>
```

## Props

### AvatarProps

| Prop        | Type                    | Required | Default | Description                                                    |
| ----------- | ----------------------- | -------- | ------- | -------------------------------------------------------------- |
| `firstname` | `string`                | ❌       | `''`    | First name used to generate initials when no image is provided |
| `lastname`  | `string`                | ❌       | `''`    | Last name used to generate initials when no image is provided  |
| `image`     | `ResponsiveImageProps`  | ❌       | -       | Image props for displaying a profile picture                   |
| `className` | `string`                | ❌       | `''`    | Additional CSS classes to apply to the avatar                  |
| `ref`       | `Ref<HTMLDivElement>`   | ❌       | -       | React ref for the div element                                  |
| `...rest`   | `ComponentProps<"div">` | ❌       | -       | Additional HTML div attributes                                 |

### ResponsiveImageProps

When using the `image` prop, you can pass any of the following properties from `ResponsiveImageProps`:

| Prop                   | Type                | Required | Default | Description                                 |
| ---------------------- | ------------------- | -------- | ------- | ------------------------------------------- |
| `src`                  | `string`            | ❌       | -       | Source URL or path to the image             |
| `alt`                  | `string`            | ❌       | -       | Alternative text for the image              |
| `customImageComponent` | `ReactChild`        | ❌       | -       | Custom React component to render as image   |
| `lazy`                 | `boolean`           | ❌       | -       | Enable lazy loading for the image           |
| `objectFit`            | `CSSObjectFitValue` | ❌       | -       | CSS object-fit value (contain, cover, etc.) |
| `cache`                | `boolean`           | ❌       | -       | Enable caching for the image                |
| `className`            | `string`            | ❌       | -       | Additional CSS classes for the image        |

### Type Definitions

```tsx
interface AvatarProps extends ReactDiv {
  firstname?: string;
  lastname?: string;
  image?: ResponsiveImageProps;
}

type ReactDiv = ComponentProps<"div"> & {
  className?: string;
  ref?: Ref<HTMLDivElement>;
};
```

## Behavior

### Image Display Priority

The component follows this priority for displaying content:

1. **Image** - If `image.src` or `image.customImageComponent` is provided, the image is displayed
2. **Initials** - If no image is provided, initials are generated from `firstname` and `lastname`
3. **Empty** - If neither image nor names are provided, an empty avatar is displayed

### Initial Generation

- Takes the first character of `firstname` (uppercase)
- Takes the first character of `lastname` (uppercase)
- If only `firstname` is provided, only the first initial is shown
- If only `lastname` is provided, only the last initial is shown

### Styling Behavior

- **With image**: No padding applied (padding set to 0)
- **With initials**: Padding of `16px` vertical and `11px` horizontal
- Background color: Black (`bg-black`)
- Border: Solid dark gray border (`border-dark-gray`)
- Text color: White (`text-white`)

## Styling

### CSS Classes

The component uses CSS modules for styling:

- **`.base`** - Main avatar container styles

### Default Styles

- **Size**: 48px × 48px (width and height)
- **Border radius**: 16px
- **Display**: Flex
- **Alignment**: Center (both horizontally and vertically)
- **Font size**: 16px
- **Font weight**: 600 (semi-bold)
- **Letter spacing**: 0
- **Line height**: 100%
- **Gap**: 8px (between initials if both are present)
- **Position**: Relative

### Custom Styling

You can override default styles using the `className` prop:

```tsx
// Custom border radius
<Avatar firstname="John" lastname="Doe" className="rounded-2xl" />

// Custom size
<Avatar firstname="John" lastname="Doe" className="w-16 h-16" />

// Multiple custom classes
<Avatar
  firstname="John"
  lastname="Doe"
  className="rounded-full w-24 h-24 shadow-lg"
/>
```

## Examples

### Basic Avatar with Initials

```tsx
import { Avatar } from "@nebula-ui/components/molecules/avatars/avatar";

function UserProfile() {
  return (
    <Avatar firstname="John" lastname="Doe" />
    // Displays: JD
  );
}
```

### Avatar with Image

```tsx
import { Avatar } from "@nebula-ui/components/molecules/avatars/avatar";

function UserProfile() {
  return (
    <Avatar
      image={{
        src: "/avatars/john-doe.jpg",
        alt: "John Doe profile picture",
      }}
    />
  );
}
```

### Avatar with Custom Image Component

```tsx
import { Avatar } from "@nebula-ui/components/molecules/avatars/avatar";
import Image from "next/image";

function UserProfile() {
  return (
    <Avatar
      image={{
        customImageComponent: (
          <Image
            src="/avatars/john-doe.jpg"
            alt="John Doe"
            width={48}
            height={48}
          />
        ),
      }}
    />
  );
}
```

### Avatar with Lazy Loading

```tsx
import { Avatar } from "@nebula-ui/components/molecules/avatars/avatar";

function UserProfile() {
  return (
    <Avatar
      image={{
        src: "/avatars/john-doe.jpg",
        alt: "John Doe",
        lazy: true,
      }}
    />
  );
}
```

### Avatar with Custom Styling

```tsx
import { Avatar } from "@nebula-ui/components/molecules/avatars/avatar";

function UserProfile() {
  return (
    <Avatar
      firstname="Dave"
      lastname="Mejia"
      className="rounded-2xl w-16 h-16"
    />
  );
}
```

### Avatar in Navbar Context

```tsx
import { Avatar } from "@nebula-ui/components/molecules/avatars/avatar";

function NavbarUser() {
  return (
    <div className="flex items-center gap-4">
      <Icon name="gift_outlined" />
      <Icon name="notification_bing_outlined" />
      <Avatar firstname="Dave" lastname="Mejia" className="rounded-2xl" />
    </div>
  );
}
```

### Fallback to Initials

If an image fails to load or is not provided, the component will automatically show initials:

```tsx
import { Avatar } from "@nebula-ui/components/molecules/avatars/avatar";

function UserProfile() {
  return (
    // Will show initials "JD" since image.src is empty
    <Avatar firstname="John" lastname="Doe" image={{ src: "", alt: "" }} />
  );
}
```

## Dependencies

- React 18+
- TypeScript 4.5+
- CSS Modules support
- `@nebula-ui/components/atoms/images/responsive-image` - For image rendering
- `@nebula-ui/utils/cn.util` - For className merging
- `@nebula-ui/types` - For type definitions

## Accessibility

- The component renders as a semantic `<div>` element
- When using images, ensure proper `alt` text is provided through the `image.alt` prop
- Initials are displayed as text, making them accessible to screen readers
- Consider adding `aria-label` or `aria-labelledby` when the avatar represents a specific user

## Notes

- The component automatically handles padding based on whether an image or initials are displayed
- Initials are always uppercase
- The component maintains a square aspect ratio (1:1)
- All standard HTML div attributes can be passed through the `...rest` props
