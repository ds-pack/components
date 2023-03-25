# `@ds-pack/daisyui`

A bare-bones component library built using:

- [React](https://reactjs.org/)
- [daisyui](https://daisyui.com/)

## Setup:

<!-- prettier-ignore -->
> **Warning**
> You will need to use `tailwindcss` in your consuming project in order to use this library!

### Install:

```sh
# Install the package and it's peerDependencies
yarn add @ds-pack/components-daisyui @ds-pack/use-refs nanopop daisyui
```

You'll also most likely need to install tailwindcss and it's dependencies:

```sh
yarn add -D tailwindcss postcss autoprefixer
```

Usage with Next.js:

### Configure tailwind:

Add the following `tailwind.config.js` file:

```tsx
// tailwind.config.js
let path = require('path')

module.exports = {
  content: [
    './app/**/*.{tsx}',
    // Ensure Tailwind processes the `@ds-pack/daisyui` library!
    path.join(path.dirname(require.resolve('@ds-pack/daisyui')), '/**/*.js'),
  ],
  // Configure daisyui:
  plugins: [require('daisyui')],
}
```

run `yarn dlx tailwindcss init -p`

### Configure the Next app:

Within `next.config.js`, you'll need to configure the following:

```tsx
let config = {
  modularizeImports: {
    // Manages code splitting the components you import
    '@ds-pack/daisyui': {
      transform: '@ds-pack/daisyui/dist/{{member}}',
    },
  },
  // ...
}
```

Create a root `globals.css` file with the following content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the above `globals.css` file within your root layout:

```tsx
// within `layout.tsx` or `_app.tsx`:
import '@root/styles/globals.css'
```

Configure the `daisyui` theme for the layout by passing in `data-theme` on the
root html element:

```tsx
// within `layout.tsx` or `_document.tsx`:
// import { themeClass } from '@ds-pack/components'

function Layout({ children }) {
  return <html data-theme="garden">...</html>
}
```

### Tools:

- Typescript
- Jest

### Cutting a Release:

- Update the version in package.json
- Push to main (with associated changes)
- Create release on the repo
  - Workflow will kick off and build + publish the new version

## Docs:

<!-- - [Theme](./src/theme.md) -->

### Components

- [Box](./src/Box/readme.md)
- [Banner](./src/Banner/readme.md)
<!-- - [Stack](./src/Stack/readme.md) -->
- [Text](./src/Text/readme.md)
- [List](./src/List/readme.md)
- [ListItem](./src/ListItem/readme.md)
- [InlineCode](./src/InlineCode/readme.md)
- [VisuallyHidden](./src/VisuallyHidden/readme.md)
- [Link](./src/Link/readme.md)
- [Tapable](./src/Tapable/readme.md)
- [Button](./src/Button/readme.md)
- [ToggleInput](./src/ToggleInput/readme.md)
- [Checkbox](./src/Checkbox/readme.md)
- [Heading](./src/Heading/readme.md)
- [Blockquote](./src/Blockquote/readme.md)
- [TwitterMention](./src/TwitterMention/readme.md)
- [GitHubMention](./src/GitHubMention/readme.md)
- [Image](./src/Image/readme.md)
- [Figure](./src/Figure/readme.md)
- [Input](./src/Input/readme.md)
- [Textarea](./src/Textarea/readme.md)
- [Chip](./src/Chip/readme.md)

### Hooks

- [useTapable](./src/useTapable.md)

### System Props:

- `is` - essentially `forwardedAs` from styled-components, but easier to type 😄
- `testId` - An optional prop that allows for passing in `data-testid` to the
  rendered components

## TODO:

- [ ] Button's don't have animation when using the keyboard to activate them
      (consider either burning down custom element usage, or expose a way to
      know if the button is active or not within Tapable/useTapable)
- [ ] Dropdown
- [ ] InlineCode theme enhancements (e.g. dark mode and light mode versions)
- [ ] Input validation states
- [ ] Nested lists and spacing stuff, etc
- [ ] Stack
- [ ] Box
