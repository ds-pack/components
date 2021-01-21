import { variant } from 'styled-system'
import styled from 'styled-components'
import { Box } from './Box'

// @TODO replace
let bannerVariant = variant({
  scale: 'banners',
  prop: 'variant',
})

export let Banner = styled(Box)(bannerVariant)
