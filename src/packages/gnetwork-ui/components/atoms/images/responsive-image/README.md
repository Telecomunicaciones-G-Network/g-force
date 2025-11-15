# ResponsiveImage

Responsive image component that provides optimized loading functionality and customization through `react-cool-img`.

## Description

`ResponsiveImage` is a wrapper component that allows you to render images responsively with support for lazy loading, caching, and custom image components. The component uses `react-cool-img` to manage optimized image loading.

## Features

- ✅ Optional lazy loading
- ✅ Image cache support
- ✅ Custom image component
- ✅ Control over CSS `object-fit`
- ✅ Accessibility with alt text
- ✅ Prop validation with warnings

## Installation

This component is part of the `nebula-ui` package and uses the `react-cool-img` dependency.

## Usage

### Basic usage

```tsx
import { ResponsiveImage } from "@nebula-ui/components/atoms/images/responsive-image";

function MyComponent() {
  return (
    <ResponsiveImage
      src="https://example.com/image.jpg"
      alt="Image description"
    />
  );
}
```

### With lazy loading

```tsx
<ResponsiveImage
  src="https://example.com/image.jpg"
  alt="Image with lazy loading"
  lazy={true}
/>
```

### With cache enabled

```tsx
<ResponsiveImage
  src="https://example.com/image.jpg"
  alt="Image with cache"
  cache={true}
/>
```

### With custom object-fit

```tsx
<ResponsiveImage
  src="https://example.com/image.jpg"
  alt="Image with object-fit"
  objectFit="contain"
/>
```

### With custom image component

```tsx
<ResponsiveImage
  customImageComponent={<MyCustomImage />}
  className="my-custom-class"
/>
```

## Props

| Prop                   | Type                        | Default     | Description                                                                             |
| ---------------------- | --------------------------- | ----------- | --------------------------------------------------------------------------------------- |
| `src`                  | `string`                    | `undefined` | Image URL to display. **Note:** Cannot be used together with `customImageComponent`.    |
| `alt`                  | `string`                    | `'Image'`   | Alternative text for accessibility.                                                     |
| `lazy`                 | `boolean`                   | `false`     | Enables lazy loading for the image.                                                     |
| `cache`                | `boolean`                   | `false`     | Enables image caching.                                                                  |
| `objectFit`            | `CSSObjectFitValue`         | `undefined` | CSS value for the `object-fit` property (e.g., `'cover'`, `'contain'`, `'fill'`, etc.). |
| `customImageComponent` | `ReactChild`                | `undefined` | Custom image component to render. **Note:** Cannot be used together with `src`.         |
| `className`            | `string`                    | `''`        | Additional CSS classes for the container.                                               |
| `ref`                  | `RefObject<HTMLDivElement>` | `undefined` | Reference to the container element.                                                     |
| `...rest`              | `ReactDiv`                  | -           | All other props of a React `div` element.                                               |

## Validations

The component includes validations that display warnings in the console:

- ⚠️ If both `customImageComponent` and `src` are missing, a warning is shown.
- ⚠️ If both `customImageComponent` and `src` are provided at the same time, a warning is shown and the component returns `null`.

## Styles

The component uses CSS modules with the following classes:

### `.base`

Main image container with:

- `width: 100%`
- `height: 100%`
- `position: relative`
- `box-sizing: border-box`

### `.base__image`

Styles applied to the image when using `src`:

- `aspect-ratio: 1 / 1`
- `width: 100%`
- `height: 100%`
- `object-fit: cover` (by default, can be overridden with the `objectFit` prop)
- `background-position: center`
- `background-repeat: no-repeat`
- `margin: auto`

## Advanced Examples

### Combining props

```tsx
<ResponsiveImage
  src="https://example.com/hero.jpg"
  alt="Hero image"
  lazy={true}
  cache={true}
  objectFit="cover"
  className="hero-image"
  style={{ minHeight: "400px" }}
/>
```

### With ref

```tsx
import { useRef } from "react";

function MyComponent() {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <ResponsiveImage
      ref={imageRef}
      src="https://example.com/image.jpg"
      alt="Image with ref"
    />
  );
}
```

## Dependencies

- `react-cool-img`: Library for optimized image loading with React

## Notes

- When using `customImageComponent`, the custom component must handle its own loading and optimization logic.
- The component returns `null` if both `customImageComponent` and `src` are provided simultaneously.
- The `objectFit` prop overrides the default `object-fit: cover` style from CSS.
