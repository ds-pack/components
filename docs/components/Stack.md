# Stack

[All components/hooks](../index.md)

The Stack component is a layout utility component that is useful for creating
evenly spaced collections of children in a single direction.

It supports the following props:

- `gap`: A spacing value from theme (0 to 10), applies this spacing between each
  child
- `inline`: If provided, will render the collection as a row, otherwise defaults
  to a column
- `children`: A collection of children to wrap with even spacing
- `props`: An optional object of props to apply to each wrapping Box around each
  child. This will apply **after** the gap spacing applied.
