### 1.0.18

- Fix `Input`, `Textarea`, `RadioInput`, and `ToggleInput` not being marked as
  client components correctly

### 1.0.17

- Fix label element in Checkbox and RadioButton components

### 1.0.16

- Fix css insertion order bug within Checkbox and RadioButton components and
  their associated labels causing some page loads to shift the label below the
  visual indicator

### 1.0.15

- Support defining a local theme to override the default theme, for more details
  see the [Upgrade Guide](./UPGRADE_GUIDE.md)

### 1.0.14

- Bump the `rainbow-sprinkles` peerDependency to `^0.15`

### 1.0.13

- Patch for the previous release to have vars work correctly in consuming
  applications

### 1.0.12

- Change build steps, output types, colocated styles (see the
  [UPGRADE_GUIDE](./UPGRADE_GUIDE.md) for more details)

### 1.0.11

- Change default consumption of the library to be from compiled files
  (dist/index.es5.js, dist/index.es6.js, dist/index.mjs)

### 1.0.10

- Allow `gap` to use `vars.space` tokens
- Adjusted padding on Buttons and Inputs
- Adjusted text color on the Label component

### 1.0.9

- Add support for the following system props:
  - `borderStyle`
  - `borderWidth`
  - `borderColor`
  - `lineHeight`
  - `gap`

### 1.0.8

- Add support for the `fontWeight` system prop on Box/other components.

### 1.0.7

- Fix `compiled.css`, `compiled.js` entrypoints missing in published package

### 1.0.6

- Change default global theme to exported `themeClass`

### 1.0.5

- Fix types for system props applied to Box components

### 1.0.4

- Bump `rainbow-sprinkles` peerDependency
- Change in system-props API

### 1.0.3

- Fixed label alignment in Checkbox and Radio Button components

### 1.0.2

- Bump minimum `rainbow-sprinkles` peerDependency

### 1.0.1

- Remove default `color` and `backgroundColor` from reset
