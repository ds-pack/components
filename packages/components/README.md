# `@ds-pack/components`

A bare-bones component library built using:

- [React](https://reactjs.org/)
- [Vanilla Extract](https://vanilla-extract.style/)
- [Rainbow Sprinkles](https://github.com/wayfair/rainbow-sprinkles)

## Setup:

### Install:

```sh
# Install the package and it's peerDependencies
yarn add @ds-pack/components @ds-pack/use-refs @vanilla-extract/css @vanilla-extract/dynamic rainbow-sprinkles nanopop
```

Usage with Next.js:

```tsx
// within `layout.tsx` or `_app.tsx`:
import '@ds-pack/components/dist/vars.css'
import '@ds-pack/components/dist/reset.css'

// ...
// within `layout.tsx` or `_document.tsx`:
import { themeClass } from '@ds-pack/components'

function Layout({ children }) {
  return <html className={themeClass}>// ...</html>
}
```

Usage with other frameworks (create-react-app, vanilla webpack applications,
etc):

```tsx
// Import the styles:
import '@ds-pack/components/dist/vars.css'
import '@ds-pack/components/dist/reset.css'
import { Button } from '@ds-pack/components'
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

- [Theme](./src/theme.md)

### Components

- [Box](./src/Box/readme.md)
- [Banner](./src/Banner/readme.md)
- [Stack](./src/Stack/readme.md)
- [Text](./src/Text/readme.md)
- [Label](./src/Label/readme.md)
- [List](./src/List/readme.md)
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
- `testIds` - An optional prop that allows for passing in `data-testid` to the
  rendered components
