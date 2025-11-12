# Accordion Component

A flexible and accessible accordion component built with native HTML `<details>` and `<summary>` elements, providing collapsible content sections with smooth animations.

## Features

- ✅ Native HTML implementation using `<details>` and `<summary>`
- ✅ Fully accessible and keyboard navigable
- ✅ Customizable variants with CVA (class-variance-authority)
- ✅ Optional full-width layout
- ✅ Animated arrow indicator
- ✅ CSS modules for scoped styling
- ✅ TypeScript support

## Installation

```typescript
import { Accordion } from '@/packages/gnetwork-ui/components/organisms/accordions/accordion';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | The text displayed in the accordion header |
| `open` | `boolean` | `false` | Whether the accordion is initially open |
| `children` | `ReactNode` | - | The content to display inside the accordion (required) |
| `fullWidth` | `boolean` | `false` | Whether the accordion should take full width |
| `className` | `string` | - | Additional CSS classes to apply |
| `...rest` | `HTMLDivElement` | - | All standard div element props |

## Usage

### Basic Example

```tsx
import { Accordion } from '@/packages/gnetwork-ui/components/organisms/accordions/accordion';

export default function Example() {
  return (
    <Accordion label="Click to expand">
      <p>This is the accordion content that can be toggled.</p>
    </Accordion>
  );
}
```

### Initially Open

```tsx
<Accordion label="Already Expanded" open>
  <p>This accordion starts in an open state.</p>
</Accordion>
```

### Full Width

```tsx
<Accordion label="Full Width Accordion" fullWidth>
  <div>
    <p>This accordion takes up the full width of its container.</p>
  </div>
</Accordion>
```

### With Custom Content

```tsx
<Accordion label="Complex Content" fullWidth>
  <div className="space-y-4">
    <h3>Nested Content</h3>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <button>Action Button</button>
  </div>
</Accordion>
```

### Multiple Accordions

```tsx
<div className="space-y-2">
  <Accordion label="Section 1">
    <p>Content for section 1</p>
  </Accordion>

  <Accordion label="Section 2">
    <p>Content for section 2</p>
  </Accordion>

  <Accordion label="Section 3">
    <p>Content for section 3</p>
  </Accordion>
</div>
```

### With Custom Styling

```tsx
<Accordion
  label="Styled Accordion"
  className="border border-gray-300 rounded-lg shadow-md"
  fullWidth
>
  <p>Custom styled accordion content</p>
</Accordion>
```

## Variants

The Accordion component uses class-variance-authority (CVA) for variant management:

### fullWidth

- `false` (default): Accordion width fits its content (`w-fit`)
- `true`: Accordion takes full width of container (`w-full`)

## Styling

The component uses a combination of:
- **CSS Modules**: Scoped styles defined in `accordion.module.css`
- **CVA**: Variant management for dynamic styling
- **Tailwind CSS**: Utility classes for common styles

### CSS Module Classes

- `.base`: Base accordion wrapper styles
- `.base__body`: Details element styles
- `.base__header`: Summary/header styles
- `.base__header_content`: Header content wrapper
- `.base__arrow`: Arrow icon styles (animated on open/close)
- `.base__content`: Accordion content wrapper

## Accessibility

The component is built with accessibility in mind:

- Uses semantic HTML (`<details>` and `<summary>`)
- Keyboard accessible (Space/Enter to toggle)
- Screen reader friendly
- Focus indicators follow browser defaults

## Best Practices

1. **Always provide a label**: The `label` prop helps users understand what content is inside
2. **Use meaningful content**: Ensure the accordion content provides value
3. **Avoid nesting accordions**: Keep the hierarchy simple for better UX
4. **Consider initial state**: Use `open` prop thoughtfully based on content importance
5. **Mobile-friendly**: The component works well on touch devices

## Notes

- The component will log a warning if `children` is not provided
- The arrow icon (`MdKeyboardArrowUp`) is from `react-icons/md`
- Animation and transitions are handled via CSS modules

## Example in Context

```tsx
import { Accordion } from '@/packages/gnetwork-ui/components/organisms/accordions/accordion';

export function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

      <div className="space-y-4">
        <Accordion label="What is GNetwork?" fullWidth>
          <p>
            GNetwork is a comprehensive platform that provides
            powerful tools for modern applications.
          </p>
        </Accordion>

        <Accordion label="How do I get started?" fullWidth>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Create an account</li>
            <li>Configure your settings</li>
            <li>Start building</li>
          </ol>
        </Accordion>

        <Accordion label="What are the pricing options?" fullWidth>
          <p>
            We offer flexible pricing plans to suit different needs.
            Contact our sales team for more information.
          </p>
        </Accordion>
      </div>
    </section>
  );
}
```

## Related Components

- Other accordion variations may be available in the `accordions` directory
- Consider using with other organisms for complex layouts

## Support

For issues or questions, please refer to the project documentation or contact the development team.

