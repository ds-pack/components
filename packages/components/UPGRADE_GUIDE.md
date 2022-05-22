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
