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
