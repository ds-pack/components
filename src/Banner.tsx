import { variant } from 'styled-system'
import styled from 'styled-components'
import { Box } from './Box'
import { types } from '@ds-pack/property-controls'

let bannerVariant = variant({
  scale: 'banners',
  prop: 'variant',
})

export let Banner = styled(Box)(bannerVariant)

let propertyControls = {
  variant: {
    type: types.enum,
    label: `The visual variant of the Banner to be shown`,
    default: 'info',
    values: ['info', 'warning', 'success', 'error'],
  },
  children: {
    type: types.node,
    label: `The content within the Banner`,
    default: 'This is a banner',
  },
}
