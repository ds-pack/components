# `@ds-pack/components`

A bare-bones component library built using:

- [System Props](https://system-props.com/)
- [Styled Components](https://styled-components.com/)
- [React](https://reactjs.org/)

## Installation:

```sh
yarn add @ds-pack/components
```

Plus the peerDependencies:

- `@ds-pack/use-refs`
- `react`
- `react-dom`
- `styled-components`
- `simple-props`

## Usage:

```tsx
import { ThemeProvider, Button } from '@ds-pack/components'

render(
  <ThemeProvider>
    <Button onClick={() => console.log('Clicked!')}>Button!</Button>
  </ThemeProvider>,
)
```

## Contibuting

This repo is setup as a monorepo with two primary packages:

- `@ds-pack/components`
  - The package for the components themselves
- `example`
  - A create-react-app example application for visually testing the components

To get started:

- Run `yarn` from the root of the repo
- Run `yarn start` from the root of the repo to start the example application
