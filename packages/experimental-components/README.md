# `@ds-pack/components-experimental`

A bare-bones component library built using:

- [React](https://reactjs.org/)
- [Vanilla Extract](https://vanilla-extract.style/)

## Setup:

This library publishes the direct source and doesn't manage building locally -
instead the consuming application should manage building the library!

Usage with Next.js:

```tsx
// next-transpile-modules
// withVanillaExtract
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
