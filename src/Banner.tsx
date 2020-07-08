import { variant } from 'styled-system'
import styled from 'styled-components'
import { Box } from './Box'
import { types } from '@ds-pack/property-controls'

let bannerVariant = variant({
  scale: 'banners',
  prop: 'variant',
})

export let Banner = styled(Box)(bannerVariant)

Banner.propertyControls = {
  variant: {
    type: types.enum,
    label: `The visual variant of the Banner to be shown`,
    default: 'info',
    values: ['info', 'warning', 'success', 'error'],
  },
  children: {
    // @todo
    type: 'node',
    label: `The content within the Banner`,
    default: 'This is a banner',
  },
}
