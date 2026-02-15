# InfinityScrollLoader

A small animated loader made of three dots, intended for use at the bottom of lists or feeds when loading more items (infinite scroll).

## Usage

```tsx
import { InfinityScrollLoader } from '@gnetwork-ui/molecules/loaders/infinity-scroll-loader';

// Basic usage
<InfinityScrollLoader />

// With custom class (e.g. spacing or visibility)
<InfinityScrollLoader className="mt-4" />

// With ref (e.g. for intersection observer)
<InfinityScrollLoader ref={loaderRef} />
```

## Props

The component extends `ReactDiv`, so it accepts all standard `div` HTML attributes, plus:

| Prop       | Type        | Default | Description                          |
| ---------- | ----------- | ------- | ------------------------------------ |
| `className`| `string`    | `''`    | Additional CSS classes.              |
| `ref`      | `RefObject` | —       | Ref forwarded to the root `div`.     |

Use `ref` when you need to attach an intersection observer to the loader to trigger loading more data when it enters the viewport.

## When to use

- At the bottom of a contact list, feed, or any infinitely scrollable list while the next page is loading.
- As a lightweight, non-blocking loading indicator that doesn’t take much space.

## Behavior

- Renders a horizontal row of three circular dots with a scale/translate animation.
- Default size is `h-4 w-16`; override with `className` if needed.
- Centered via CSS; suitable for placing at the center bottom of a scroll container.
