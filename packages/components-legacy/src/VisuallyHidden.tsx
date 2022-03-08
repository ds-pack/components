import styled from 'styled-components'
import { Box, BoxProps } from './Box'

export interface VisuallyHiddenProps extends BoxProps {}

export let VisuallyHidden = styled(Box)<VisuallyHiddenProps>`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
