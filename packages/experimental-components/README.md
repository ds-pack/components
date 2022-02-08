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
