# RadioButton

[All components/hooks](../../README.md)

The RadioButton component is a composed component built on top of the `Label`,
and `RadioInput` components. It creates a visual radio component for selecting
options.

Props:

- `children` - The label content, describes the selection choice
- `onChange` - Callback called with the new `checked` value
- `value` - The value of the input
- `name` - The name of the input (used to connect one RadioButton with a set of
  many radio buttons)
- `disabled` - Whether the checkbox is disabled or not
