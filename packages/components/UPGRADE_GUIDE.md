### 1.0.11 -> 1.0.12

Some relatively big changes in this release:

- Split imports
- Support for server components
- Colocated styles

If you're using Next.js >= 13.1:

```tsx
// within next.config.js|mjs:

export default {
  // new:
  modularizeImports: {
    '@ds-pack/components': {
      transform: '@ds-pack/components/dist/{{member}}',
      skipDefaultConversion: true,
    },
  },
}
```

If you're using Next.js < 13.1:

```tsx
// within next.config.js|mjs:

export default {
  // new:
  experimental: {
    modularizeImports: {
      '@ds-pack/components': {
        transform: '@ds-pack/components/dist/{{member}}',
        skipDefaultConversion: true,
      },
    },
  },
}
```

_Note: Components should still work without `modularizeImports` enabled, but
they won't work within React Server Components currently_

If you're using the `app` directory (with server components):

```tsx
// root `layout.tsx`
import { themeClass } from '@ds-pack/components'
import '@ds-pack/components/dist/reset.css'

export default function Layout({ children }) {
  return <html className={themeClass}>...</html>
}
```

If you're using the `pages` directory:

```tsx
// Unchanged!
// in _document.tsx
import { themeClass } from '@ds-pack/components'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className={themeClass}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

```tsx
// in _app.tsx
import '@ds-pack/components/dist/reset.css'
```

### 1.0.10 -> 1.0.11

Some big changes in this release, Next.js apps no longer need Vanilla Extract
webpack plugin + next-transpile-modules to consume.

Instead, you will need to add a css import at the root of the application:

Either within your `_app.tsx` file or `layout.tsx` file:

```tsx
import '@ds-pack/components/dist/index.css'
```

### 1.0.9 -> 1.0.10

No changes required for consuming applications.

### 1.0.8 -> 1.0.9

No changes required for consuming applications.

### 1.0.7 -> 1.0.8

No changes required for consuming applications.

### 1.0.6 -> 1.0.7

No changes required for consuming applications.

### 1.0.5 -> 1.0.6

This change updated the way that the default theme is applied. Previously the
theme would be auto-applied to the `:root` selector, now the theme is scoped to
a classname (exported as `themeClass`) which needs to be applied to the root
`<html>` element.

If you're using Next.js, you'll need a custom `_document.tsx` file:

```tsx
import { Html, Head, Main, NextScript } from 'next/document'
// New:
import { themeClass } from '@ds-pack/components'

export default function Document() {
  return (
    // Apply classname here
    <Html className={themeClass}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

If you apply the classname **not** on the `<html>` element, some components may
not be styled correctly and fonts won't be applied correctly!

### 1.0.4 -> 1.0.5

No changes required for consuming applications

### 1.0.3 -> 1.0.4

This change bumped the minimum peerDependency on `rainbow-sprinkles` to `^0.11`.

To adopt this change consuming app should update `rainbow-sprinkles` when
adopting this change.

Additionally, all usage of system-props need to be prefixed with a `$`, for
example:

**Before:**

```tsx
<Stack gap="4">
  <div />
  <div />
  <div />
</Stack>
```

**After:**

```tsx
<Stack gap="$4">
  <div />
  <div />
  <div />
</Stack>
```

### 1.0.2 -> 1.0.3

No changes required for consuming applications

### 1.0.1 -> 1.0.2

This change bumped the minimum peerDependency on `rainbow-sprinkles` to `^0.10`.

To adopt this change consuming app should update `rainbow-sprinkles` when
adopting this change.

### 1.0.0 -> 1.0.1

This change removed the default `backgroundColor` and `color` values within the
global reset. To preserve the previous behavior, add the following:

```ts
import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components/src/vars.css'

globalStyle('html, body', {
  color: vars.colors.black,
  backgroundColor: vars.colors.white,
})
```
