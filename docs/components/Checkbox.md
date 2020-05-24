# Checkbox

[All components/hooks](../index.md)

The Checkbox component is a composed component built on top of the `Label`, and
`ToggleInput` components. It creates a visual checkbox component for selecting
options.

Props:

- `children` - The label content, describes the selection choice
- `onChange` - Callback called with two values, the first is the new checked
  state, the second is an object containing: `{value: typeof props.value}`
- `checked` - Whether the checkbox is checked or not
- `disabled` - Whether the checkbox is disabled or not
- `indeterminate` - Whether the checkbox is indeterminate or not, useful for
  groups of checkboxes
- `value` - The value of the checkbox
